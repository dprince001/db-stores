import { useState } from 'react'

import {ReactComponent as OrphanageIcon} from '../../assets/orphanage-icon.svg'
import {ReactComponent as TwitterIcon} from '../../assets/twitter-icon.svg'
import {ReactComponent as LinkedInIcon} from '../../assets/linkedin-icon.svg'
import {ReactComponent as RightArrowIcon} from '../../assets/right-arrow-icon.svg'
import {ReactComponent as WhatsappIcon} from '../../assets/whatsapp-icon.svg'


const FooterComp = () => {
    const [userEmail, setUserEmail] = useState('');

    const handleEmailText = (e) => {
        setUserEmail(e.target.value);
    }

    const handlePostEmail = async (url= '', data={}) => {
        // TODO: send email to a database
        if(userEmail.includes('@') && userEmail.includes('.')) {
            // e.preventDefault();
            const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
            })
            setUserEmail('');
            return response.json();
        };

        alert('invalid email');
    }


  return (
    <div className="bg-skyblue mt-[100px] py-[40px]">
        <div className="w-[85%] text-[#4C4C6E] m-auto w-screen grid gap-x-12 gap-y-8 grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1">
            <div className=''>
                <p className='mb-[10px]'>ABOUT</p>
                <p className="text-sm mb-[15px] cursor-pointer hover:underline">Mission</p>
                <p className="text-sm mb-[15px] cursor-pointer hover:underline">Journal</p>
                <p className="text-sm mb-[15px] cursor-pointer hover:underline">Careers</p>
                <p className="text-sm mb-[15px] cursor-pointer hover:underline">Catalogs</p>
                <p className="text-sm mb-[15px] cursor-pointer hover:underline">Contact Us</p>
            </div>
            <div className=''>
                <p className='mb-[10px]'>INFO</p>
                <p className="text-sm mb-[15px] cursor-pointer hover:underline">FAQ</p>
                <p className="text-sm mb-[15px] cursor-pointer hover:underline">Shipping</p>
                <p className="text-sm mb-[15px] cursor-pointer hover:underline">Exchanges & Returns</p>
                <p className="text-sm mb-[15px] cursor-pointer hover:underline">Rewards & Promotions</p>
            </div>
            <div className="">
                <p className='mb-[10px]'>OUR MISSION</p>
                <p className='mb-[20px]'>For every product purchased, dp stores feeds atleast three orphan kids daily</p>
                <OrphanageIcon/>
            </div>
            <div className="">
                <p className='mb-[10px]'>SUBSCRIBE TO OUR EMAILS</p>
                <form onSubmit={(e) => handlePostEmail('http://localhost:3000/userEmails', {userEmail: userEmail})} className='relative'>
                    <input type="email" placeholder='Email' className='text-sm w-full p-[10px] pl-[15px] pr-[40px] border border-black focus:outline-0' onChange={handleEmailText} value={userEmail}/>
                    <span className='absolute top-2 right-2'><RightArrowIcon cursor='pointer' onClick={(e) => handlePostEmail('http://localhost:3000/userEmails', {userEmail: userEmail})}/></span>
                </form>
                <div className='mt-[20px] flex items-center'>
                    <a href="https://wa.link/lwxdg5" target='_blank'>
                        <WhatsappIcon/>
                    </a>
                    <span className='mx-[30px]'><a href="https://twitter.com/_oketola" target='_blank'><TwitterIcon/></a></span>
                    <a href="https://www.linkedin.com/in/oketola-samuel/" target='_blank'><LinkedInIcon/></a> 
                </div>
            </div>
        </div>
    </div>
  )
}

export default FooterComp