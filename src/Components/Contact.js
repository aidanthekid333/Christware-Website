/**
 * Author: Aidan Thrall
 * Date: 3/5/2024
 * 
 * This is the contact page for Christware
 */
import React, { useState } from "react";

import './Contact.css'


  function SubmissionForm(){

    const HandleSubmit = async (event) => {
        event.preventDefault();
    
        const formData = {
          name: event.target.name.value,
          email: event.target.email.value,
          tel: event.target.tel.value,
          message: event.target.message.value,
        };
    
    
        try {
            const response = await fetch('http://localhost:3001/contact-submission', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(formData),
            });
        
            if (!response.ok) throw new Error('Network response was not ok');
            console.log('Message sent successfully');
          } catch (error) {
            console.error('Error:', error);
          }

        setFormData({
            name: '',
            email: '',
            tel: '',
            message: '',
        })          
    
      };
    
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        tel: '',
        message: '',
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
          ...prevState,
          [name]: value,
        }));
      };

    return(
        <div className="bodyWrapper">
            <div className="titleWrapper">
                <h1 className="title">How Can We Help?</h1>
            </div>
            <div className="contactWrapper">
                <div className="contactDescriptionWrapper">
                    <h2>Contact Us</h2>
                    <p>Let us know how we can best serve you!</p>
                </div>
                <div className="contactFormWrapper">
                    <form onSubmit={HandleSubmit} className="contactForm">
                        <div className="inputWrapper">
                            <label htmlFor="name">Name
                                <input 
                                    type="text"
                                    id="name" 
                                    name="name" 
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Name" 
                                    required>
                                </input> 
                            </label>
                            <label htmlFor="email">Email
                                <input 
                                    type="email" 
                                    id="email" 
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="example@gmail.com" 
                                    required>
                                </input>
                            </label>
                            <label htmlFor="tel">Phone
                                <input 
                                type="tel" 
                                id="tel" 
                                name="tel"
                                value={formData.tel}
                                onChange={handleChange}
                                placeholder="(123) 456-7890">
                                </input>
                            </label>
                        </div>
                        <textarea 
                            id="message" 
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Type your message here!" 
                            maxLength={1000} 
                            required>
                        </textarea>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
  }



function Contact() {
    return(
        <SubmissionForm />
    )
}

export default Contact;