import React from 'react'
import shells from '../app/assets/svg/logo2.svg';
import smarFinder from '../app/assets/svg/smarfinder.svg';
import zommer from '../app/assets/svg/zommer.svg';
import artVenue from '../app/assets/svg/artVenue.svg';
import intro from '../app/assets/hero2.webp';
import Button from './_components/button';
import epss from '../app/assets/svg/Sercices1.svg'
import des from '../app/assets/svg/services3.svg'
import irf from '../app/assets/svg/services4.svg'
import nss from '../app/assets/svg/services2.svg'
import { IoIosArrowForward } from 'react-icons/io';
import wcu from '../app/assets/svg/wcu.svg';
import blog1 from '../app/assets/blog1.png';
import blog2 from '../app/assets/svg/blog2.svg';
import blog3 from '../app/assets/svg/blog3.svg';
import BlogCard from './_components/blog-card';
import ServicesCard from './_components/service-card';
import FAQ from './assets/svg/FAQ.svg';
import { FaSearch } from 'react-icons/fa';
import mail from './assets/svg/mail.svg';
import card from './assets/svg/credit-card.svg';
import notallowed from './assets/svg/Icon.svg';
import trcuk from './assets/svg/truck.svg';
import dollar from './assets/svg/dollar-sign.svg';
import tag from './assets/svg/tag.svg';
import Image from 'next/image';
import TestimonialsCarousel from './_components/testimonial';



