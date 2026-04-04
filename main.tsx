import { Hono } from 'hono'
import { serveStatic } from "hono/deno"
import Home from "./pages/home.tsx"
import Blog from "./pages/blog.tsx";
import Profile from "./components/profile.tsx";

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
  console.log(data)
  return c.html(<Profile status={data.data["discord_status"]} />)
})


Deno.serve(app.fetch)
