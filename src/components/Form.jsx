import React from 'react';

function Form(){
    return (
        <div className="form">
    
        <form action="https://formsubmit.co/yogeshshamlin@gmail.com" method="POST">
            <h3>Ping Me!</h3>
            <input type="text" id="name" name="name" placeholder="Your Name" required /> 
            <input type="email" id="email" name="email" placeholder="Your Email" required />
            <input type="text" id="phone" name="phone" placeholder="Phone no." required />
            <textarea id="message" rows="4" name="Type your message" placeholder="Type your message"></textarea>
            <button type="submit">Send</button>
        </form>

        </div>
    )
}


export default Form;