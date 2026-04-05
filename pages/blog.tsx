import { Fragment } from "hono/jsx/jsx-runtime";
import Base from "./base.tsx";
import Post from "../components/post.tsx";

function Blog(props: { files: Array<{ name: string; date: Date }> }) {
  return (
    <Base title="Hazyu - Blog" css="blog.css">
      <Fragment>
        <h1>Blog</h1>
        <div class="posts">
          {props.files.map((file, index) => {
            return (
              <Fragment key={index}>
                <Post
                  name={file.name.split(".")[0]}
                  date={file.date.toDateString()}
                />
              </Fragment>
            );
          })}
        </div>
      </Fragment>
    </Base>
  );
}

export default Blog;
