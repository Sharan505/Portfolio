import quoteImg from './imgs/quote.png';
function About(){
    return(
        <div className="container mt-5" id='About'>
            <div className="row card mb-5"></div>
            <div className="row px-3 carded">
                <div className="col-md-5 col-sm-12 d-flex align-items-center justify-content-center mb-5">
                    <img width={400} height={400} src={quoteImg} className='quoteImg img-fluid' alt="" />
                </div>
                <div className="col-md-7 col-sm-12 d-flex align-items-center justify-content-center flex-column">
                    <h1 className="text-white text-center ">About Me</h1> 
                    <p className="card-subtitle text-center">Creative and Passionate Techie</p>
                    <p className="about-me-text text-white mt-3">I'm from India, Tamil Nadu. I'm a Under Graduate Student and always <span className='text-info'> passionate</span> in my career. I'm a <span className='text-info'> Full Stack Developer </span>with creative mindset. <br /><br /> Often sitting infront my Laptop dashing the keyboard hoping something new I learn everyday. Always <span className='text-info'> motivated to learn something new!</span> <br /><br /> When I'm not programming, I love to play video games and spend time in social media.</p>
                    <a href="https://drive.google.com/file/d/1TbSTgTNEGKdS1mi6-UKjDksAKThmWKc2/view?usp=sharing" className='text-decoration-none text-white border btn mt-3 CVButton align-self-start' target='_blank'>Portfolio</a>
                </div>
            </div>
        </div>
    );
}

export default About;