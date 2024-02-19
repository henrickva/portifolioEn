import Image from "next/image";
import gmail from '@/assets/gmail.png'
import instagram from '@/assets/instagram.png'
import linkedin from '@/assets/linkedin.png'
import github from '@/assets/github.png'
import { Send } from "@/components/Email";

export default function Contacts(){
    return(
        <section className="flex flex-col justify-center items-center">
            <div className="container">
                <h1 className="text-2xl font-bold text-dark-blue m-2">Contacts</h1>
                <p className="m-2 italic"> Feel free to contact me: </p>

                <div className="flex flex-row justify-start my-6">
                    <a target="_blank" href="mailto:henrick.vaz.amaral@gmail.com">
                        <Image className='hover:opacity-80 px-6 my-5 md:my-0'src={gmail} target="_blank" height={100}/>
                    </a>
                    
                    <a target="_blank" href="https://www.instagram.com/henrickva/">
                        <Image className='hover:opacity-80 px-6 my-5 md:my-0' src={instagram} height={100}/>
                    </a>

                    <a target="_blank" href="https://www.linkedin.com/in/henrick-vaz-amaral-7b138a236/?locale=en_US">
                        <Image className='hover:opacity-80 px-6 my-5 md:my-0' src={linkedin} height={100}/>
                    </a>

                    <a target="_blank" href="https://github.com/henrickva">
                        <Image className='hover:opacity-80 px-6 my-5 md:my-0' src={github} height={100}/>
                    </a>
                </div>
                <Send /> 
            </div>

            
        </section>
    )
}