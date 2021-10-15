import BlogArticle from "./BlogArticle"
import {useState, useEffect} from 'react'
import axios from 'axios'


const blogurl = "http://localhost:8000/api/v1/blogs/"

const Blogs = ()=>{
    const [blogPosts, setBlogPosts] = useState([])
    
    useEffect(()=>{
        axios.get(blogurl).then(res=>{
            setBlogPosts(res.data)
        }).catch(err=>{
            alert("Failed to fetch blog posts. Please try again.")
        })
    },[])

    return (
        <>
            <div className="blog-content">
                {blogPosts.map(article=>(<BlogArticle key={article.id} article={article}/>))}
            </div>
        </>
    )
}

export default Blogs