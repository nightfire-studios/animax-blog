import { Link } from "react-router-dom"

import bold from './images/bold.png'
import italic from './images/italic.png'
import underline from './images/underline.png'
import format from './images/format.png'
import link from './images/link.png'
import insert from './images/insert.png'
import align from './images/left.png'
import set from './images/right.png'
import arrow from './images/down.png'
import twitter from './images/twitter.png'
import facebook from './images/facebook.png'
import link2 from './images/link2.png'


const Blog = ()=>{
    return (
        <>
        {/* <Link to="/">&larr; dashboard </Link> */}

        <div className="main_blog_page">
            <div className="blog_navbar">
              <nav>
                <div className="font">
                    <h3>11</h3>
                    <img src={arrow} alt="arrow"  />
                </div>
                <img src={bold} alt="bold" />
                <img src={italic} alt="italic" />
                <img src={underline} alt="underline" /> 
                <p></p>
                <img src={align} alt="bold" />
                <img src={format} alt="italic" />
                <img src={set} alt="underline" /> 
                <p></p>
                <img src={insert} alt="italic" />
                <img src={link} alt="underline" className="link" /> 
                <h1></h1>

              </nav>
            </div>

            <div className="blog_content_page">
                <div className="content_items">
                    <div className="content_image_div">
                        <div className="content_img">
                            <img src={insert} alt="insert" />
                        </div>
                        <h1>Add Image</h1>
                    </div>

                    

                </div>
                <div className="media_container">
                <div className="media_board">
                    <div className="div1">
                        <h1></h1>
                        <p>published at 27th october,2024</p>
                    </div>
                    <div className="div2">
                        <img src={twitter} alt="twitter" />
                        <img src={facebook} alt="facebook" />
                        <img src={link2} alt="link2" />
                    </div>   
                </div>
                <h1  className="title">Blog Title Here...</h1>
                <h3>Subtitle Here...</h3>
                <p className="start_blog">start blog content here... </p>
              </div>
              
            </div>

          
        </div>
        </>        
    )
}

export default Blog