import React from 'react';
import {Link} from 'react-router-dom';

const AllLinks=()=>{
    return (
        <div>
            
            
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="#">UST GLOBL</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
        <a class="nav-item nav-link active" href="/">Home <span class="sr-only"></span></a>
        <a class="nav-item nav-link" href="/about">Reg Details</a>
        <a class="nav-item nav-link" href="/contact">Contact</a>
        
        </div>
        </div>
        </nav>           
    </div>
    );
}

export default AllLinks;