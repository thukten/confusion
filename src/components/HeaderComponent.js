import React, { Component } from 'react';
import { Navbar, NavbarBrand, Jumbotron } from 'reactstrap';

class Header extends Component {
    render() {
        return(
            /*<React.Fragment>*/
            <React.Fragment>
                <Navbar dark color="primary">
                    <div className="container">
                        <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
                    </div>
                </Navbar> 
                <Jumbotron>  
                <div className="container">
                    <div className="row row-header">
                        <div className=""col-12 col-sm-6>
                            <h1> Ristorante Con Fusion </h1>
                            <p> We take inspiration from the world's best cuisines, and create a unique usion experience. Our lipsmacking creation will tickle your culinary senses;   </p>
                        </div>
                    </div>
                </div>
                </Jumbotron>   
            </React.Fragment>
        )
    }
}

export default Header;