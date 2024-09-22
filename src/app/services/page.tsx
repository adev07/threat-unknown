import React from 'react'
import youtube from '../assets/svg/youtube.svg';
import Nike from '../assets/svg/NIKE 1.svg';
import apple from '../assets/svg/apple.svg';
import bbc from '../assets/svg/bbc.svg';
import slack from '../assets/svg/slack.svg';
import zoom from '../assets/svg/zoom.svg';
import cloud from '../assets/svg/cloud.svg';
import epss from '../assets/svg/Sercices1.svg';
import nss from '../assets/svg/services2.svg';
import des from '../assets/svg/services3.svg';
import irf from '../assets/svg/services4.svg';
import Image from 'next/image';
import testimonial from '../assets/svg/testimonials.svg';

function page() {
    return (
        <div>
            <div className="hero sm:min-h-[660px] min-h-[620px] relative | flex flex-col items-center justify-center text-center">
                <h1 className="heading-secondary">Services oFFered</h1>
                <p className='text-[#FFFFFF] sm:text-[32px] text-[16px] leading-[32px] sm:leading-[42px] font-thin | mt-4'>
                    "Protecting Your Business in a Digital World"
                </p>
                <div className='px-4 sm:px-[64px] | w-full sm:max-w-[930px] absolute bottom-0 mb-[-80px] sm:mb-[-60px]'>
                    <div className='flex flex-col sm:flex-row items-center justify-center bg-[#232323] rounded-[10px] shadow py-6 sm:py-[38px]'>
                        <div className='sm:border-r sm:pr-[50px] mb-4 sm:mb-0'>
                            <h2 className='text-[20px] sm:text-[24px] text-[#FFFFFF]'>5Y</h2>
                            <h3 className='text-[14px] sm:text-[16px] text-[#FFFFFF]'>Experience</h3>
                        </div>
                        <div className='sm:px-[50px]'>
                            <h2 className='text-[20px] sm:text-[24px] text-[#FFFFFF]'>100+</h2>
                            <h3 className='text-[14px] sm:text-[16px] text-[#FFFFFF]'>Satisfied customers</h3>
                        </div>
                        <div className='sm:border-l sm:pl-[50px] mt-4 sm:mt-0'>
                            <h2 className='text-[20px] sm:text-[24px] text-[#FFFFFF]'>99%</h2>
                            <h3 className='text-[14px] sm:text-[16px] text-[#FFFFFF]'>Cybersecurity guarantee</h3>
                        </div>
                    </div>
                </div>
            </div>


            <div className='bg-[#000000] min-h-screen'>
                <div>
                    <div className='pt-[120px] sm:pt-[160px] px-6 sm:px-[64px] text-center'>
                        <p className='text-[#ffff] text-[18px] sm:text-[24px] font-normal'>
                            We are providing cybersecurity services to some of the World’s leading companies
                        </p>
                    </div>

                    <div className='flex flex-wrap items-center justify-center gap-8 sm:gap-[85px] mt-4 py-6 sm:px-0 px-6'>
                        <Image width={50} sm-width={60} src={youtube} alt="YouTube" />
                        <Image width={50} sm-width={60} src={Nike} alt="Nike" />
                        <Image width={50} sm-width={60} src={apple} alt="Apple" />
                        <Image width={50} sm-width={60} src={bbc} alt="BBC" />
                        <Image width={50} sm-width={60} src={slack} alt="Slack" />
                        <Image width={50} sm-width={60} src={zoom} alt="Zoom" />
                        <Image width={50} sm-width={60} src={cloud} alt="Cloud" />
                    </div>

                    <div className='mt-[30px] sm:mt-[70px] px-6 sm:px-[64px]'>
                        <h3 className='text-[#fff] text-justify sm:text-center text-[18px] sm:text-[24px] leading-[28px] sm:leading-[34px] font-thin'>
                            At <span className='text-[#FF0000]'>Treat Unknown</span>, we're dedicated to protecting businesses and individuals from the ever-evolving threats in the <br className='hidden sm:block' />
                            digital landscape. With [X years/months] of experience in the cybersecurity industry, we have honed our expertise <br className='hidden sm:block' />
                            to deliver innovative solutions that safeguard your digital assets and maintain your peace of mind.
                        </h3>
                    </div>
                </div>

                <div className='py-[60px] sm:py-[120px] px-6 sm:mx-[140px] text-center'>
                    <h3 className='heading-secondary'>Services</h3>

                    {/* First Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-[72px] mt-[52px]">
                        <div
                            className='flex flex-col items-center justify-center px-6 sm:px-[64px] py-[48px] text-[#ffff] rounded-[16px] shadow'
                            style={{
                                background: 'linear-gradient(96.79deg, #171717 -62.94%, #323335 -62.92%, rgba(90, 90, 90, 0) 54.42%, #171717 174.24%)',
                            }}
                        >
                            <Image width={45} height={45} src={epss} alt="Endpoint Security Solutions" />
                            <h2 className='text-[20px] sm:text-[24px] font-[600] leading-[30px] sm:leading-[33px] mt-4'>Endpoint Security Solutions</h2>
                            <p className='text-[14px] sm:text-[16px] text-[#ffff]/50 font-thin mt-6'>
                                Protect your devices and networks from malware, ransomware, and other cyber threats with our comprehensive endpoint security solutions. Safeguard sensitive data and ensure business continuity with real-time threat detection and response.
                            </p>
                        </div>

                        <div
                            className='flex flex-col items-center justify-center px-6 sm:px-[64px] py-[48px] text-[#ffff] rounded-[16px] shadow-lg'
                            style={{
                                background: 'linear-gradient(96.79deg, #171717 -62.94%, #323335 -62.92%, rgba(90, 90, 90, 0) 54.42%, #171717 174.24%)',
                            }}
                        >
                            <Image width={45} height={45} src={nss} alt="Network Security Solutions" />
                            <h2 className='text-[20px] sm:text-[24px] font-[600] leading-[30px] sm:leading-[33px] mt-4'>Network Security Solutions</h2>
                            <p className='text-[14px] sm:text-[16px] text-[#ffff]/50 font-thin mt-6'>
                                Secure your network infrastructure from unauthorized access and data breaches with our advanced network security solutions. Defend against evolving cyber threats and maintain network integrity with robust firewalls.
                            </p>
                        </div>
                    </div>

                    {/* Second Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-[72px] mt-[32px] sm:mt-[72px]">
                        <div
                            className='flex flex-col items-center justify-center px-6 sm:px-[64px] py-[48px] text-[#ffff] rounded-[16px] shadow-lg'
                            style={{
                                background: 'linear-gradient(96.79deg, #171717 -62.94%, #323335 -62.92%, rgba(90, 90, 90, 0) 54.42%, #171717 174.24%)',
                            }}
                        >
                            <Image width={45} height={45} src={des} alt="Data Encryption Services" />
                            <h2 className='text-[20px] sm:text-[24px] font-[600] leading-[30px] sm:leading-[33px] mt-4'>Data Encryption Services</h2>
                            <p className='text-[14px] sm:text-[16px] text-[#ffff]/50 font-thin mt-6'>
                                Encrypt sensitive data at rest and in transit to protect confidentiality and integrity. Our data encryption services provide end-to-end encryption solutions to safeguard your most valuable assets from unauthorized access and cyber attacks.
                            </p>
                        </div>

                        <div
                            className='flex flex-col items-center justify-center px-6 sm:px-[64px] py-[48px] text-[#ffff] rounded-[16px] shadow-lg'
                            style={{
                                background: 'linear-gradient(96.79deg, #171717 -62.94%, #323335 -62.92%, rgba(90, 90, 90, 0) 54.42%, #171717 174.24%)',
                            }}
                        >
                            <Image width={45} height={45} src={irf} alt="Incident Response and Forensics" />
                            <h2 className='text-[20px] sm:text-[24px] font-[600] leading-[30px] sm:leading-[33px] mt-4'>Incident Response and Forensics</h2>
                            <p className='text-[14px] sm:text-[16px] text-[#ffff]/50 font-thin mt-6'>
                                Rapidly detect, respond to, and recover from security incidents with our incident response and forensic services. Minimize the impact of breaches and maintain business continuity with our expert team of cybersecurity professionals.
                            </p>
                        </div>
                    </div>
                </div>


                <div className='testimonials relative min-h-[638px] sm:pb-0 pb-[60px]'>
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black opacity-70 z-0"></div>

                    {/* Heading */}
                    <h1 className='heading-secondary text-center pt-[60px] sm:pt-[120px] z-10 relative'>
                        Why choose us?
                    </h1>

                    {/* Testimonials Cards */}
                    <div className='flex flex-col sm:flex-row items-center justify-center gap-6 px-6 sm:px-[80px] lg:px-[120px] mt-8 z-10 relative'>
                        <div
                            className='py-[20px] px-6 sm:pr-[70px] sm:pl-[22px] rounded-[16px] shadow-lg text-[#ffff] text-center sm:text-left'
                            style={{
                                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                backdropFilter: 'blur(10px)',
                            }}
                        >
                            <img src={epss.src} alt="Icon" className='mx-auto sm:mx-0' />
                            <h2 className='text-[20px] sm:text-[24px] my-[20px] sm:my-[28px]'>Lorem</h2>
                            <p className='text-[14px] sm:text-[16px]'>Lorem ipsum dolor sit amet, ispum ut consectetur acursus voult</p>
                        </div>

                        <div
                            className='py-[20px] px-6 sm:pr-[70px] sm:pl-[22px] rounded-[16px] shadow-lg text-[#ffff] text-center sm:text-left'
                            style={{
                                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                backdropFilter: 'blur(10px)',
                            }}
                        >
                            <img src={epss.src} alt="Icon" className='mx-auto sm:mx-0' />
                            <h2 className='text-[20px] sm:text-[24px] my-[20px] sm:my-[28px]'>Lorem</h2>
                            <p className='text-[14px] sm:text-[16px]'>Lorem ipsum dolor sit amet, ispum ut consectetur acursus voult</p>
                        </div>

                        <div
                            className='py-[20px] px-6 sm:pr-[70px] sm:pl-[22px] rounded-[16px] shadow-lg text-[#ffff] text-center sm:text-left'
                            style={{
                                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                backdropFilter: 'blur(10px)',
                            }}
                        >
                            <img src={epss.src} alt="Icon" className='mx-auto sm:mx-0' />
                            <h2 className='text-[20px] sm:text-[24px] my-[20px] sm:my-[28px]'>Lorem</h2>
                            <p className='text-[14px] sm:text-[16px]'>Lorem ipsum dolor sit amet, ispum ut consectetur acursus voult</p>
                        </div>
                    </div>
                </div>



            </div>
        </div>
    )
}

export default page