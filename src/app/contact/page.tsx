import React from 'react'
import Button from '../_components/button'
import epss from '../assets/svg/Sercices1.svg'
import location from '../assets/svg/location.svg'
import mail from '../assets/svg/email.svg'
import phone from '../assets/svg/phone.svg'

function page() {
    return (
        <div>
            <div className="hero min-h-[660px] relative | flex flex-col items-center justify-center text-center">
                <h1 className="heading-secondary">Get in Touch</h1>
                <p className='text-[#FFFFFF] text-[32px] leading-[42px] font-thin | mt-4'>
                    We're Here to Help Secure Your Business
                </p>
            </div>
            <div className='bg-black py-[140px] px-[64px] flex relative items-center'>
                <div style={{ width: '617px', height: '660px' }}>
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
                </div>
                <div className='w-[784px] absolute h-[580px] rounded-[32px] shadow bg-[#232323] ml-[520px] p-[48px]'>
                    <h2 className='heading text-[38px] text-[#ffff]'>Contact us</h2>
                    <div className='mt-[42px]'>
                        <div className='flex gap-8 items-center justify-start'>
                            <input className='py-[20px] px-[15px] text-[#ffff] bg-[#393939] rounded-[12px] placeholder:text-[#A6A6A6] focus:outline-none' placeholder='Name' type="text" />
                            <input className='py-[20px] px-[15px] text-[#ffff] bg-[#393939] rounded-[12px] placeholder:text-[#A6A6A6] focus:outline-none' placeholder='email' type="text" />
                        </div>
                        <div>
                            <textarea placeholder='Your Message Here' className='py-[20px] px-[15px] text-[#ffff] bg-[#393939] rounded-[12px] placeholder:text-[#A6A6A6] focus:outline-none w-full h-[200px] mt-[24px]' />
                            <Button className='mt-8' text='Send' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='testimonials relative min-h-[638px]'>
                <div className="absolute inset-0 bg-black opacity-70 z-0"></div> {/* Overlay */}
                <div className='flex items-center justify-center gap-6 px-[120px] py-[140px] z-10 relative'>
                    <div
                        className='py-[30px] pr-[90px] pl-[22px] w-[420px] rounded-[16px] shadow-lg text-[#ffff]'
                        style={{
                            backgroundColor: 'rgba(255, 255, 255, 0.1)',
                            backdropFilter: 'blur(10px)',
                        }}
                    >
                        <img src={location.src} alt="" />
                        <h2 className='text-[24px] my-[28px]'>Office address</h2>
                        <p>Lorem ipsum dolor sit amet, ispum
                            ut consectetur acursus voult</p>
                    </div>
                    <div
                        className='py-[30px] pr-[90px] pl-[22px] w-[420px] rounded-[16px] shadow-lg text-[#ffff]'
                        style={{
                            backgroundColor: 'rgba(255, 255, 255, 0.1)',
                            backdropFilter: 'blur(10px)',
                        }}
                    >
                        <img src={mail.src} alt="" />
                        <h2 className='text-[24px] my-[28px]'>Email us</h2>
                        <p>Support@threatunknow.com
                            info@threatunknow.com</p>
                    </div>
                    <div
                        className='py-[30px] pr-[90px] pl-[22px] w-[420px] rounded-[16px] shadow-lg text-[#ffff]'
                        style={{
                            backgroundColor: 'rgba(255, 255, 255, 0.1)',
                            backdropFilter: 'blur(10px)',
                        }}
                    >
                        <img src={phone.src} alt="" />
                        <h2 className='text-[24px] my-[28px]'>Call us</h2>
                        <p>(+91) 9999-999 <br />
                            (+91) 8888-999</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default page