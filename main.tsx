import { Hono } from "hono";
import { serveStatic } from "hono/deno";
import Home from "./pages/home.tsx";
import Blog from "./pages/blog.tsx";
import Profile from "./components/profile.tsx";
import * as fs from "node:fs";
import { marked } from "marked";
import Base from "./pages/base.tsx";
import { html } from "hono/html";
import { extractYaml } from '@std/front-matter'

const app = new Hono().use("/*", serveStatic({ root: "./static" }));

app.get("/", (c) => {
  return c.html(<Home />);
});

app.get("/robots.txt", (c) => {
  const content = fs.readFileSync("robots.txt")
  return c.text(content.toString())
})

app.get("/blog", (c) => {
  const fileNames: string[] = fs.readdirSync("posts");
  const files: Array<{ name: string; date: Date }> = [];

  fileNames.forEach((name) => {
    //const { birthtime } = fs.statSync(`posts/${name}`);
    const txt = Deno.readTextFileSync(`./posts/${name}`);
    const { attrs, body } = extractYaml<{title: string, date: Date, completed: boolean}>(txt);

    files.push({ name: name, date: attrs.date });
  });
  //@ts-ignore dates crap
  files.sort((a, b) => new Date(b.date) - new Date(a.date));
  return c.html(<Blog files={files} />);
});

app.get("/status", async (c) => {
  const url = "https://api.lanyard.rest/v1/users/202532202758668288";
  const response = await fetch(url);
  const data = await response.json();
  return c.html(<Profile status={data.data["discord_status"]} />);
});

app.get("/blog/:name", async (c) => {
  const name = c.req.param("name");
  const file = fs.readFileSync(`posts/${name}.md`, "utf8");
  const cleanMarkdown = file.replace(/^---[\s\S]*?---/, '')
  return c.html(
    <Base title={`Hazyu - ${name}`} css="/blog.css">
      <article class="blog-post">
        <h1>{name.replaceAll("-", " ")}</h1>
        {/*@ts-ignore */}
        {html(await marked(cleanMarkdown))}
      </article>
    </Base>,
  );
});

Deno.serve(app.fetch);
