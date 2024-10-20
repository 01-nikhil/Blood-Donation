import React from 'react'
import {Link} from 'react-router-dom'
import { Hidden, IconButton } from '@mui/material';
import './App.css';
export default function Homepage() {
  return (
    <div className='bg-body-image bg-no-repeat bg-center h-screen bg-cover'>
  {/* <Fingerprint>
    <IconButton aria-label="fingerprint" color="secondary">
      <Fingerprint />
    </IconButton>
  </Fingerprint> */}
        {/* nav bar */}
        <nav className="text-black flex items-center  py-2 shadow-2xl opacity-100">
                {/* <className="rounded-3xl" > */}
                <img src="https://t4.ftcdn.net/jpg/04/42/37/27/360_F_442372738_Robd0QmrKUOdQkZW4TQVJiBEd5krZcxN.jpg" className="w-20 h-20 rounded-full"></img>
                <h1 className="px-1 font-dancing text-2xl font-bold text-white">Donate Now!</h1>
                <ul className="flex-1 text-center pl-15">
                        <li className="px-10 list-none inline-block font-semibold hover:underline hover:underline-offset-2"><a href="#" className="px-2">Home</a></li>
                        <li className="px-10 list-none inline-block font-semibold hover:underline hover:underline-offset-2"><a href="#" className="px-2">About</a></li>
                        <li className="px-10 list-none inline-block font-semibold hover:underline hover:underline-offset-2"><a href="#" className="px-2">Link</a></li>
                        <li className="px-10 list-none inline-block font-semibold  hover:underline hover:underline-offset-2"><a href="#" className="px-2">Contact</a></li>
                </ul>
                <div className='w-[20%] flex space-x-2 px-3 items-center justify-center'>
                    <Link to='/login'>
                <button className='log h-11'>Login</button>
                    </Link>
                    <Link to='/signup'>
                <button className="reg h-11">Signup</button>
                    </Link>

                </div>
        </nav>
    <section className=''>
        <div className='container w-100 my-10 flex items-center justify-center h-40 bg-rose-400 shadow-2xl'>

        <div className='w-[80%] h-20  grid grid-cols-5 items-center justify-center ml-20 text-white font-'>
            <div className='text-center    w-40'>

            <div className=' hover:rotate-45 transition-transform duration-300 w-20 h-20 ml-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-slate-300 hover:cursor-pointer '>
                <a href='#' className=' '>
                    <img src="https://www.lifeblood.com.au/sites/default/files/2021-12/glass.svg" className='w-10'></img>
                </a>
            </div >

            <p>Test</p>
            </div>
            <div className='text-center    w-40'>

            <div className='hover:rotate-45 transition-transform duration-300  w-20 h-20 ml-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-slate-300 hover:cursor-pointer '>
                <a href='#' className=' '>
                    <img src="https://www.lifeblood.com.au/sites/default/files/2021-12/blooddrop.svg" className='w-10'></img>
                </a>
            </div >

            <p>Blood group</p>
            </div>
            <div className='text-center    w-40'>

            <div className='hover:rotate-45 transition-transform duration-300  w-20 h-20 ml-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-slate-300 hover:cursor-pointer '>
                <a href='#' className=' '>
                    <img src="https://www.lifeblood.com.au/sites/default/files/2021-12/medicine.svg" className='w-10'></img>
                </a>
            </div >

            <p>Medicines</p>
            </div>
            <div className='text-center    w-40'>

            <div className='hover:rotate-45 transition-transform duration-300 w-20 h-20 ml-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-slate-300 hover:cursor-pointer '>
                <a href='#' className=' '>
                    <img src="https://www.lifeblood.com.au/sites/default/files/2021-12/bloodbag.svg" className='w-10'></img>
                </a>
            </div >

            <p>Need to donate?</p>
            </div>
            <div className='text-center    w-40'>

            <div className='  w-20 h-20 ml-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-slate-300 hover:cursor-pointer hover:rotate-45 transition-transform duration-300'>
                <a href='#' className=' '>
                    <img src="https://www.lifeblood.com.au/sites/default/files/2021-12/pointer.svg" className='w-10'></img>
                </a>
            </div >

            <p>Help here</p>
            </div>
        </div>
        </div>
    </section>

        <section className='opacity-90'>
        <div class="container my-5 bg-div-color">
            <div class="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-2xl space-y-3">
                    <div class="col-lg-7 p-3 p-lg-5 pt-lg-3 space-y-9">
                            <h1 class="display-4 fw-bold lh-1 text-body-emphasis">"Find a Blood Drive<br></br><span className='px-4'>Near You"</span> </h1>
                                <p class="lead">
                                Blood donation is a simple yet powerful way to make a difference in the lives of others. 
                             Your generosity not only brings hope to those facing medical challenges but also strengthens the community as a whole. Every drop counts—join us in giving the gift of life by becoming a blood donor today.</p>
                                {/* <div class="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3 mt-2">
                                    <button type="button" class="btn btn-primary btn-lg px-4 me-md-2 "></button>
                                    <button type="button" class="btn btn-outline-secondary btn-lg px-4">Default</button>
                                </div> */}
                    </div>
                    <div class="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
                        <img class="rounded-lg-3" src="world-blood-donor-m.jpg" alt="" width="720"/>
                    </div>
            </div>
        </div>
        </section>

        <section className='opacity-90'>
            <div className='container'>
                <div className=' w-[100%] h-[34rem] flex flex-row justify-between text-center  rounded-lg shadow-2xl'>
                    <div className=' w-[25%] h-64 my-5 mx-5'>
                            <img src="https://stanfordbloodcenter.org/wp-content/uploads/2020/06/Blood-facts_10-illustration-graphics__canteen.png" className='h-60 rounded-2xl' ></img>
                            <p className='font-moderustic mt-5 text-gray-600 italic'>See if you are eligible to donate blood, plasma or platelets today, or find answers to 
                                frequently asked questions.</p>
                              <a href='#'> < label className='italic text-blue-600 pt-2 flex items-center justify-center gap-2'>Click now <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16"className='pt-1 '>
  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" className='pt-2'/>
</svg> </label> </a>
                                
                            
                    </div>

                    <div className=' w-[25%] h-64 my-5'>
                    <img src="https://hicare.in/blog/wp-content/uploads/2023/01/All-you-need-to-know-about-plasma-donation-2048.1365.jpg" className='h-100 w-100 rounded-2xl' ></img>
                            <p className='font-moderustic mt-5 text-gray-600 italic'>See if you are eligible to donate blood, plasma or platelets today, or find answers to 
                                frequently asked questions.</p>
                                <a href='#'> < label className='italic text-blue-600 pt-2 flex items-center justify-center gap-2'>Click now <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16" className='pt-1 '>
  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" className='pt-2'/>
</svg> </label> </a>
                    </div>

                    <div className=' w-[25%] h-64 my-5 mx-10'>
                    <img src="https://newsinhealth.nih.gov/sites/newsinhealth/files/2023/August/aug-2023-capsule2-blood-donors-showing-bandage-with-heart-it.jpg" className='h-100 w-100 rounded-2xl' ></img>
                            <p className='font-moderustic mt-5 text-gray-600 italic'>See if you are eligible to donate blood, plasma or platelets today, or find answers to 
                                frequently asked questions.</p>

                                <a href='#'> < label className='italic text-blue-600 pt-2 flex items-center justify-center gap-2'>Click now 
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16" className='pt-1 '>
  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
</svg> </label> </a>
                    </div>
                </div>
            </div>
        </section>
        

    <section className=''>
        <div className='container mt-3 w-full h-60 bg-rose-500 text-white border-2 border-black rounded-ee-full '>
            <div className='w-100 h-[50%] grid grid-cols-2 justify-center items-center'>
                <div className='pl-40 h-full w-[100%]  flex items-center'>
                    <h3 className='text-2xl font-dancing font-bold'>Together we're LifeBlood</h3>

                </div>
                <div className='w-[100%] h-full flex flex-col-2  items-center justify-center space-x-6'>
                    <h4 className='text-2xl font-dancing font-bold'>Call now! 8878 6538</h4>
                    <button className='bg-white text-red-500 hover:bg-violet-600 hover:text-black'> Book now</button>
                </div>
            </div>
            <hr className='w-full border-t-4'></hr>
            <div className='w-100 h-45  grid grid-cols-2 justify-center items-center'>
                <div className='pl-40 mt-5 h-full w-[100%]  flex items-center space-x-8'>
                <a href='#' aria-label="Facebook">
                    <i className="fab fa-facebook-f fa-lg"></i>
                </a>

                <a href='#' aria-label="Twitter">
                    <i className="fab fa-twitter fa-lg"></i>
                </a>
                <a href='#' aria-label="Instagram">
                    <i className="fab fa-instagram fa-lg"></i>
                </a>
                <a href='#' aria-label="LinkedIn">
                    <i className="fab fa-linkedin-in fa-lg"></i>
                </a>
                </div>

                <div className='mt-5 w-[100%] h-[50%] flex flex-col-2 items-center justify-center space-x-6 '>
                                    <ul className='flex space-x-6 underline font-dancing '>
                                        <li>News and stories</li>
                                        <li>Disclaimer</li>
                                        <li>Privacy policy</li>
                                        <li>Contact us</li>
                                    </ul>
                </div> 
            </div>
                <footer className='flex items-center justify-center space-x-6'>
                <p class="text-sm mb-4 md:mb-0" className='mt-3'>&copy; 2024 Your Company Name. All rights reserved.</p>
                </footer>
        </div>
    </section>

    </div>
  )
}
