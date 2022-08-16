
function Main() {

    document.body.style = 'background: blanchedalmond';

    return ( 
        <div>
            <div className="top"><img src="/website_edit.jpeg" alt="" /></div>
            <p className="main-text">Hello my name is Rainer. Welcome to my portfolio!</p>
            <div className="rectangle"></div>
            <div className="main-link-list">
                <div className="main-link">
                    <img src="/td_web.png" alt="" />
                    <p>Work</p>
                </div>
                <div className="main-link">
                    <img src="/webdesign_web.png" alt="" />
                    <p>Courses</p>
                </div>
                <div className="main-link">
                    <img src="/drawing_web.png" alt="" />
                    <p>Hobbies</p>
                </div>
            </div>
        </div> );
}

export default Main;