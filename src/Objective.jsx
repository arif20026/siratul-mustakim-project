import img3 from './assets/img3.png'
import img4 from './assets/img4.png'
import img5 from './assets/img5.png'
import img1 from './assets/img1.png'
import obj1 from './assets/obj1.png'
import obj2 from './assets/obj2.png'
import obj3 from './assets/obj3.png'
import obj4 from './assets/obj4.png'
import { IoIosArrowDropleft } from "react-icons/io";
import { IoIosArrowDropright } from "react-icons/io";

import { FaRegCheckCircle } from "react-icons/fa";
import { CgPlayButtonO } from "react-icons/cg";

const Objective = () => {
    return (
        <div className='relative bg-[#002713]'>
            <div className=' flex -z-5'>
                <img src={img4} alt="" />
                <img src={img5} alt="" />
            </div>
            <div className='absolute z-10 -top-[190px]  left-[80px]  flex items-center justify-center'>
                <img src={img3} alt="" className='  ' />
                <div className='absolute z-15  top-[360px]  left-[2px] flex flex-col  lg:flex-row lg:gap-48'>
                    <div className="w-48 lg:w-[600px] bg-base-100   rounded-md translate-x-36">
                        <div className="card-body">
                            <div className='flex  '>
                                <img src={img1} alt="" className='h-[36px] w-[26px]' />
                                <h2 className="card-title">Siratul Mustaqim Complex</h2>
                            </div>
                            <p>Welcome to Siratul Mustaqim Foundation, a voluntary, non-profitable, non-political, non-government, and charitable organization dedicated to serving humanity in accordance with Islamic principles. Established on June 2, 2023...</p>
                            <div className="card-actions flex items-center">
                                <button className="btn rounded-full bg-[#F9C148] text-[#9D7010] ">Read More</button>
                                <CgPlayButtonO className='text-4xl text-[#F9C148] ' />
                                <p className='text-[#9D7010]'>TAKE A TOUR</p>

                            </div>
                        </div>

                    </div>
                    <div className='pt-16'>
                        <p className='text-[#FFFFFF] flex justify-center  gap-4 text-lg'> <FaRegCheckCircle className='text-[#F9C148] ' />Project related key details should be placed <br />  in this section</p>

                        <p className='text-[#FFFFFF] flex justify-center  gap-4 text-lg'> <FaRegCheckCircle className='text-[#F9C148] ' />Project related key details should be placed <br />  in this section</p>

                        <p className='text-[#FFFFFF] flex justify-center  gap-4 text-lg'> <FaRegCheckCircle className='text-[#F9C148] ' />Project related key details should be placed <br />  in this section</p>


                    </div>
                </div>
            </div>



            <div className=' absolute top-[480px] left-20'>

                <div className='flex items-center    text-white gap-3 mt-8'>
                    <img src={img1} alt="" className='h-[36px] w-[26px]' />
                    <h1 className='text-2xl'>Objectives of this Foundation</h1>


                </div>
                <p className='  text-white mt-4'>At Siratul Mustaqim Foundation we are committed to fulfilling the following <br /> objectives to make a positive impact.</p>

                <div>
                    <div className='flex flex-col  lg:flex-row gap4   lg:space-x-4 py-4 '>


                        <div className='w-[287px] mb-4'>
                            <img src={obj1} alt="" />
                            <p className='bg-[#F9C148] text-center font-bold h-10 pt-2'>Education and Research</p>
                        </div>
                        <div className='w-[287px] mb-4'>
                            <img src={obj2} alt="" />
                            <p className='bg-[#F9C148] text-center font-bold h-10 pt-2'>Halal Services</p>
                        </div>
                        <div className='w-[287px] mb-4'>
                            <img src={obj3} alt="" />
                            <p className='bg-[#F9C148] text-center font-bold h-10 pt-2'>Community Support</p>
                        </div>
                        <div className='w-[287px] mb-4'>
                            <img src={obj4} alt="" />
                            <p className='bg-[#F9C148] text-center font-bold h-10 pt-2'>Employment Opportunities</p>
                        </div>




                    </div>

                    
                </div>



            </div>

            <IoIosArrowDropleft className=' text-4xl text-[#F9C148]    absolute top-[750px] left-4  ' />
            <IoIosArrowDropright className=' text-4xl text-[#F9C148]  absolute  top-[750px] right-4 ' />



        </div>
    );
};

export default Objective;