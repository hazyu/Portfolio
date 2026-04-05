
function Post(props: { name: string, date: string}) {
  return (
    <a href={`/blog/${props.name}`}>
      <div class="post">
        <span class="title">{props.name.replaceAll("-", " ")}</span>
        <span class="date">{props.date}</span>
      </div>
    </a>
  )
}

export default Post
