import portraitImage from './imgs/sharan3.jpg'; 

function ContentOne() {
    return (
        <div className="container mt-5">
            {/* <a href="https://drive.google.com/file/d/141OpAP3FbGmNXfEQ8G9cPAF5_-Fuxpuc/view?usp=sharing"><button className='btn btn-primary'>Click to view the video</button></a> */}
            <div className="row ps-3">
                <div className="col-sm-12 col-md-7 text-white">
                    <h1 className="mt-5" style={{ fontSize: 'clamp(15px, 2vw, 3.5rem)' }}>Hello! My name is</h1>
                    <h1 className="myName" style={{ fontSize: 'clamp(3.5rem, 8vw, 7rem)' }}>Sharan M</h1>
                    <p className="h4" style={{ fontSize: 'clamp(30px, 3vw, 3rem)', background: 'radial-gradient(circle, rgba(124,219,255,1) 0%, rgba(0,14,255,1) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', }}>Full Stack Developer</p>
                    <div className="icons mt-4 d-flex gap-4">
                        <a id="linkedin" href="https://www.linkedin.com/in/sharan-muthuraja/" target="_blank" rel="noopener noreferrer">
                            <ion-icon name="logo-linkedin"></ion-icon>
                        </a>
                        <a id="whatsapp" href="https://wa.me/917540008788" target="_blank" rel="noopener noreferrer">
                            <ion-icon name="logo-whatsapp"></ion-icon>
                        </a>
                        <a id="github" href="https://github.com/Sharan505" target="_blank" rel="noopener noreferrer">
                            <ion-icon name="logo-github"></ion-icon>
                        </a>
                        <a id="mail" href="mailto:sharan27505@gmail.com" target="_blank" rel="noopener noreferrer">
                            <ion-icon name="mail-outline"></ion-icon>
                        </a>
                    </div>
                </div>
                <div className="col-md-5 col-sm-12 mt-4 mt-md-0">
                    <img src={portraitImage} alt="Portrait" className="img-fluid potrait" />
                </div>
            </div>
        </div>
    );
}

export default ContentOne;
