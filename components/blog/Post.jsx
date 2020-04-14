import React from "react"
import Link from "next/link"

const Post = ({ post }) => (
  <article className="s-radius-1 s-pxy-4 s-shadow-bottom course-card background s-shadow-card-micro white-color nowrap s-column s-mb-0">
    <h2>{post.title}</h2>
    <p>{post.body}</p>
    <span>{`Escrito por el usuario ${post.userId}`}</span>
    <Link href="/blog/[id]" as={`/blog/${post.id}`}><a>Leer más</a></Link>
  </article>
)

export default Post