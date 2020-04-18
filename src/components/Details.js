import React, { Component } from 'react'
import {Link } from 'react-router-dom';
import {ProductConsumer} from '../context';
import {ButtonContainer} from './Button';

export default class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {
                    value =>{
                        const{id,img,title,company,info,price,inCart}=
                        value.detailProduct;
                        return(
                        <div className="container py-5">
                            
                            {/*title */}
                            <div className="row">
                                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                                    <h1>  {title}</h1>
                                </div>
                            </div>
                            {/*end title */}
                            {/*Product Details */}
                            <div className="row">
                                <div className="col-10 mx-auto col-md-6 my-3">
                                   <img src={img} className="img-fluid" alt="product"/>
                                </div>

                                {/*Product text */}
                                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                    <h2>model : {title}</h2>
                                    <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                                        made by :<span className="text-uppercase">
                                        {company}
                                        </span>
                                    </h4>
                                    <h4 className="text-blue">
                                        <strong>
                                        price : <span>$</span>{price}
                                        </strong>
                                    </h4>
                                    <p className="text-capitalize font-weight-bold mt-3 mb-0">
                                        some info about product:
                                    </p>
                                    <p className="text-muted lead"> 
                                         {info}
                                    </p>
                                    {/* Buttons */}
                                    <Link to="/">
                                        <ButtonContainer>Back to Products</ButtonContainer>
                                    </Link>
                                        <ButtonContainer cart disabled={inCart?true:false}
                                        onClick={()=>{
                                            value.addToCart(id);
                                            value.openModal(id);
                                        }
                                        }>
                                           {inCart?"in cart" :"Add to cart"} 
                                        </ButtonContainer>
                                    
                                </div>
                            </div>


                        </div>);
                    }

                }
            </ProductConsumer>
            
        );
    }
}
