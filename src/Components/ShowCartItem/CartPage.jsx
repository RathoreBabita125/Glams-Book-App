import { useContext, useState } from 'react';
import { ShowCartContext } from '../Context/ShowCartContext';

const CartPage = () => {

    const { cartItems } = useContext(ShowCartContext);


    const [quantities, setQuantities] = useState(
        cartItems.map(() => 1)  
    );


    function increaseCountItems(index) {
        setQuantities(prev => {
            const updated = [...prev];
            updated[index] += 1;
            return updated;
        });
    }

    function decreaseCountItems(index) {
        setQuantities(prev => {
            const updated = [...prev];
            updated[index] = Math.max(1, updated[index] - 1);
            return updated;
        });
    }

    if (cartItems.length === 0) {
        return <h2 className="text-center text-5xl font-semibold p-25 text-red-900 font-serif"> Your cart is empty</h2>;
    }

    return (
        <div className='flex p-10 font-serif'>
            <div className='flex'>
                <div className="p-10 md:w-[700px] h-auto shadow-md ">
                    <h2 className="text-3xl font-bold mb-6 text-center text-red-900">Your Cart Added Items</h2>
                    <div className="space-y-5">
                        {cartItems.map((item, index) => (
                            <div
                                key={index}
                                className="p-4 rounded-lg flex items-center space-x-15 border-1 border-gray-300 relative">
                                <img src={item.productImage} alt={item.productName} className="w-[150px] h-[150px] object-cover" />
                                <div>
                                    <p className="font-semibold text-red-900 text-xl text-center">{item.productName}</p>
                                    <p className="text-gray-600 font-medium text-center">₹{item.price}</p>
                                    <p className="text-gray-600 font-medium text-center">{item.Quantity}</p>
                                    <p className="text-black font-medium text-center mt-3"><span className='text-red-900'>Total Price:</span> ₹{quantities[index] * item.price}</p>

                                </div>

                                <div>
                                    <i class="fa-solid fa-xmark text-xl text-red-900 absolute top-3 right-5 cursor-pointer"></i>
                                    <div className='flex space-x-5 items-center p-[4px] rounded-[6px] shadow-md absolute bottom-6 right-4'>
                                        <i class="fa-solid fa-minus text-xl cursor-pointer text-red-900" onClick={() => decreaseCountItems(index)} ></i>
                                        <div className='text-xl font-bold'>{quantities[index]}</div>
                                        <i class="fa-solid fa-plus text-xl cursor-pointer text-red-900" onClick={() => increaseCountItems(index)} ></i>
                                    </div>
                                </div>

                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className='flex justify-center md:w-[700px] h-auto relative'>

                <div className='md:w-[500px] mt-20 md:h-[400px] shadow-2xl sticky top-50'>
                    <p className='text-center text-2xl text-red-900 font-semibold'>Price Details</p>
                    <div className='mt-10 space-y-3 text-red-900 p-6'>
                        <div className='border-b-1 space-y-2 shadow-xl'>
                            <p>Total MRP <span className='float-right text-black'>₹{0}</span></p>
                            <p>Discount on MRP <span className='float-right text-black'>₹{0}</span></p>
                            <p>Coupon Discount <span className='float-right text-black'>₹{0}</span></p>
                            <p className='mb-2'>Platform Fee <span className='float-right text-black'>₹{0}</span></p>
                        </div>
                        <p className='text-red-950 text-xl font-semibold'>Total Amount <span className='float-right text-black'>₹{0}</span></p>
                        <button className='p-1.5 w-full bg-red-900 hover:bg-red-800 text-white text-xl cursor-pointer mt-2 rounded-[4px]'>PLACE ORDER</button>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default CartPage;


