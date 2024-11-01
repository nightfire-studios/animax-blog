import list from "./images/list.png"
import menu from "./images/menu.png"
import no_blog from "./images/no-blog.png"


const BlogPreview = () => {

    const noPreview = ()=>{
        return(
            <div className="no_preview">
                <div className="content">
                <img src={no_blog} alt="no preview icon" />
                <p>No blog Post</p>
                </div>
                
            </div>
        )
    }

    return (
        <>
            <div className="recent">
                <div className="container">
                    <div className="recent_header">
                        <div className="main_heading">
                            <p>Recently Published</p>
                        </div>
                        <div className="corner_items">
                            <div className="rows nav_icons">
                                <img src={list} alt="checklist" />
                            </div>
                            <div className="grid nav_icons">
                                <img src={menu} alt="menu" />
                            </div>
                        </div>
                    </div>

                    <div className="recent_container">
                        <div className="blog_previews">
                            {noPreview()}
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default BlogPreview