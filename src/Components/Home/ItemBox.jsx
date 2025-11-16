
function ItemBox({image, name, productImage}) {
    return (
        <div className='relative shadow-xl'>
            <img
                className='md:w-[40vw] md:h-[40vh]'
                src={image} alt="" />

            <div className='flex absolute bottom-1 space-x-3 p-2 items-center justify-center'>
                <div className='w-[50px] h-[50px] bg-white flex items-center justify-center'>
                    <img className='w-[30px] h-[30px] text-red-900'
                        src={productImage} alt="" />
                </div>
                <p className='text-white font-bold'>{name}</p>
            </div>
        </div>
    )
}

export default ItemBox
