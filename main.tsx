import { Hono } from 'hono'
import { serveStatic } from "hono/deno"
import Home from "./pages/home.tsx"
import Blog from "./pages/blog.tsx";

const app = new Hono()
.use("/*", serveStatic({root: "./static"}))

app.get('/', (c) => {
  return c.html(<Home />)
})

app.get("/blog", (c) => {
  return c.html(<Blog />)
})


Deno.serve(app.fetch)