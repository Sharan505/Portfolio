import './component.css';
 function Navbar(){
    return(
        <div className="container fixed-top" style={{backgroundColor:"black"}}>
            <div className="row">
                <ul className="col nav d-flex justify-content-end gap-5 h5 mt-4 mb-sm-3 mb-md-5" style={{ fontSize: 'clamp(.5rem, 3vw, 1rem)' }}>
                    <li><a className="text-white text-decoration-none" href="#About">ABOUT</a></li>
                    {/* <li><a className="text-white text-decoration-none" href="">EXPERIENCE</a></li> */}
                    <li><a className="text-white text-decoration-none" href="#Projects">PROJECTS</a></li>
                    <li><a className="text-white text-decoration-none" href="#Contact">CONTACT</a></li>
                </ul>
            </div>
        </div>
    );
 }

 export default Navbar;