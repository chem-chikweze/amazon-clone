import React from 'react'
import Product from './Product'
import './Home.css'

function Home() {
    return (
        <div className="home">
            <img className= "home__image"
            src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/ZmI5MDQwZjEt/ZmI5MDQwZjEt-MTE4ZDUxZTQt-w1500._CB434277022_.jpg"
            alt=""
            />

            {/**Product id, title, price, rating, image, buy button */}
            {/**Product  */}
            <div className="home__row">
                <Product 
                    id="1234"
                    title="The Lean Startup: How constant Innocation Freates Solutions"
                    price={11.96}
                    rating={5}
                    image= "https://m.media-amazon.com/images/I/814EXQRrg5L._AC_UY327_QL65_.jpg"
                />

                <Product 
                    id="1234"
                    title="The Lean Startup: How constant Innocation Freates Solutions"
                    price={11.96}
                    rating={5}
                    image= "https://m.media-amazon.com/images/I/814EXQRrg5L._AC_UY327_QL65_.jpg"
                />

            </div>

            <div className="home__row">
                <Product 
                    id="1234"
                    title="The Lean Startup: How constant Innocation Freates Solutions"
                    price={11.96}
                    rating={5}
                    image= "https://m.media-amazon.com/images/I/814EXQRrg5L._AC_UY327_QL65_.jpg"
                />
                <Product 
                    id="1234"
                    title="The Lean Startup: How constant Innocation Freates Solutions"
                    price={11.96}
                    rating={5}
                    image= "https://m.media-amazon.com/images/I/814EXQRrg5L._AC_UY327_QL65_.jpg"
                />
                <Product 
                    id="1234"
                    title="The Lean Startup: How constant Innocation Freates Solutions"
                    price={11.96}
                    rating={5}
                    image= "https://m.media-amazon.com/images/I/814EXQRrg5L._AC_UY327_QL65_.jpg"
                />
            </div>

            <div className="home__row">
                <Product 
                    id="1234"
                    title="The Lean Startup: How constant Innocation Freates Solutions"
                    price={11.96}
                    rating={5}
                    image= "https://m.media-amazon.com/images/I/814EXQRrg5L._AC_UY327_QL65_.jpg"
                />
            </div>
            
            

            <h1>I am the Homee Page</h1>
        </div>
    )
}

export default Home
