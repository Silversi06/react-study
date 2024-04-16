import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
const root = ReactDOM.createRoot(document.getElementById("root"))

function Comment({ comment, removeComment, index }) {
    return <div>
        {comment.text} <button onClick={() => removeComment(index)}>댓글 삭제</button>
    </div>
}

function CommentAdder({ addComment }) {
    const [text, setText] = useState("")

    return <div>
        <input type="text" placeholder="댓글을 입력하세요." onChange={(e) => setText(e.target.value)} value={text} />
        <button onClick={() => {
            addComment({ text })
            setText("")
        }}>게시</button>
    </div>
}

function PostComments({ comments, removeComment }) {
    return <div>
        {
            comments.map((comment, index) => <Comment comment={comment} removeComment={removeComment} index={index} />)
        }
    </div>
}

function PostItem({ post: { title, content }, index, removePost }) {
    const [ comments, setComments ] = useState([])
    const addComment = comment => setComments(comments.concat(comment))
    const removeComment = index => setComments(comments.filter((_, i) => i !== index))

    return <div>
        <h1>{title}</h1>
        <p>{content}</p>
        <button onClick={() => removePost(index)}>글 삭제</button>
        <CommentAdder addComment={addComment} />
        <PostComments comments={comments} removeComment={removeComment} />
    </div>
}

function PostAdder({ addPost }) {
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")

    return <div>
        <label>제목</label>
        <br />
        <input value={title} type="text" onChange={(e) => setTitle(e.target.value)} />
        <br />
        <label>내용</label>
        <textarea value={content} onChange={(e) => setContent(e.target.value)} style={{ width: "100%", height: "100px" }} />
        <button onClick={() => {
            addPost({ title, content })
            setTitle("")
            setContent("")
        }}>게시</button>
    </div>
}

function PostList({ posts, removePost }) {
    return <div>
        {
            posts.map((post, index) => {
                return <div>
                    <PostItem post={post} index={index} removePost={removePost} />
                </div>
            })
        }
    </div>
}

function PostApp(props) {
    const [posts, setPosts] = useState([])
    const addPost = newPost => setPosts(posts.concat(newPost))
    const removePost = index => setPosts(posts.filter((_, i) => i !== index))

    return <div>
        <PostAdder addPost={addPost} />
        <PostList posts={posts} removePost={removePost} />
    </div>
}

root.render(<PostApp />)