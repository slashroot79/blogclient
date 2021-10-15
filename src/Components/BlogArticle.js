

const BlogArticle = (props)=>{
    const {article} = props
    const date = new Date(article.date)
    const dateString = date.toLocaleString()
    return (
        <div className = "blogarticle">
            <p className = "blogarticle-title">{article.title}</p>
            <div className = "blogarticle-details">{article.content}</div>
            <div className="blogarticle-footer">
                <p className="blogarticle-author">{article.author}</p>
                <p className="blogarticle-date">{dateString}</p>
            </div>
        </div>
    )
}

export default BlogArticle