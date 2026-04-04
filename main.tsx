import { Hono } from 'hono'
import { serveStatic } from "hono/deno"
import Home from "./pages/home.tsx"
import Blog from "./pages/blog.tsx";
import Profile from "./components/profile.tsx";
import { Fragment } from "hono/jsx/jsx-runtime";
import * as fs from "node:fs"
import Post from "./components/post.tsx";
import { marked } from "marked"
import Base from "./pages/base.tsx";
import { html } from "hono/html";

const app = new Hono()
.use("/*", serveStatic({root: "./static"}))

app.get('/',  (c) => {
  return c.html(<Home />)
})

app.get("/blog", (c) => {
  return c.html(<Blog />)
})

app.get("/status", async (c) => {
  const url = "https://api.lanyard.rest/v1/users/202532202758668288"
  const response = await fetch(url)
  const data = await response.json()
  return c.html(<Profile status={data.data["discord_status"]} />)
})

app.get("/posts", (c) => {

  const fileNames = fs.readdirSync("posts");
  const files = []

  fileNames.forEach((name) => {
    const { birthtime } = fs.statSync(`posts/${name}`)
    files.push({name: name, date: birthtime})
  })
  files.sort((a, b) => new Date(b.date) - new Date(a.date))
  return c.html(
    <Fragment>
      { files.map((file, index) => {
        return <Post key={index} name={file.name.split(".")[0]} date={file.date.toDateString()}/> 
      })}
    </Fragment>
  ) 
})

app.get("/blog/:name", async (c) => {
  const name = c.req.param("name")
  const file = fs.readFileSync(`posts/${name}.md`, "utf8")
  return c.html(
    <Base title={`Hazyu - ${name}`} css="/blog.css">
      <article>
        { /*@ts-ignore */ }
        { html(await marked( file )) }
      </article>
    </Base>)
})


Deno.serve(app.fetch)
