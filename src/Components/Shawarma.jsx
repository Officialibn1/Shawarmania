import { H1, Button } from './styles/H1H2H3';
import { Div, StyledCheckoutModal } from './styles/CheckoutModal.styles';
import React, {useRef} from 'react';
import emailjs from '@emailjs/browser';




const Shawarma = ({shawarma}) => {
    const form = useRef();
    
    const sendEmail = (e) => {
        e.preventDefault();
        
        emailjs.sendForm('service_euew33l', 'template_q3j0v89', form.current, 'cF9fgOlIOf1aHGSKb')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };

 
    return (
        <>
            <div className="col">
                <div className="card">
                    <img src={shawarma.SRC} className="card-img-top bg-light" alt="..." />
                    <div className="card-body">
                        <H1 className="card-title Text">{shawarma.title} <br /><span> {shawarma.span} </span></H1>
                        <p className="card-text Number">{shawarma.price}</p>
                    </div>
                    <div className="card-footer d-flex">
                        <Button 
                        type="button" 
                        className="btn btn-sm btn-warning text-light mx-auto" 
                        data-bs-toggle="modal" 
                        data-bs-target="#staticBackdrop"
                        >
                            Order Now
                        </Button>
                    </div>
                </div>

                {/* Checkout Modal */}
                <StyledCheckoutModal>
                    {/* <!-- Button trigger modal --> */}
                    {/* <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                    Launch static backdrop modal
                    </button> */}

                    {/* <!-- Modal --> */}
                    <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                        {/* Modal Content */}
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">Confirm Purchase!</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>

                        {/* Modal Body */}
                        <div className="modal-body">
                            <form ref={form} onSubmit={sendEmail}>
                                <Div>
                                    <label>Name</label>
                                    <input type="text" name="name" />
                                </Div>

                                <Div>
                                    <label>Phone Number</label>
                                    <input type="number" name="number" />
                                </Div>

                                <Div>
                                    <label>Address</label>
                                    <input type="text" name="address" />
                                </Div>

                                <Div className="mb-3">
                                    <label>Item</label>
                                    <input type="text" name="item" value={shawarma.span} readOnly/>
                                </Div>

                                <Div className="mb-3">
                                    <label>Quantity</label>
                                    <input type="number" name="quantity" value={1} readOnly />
                                </Div>

                                <Div className="mb-3">
                                    <label>Price</label>
                                    <input type="text" name="price" value={shawarma.price} readOnly/>
                                </Div>
                                <button type="submit" value="Send" className="btn btn-warning text-light">Order</button>

                            </form>
                        </div>
                        
                        {/* Modal Footer */}
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                        </div>
                        </div>
                    </div>
                    </div>
                    {/* Modal Ends Here */}
                    
                    
                </StyledCheckoutModal>

            </div>
        </>
    );
}

export default Shawarma;
