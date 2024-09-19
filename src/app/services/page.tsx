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
            <div className="hero min-h-[660px] relative | flex flex-col items-center justify-center text-center">
                <h1 className="heading-secondary">Services oFFered</h1>
                <p className='text-[#FFFFFF] text-[32px] leading-[42px] font-thin | mt-4'>
                    "Protecting Your Business in a Digital World"
                </p>
                <div className='px-[64px] | min-w-[930px] absolute bottom-0 mb-[-60px]'>
                    <div className='flex items-center justify-center | bg-[#232323] | rounded-[10px] shadow | py-[38px]'>
                        <div className='border-r pr-[50px]'>
                            <h2 className='text-[24px] text-[#FFFFFF]'>5Y</h2>
                            <h3 className='text-[16px] text-[#FFFFFF]'>Experience</h3>
                        </div>
                        <div className='px-[50px]'>
                            <h2 className='text-[24px] text-[#FFFFFF]'>100+</h2>
                            <h3 className='text-[16px] text-[#FFFFFF]'>Satisfied customers</h3>
                        </div>
                        <div className='border-l pl-[50px]'>
                            <h2 className='text-[24px] text-[#FFFFFF]'>99%</h2>
                            <h3 className='text-[16px] text-[#FFFFFF]'>Cybersecurity guarantee</h3>
                        </div>
                    </div>
                </div>
            </div>

            <div className='bg-[#000000] min-h-screen'>
                <div className='pt-[160px] px-[64px] text-center'>
                    <p className='text-[#ffff] text-[24px] font-normal'>We are providing cybersecurity services to some of the World’s leading companies</p>
                </div>
                <div className='flex items-center justify-center gap-[85px] mt-4 py-6'>
                    <Image width={60} src={youtube} alt="" />
                    <Image width={60} src={Nike} alt="" />
                    <Image width={60} src={apple} alt="" />
                    <Image width={60} src={bbc} alt="" />
                    <Image width={60} src={slack} alt="" />
                    <Image width={60} src={zoom} alt="" />
                    <Image width={60} src={cloud} alt="" />
                </div>

                <div className='mt-[70px]'>
                    <h3 className='text-[#fff] text-center text-[24px] leading-[34px] font-thin'>At <span className='text-[#FF0000]'>Treat Unknown</span>, we're dedicated to protecting businesses and individuals from the ever-evolving threats in the <br />digital landscape. With [X years/months] of experience in the cybersecurity industry, we have honed our expertise <br /> to deliver innovative solutions that safeguard your digital assets and maintain your peace of mind.</h3>
                </div>

                <div className='py-[120px] mx-[140px] text-center'>
                    <h3 className='heading-secondary'>Services </h3>
                    <div className="flex gap-[72px] mt-[52px]">
                        <div
                            className='flex flex-col items-center justify-center px-[64px] py-[48px] text-[#ffff] rounded-[16px] shadow '
                            style={{
                                background: 'linear-gradient(96.79deg, #171717 -62.94%, #323335 -62.92%, rgba(90, 90, 90, 0) 54.42%, #171717 174.24%)',
                            }}
                        >
                            <Image width={45} height={45} src={epss} alt="" />
                            <h2 className='text-[24px] font-[600] leading-[33px] mt-4'>Endpoint Security Solutions</h2>
                            <p className='text-[16px] text-[#ffff]/50 font-thin mt-6'>Protect your devices and networks from malware, ransomware, and other cyber threats with our comprehensive endpoint security solutions. Safeguard sensitive data and ensure business continuity with real-time threat detection and response.</p>
                        </div>
                        <div
                            className='flex flex-col items-center justify-center px-[64px] py-[48px] text-[#ffff] rounded-[16px] shadow-lg  '
                            style={{
                                background: 'linear-gradient(96.79deg, #171717 -62.94%, #323335 -62.92%, rgba(90, 90, 90, 0) 54.42%, #171717 174.24%)',
                            }}
                        >
                            <Image width={45} height={45} src={nss} alt="" />
                            <h2 className='text-[24px] font-[600] leading-[33px] mt-4'>Network Security Solutions</h2>
                            <p className='text-[16px] text-[#ffff]/50 font-thin mt-6'>Secure your network infrastructure from unauthorized access and data breaches with our advanced network security solutions. Defend against evolving cyber threats and maintain network integrity with robust firewalls.</p>
                        </div>
                    </div>
                    <div className="flex gap-[72px] mt-[72px]">
                        <div
                            className='flex flex-col items-center justify-center px-[64px] py-[48px] text-[#ffff] rounded-[16px] shadow-lg '
                            style={{
                                background: 'linear-gradient(96.79deg, #171717 -62.94%, #323335 -62.92%, rgba(90, 90, 90, 0) 54.42%, #171717 174.24%)',
                            }}
                        >
                            <Image width={45} height={45} src={des} alt="" />
                            <h2 className='text-[24px] font-[600] leading-[33px] mt-4'>Data Encryption Services</h2>
                            <p className='text-[16px] text-[#ffff]/50 font-thin mt-6'>Encrypt sensitive data at rest and in transit to protect confidentiality and integrity. Our data encryption services provide end-to-end encryption solutions to safeguard your most valuable assets from unauthorized access and cyber attacks.</p>
                        </div>
                        <div
                            className='flex flex-col items-center justify-center px-[64px] py-[48px] text-[#ffff] rounded-[16px] shadow-lg '
                            style={{
                                background: 'linear-gradient(96.79deg, #171717 -62.94%, #323335 -62.92%, rgba(90, 90, 90, 0) 54.42%, #171717 174.24%)',
                            }}
                        >
                            <Image width={45} height={45} src={irf} alt="" />
                            <h2 className='text-[24px] font-[600] leading-[33px] mt-4'>Incident Response and Forensics</h2>
                            <p className='text-[16px] text-[#ffff]/50 font-thin mt-6'>Rapidly detect, respond to, and recover from security incidents with our incident response and forensic services. Minimize the impact of breaches and maintain business continuity with our expert team of cybersecurity professionals.</p>
                        </div>
                    </div>
                </div>

                <div className='testimonials min-h-[638px]'>
                    <h1 className='heading-secondary text-center pt-[120px]'>
                        Why to choose us?
                    </h1>
                    <div className='flex items-center justify-center gap-6 px-[120px] mt-8'>
                        <div
                            className='py-[30px] pr-[90px] pl-[22px] rounded-[16px] shadow-lg text-[#ffff]'
                            style={{
                                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                backdropFilter: 'blur(10px)',
                            }}
                        >
                            <img src={epss.src} alt="" />
                            <h2 className='text-[24px] my-[28px]'>Lorem</h2>
                            <p>Lorem ipsum dolor sit amet, ispum
                                ut consectetur acursus voult
                            </p>
                        </div>
                        <div
                            className='py-[30px] pr-[90px] pl-[22px] rounded-[16px] shadow-lg text-[#ffff]'
                            style={{
                                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                backdropFilter: 'blur(10px)',
                            }}
                        >
                            <img src={epss.src} alt="" />
                            <h2 className='text-[24px] my-[28px]'>Lorem</h2>
                            <p>Lorem ipsum dolor sit amet, ispum
                                ut consectetur acursus voult
                            </p>
                        </div>
                        <div
                            className='py-[30px] pr-[90px] pl-[22px] rounded-[16px] shadow-lg text-[#ffff]'
                            style={{
                                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                backdropFilter: 'blur(10px)',
                            }}
                        >
                            <img src={epss.src} alt="" />
                            <h2 className='text-[24px] my-[28px]'>Lorem</h2>
                            <p>Lorem ipsum dolor sit amet, ispum
                                ut consectetur acursus voult
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default page