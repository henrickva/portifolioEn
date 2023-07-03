import Image from "next/image";
import photo from '../assets/profilePic.png'

export default function Profile(){
    return(
        <div className="flex flex-col justify-center items-center bg-dark-blue p-2 rounded-lg">
            <Image 
                className="rounded-full"
                src={photo} 
                height={250} 
                alt="profile photo"
            />

            <h1 className="text-lg font-bold text-center my-2"> Henrick Vaz Amaral</h1>

            <ul className="italic">
                <li className="p-1">
                    Front-End Developer
                </li>

                <li className="p-1">
                    UI | UX Designer
                </li>

                <li className="p-1">
                    25 years old
                </li>

                <li className="p-1">
                    Itajubá - MG -Brazil
                </li>
            </ul>
        </div>
    )
}