import { Link } from "react-router-dom"
import plus from './images/plus.png'
import draft from './images/draft.png';

const Dashboard = ()=>{
    return (
        <>
            {/* <Link to="/dashboards"> blog &rarr;</Link> */}


            <div className="dashboard_main_content">
               <div className="dashboard_content">
                <div className="blank_page">
                   
                     <p>Create New Blank</p>
                        <div className="logo">
                           <div className="draft_img">
                           <img src={plus} alt="plus" />
                           </div>
                        </div>
                    
                </div>

                <div className="blank_page">
                   
                       <p>Drafts</p>
                       <div className="logo">
                          <div className="plus_img">
                          <img src={draft} alt="plus" />
                          </div>
                       </div>
                   
               </div>
               </div>
            </div>
          
        </>
    )
}

export default Dashboard