import lotus from '../../assets/lotus.png'
import BodyImage_1 from '../../assets/BodyImage_1.jpg'
import MakeupBrush from '../../assets/MakeupBrush.png'
import HairComb from '../../assets/HairComb.png'
import NailCare from '../../assets/NailCare.png'
import Cosmetology from '../../assets/Cosmetology.png'
import { useState } from 'react'
import ItemBox from './ItemBox'
import Product from './Product'


function Home() {

    const [activeBox, setActiveBox] = useState(null);
    const toggleBox = (boxName) => {
      setActiveBox(activeBox === boxName ? null : boxName);
    };


    
  return (
    <div className='w-full'>

      {/* title name */}
      <div className='md:w-full h-auto    '>
        <div className='flex flex-wrap justify-center relative'>
          <img src={lotus} alt="" className='md:w-[32vw] md:h-[60vh] opacity-25' />
          <p style={{fontFamily: "Great Vibes"}} className='text-center text-red-900 text-9xl absolute md:top-30 top-20 font-bold'>Glam Books</p>
        </div>
      </div>

      {/* body image */}
      <div>
        <img src={BodyImage_1} alt="" className='w-full md:h-[90vh]' />
      </div>

      {/* Elegance */}
      <div className='w-full flex justify-center md:my-20 my-10 text-center'>
        <div className='w-[80vw]'>
          <p className='text-6xl italic text-red-900 font-semibold font-serif text-center'>Elegance comes from being as beautiful inside as outside</p>
          <p className='text-[20px] font-semibold my-5 text-gray-600 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores repudiandae
            itaque architecto at, sint praesentium. Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, blanditiis?</p>
        </div>
      </div>

      {/* skin care boxes */}
      <div className='md:flex space-x-3 p-5 space-y-6'>
  
        <ItemBox  
            name="Make Up" 
            productImage={MakeupBrush}
            image="https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmFpbCUyMGNhcmV8ZW58MHx8MHx8fDA%3D"
        />
        <ItemBox  
            name="Hair Style" 
            productImage={HairComb}
            image="https://images.unsplash.com/photo-1583743599150-3b6048ecf084?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGhhaXIlMjBzdHlsZXxlbnwwfHwwfHx8MA%3D%3D"
        />
        <ItemBox  
            name="Nail Care" 
            productImage={NailCare}
            image="https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmFpbCUyMGNhcmV8ZW58MHx8MHx8fDA%3D"
        />
        <ItemBox  
            name="Cosmetolog" 
            productImage={Cosmetology}
            image="https://plus.unsplash.com/premium_photo-1661573269488-01fdb0bea3aa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29zbWV0b2xvZ3l8ZW58MHx8MHx8fDA%3D"
        />    
        
      </div>

      {/* Treatments and Prices */}
      <div className='w-full md:flex flex-wrap md:my-15'>
          <div className='md:w-1/2 h-auto flex justify-center shadow-lg'>
            <img className='shadow-lg'
              src="https://images.unsplash.com/photo-1571686120863-e4f954a93fe3?q=80&w=469&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          </div>

           <div className='md:w-1/2 flex flex-wrap justify-center items-center mb-10'>
            <div className='justify-center items-center'>
              <p className='text-red-900 text-5xl font-bold font-serif md:p-4 p-7'>SPA Procedures</p>
              <p className='font-serif text-gray-700'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur!</p>
              <div className=''>
                <div className='space-y-5 font-serif my-10'>
                  <p>Nail care.......................................................from <span className='text-red-900'> <i class="fa-solid fa-indian-rupee-sign"></i>  125</span></p>
                  <p>Hair Styling....................................................from <span className='text-red-900'> <i class="fa-solid fa-indian-rupee-sign"></i>  130</span></p>
                  <p>Make up.........................................................from <span className='text-red-900'> <i class="fa-solid fa-indian-rupee-sign"></i>  150</span></p>
                  <p>Cosmetology.....................................................from <span className='text-red-900'> <i class="fa-solid fa-indian-rupee-sign"></i>  130</span></p>
                  <p>SPA procedures..................................................from <span className='text-red-900'> <i class="fa-solid fa-indian-rupee-sign"></i>  180</span></p>
                  {activeBox==='skin' && (
                    <>
                      <p>Eyebrow................................................................from <span className='text-red-900'><i className="fa-solid fa-indian-rupee-sign"></i> 30</span></p>
                      <p>Forehead and Upperlip.........................................from <span className='text-red-900'><i className="fa-solid fa-indian-rupee-sign"></i> 80</span></p>
                    </>
                  )}

                  <span
                    onClick={()=>toggleBox('skin')}
                    className='text-red-900 underline cursor-pointer'>
                    {activeBox==='skin' ? 'View less' : 'View more'}
                  </span>
                </div>
              </div>
            </div>
          </div>

      </div>

      {/* Testimonials */}
      <div className='w-full py-6 md:flex justify-center'>
        <div className='w-full md:h-[45vh] bg-red-100 shadow-xl'>
          <p className='text-red-900 text-5xl font-semibold text-center font-serif py-5'>Testimonials</p>
          <p className='text-center text-gray-500 font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, 
            doloremque. Deleniti ipsam nostrum similique rerum autem voluptatem numquam dicta nisi.
          </p>

          <div className='flex justify-center py-10'>
            <div className='w-1/2 h-auto bg-white space-y-3 p-7 shadow-lg'>
              <div className='ml-20'>
                <img className='w-[70px] h-[70px] rounded-full'
                  src="https://media.istockphoto.com/id/1285358279/photo/portrait-of-gorgeous-young-woman-joy-and-happiness-stock-photo.webp?a=1&b=1&s=612x612&w=0&k=20&c=WAyN12ktQAAo5cxpiZV7WykiAyM5pCnumGA5uZsUKmQ=" alt="" />
              </div>

              <div className='ml-2 flex space-x-5 justify-between'>
                  <div className='w-[250px]'>
                    <img className='w-[100px] h-[100px] rounded-full'
                      src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww" alt="" />
                  </div>
                  <div className='md:w-[40vw]'>
                    <p className='text-xl text-red-900 font-semibold font-serif'>Caroline Forbe <span className='text-gray-600 font-bold ml-4 text-[15px]'>Happy Client</span></p>
                    <p className='font-serif'> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa mollitia adipisci, cumque error eveniet ad. Assumenda perferendis unde voluptatem laudantium?</p>
                  </div>
              </div>

              <div className='ml-20'>
                <img className='w-[70px] h-[70px] rounded-full'
                  src="https://media.istockphoto.com/id/1317804578/photo/one-businesswoman-headshot-smiling-at-the-camera.webp?a=1&b=1&s=612x612&w=0&k=20&c=0ez7MLSYsOlKDghpVAUDMVf_gT5B_DfKmRNKqElOLUA=" alt="" />
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* shop */}
      <div className='md:mt-60'>
        <p className='text-red-900 text-6xl font-bold italic font-serif text-center p-4'>Our Shop</p>
        <p className=' text-gray-700 font-semibold text-center text-[20px]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore!</p>
        
        <div className='md:flex md:my-10 justify-center p-7 space-x-4 space-y-4 row-end-2'>
          <Product 
            productName="Face Toner"
            productImage="https://imgs.search.brave.com/5eqrAuFy8aW4UTL-ZZ31kw0OiZz2WC-RTfyKNJCBD3U/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzFVMzdFV1c2akwu/anBn"
            price="200"
            Quantity="150ml"
          />
          <Product 
            productName="Night Cream"
            productImage="https://imgs.search.brave.com/IechnQWwXGCYDjy0KAPfKWhkwi6_TExmoY4t3ZLo3D8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NjFTNW9UbnVjMkwu/anBn"
            price="300"
            Quantity="50ml"
          />
          <Product 
            productName="Makeup Base"
            productImage="https://imgs.search.brave.com/tZChc63eQ8MAcWramMFAMMmSSs_AsGaphZGXiYLGfek/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9odHRw/Mi5tbHN0YXRpYy5j/b20vRF9RX05QXzJY/XzY4ODQ2OS1NTEI4/MjI5MjgwOTc2Ml8w/MjIwMjUtRS1iYXNl/LWxpcXVpZGEtc3Vl/bGVuLW1ha2V1cC1i/LWJlYXV0eS1mb3Nj/by0zNS1tbC53ZWJw"
            price="250"
            Quantity="20gm"
          />
          <Product 
            productName="Makeup Brush"
            productImage="https://imgs.search.brave.com/QPixC7-tEhNxM5Bpcq5CPRO3A4c3k5qSdou4dhH9B04/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtbmEuc3NsLWlt/YWdlcy1hbWF6b24u/Y29tL2ltYWdlcy9J/LzYxVStuWFNtLUJM/LmpwZw"
            price="200"
            
          />
        </div>

        <div className='md:flex md:my-10 justify-center p-7 space-x-2'>
          <Product 
            productName="Facewash"
            productImage="https://imgs.search.brave.com/23LdNGxIjf1sOJmWSZmsdGyIaX_yGUP548XeSbk4Mxk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/MzFyOVJCbXZPRUwu/anBn"
            price="120"
            Quantity="150ml"
          />
          <Product 
            productName="Face Powder"
            productImage="https://imgs.search.brave.com/bxA_dVaqnBuwd-Wb_J4r1elmchDeTTuCK3QWvKxN224/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvOTY5/NTI2MzYvcGhvdG8v/Ymx1c2gtbWFrZXVw/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz1aUGRmS2tCZmZj/LVpmOGtVTDdaYWdC/WVBISk1veFFNZEdz/aWpZQWgzLThFPQ"
            price="180"
            Quantity="50gm"
          />
          <Product 
            productName="Gel Polish"
            productImage="https://imgs.search.brave.com/HSsJ7eRezqO1mhXOt2XhK7hmWyEPDWqGgJbg5tBb-vg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Ymlvc2Vhd2VlZGdl/bC5jb20vY2RuL3No/b3AvcHJvZHVjdHMv/VXBncmFkZWRCYXNl/LTFHZWxQb2xpc2gu/anBnP3Y9MTY3MTU2/MDc4MCZ3aWR0aD0z/MDAw"
            price="275"
            Quantity="100ml"
          />
          <Product 
            productName="Face Serum"
            productImage="https://imgs.search.brave.com/hcMZrDxALsYeZzsBnk1ciXLqxxR_a-5LTtMP482Z50A/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuY3RmYXNzZXRz/Lm5ldC9iY2pyMzB2/eGg2dGQvNDVuTzRO/ZmNsSGxkN2Y2cXVG/cXg5Ry84MzViYjZh/ZmY0YzMyZDQ1NmUy/ODlhNGU1Mzg0MTQ0/Yy82ODA2NjMxX0Nh/cm91c2VsXzE"
            price="460"
            Quantity="150ml"
          />       
        </div>

      </div>

    </div>
  )
}
export default Home
