import { Link } from "react-router-dom"
import list from "./images/list.png"
import menu from"./images/menu.png"
import plus from './images/plus.png'
import draft from './images/draft.png';


const Dashboard = ()=>{
    return (
        <>
            <Link to="/">&larr; Back</Link>
            <nav>
                <div className="container">
                    <div className="main_heading">
                        <p>Recently Published</p>
                    </div>
                    <div className="corner_items">
                        <div className="rows">
                            <img src={list} alt="checklist" />
                        </div>
                        <div className="grid">
                            <img src={menu} alt="menu" />
                        </div>
                    </div>
                </div>
            </nav>

            {/* <Link to="/dashboards"> blog &rarr;</Link> */}


            <div className="dashboard_main_content">
               <div className="dashboard_content">

                    <Link to="/dashboards">
                    <div className="blank_page">
                   
                     <p>Create New Blank</p>
                        <div className="logo">
                           <div className="draft_img">
                           <img src={plus} alt="plus" />
                           </div>
                        </div>
                    
                </div>
                    </Link>


                

                <div className="blank_page">
                   
                     <p>Drafts</p>
                        <div className="logo">
                           <div className="draft_div">
                             <div className="draft_img">
                             <img src={draft} alt="plus" />
                             <p>No Draft</p>
                             </div>
                           </div>
                        </div>
                    
                </div>

             
               </div>

               <div className="publish_container">
                <div className="div">
                    
                </div>
        
               </div>
            </div>
          
        </>
    )
}

export default Dashboard
