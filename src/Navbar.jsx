import icon from './images/icon.png'
import magnify from './images/magnify.png'


const Navbar = () => {
    return (
        <>
            <div className="navbar">
                <div className="navbar_content">
                    <div className="logo_content">
                        <div className="logo">
                            <img src={icon} alt="icon" />
                        </div>
                        <p>Animaxfyb Blog</p>
                    </div>

                </div>
                <div className="navbar_content">
                    <div className="search_content">
                        <p>search blog post</p>
                        <div className="search_img">
                            <img src={magnify} alt="magnify" />
                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}

export default Navbar