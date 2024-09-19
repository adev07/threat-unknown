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
      <div className="hero min-h-[910px] | flex flex-col items-center justify-center text-center">
        <div className='my-[148px]'>
          <div>
            <h3 className='heading | text-[#FFFFFF] text-5xl font-normal leading-[58px]'>Lorem Ipsum Neque porro <br />qui dolorem </h3>
            <p className='text-[#FFFFFF]/45 text-lg leading-[28px] | mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore <br /> magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
          </div>
          <div className='mt-[42px] space-x-8'>
            <button className='text-[16px] text-[#1A202C] | bg-[#FFFFFF] | rounded-lg | py-3 px-5'>Explore our services</button>
            <button className='text-[16px] text-[#FFFFFF]'>Book a call</button>
          </div>
        </div>
        <div className='px-[64px] | w-full'>
          <div className='flex items-center justify-evenly | bg-[#232323] | rounded-[10px] shadow | py-[38px]'>
            <div className='text-[32px] text-[#FFFFFF]'>Trusted by</div>
            <div className='flex items-center gap-2'>
              <Image src={shells} alt="" />
              <h2 className='text-[24px] text-[#FFFFFF] font-bold'>SHELLS</h2>
            </div>
            <div className='flex items-center gap-2'>
              <Image src={smarFinder} alt="" />
              <h2 className='text-[24px] text-[#FFFFFF] font-bold'>SmartFinder</h2>
            </div>
            <div className='flex items-center gap-2'>
              <Image src={zommer} alt="" />
              <h2 className='text-[24px] text-[#FFFFFF] font-bold'>Zommer</h2>
            </div>
            <div className='flex items-center gap-2'>
              <Image src={artVenue} alt="" />
              <h2 className='text-[24px] text-[#FFFFFF] font-bold'>ArtVenue</h2>
            </div>
          </div>

        </div>
      </div>

      <div className='bg-[#000000] | grid grid-cols-2 items-center justify-center | px-16 py-[120px]'>
        <div className="cols-span-1">
          <Image className='object-cover | max-w-[520px] h-auto' src={intro} alt="" />
        </div>
        <div className="cols-span-1">
          <h1 className='heading | text-[#FFFFFF] text-[48px] font-normal leading-[58px]'>WHO WE ARE</h1>
          <p className='text-[#FFFFFF] text-[16px] leading-[28px] mt-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac leo et neque rhoncus sagittis ac sit amet neque. Mauris elementum erat odio, ut hendrerit arcu facilisis eu. Nunc eu ante sed erat consectetur feugiat ac id metus. Sed mauris nisl, feugiat vitae risus at, fermentum accumsan ante. Vestibulum et justo ut eros facilisis faucibus vitae vestibulum orci. Aenean varius erat quis metus laoreet, ut mollis diam ullamcorper. Nulla facilisi. Pellentesque ornare, magna id vulputate hendrerit, urna sem semper est, eget dapibus turpis lorem quis ante. Nullam sodales leo et pulvinar pulvinar. justo ut eros facilisis faucibus vitae vestibulum orci. Aenean varius erat quis metus laoreet, ut mollis diam ullamcorper. Nulla facilisi. Pellentesque ornare, magna id vulputate hendrerit, urna sem semper est, eget dapibus turpis lorem quis ante. Nullam sodales leo et pulvinar.</p>
          <Button className='mt-16' text='Discover More' />
        </div>
      </div>
      {/* services starts here */}
      <div className='services min-h-screen relative px-16 py-[120px] bg-cover bg-center'>
        <div className='absolute inset-0 bg-black opacity-70 pointer-events-none'></div>
        <div className='relative  z-10'>
          <div className='flex justify-between items-center'>
            <h1 className='heading text-white text-[48px] leading-[58px] font-normal'>Services</h1>
            <Button text='View Services' />
          </div>
          <div className='flex gap-8'>
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
        </div>
      </div>
      {/* services ends here */}

      {/* why Choose us starts here */}
      <div className='bg-[#000000] | grid grid-cols-2 gap-8 items-center justify-center | px-16 py-[120px]'>
        <div className="cols-span-1">
          <h1 className='heading | text-[#FFFFFF] text-[48px] font-normal leading-[58px]'>Why Choose Us</h1>
          <p className='text-[#FFFFFF] text-[16px] leading-[28px] mt-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac leo et neque rhoncus sagittis ac sit amet neque. Mauris elementum erat odio, ut hendrerit arcu facilisis eu. Nunc eu ante sed erat consectetur feugiat ac id metus. Sed mauris nisl, feugiat vitae risus at, fermentum</p>
          <div className='text-[#ffff] flex items-center gap-3 mt-8'>
            <IoIosArrowForward />
            <p className='text-[16px] leading-[28px]'>Lorem ipsum dolor sit amet</p>
          </div>
          <div className='text-[#ffff] flex items-center gap-3 mt-4'>
            <IoIosArrowForward />
            <p className='text-[16px] leading-[28px]'>Consectetur adipiscing elit</p>
          </div>
          <div className='text-[#ffff] flex items-center gap-3 mt-4'>
            <IoIosArrowForward />
            <p className='text-[16px] leading-[28px]'>Nam ac leo et neque</p>
          </div>
          <div className='text-[#ffff] flex items-center gap-3 mt-4'>
            <IoIosArrowForward />
            <p className='text-[16px] leading-[28px]'>Ut hendrerit arcu facilisis eu</p>
          </div>
        </div>
        <div className="cols-span-1 flex justify-center">
          <Image className='object-cover | max-w-[490px] h-auto' src={wcu} alt="" />
        </div>
      </div>
      {/* why Choose us ends here */}

      <div className='bg-[#1C1C1C] text-center min-h-[700px] px-16 py-[120px]'>
        <h2 className='heading | text-[48px] text-[#FFFFFF] leading-[58px]'>Customers Trust Us</h2>
        <div className='mt-8'>
          <TestimonialsCarousel />
        </div>
      </div>


      {/* Blog starts here */}
      <div className='bg-[#000000] px-16 pt-[120px] pb-[160px] min-h-screen text-center'>
        <h2 className='heading | text-[48px] text-[#FFFFFF] leading-[58px]'>Latest Blog Post</h2>
        <div className='flex gap-8 mt-8'>
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
        <div className="relative">
          <Image className="object-cover w-full" src={FAQ} alt="" />
          <div className="absolute inset-0 bg-black opacity-60"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10">
            <h2 className="heading text-[48px] text-[#ffff] leading-[58px]">Ask us anything</h2>
            <p className="text-[18px] text-[#ffffff] mt-3">Have any questions? We're here to assist you.</p>
            <div className="relative mt-8 flex">
              <input
                className="px-4 py-2 rounded-md w-[470px] pl-10 text-black focus:outline-none"
                placeholder="Search here"
                type="text"
              />
              <FaSearch className="absolute left-3 top-[20px] transform -translate-y-1/2 text-[#232323]/40" />
            </div>
          </div>
        </div>
        <div className='bg-[#1C1C1C] px-[248px] py-[120px]'>
          <div className='grid grid-cols-3 items-start gap-6'>
            <div className='col-span-1'>
              <div className='bg-[#232323] w-[50px] h-[50px] flex items-center justify-center p-3 rounded-full'>
                <Image className='object-cover' src={mail} alt="" />
              </div>
              <div className='mt-[14px]'>
                <h3 className='text-[#ffff] text-[16px]'>How do I change my account email?</h3>
                <p className='text-[#FFFFFF]/75 mt-1'>You can log in to your account and change it from your Profile Edit Profile. Then go to the general tab to change your email.</p>
              </div>
            </div>
            <div className='col-span-1'>
              <div className='bg-[#232323] w-[50px] h-[50px] flex items-center justify-center p-3 rounded-full'>
                <Image className='object-cover' src={card} alt="" />
              </div>
              <div className='mt-[14px]'>
                <h3 className='text-[#ffff] text-[16px]'>What should I do if my payment fails?</h3>
                <p className='text-[#FFFFFF]/75 mt-1'>If your payment fails, you can use the (COD) payment option, if available on that order. If your payment is debited from your account after a payment failure, it will be credited back within 7-10 days.</p>
              </div>
            </div>
            <div className='col-span-1'>
              <div className='bg-[#232323] w-[50px] h-[50px] flex items-center justify-center p-3 rounded-full'>
                <Image className='object-cover' src={notallowed} alt="" />
              </div>
              <div className='mt-[14px]'>
                <h3 className='text-[#ffff] text-[16px]'>What is your cancellation policy?</h3>
                <p className='text-[#FFFFFF]/75 mt-1'>You can now cancel an order when it is in packed/shipped status. Any amount paid will be credited into the same payment mode using which the payment was made</p>
              </div>
            </div>
          </div>
          <div className='grid grid-cols-3 items-start gap-6 mt-[52px]'>
            <div className='col-span-1'>
              <div className='bg-[#232323] w-[50px] h-[50px] flex items-center justify-center p-3 rounded-full'>
                <Image className='object-cover' src={trcuk} alt="" />
              </div>
              <div className='mt-[14px]'>
                <h3 className='text-[#ffff] text-[16px]'>How do I check order delivery status?</h3>
                <p className='text-[#FFFFFF]/75 mt-1'>Please tap on “My Orders” section under main menu of App/Website/M-site to check your order status.</p>
              </div>
            </div>
            <div className='col-span-1'>
              <div className='bg-[#232323] w-[50px] h-[50px] flex items-center justify-center p-3 rounded-full'>
                <Image className='object-cover' src={dollar} alt="" />
              </div>
              <div className='mt-[14px]'>
                <h3 className='text-[#ffff] text-[16px]'>What is Instant Refunds?</h3>
                <p className='text-[#FFFFFF]/75 mt-1'>Upon successful pickup of the return product at your doorstep, Myntra will instantly initiate the refund to your source account or chosen method of refund. Instant Refunds is not available in a few select pin codes and for all self ship returns.</p>
              </div>
            </div>
            <div className='col-span-1'>
              <div className='bg-[#232323] w-[50px] h-[50px] flex items-center justify-center p-3 rounded-full'>
                <Image className='object-cover' src={tag} alt="" />
              </div>
              <div className='mt-[14px]'>
                <h3 className='text-[#ffff] text-[16px]'>How do I apply a coupon on my order?</h3>
                <p className='text-[#FFFFFF]/75 mt-1'>You can apply a coupon on cart page before order placement. The complete list of your unused and valid coupons will be available under “My Coupons” tab of App/Website/M-site.</p>
              </div>
            </div>
          </div>
          <div
            className="w-full h-full mt-[70px] rounded-[12px] p-6 text-[#ffff] shadow"
            style={{
              background: 'linear-gradient(96.79deg, #171717 -62.94%, #323335 -62.92%, rgba(90, 90, 90, 0) 54.42%, #171717 174.24%)',
            }}
          >
            <div className='flex items-center justify-between'>
              <div>
                <h3 className='text-[24px]'>Still have questions?</h3>
                <p className='text-[16px]'>Can&apos;t find the answer you&apos;re looking for? Please chat to our friendly team.</p>
              </div>
              <div>
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