function page() {
  return (
    <div>
      <div className="hero min-h-screen | flex flex-col items-center justify-center text-center px-4 sm:px-8 lg:px-16">
        <div className="my-16 sm:my-[100px]">
          <div className='sm:px-0 px-6'>
            <h3 className="heading | text-white text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight sm:leading-[48px] lg:leading-[58px]">
              Lorem Ipsum Neque porro <br className="hidden sm:block" /> qui dolorem
            </h3>
            <p className="text-white/70 text-sm sm:text-lg leading-6 sm:leading-[28px] mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore <br className="hidden sm:block" /> magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            </p>
          </div>
          <div className="mt-6 sm:mt-10 space-y-4 sm:space-y-0 sm:space-x-4 flex flex-col sm:flex-row justify-center items-center">
            <button className="text-[14px] sm:text-[16px] text-[#1A202C] | bg-white | rounded-lg py-3 px-5 | w-[220px] sm:w-auto">
              Explore our services
            </button>
            <button className="text-[14px] sm:text-[16px] text-white">
              Book a call
            </button>
          </div>
        </div>

        <div className="w-full px-6 lg:px-[64px]">
          <div className="flex flex-wrap justify-center sm:justify-evenly | bg-[#232323] | rounded-[10px] shadow py-6 sm:py-[38px] gap-6 sm:gap-4">
            <div className="text-[24px] sm:text-[32px] text-white text-center">Trusted by</div>
            <div className="flex items-center gap-2">
              <Image src={shells} alt="Shells" className="h-8 sm:h-12" />
              <h2 className="text-[18px] sm:text-[24px] text-white font-bold">SHELLS</h2>
            </div>
            <div className="flex items-center gap-2">
              <Image src={smarFinder} alt="SmartFinder" className="h-8 sm:h-12" />
              <h2 className="text-[18px] sm:text-[24px] text-white font-bold">SmartFinder</h2>
            </div>
            <div className="flex items-center gap-2">
              <Image src={zommer} alt="Zommer" className="h-8 sm:h-12" />
              <h2 className="text-[18px] sm:text-[24px] text-white font-bold">Zommer</h2>
            </div>
            <div className="flex items-center gap-2">
              <Image src={artVenue} alt="ArtVenue" className="h-8 sm:h-12" />
              <h2 className="text-[18px] sm:text-[24px] text-white font-bold">ArtVenue</h2>
            </div>
          </div>
        </div>
      </div>


      <div className="bg-[#000000] grid grid-cols-1 lg:grid-cols-2 items-center justify-center px-6 lg:px-16 py-[60px] lg:py-[120px]">
        {/* Image Section */}
        <div className="cols-span-1 mb-8 lg:mb-0 flex justify-center">
          <Image
            className="object-cover max-w-[100%] lg:max-w-[520px] h-auto"
            src={intro}
            alt="Introduction"
          />
        </div>

        {/* Text Section */}
        <div className="cols-span-1 text-center lg:text-left">
          <h1 className="heading text-[#FFFFFF] text-[32px] lg:text-[48px] font-normal leading-[38px] lg:leading-[58px]">
            WHO WE ARE
          </h1>
          <p className="text-[#FFFFFF] sm:text-auto text-justify text-[14px] lg:text-[16px] leading-[24px] lg:leading-[28px] mt-4 lg:mt-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac leo et
            neque rhoncus sagittis ac sit amet neque. Mauris elementum erat odio, ut
            hendrerit arcu facilisis eu. Nunc eu ante sed erat consectetur feugiat ac
            id metus. Sed mauris nisl, feugiat vitae risus at, fermentum accumsan
            ante. Vestibulum et justo ut eros facilisis faucibus vitae vestibulum
            orci. Aenean varius erat quis metus laoreet, ut mollis diam ullamcorper.
            Nulla facilisi. Pellentesque ornare, magna id vulputate hendrerit, urna
            sem semper est, eget dapibus turpis lorem quis ante. Nullam sodales leo et
            pulvinar pulvinar. justo ut eros facilisis faucibus vitae vestibulum orci.
            Aenean varius erat quis metus laoreet, ut mollis diam ullamcorper. Nulla
            facilisi. Pellentesque ornare, magna id vulputate hendrerit, urna sem
            semper est, eget dapibus turpis lorem quis ante. Nullam sodales leo et
            pulvinar.
          </p>
          <div className="flex justify-center lg:justify-start mt-8 lg:mt-16">
            <Button text="Discover More" />
          </div>
        </div>
      </div>

      {/* services starts here */}
      <div className='services min-h-screen relative px-6 sm:px-8 lg:px-16 py-[60px] sm:py-[80px] lg:py-[120px] bg-cover bg-center'>
        <div className='absolute inset-0 bg-black opacity-70 pointer-events-none'></div>
        <div className='relative z-10'>
          <div className='flex flex-col sm:flex-row justify-between items-center'>
            <h1 className='heading text-white text-[32px] sm:text-[48px] leading-[44px] sm:leading-[58px] font-normal'>Services</h1>
            <Button className='sm:block hidden' text='View Services' />
          </div>
          <div className='flex flex-col sm:flex-row sm:gap-8 gap-6 mt-8'>
            <ServicesCard
              imageSrc={epss}
              title="Endpoint Security Solutions"
              description="Protect your devices and networks from malware, ransomware, and other cyber threats with our comprehensive endpoint security solutions. Safeguard sensitive data and ensure business continuity with real-time threat detection and response."
            />
            <ServicesCard
              imageSrc={des}
              title="Data Encryption Services"
              description="Encrypt your data and protect it from unauthorized access with our data encryption services. Secure sensitive information and comply with data protection regulations with our advanced encryption solutions."
            />
            <ServicesCard
              imageSrc={irf}
              title="Incident Response Framework"
              description="Respond quickly and effectively to cyber incidents with our incident response framework. Minimize the impact of security breaches and prevent future attacks with our comprehensive incident response services."
            />
            <ServicesCard
              imageSrc={nss}
              title="Network Security Services"
              description="Secure your network infrastructure and protect your business from cyber threats with our network security services. Monitor network traffic, detect vulnerabilities, and respond to security incidents with our advanced network security solutions."
            />
          </div>
          <div className='flex items-center justify-center mt-6'>
            <Button className='sm:hidden block' text='View Services' />
          </div>
        </div>
      </div>

      {/* services ends here */}

      {/* why Choose us starts here */}
      <div className='bg-[#000000] grid grid-cols-1 lg:grid-cols-2 gap-8 items-center justify-center px-6 lg:px-16 py-[60px] lg:py-[120px]'>
        {/* Text Section */}
        <div className="cols-span-1 text-center lg:text-left">
          <h1 className='heading text-[#FFFFFF] text-[32px] lg:text-[48px] font-normal leading-[38px] lg:leading-[58px]'>
            Why Choose Us
          </h1>
          <p className='text-[#FFFFFF] text-[14px] lg:text-[16px] leading-[24px] lg:leading-[28px] mt-4 lg:mt-8'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac leo et neque rhoncus sagittis ac sit amet neque.
            Mauris elementum erat odio, ut hendrerit arcu facilisis eu. Nunc eu ante sed erat consectetur feugiat ac id metus.
            Sed mauris nisl, feugiat vitae risus at, fermentum.
          </p>
          {/* List Items */}
          <div className='text-[#ffff] flex items-center gap-3 mt-6 lg:mt-8'>
            <IoIosArrowForward />
            <p className='text-[14px] lg:text-[16px] leading-[24px] lg:leading-[28px]'>Lorem ipsum dolor sit amet</p>
          </div>
          <div className='text-[#ffff] flex items-center gap-3 mt-4'>
            <IoIosArrowForward />
            <p className='text-[14px] lg:text-[16px] leading-[24px] lg:leading-[28px]'>Consectetur adipiscing elit</p>
          </div>
          <div className='text-[#ffff] flex items-center gap-3 mt-4'>
            <IoIosArrowForward />
            <p className='text-[14px] lg:text-[16px] leading-[24px] lg:leading-[28px]'>Nam ac leo et neque</p>
          </div>
          <div className='text-[#ffff] flex items-center gap-3 mt-4'>
            <IoIosArrowForward />
            <p className='text-[14px] lg:text-[16px] leading-[24px] lg:leading-[28px]'>Ut hendrerit arcu facilisis eu</p>
          </div>
        </div>

        {/* Image Section */}
        <div className="cols-span-1 flex justify-center mt-8 lg:mt-0">
          <Image className='object-cover max-w-[100%] lg:max-w-[490px] h-auto' src={wcu} alt="Why Choose Us" />
        </div>
      </div>

      {/* why Choose us ends here */}

      <div className='bg-[#1C1C1C] text-center sm:min-h-[700px] px-6 md:px-8 lg:px-16 py-[60px] md:py-[80px] lg:py-[120px]'>
        <h2 className='heading | text-[32px] md:text-[40px] lg:text-[48px] text-[#FFFFFF] leading-[38px] md:leading-[48px] lg:leading-[58px]'>
          Customers Trust Us
        </h2>
        <div className='mt-6 md:mt-8'>
          <TestimonialsCarousel />
        </div>
      </div>


      {/* Blog starts here */}
      <div className='bg-[#000000] px-6 lg:px-16 pt-[60px] lg:pt-[120px] pb-[60px] lg:pb-[160px] min-h-screen text-center'>
        {/* Heading */}
        <h2 className='heading text-[32px] lg:text-[48px] text-[#FFFFFF] leading-[40px] lg:leading-[58px]'>
          Latest Blog Post
        </h2>

        {/* Blog Cards Container */}
        <div className='flex flex-col lg:flex-row gap-8 mt-8 justify-center'>
          <BlogCard
            imageSrc={blog1}
            tags={['Tag Name', 'Tag Name']}
            title="Lorem ipsum dolor sit amet"
            description="Lorem ipsum dolor sit amet, coctetur adipiscing fermentum amet, phasellus
                  sem nisl to massa. Enim, eget nisi quis risus malesua nulla vitae cursus vel
                  tellus magnis accumsan morbi."
            date="Sep 01, 2024"
          />
          <BlogCard
            imageSrc={blog2}
            tags={['Tag Name', 'Tag Name']}
            title="Lorem ipsum dolor sit amet"
            description="Lorem ipsum dolor sit amet, coctetur adipiscing fermentum amet, phasellus
                  sem nisl to massa. Enim, eget nisi quis risus malesua nulla vitae cursus vel
                  tellus magnis accumsan morbi."
            date="Sep 01, 2024"
          />
          <BlogCard
            imageSrc={blog3}
            tags={['Tag Name', 'Tag Name']}
            title="Lorem ipsum dolor sit amet"
            description="Lorem ipsum dolor sit amet, coctetur adipiscing fermentum amet, phasellus
                  sem nisl to massa. Enim, eget nisi quis risus malesua nulla vitae cursus vel
                  tellus magnis accumsan morbi."
            date="Sep 01, 2024"
          />
        </div>
      </div>

      {/* Blogs ends here */}

      {/* faq starts here */}
      <div>
        {/* Background Image and Search Section */}
        <div className="relative">
          <Image className="object-cover w-full h-[300px] lg:h-auto" src={FAQ} alt="" />
          <div className="absolute inset-0 bg-black opacity-60"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 px-4">
            <h2 className="heading text-[32px] lg:text-[48px] text-[#ffff] leading-[40px] lg:leading-[58px]">Ask us anything</h2>
            <p className="text-[16px] lg:text-[18px] text-[#ffffff] mt-3">Have any questions? We're here to assist you.</p>
            <div className="relative mt-8 flex w-full sm:max-w-[470px] max-w-[280px]">
              <input
                className="px-4 py-2 rounded-md w-full  pl-10 text-black focus:outline-none"
                placeholder="Search here"
                type="text"
              />
              <FaSearch className="absolute left-3 top-[50%] transform -translate-y-1/2 text-[#232323]/40" />
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className='bg-[#1C1C1C] px-6 lg:px-[248px] py-[60px] lg:py-[120px]'>
          <div className='grid grid-cols-1 lg:grid-cols-3 items-start gap-6'>
            <div className='col-span-1'>
              <div className='bg-[#232323] w-[50px] h-[50px] flex items-center justify-center p-3 rounded-full'>
                <Image className='object-cover' src={mail} alt="" />
              </div>
              <div className='mt-[14px]'>
                <h3 className='text-[#ffff] text-[14px] lg:text-[18px]'>How do I change my account email?</h3>
                <p className='text-[#FFFFFF]/75 mt-1 text-[14px] sm:text-[16px]'>You can log in to your account and change it from your Profile Edit Profile. Then go to the general tab to change your email.</p>
              </div>
            </div>
            <div className='col-span-1'>
              <div className='bg-[#232323] w-[50px] h-[50px] flex items-center justify-center p-3 rounded-full'>
                <Image className='object-cover' src={card} alt="" />
              </div>
              <div className='mt-[14px]'>
                <h3 className='text-[#ffff] text-[14px] lg:text-[18px]'>What should I do if my payment fails?</h3>
                <p className='text-[#FFFFFF]/75 mt-1 text-[14px] sm:text-[16px]'>If your payment fails, you can use the (COD) payment option, if available on that order. If your payment is debited from your account after a payment failure, it will be credited back within 7-10 days.</p>
              </div>
            </div>
            <div className='col-span-1'>
              <div className='bg-[#232323] w-[50px] h-[50px] flex items-center justify-center p-3 rounded-full'>
                <Image className='object-cover' src={notallowed} alt="" />
              </div>
              <div className='mt-[14px]'>
                <h3 className='text-[#ffff] text-[14px] lg:text-[18px]'>What is your cancellation policy?</h3>
                <p className='text-[#FFFFFF]/75 mt-1 text-[14px] sm:text-[16px]'>You can now cancel an order when it is in packed/shipped status. Any amount paid will be credited into the same payment mode using which the payment was made</p>
              </div>
            </div>
          </div>

          {/* Second Row of FAQ */}
          <div className='grid grid-cols-1 lg:grid-cols-3 items-start gap-6 mt-[52px]'>
            <div className='col-span-1'>
              <div className='bg-[#232323] w-[50px] h-[50px] flex items-center justify-center p-3 rounded-full'>
                <Image className='object-cover' src={trcuk} alt="" />
              </div>
              <div className='mt-[14px]'>
                <h3 className='text-[#ffff] text-[14px] lg:text-[18px]'>How do I check order delivery status?</h3>
                <p className='text-[#FFFFFF]/75 mt-1 text-[14px] sm:text-[16px]'>Please tap on “My Orders” section under main menu of App/Website/M-site to check your order status.</p>
              </div>
            </div>
            <div className='col-span-1'>
              <div className='bg-[#232323] w-[50px] h-[50px] flex items-center justify-center p-3 rounded-full'>
                <Image className='object-cover' src={dollar} alt="" />
              </div>
              <div className='mt-[14px]'>
                <h3 className='text-[#ffff] text-[14px] lg:text-[18px]'>What is Instant Refunds?</h3>
                <p className='text-[#FFFFFF]/75 mt-1 text-[14px] sm:text-[16px]'>Upon successful pickup of the return product at your doorstep, Myntra will instantly initiate the refund to your source account or chosen method of refund.</p>
              </div>
            </div>
            <div className='col-span-1'>
              <div className='bg-[#232323] w-[50px] h-[50px] flex items-center justify-center p-3 rounded-full'>
                <Image className='object-cover' src={tag} alt="" />
              </div>
              <div className='mt-[14px]'>
                <h3 className='text-[#ffff] text-[14px] lg:text-[18px]'>How do I apply a coupon on my order?</h3>
                <p className='text-[#FFFFFF]/75 mt-1 text-[14px] sm:text-[16px]'>You can apply a coupon on cart page before order placement.</p>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div
            className="w-full h-full mt-[40px] lg:mt-[70px] rounded-[12px] p-4 lg:p-6 text-[#ffff] shadow"
            style={{
              background: 'linear-gradient(96.79deg, #171717 -62.94%, #323335 -62.92%, rgba(90, 90, 90, 0) 54.42%, #171717 174.24%)',
            }}
          >
            <div className='flex flex-col lg:flex-row items-center lg:items-start justify-between'>
              <div>
                <h3 className='text-[18px] lg:text-[24px]'>Still have questions?</h3>
                <p className='text-[14px] lg:text-[16px]'>Can't find the answer you're looking for? Please chat with our friendly team.</p>
              </div>
              <div className='mt-4 lg:mt-0'>
                <Button text='Get in touch' />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* faq ends here */}



    </div >
  )
}

export default page