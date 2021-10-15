import { useEffect, useState } from "react"
import axios from 'axios'

const blogPostURL = 'http://localhost:8000/api/v1/blogs/'

const CreateBlogPost = ()=>{
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [author, setAuthor] = useState('')

    const handleTitleChange = (e)=>{
        setTitle(e.target.value)
    }
    const handleContentChange = (e)=>{
        setContent(e.target.value)
    }
    const handleAuthorChange = (e)=>{
        setAuthor(e.target.value)
    }
    const submitForm = (e)=>{
        e.preventDefault()
        const data = {title,content,author}
        axios.post(blogPostURL, data).then(res=>{
            alert("Posted!")
            setTitle('')
            setContent('')
            setAuthor('')
        }).catch(err=>{
            alert("Error creating blog article. Please check input.")
        })
    }

    return (

        <form className="postctr">
            <input type='text' requried placeholder='Title' name='title' value={title} className='postctr-input' onChange={handleTitleChange}></input>
            <textarea required placeholder='Content (Max 400 characters)' name='content' value={content} className='postctr-content' onChange={handleContentChange}></textarea>
            <input type='text'required  placeholder='Author' name='author' value={author} className='postctr-input' onChange={handleAuthorChange}></input>
            <button type='button' className="postctr-submit" onClick={submitForm}>POST</button>
        </form>
    )
}

export default CreateBlogPost