import React,{lazy} from 'react'
import { LazyLoadImage as Image } from 'react-lazy-load-image-component';
import chatAlt from '../img/altChat.jpeg'
const ContactForm = lazy(()=> import("../components/ContactForm"))

const Contact = () => {


  return (
    <div className='my-20 2xl:my-40 px-4 md:px-12 grid md:grid-cols-2 text-[#ffffff] gap-6 '>
      <Image src="img/chat.jpeg" className='w-full rounded-md' placeholderSrc={chatAlt}  alt="Image Alt" />
       <ContactForm/>
    </div>
  )
}

export default Contact
