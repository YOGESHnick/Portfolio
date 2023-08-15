import React from 'react';

function Form(){
    return (
        <section id="form">
            <div className="row form">
                <div className="col-sm-12 col-lg-6">
                    <img className="form-img" src="coat_suit-fotor-20230619204039.png"></img>
                </div>

                <div className="col-sm-12 col-lg-6">
                    <form action="https://formsubmit.co/yogeshshamlin@gmail.com" method="POST">
                    {/* <!-- Honeypot --> */}
                    {/* <input type="text" name="_honey" style="display:none;"></input> */}

                    {/* <!-- Disable Captcha --> */}
                        <input type="hidden" name="_captcha" value="false"></input>

                        <h3>Ping Me!</h3>
                        <input type="text" id="name" name="name" placeholder="Your Name" required></input>
                        <input type="email" id="email" name="email" placeholder="Your Email" required></input>
                        <input type="text" id="phone" name="phone" placeholder="Phone no." required></input>
                        <textarea id="message" rows="4" name="Type your message" placeholder="Type your message"></textarea>
                        <button type="submit"> <i class="fa-solid fa-shuttle-space fa-bounce fa-xl"></i>Send</button>
                    </form>
                </div>
            </div>
        </section>    
    )
}


export default Form;