import React from 'react';
import Header from "./Header"
import Footer from "./Footer"
import Intro from "./Intro"
import Form from "./Form"


function App()
{
    return(
        <div>
            <Header />
            <Intro />
            <Form />
            <Footer className="sticky-sm-bottom" />
        </div>
    )
}

export default App;