import img1 from './assets/img1.png'

import rec1 from './assets/Rectangle 1.png'
import rec2 from './assets/Rectangle 2.png'
import rec3  from './assets/Rectangle 3.png'
import rec4 from './assets/Rectangle 4.png'
import rec5 from './assets/Rectangle 5.png'
import rec6 from './assets/Rectangle 6.png'
const About = () => {
    return (
        <div className="hero min-h-screen bg-[url('https://i.ibb.co/NZ0TCGW/image-3.png')] bg-right bg-contain bg-no-repeat pt-40 pb-80">
            <div className="hero-content flex-col lg:flex-row gap-20">
                <div className='grid grid-cols-3 gap-2  '>
                    <div className='space-y-2 '>
                        <img src={rec1} alt=""  />

                        <img src={rec3} alt="" />
                    </div>
                    <div className='space-y-2 relative translate-y-10'>
                        <img src={rec2} alt="" />

                        <img src={rec4} alt="" />
                    </div>
                    <div className='space-y-2 -translate-y-10' >
                        <img src={rec5} alt="" />
                        <img src={rec6} alt="" />
                    </div>

                </div>
                <div className="w-1/2  ">
                    <div className='flex items-center gap-4  '>
                        <img src={img1} alt="" className=' h-[36px] w-[26px]' />
                        <h1 className="text-3xl font-bold">About Us</h1>
                    </div>
                    <p className="py-6 ">Welcome to Siratul Mustaqim Foundation, a voluntary, non-profitable, non-political, non-government, and charitable organization dedicated to serving humanity in accordance with Islamic principles. Established on June 2, 2023, our foundation aims to uplift communities, empower the underprivileged, and spread the message of peace and harmony. At Siratul Mustaqim, we believe in the power of education, compassion, and community support to create a better world for all.</p>
                    <button className="btn bg-[#F9C148] rounded-3xl">Read More</button>
                </div>
            </div>
        </div>
    );
};

export default About;