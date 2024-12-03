import '../assets/CSS/layout.css';
import { useState } from 'react'

export default function Product({flowerDetails, setIntoCart}){

    const [ quantity, setQuantity ] = useState()
    const pro = {
        name:null,
        quantity:null,
        sum:null
    }

    function handleInput(value) {
        setQuantity(value)
    }

    function addToCart() {

        pro.name = flowerDetails.name
        pro.quantity = quantity
        pro.sum = quantity * flowerDetails.price

        if(pro) {
            setIntoCart(pro)
        }
    }
    
    return(
        <div className="grid-item">

            <div class="card">
                <img  src={require(`../assets/image/${flowerDetails.img}`) } alt={'name'}/>
                <div class="card-body">
                    <h5 class="card-title">Price: {flowerDetails.price}</h5>
                    <div class="quantity-container">
                        <label for="quantity">Quantity: {flowerDetails.qty}</label>
                        <input type="number" id="quantity" name="quantity" onChange={(e) => {handleInput(e.target.value)}}/>
                    </div>
                    <button class="card-button" onClick={() => {addToCart()}}>Add to Cart</button>
                </div>
            </div>
        </div>
    );
}