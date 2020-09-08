import React from 'react'
import { useStateValue } from "./StateProvider";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import "./Checkout.css";


function Checkout() {
    const [{ basket }] = useStateValue ();

    return (
        <div className="checkout">
            <div className="checkout__left">
                <img
                    className= "checkout__ad"
                    src="https://m.media-amazon.com/images/S/abs-image-upload-na/d/AmazonStores/ATVPDKIKX0DER/cf24817487741e26ba2ae2e7b9d81c23.w3000.h600._CR0%2C0%2C3000%2C600_SX1920_.jpg"
                    alt=""
                />

                {   basket?.length === 0 ? (
                    <div>
                        <h2>Your Shopping Basket is Empty</h2>
                    </div>
                ) : (
                    <div>
                        <h2 className="checkout__title">Your Shopping Basket</h2>

                        {/* List out all the Checkout products*/}

                        {basket?.map((item) => {

                            return (
                                <CheckoutProduct
                                id={item.id}
                                title= {item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                            );
                        })}

                    </div>
                )}
            </div>

            {basket?.length > 0 && (
                <div className="checkout__right">
                    <h1></h1>
                    <Subtotal />
                </div>
            )}
            

        </div>
    );
}

export default Checkout
