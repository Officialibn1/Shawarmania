import React, {useRef} from 'react';
import emailjs from '@emailjs/browser';
import { Div, StyledCheckoutModal } from './styles/CheckoutModal.styles';


const CheckoutModal = () => {

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
    <StyledCheckoutModal>
        {/* <!-- Button trigger modal --> */}
        {/* <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
        Launch static backdrop modal
        </button> */}

        {/* <!-- Modal --> */}
        <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
            {/* Modal Content */}
            <div class="modal-header">
                <h5 class="modal-title" id="staticBackdropLabel">Confirm Purchase!</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>

            {/* Modal Body */}
            <div class="modal-body">
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
                        <input type="text" name="item" value={'Shawarma'}/>
                    </Div>

                    <Div className="mb-3">
                        <label>Quantity</label>
                        <input type="number" name="quantity" value={1} />
                    </Div>

                    <Div className="mb-3">
                        <label>Price</label>
                        <input type="text" name="price" value={'N2,000.00'}/>
                    </Div>

                </form>
            </div>
            
            {/* Modal Footer */}
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                <button type="submit" value="Send" class="btn btn-warning text-light">Order</button>
            </div>
            </div>
        </div>
        </div>
        {/* Modal Ends Here */}
        
        
    </StyledCheckoutModal>
    );
}

export default CheckoutModal;
