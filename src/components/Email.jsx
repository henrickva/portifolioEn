'use client'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useState } from 'react';

export const Send = () => {
  const form = useRef();
  const[nameInput, setNameInput] = useState("")
  const[emailInput, setEmailInput] = useState("")
  const[messageInput, setMessageInput] = useState("")

  const sendEmail = (e) => {
    e.preventDefault();

    if(nameInput === '' || setEmailInput ===''){
        alert('Preencha todos os campos')
        toast.warn('Preencha todos os campos',
            {position: "top-center",
            theme: "dark"})
            return
    }

    emailjs
      .sendForm('service_s6wgo3b', 'template_ztarfaf', form.current, {
        publicKey: '2aQ3Krv854d1PWPsD',
      })
      .then(
        () => {
          setNameInput("")
          setEmailInput("")
          setMessageInput("")
          toast.success('Seu e-mail foi enviado com sucesso',
            {position: "top-center",
            theme: "dark"})
            return
        },
        (error) => {
          toast.error(`Falha ao enviar o e-mail${error.text}`,
            {position: "top-center",
            theme: "dark"})
            return
        },
      );
  };

  return (
    <section className='flex items-start justify-center md:justify-start mx-2'>
        <ToastContainer />
        <form className='flex w-4/5 md:w-80 bg-blue-200 rounded p-3 flex-col text-blue-900' ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input 
                value={nameInput}
                placeholder='Your Name' 
                className='p-2 rounded outline-none' 
                type="text" 
                name="user_name" 
                onChange = {(e)=>
                    setNameInput(e.target.value)
                }
            />
            <label>Email</label>
            <input 
                value={emailInput}
                placeholder='Your Name' 
                className='p-2 rounded outline-none' 
                type="text" 
                name="user_email" 
                onChange = {(e)=>
                    setEmailInput(e.target.value)
                }
            />
           
            <label>Message</label>
            <textarea 
                value={messageInput}
                placeholder='Type your message' 
                className='p-2 rounded outline-none' 
                name="message" 
                onChange = {(e)=>
                    setMessageInput(e.target.value)
                }
            />
            <button className='p-2 ease-in duration-200 text-center bg-blue-900 flex  justify-center text-blue-200 rounded mt-2 hover:opacity-70' type="submit">Send</button>
        </form>
      
    </section>
    
  );
};