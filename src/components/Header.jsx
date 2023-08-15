import React from 'react';
import ReactDOM from 'react-dom';

function Header()
{
    return(
        <div>
            <section id ="header" >
                <nav className="navbar navbar-expand mnc py-lg fixed-top">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">S H A M L I N</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ms-auto px-2 mx-auto">
                                <li className="nav-item px-2">
                                    <a className="nav-link " aria-current="page" href="#header">Home</a>
                                </li>
                                <li className="nav-item px-2">
                                    <a className="nav-link" href="#skills">Skills</a>
                                </li>
                                <li className="nav-item px-2">
                                    <a class="nav-link" href="#projects">Projects</a>
                                </li>
                                <li className="nav-item px-2">
                                    <a className="nav-link" href="#">Education</a>
                                </li>
                                <li className="nav-item px-2">
                                    <a className="nav-link" href="#form">Contact</a>
                                </li> 
                            </ul>
                        </div>
                    </div>
                </nav>
            </section>
        </div>
    );
};


export default Header;