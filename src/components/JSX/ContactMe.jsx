import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import Header from './Header';

function ContactMe( {setPage} ) {
    const form = useRef();

    // Function to Send email on form submit
    const sendEmail = (e) => {
        e.preventDefault();

        const currentTime = new Date().toLocaleString();
        form.current.querySelector('input[name="time"]').value = currentTime;

        emailjs.sendForm(
            'service_4h480hl',
            'template_0m3exxb',
        form.current,
            'AJ5kls934Y7KbNAo0'
        ).then(() => {
            alert("Message sent successfully! You can expect a reply within 24 hours " + 
                "to the email you attached to your message."
            );
        }, (error) => {
            alert("Failed to send message. Verify your network connection. If your " +
                "network connection is stable, the free EmailJS API email requests " + 
                "allowed per day might be used. Try again later today or tomorrow. If " + 
                "the issue persists, reach out to me directly to let me know. If your " + 
                "message is time-sensitive, feel free to reach out through the phone " + 
                "number or email listed on the contact me page to message me directly. " + 
                "I apologize for the inconvenience.");
            console.log(error.text);
        });

        e.target.reset();
    };

    return (
        
        <div className="w-100 bg-primary-subtle">
            {/* Page Background Container */}
            
            {/* Header Component */}
            <Header setPage={setPage}/>

            {/* Page Sizing Container */}
            <div className="container py-4 px-4 my-2 rounded bg-light">
                
                {/* Title */}
                <h1 className="text-primary text-start fw-bold">
                    Contact Me
                </h1>
                <hr className="my-4 border border-primary border-2"/>

                {/* Intro Section Container */}
                <div className="row">
                    
                    {/* Intro Info */}
                    <div className="col-12">
                        
                        <h4 className="text-primary text-start">
                            My Information
                        </h4>
                        <hr className="my-4 border border-primary border-2"/>

                        <p className="text-dark">
                            If you would like to reach out through official channels 
                            (ie. company email or company phone) my email and phone 
                            number are listed below. Otherwise, feel free to reach out 
                            through the contact form below. You can expect a reply 
                            within 24 hours of the time you send the message!
                        </p>
                    </div>

                    {/* Phone Number */}
                    <p className="text-dark col-2 offset-1">
                        <b>Phone Number:</b> 
                    </p>
                    <p className="text-dark col-9">
                        919-532-6735
                    </p>

                    {/* Email */}
                    <p className="text-dark col-2 offset-1">
                        <b>Email:</b> 
                    </p>
                    <p className="text-dark col-9">
                        <a href="mailto:JoshuaHouse59@gmail.com">
                            JoshuaHouse59@gmail.com
                        </a>
                    </p>

                    {/* Email Form Title */}
                    <div className="col-12">

                        <h4 className="text-primary text-start">
                            Email Form
                        </h4>
                        <hr className="my-4 border border-primary border-2"/>

                    </div>

                </div>
                
                {/* Email Form */}
                <form ref={form} onSubmit={sendEmail} className="p-3 border rounded">

                    {/* Name Input */}
                    <div className="mb-3">
                        
                        <label className="form-label text-primary fw-bold">
                            Name:
                        </label>

                        <input 
                            type="text" 
                            name="name" 
                            className="form-control" 
                            required />

                    </div>

                    {/* Email Input */}
                    <div className="mb-3">
                        
                        <label className="form-label text-primary fw-bold">
                            Email:
                        </label>
                        
                        <input 
                            type="email" 
                            name="email" 
                            className="form-control" 
                            required />

                    </div>

                    {/* Subject Input */}
                    <div className="mb-3">
                        
                        <label className="form-label text-primary fw-bold">
                            Subject:
                        </label>
                        
                        <input 
                            type="text" 
                            name="subject" 
                            className="form-control" 
                            required />
                    
                    </div>

                    {/* Message Input */}
                    <div className="mb-3">
                        
                        <label className="form-label text-primary fw-bold">
                            Message:
                        </label>
                        
                        <textarea 
                            name="message" 
                            className="form-control" 
                            rows="4" 
                            required />
                    
                    </div>

                    {/* Submit Button */}
                    <div className="d-grid gap-2">
                        
                        <button className="btn btn-primary" type="submit">
                            Send
                        </button>
                    
                    </div>

                    {/* Time Tracker Hidden Element */}
                    <input 
                        type="hidden" 
                        name="time" />

                </form>

            </div>
 
        </div>

    );
}

export default ContactMe;