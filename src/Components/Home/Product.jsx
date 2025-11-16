import { AddCartContext } from "../Context/AddCartContext";
import { ShowCartContext } from "../Context/ShowCartContext";
import { useContext } from "react";

function Product({ productImage, productName, price, Quantity }) {


    // Add Item to Cart 
    const { addedItemCount, setAddedItemCount } = useContext(AddCartContext);
    const { cartItems, setCartItems } = useContext(ShowCartContext);

    localStorage.setItem('addedItemCount', addedItemCount)
    
    function addToCartItemHandler() {
        setAddedItemCount(addedItemCount + 1)
        // console.log(addedItemCount);  
        const newItem = { productImage, productName, price, Quantity };
        
        // Prevent duplicate 
        const isAlreadyInCart = cartItems.some(
            (item) => item.productName === productName
        );
        if (!isAlreadyInCart) {
            setCartItems([...cartItems, newItem]);
        }

        console.log("Cart Updated:", cartItems);
    }


    return (
        <div className='shadow-xl transition-transform duration-200 hover:-translate-y-3'>
            <img className='md:w-[40vw] md:h-[40vh] '
                src={productImage} />
            <div className='text-center md:my-2'>
                <p className='text-[20px] font-bold font-serif'>{productName}</p>
                <p className='text-gray-600 font-semibold'><i class="fa-solid fa-indian-rupee-sign"></i>{price} / {Quantity}</p>
                <div className='flex my-2 justify-around md:mt-8'>
                    <button
                        className='buyButton text-white bg-red-900 rounded-[4px] font-bold p-[6px] cursor-pointer mb-4'>Buy Now</button>
                    <button

                        className='buyButton text-white bg-red-900 rounded-[4px] font-bold p-[6px] cursor-pointer mb-4' id="add-to-cart" onClick={addToCartItemHandler} >Add to Cart</button>
                </div>
            </div>
        </div>
    )
}

export default Product
