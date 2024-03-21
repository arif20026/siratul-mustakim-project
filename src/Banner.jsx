import img1 from '../src/assets/img1.png'
import img2 from '../src/assets/img2.png'
const Banner = () => {
    return (
        <div style={{ backgroundImage: "url('https://i.ibb.co/sQpbNMF/banner.png')" }} className="bg-cover ">
            <div className="navbar ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li className="text-[#85682b]"><a>Home</a></li>
                      
                      <li className="text-black"><a> About Us </a></li>
                      <li className="text-black"><a>Projects </a></li>
                      <li className="text-black"><a> Membership </a></li>
                      <li className="text-black"><a> Events </a></li>
                      <li className="text-black"><a> News </a></li>
                      <li className="text-black"><a> Contact </a></li>
                        </ul>
                    </div>

                    <div className='flex px-16'>
                        <img src={img1} alt="" />
                        <img src={img2} alt="" />
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li className="text-[#FFD67E]"><a>Home</a></li>
                      
                        <li className="text-[#FFFFFF]"><a> About Us </a></li>
                        <li className="text-[#FFFFFF]"><a>Projects </a></li>
                        <li className="text-[#FFFFFF]"><a> Membership </a></li>
                        <li className="text-[#FFFFFF]"><a> Events </a></li>
                        <li className="text-[#FFFFFF]"><a> News </a></li>
                        <li className="text-[#FFFFFF]"><a> Contact </a></li>
                    </ul>
                </div>
              
            </div>

            <div className="flex flex-col lg:flex-row justify-between  px-16 items-center ">
                <div>
                    <div className="space-y-5">
                        <h3 className="text-4xl text-[#FFFFFF]">From Heart to Hand </h3>
                        <h3 className="text-xl text-[#FFFFFF]">Creating Impact One Step at a Time </h3>
                        <button className="bg-[#F9C148] text-[#9D7010] rounded-3xl w-[161px] h-[40px]">Read More</button>
                    </div>
                </div>
                <div className="card w-96 px-4 bg-base-100 shadow-sm relative translate-y-24">
                    <div className="card-body">
                        <h2 className="card-title">DONATE NOW</h2>
                        <label htmlFor="Select Project">
                            Select Project</label>
                        <select name="selectedProject" id="projectSelect" className="rounded-lg border border-[#E7E7E7]">

                            <option value="foodDonation">Food Donation</option>
                            <option value="donationForFlood">Donation for Flood</option>
                        </select>
                        <label>Phone/Email</label>
                        <input type="text" className="border border-[#E7E7E7] rounded-lg" placeholder="+88 01X XXX XXXX" />
                        <label htmlFor="donationAmount">Donation Amount</label>
                        <input type="text" placeholder="10000Tk" />

                        <button className="btn  bg-[#F9C148] text-[#9D7010] rounded-3xl">DONATE NOW</button>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Banner;