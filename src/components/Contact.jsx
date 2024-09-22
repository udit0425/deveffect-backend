import React from 'react'
import "../App.css"

export default function Contact() {
  return (

<div>

<div class="contact-container">
    <div class="left-half">
        <h2>Contact Us</h2>
        <div>
          
        </div>
        <form>
          <div></div>
            <div class="form-group">
                <label for="name">Name</label>
                <input type="text" id="name" placeholder="Enter name"/>
               
            </div>
            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" id="email" placeholder="Enter email"/>
            </div>
            <div class="form-group">
                <label for="phone">Phone</label>
                <input type="phone" id="phone" placeholder="Enter Phone Number"/>
            </div>
            <div class="form-group">
                <label for="message">Message</label>
                <textarea id="message" placeholder="Enter your message"></textarea>
            </div>
            <button type="submit" class="submit-btn">Submit</button>
        </form>
    </div>
    <div class="right-half">
  
    </div>


    </div>
    <div class="footer">
    
    <p>all rights reserved The dev effect 2024</p>
  </div>
  </div>
    
  )
  
}
