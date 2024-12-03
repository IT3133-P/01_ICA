
import { useState } from 'react';
import '../assets/CSS/layout.css';
import { flowers } from './FlowerDB';
import Product from './Product';
import Cart from './Cart';


export default function Products() {

    const [ cart, setCart ] = useState([])

    function setIntoCart(pro) {

        if(cart) {
            const res = cart.some((item) => item.name === pro.name)
            if(res) {
                const updateCart = cart.map((item) => item.name === pro.name ? {...item, ...{'quantity': pro.quantity, 'sum' : pro.sum}} : item )
                setCart(updateCart)
            }
            else {
                setCart((prev) => [...prev, pro])
            }

        }
        else {
            setCart((prev) => [...prev, pro])
        }

            
    }
   
    return(
        <>
            <div className="item1">
                <h1>Flower Shop</h1>
            </div>
            <div className="item2">
                <h4 className="card-title">Buy flowers</h4>
                <div className="grid-container">
                    {
                        flowers.map((flower) => <Product key={flower.id} flowerDetails={flower} setIntoCart={setIntoCart}/>)
                    }
                </div>

            </div>
            <div className="item3">
                {
                    cart ? (
                        <Cart cartDetails={cart}/>
                    ):(
                        <Cart cartDetails={null}/>
                    )
                }
            </div>
        </>
    );

}