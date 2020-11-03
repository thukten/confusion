import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, Button, Breadcrumb, BreadcrumbItem, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label, Row, Col } from 'reactstrap';
/*
class DishDetail extends Component {

    renderDish(dish) {
        return(
            <div className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>          
        )
    }

    renderComments(comments) {
        if (comments != null)
            return(
                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>                 
                    <ul className="list-unstyled">
                        {comments.map((comments) => {
                            return (
                                <li key={comments.id}>
                                <p>{comments.comment}</p>
                                <p>--{comments.author}, &nbsp;
                                {new Intl.DateTimeFormat('en-US', {year: 'numeric', month: 'long', day: '2-digit'}).format(new Date(comments.date))}
                                </p>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            );
        else
            return(
                <div></div>
            );
    }

    render() {

        if(this.props.dish != null)
            return (
                <div className="container">
                <div className="row">  
                <div className="col-12">                
                    <h3>{this.props.dish.name}</h3>
                    <hr/> 
                </div>                 
                </div>
                <div className="row">
                    {this.renderDish(this.props.dish)}
                    {this.renderComments(this.props.dish.comments)}
                </div>
                </div>
            );
        else 
            return(
                <div></div>
            );
        }
}
*/



    function RenderDish({dish}) {
        return(
            <Card>
                <CardImg width="100%" src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>          
        )
    }

    function RenderDishComments({comments}){
        console.log(comments);
        if(comments!=null){
            const cmnts = comments.map((comments) => {
                return(
                        <li key={comments.id}>
                        <p>{comments.comment}</p>
                        <p>--{comments.author}, &nbsp;
                        {new Intl.DateTimeFormat('en-US', {year: 'numeric', month: 'long', day: '2-digit'}).format(new Date(comments.date))}
                        </p>
                        </li>
                );

            });
            return(
            <div className="col-12 col-md-12 m-1">
                <h4>Comments</h4>
                <ul className="list-unstyled">
                    {cmnts}
                </ul>
            </div>
            )
        }
        else{
            return(
            <div></div>
            );
        }
    }

    const DishDetail = (props) => {
        if(props.dish != null)
            return (
                <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={props.dish}/>
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <RenderDishComments comments={props.dish.comments}/>
                    </div>            
                </div>
                </div>
            )
    
        else 
            return(
                <div></div>
            );
    }

export default DishDetail;