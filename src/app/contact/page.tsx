import React from 'react'
import Button from '../_components/button'
import location from '../assets/svg/location.svg'
import mail from '../assets/svg/email.svg'
import phone from '../assets/svg/phone.svg'

function page() {
    return (
        <div>
            <div>
                <div className="hero sm:min-h-[660px] min-h-[620px] relative flex flex-col items-center justify-center text-center">
                    <h1 className="heading-secondary">Get in Touch</h1>
                    <p className='text-[#FFFFFF] sm:text-[32px] text-[16px] leading-[42px] font-thin sm:mt-4'>
                        We're Here to Help Secure Your Business
                    </p>
                </div>
                <div className='bg-black sm:py-[140px] py-[60px] px-6 sm:px-[64px] flex flex-col md:flex-row items-center sm:min-h-screen'>
                    {/* <div className="w-full md:w-[617px] h-[400px] md:h-[660px] mb-8 md:mb-0">
                        <iframe
                            title="Google Map"
                            width="100%"
                            height="100%"
                            frameBorder="0"
                            style={{ border: 0, borderRadius: '32px' }}
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.086730238841!2d-122.08424968531885!3d37.422065779825154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb5c5b34baf57%3A0xa778c115ad6b3456!2sGoogleplex!5e0!3m2!1sen!2sus!4v1605127332929!5m2!1sen!2sus"
                            allowFullScreen
                            aria-hidden="false"
                        ></iframe>
                    </div> */}
                    <div className='w-full sm:h-[580px] rounded-[32px] shadow bg-[#232323] p-[24px] md:p-[48px]'>
                        <h2 className='heading text-[24px] md:text-[38px] text-[#ffff]'>Contact us</h2>
                        <div className='mt-[20px] md:mt-[42px]'>
                            <div className='flex flex-col md:flex-row gap-4 md:gap-8 items-center justify-start'>
                                <input className='py-[14px] md:py-[20px] px-[15px] w-full text-[#ffff] bg-[#393939] rounded-[12px] placeholder:text-[#A6A6A6] focus:outline-none' placeholder='Name' type="text" />
                                <input className='py-[14px] md:py-[20px] px-[15px] w-full text-[#ffff] bg-[#393939] rounded-[12px] placeholder:text-[#A6A6A6] focus:outline-none' placeholder='Email' type="text" />
                            </div>
                            <div>
                                <textarea placeholder='Your Message Here' className='py-[14px] md:py-[20px] px-[15px] text-[#ffff] bg-[#393939] rounded-[12px] placeholder:text-[#A6A6A6] focus:outline-none w-full h-[160px] md:h-[200px] mt-[16px] md:mt-[24px]' />
                                <Button className='mt-6 md:mt-8 sm:w-auto w-full' text='Send' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='testimonials relative min-h-[638px]'>
                <div className="absolute inset-0 bg-black opacity-70 z-0"></div>
                <div className='flex flex-col lg:flex-row items-center justify-center gap-6 px-[24px] md:px-[80px] lg:px-[120px] py-[80px] md:py-[140px] z-10 relative'>
                    <div
                        className='py-[30px] pr-[30px] lg:pr-[90px] pl-[22px] w-full lg:w-[420px] rounded-[16px] shadow-lg text-[#ffff] mb-8 lg:mb-0'
                        style={{
                            backgroundColor: 'rgba(255, 255, 255, 0.1)',
                            backdropFilter: 'blur(10px)',
                        }}
                    >
                        <img src={location.src} alt="" />
                        <h2 className='text-[20px] lg:text-[24px] my-[20px] lg:my-[28px]'>Office address</h2>
                        <p>Lorem ipsum dolor sit amet, ipsum ut consectetur acursus voult</p>
                    </div>
                    <div
                        className='py-[30px] pr-[30px] lg:pr-[90px] pl-[22px] w-full lg:w-[420px] rounded-[16px] shadow-lg text-[#ffff] mb-8 lg:mb-0'
                        style={{
                            backgroundColor: 'rgba(255, 255, 255, 0.1)',
                            backdropFilter: 'blur(10px)',
                        }}
                    >
                        <img src={mail.src} alt="" />
                        <h2 className='text-[20px] lg:text-[24px] my-[20px] lg:my-[28px]'>Email us</h2>
                        <p>Support@threatunknow.com<br />info@threatunknow.com</p>
                    </div>
                    <div
                        className='py-[30px] pr-[30px] lg:pr-[90px] pl-[22px] w-full lg:w-[420px] rounded-[16px] shadow-lg text-[#ffff]'
                        style={{
                            backgroundColor: 'rgba(255, 255, 255, 0.1)',
                            backdropFilter: 'blur(10px)',
                        }}
                    >
                        <img src={phone.src} alt="" />
                        <h2 className='text-[20px] lg:text-[24px] my-[20px] lg:my-[28px]'>Call us</h2>
                        <p>(+91) 9999-999 <br />
                            (+91) 8888-999</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default page
