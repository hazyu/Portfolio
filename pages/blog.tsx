import { Fragment } from "hono/jsx/jsx-runtime";
import Base from "./base.tsx";

function Blog() {
    return (
        <Base title="Hazyu - Blog" css="blog.css">
          <Fragment>
            <h1>Blog</h1>
            <div class="posts" hx-get="/posts" hx-trigger="load">
           </div>
          </Fragment>
        </Base>
    )
}

export default Blog
