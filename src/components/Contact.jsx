import React, { useState } from 'react';

function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    function handleSubmit(e) {
        e.preventDefault(); // Prevent the default form submission behavior
        if (name && email && message) {
            alert("Thanks for your message!");
        } else {
            alert("Please fill in all fields.");
        }
    }

    return (
        <div className="container" id="Contact">
            <div className="row card mb-5"></div>
            <div className="row">
                <div className="col-md-3 col-sm-12"></div>
                <div className="col-md-6 col-sm-12 contact-col text-white">
                    <h1 className="text-white text-center">Contact Me</h1>
                    <p className="mt-4">Interested in collaborating or want to reach out? Feel free to contact me and I'll get back to you as soon as possible!</p>
                    <form onSubmit={handleSubmit}>
                        <li className="list-unstyled">Name</li>
                        <input 
                            className="form-control" 
                            placeholder="Your name" 
                            type="text" 
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required 
                        /><br />
                        <li className="list-unstyled">Email</li>
                        <input 
                            className="form-control" 
                            placeholder="Your email" 
                            type="email" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required 
                        /><br />
                        <li className="list-unstyled">Message</li>
                        <textarea 
                            className="form-control" 
                            placeholder="Your message" 
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required 
                        /><br /><br />
                        <button type="submit" className="sendBtn text-white">Submit</button>
                    </form>
                    <p className="text-center">@Sharan M</p>
                    <div className="icons mt-4 d-flex gap-4 justify-content-center">
                        <a id="linkedin" href="https://www.linkedin.com/in/sharan-m-18274932b/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BYfCsjSkXRCOLYSXYV58AKg%3D%3D" target="_blank" rel="noopener noreferrer">
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
                <div className="col-md-3 col-sm-12"></div>
            </div>
        </div>
    );
}

export default Contact;
