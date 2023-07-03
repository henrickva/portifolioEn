import Image from "next/image";
import HTML from '@/assets/html-5.png'
import CSS from '@/assets/css-3.png'
import Tailwind from '@/assets/tailwind.png'
import TS from '@/assets/typescript.png'
import reac from '@/assets/react.png';

export default function Hero(){
    return(
        <div className="flex flex-col justify-center">
            <h1 className="text-2xl font-bold text-dark-blue m-2">About Me</h1>

            <p className="text-justify italic m-2">
                Hello, my name is Henrick, I'm 25 years old, and I'm a student of engineering at 
                UNIIFEI - Federal University of Itajubá. For over a year now, I have been studying web 
                development after working as a freelancer, where I designed interfaces for web platforms.

                Through my internship at CSN, I had the opportunity to experience the importance of teamwork, 
                delivering results, and significantly enhance my communication skills and project 
                presentations abilities.
            </p>

            <h1 className="text-2xl font-bold text-dark-blue m-2">Skills</h1>

            <div className="grid grid-rows-2 grid-flow-col gap-4 md:flex md:flex-row justify-center my-6">
                <Image className='px-6 my-6 md:my-0'src={HTML} height={140}/>
                <Image className='px-6 my-6 md:my-0' src={CSS} height={140}/>
                <Image className='px-6 my-6 md:my-0' src={TS} height={140}/>
                <Image className='px-6 my-6 md:my-0' src={reac} height={140}/>
                <Image className='px-6 my-6 md:my-0' src={Tailwind} height={140}/>
            </div>           
        </div>
    )
}