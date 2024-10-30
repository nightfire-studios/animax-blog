import { Link } from "react-router-dom"
import list from "./images/list.png"
import menu from"./images/menu.png"

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

        </>
    )
}

export default Dashboard
