'use client'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Send = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_s6wgo3b', 'template_ztarfaf', form.current, {
        publicKey: '2aQ3Krv854d1PWPsD',
      })
      .then(
        () => {
          alert('Seu e-mail foi enviado com sucesso');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <section className='flex items-start justify-center md:justify-start mx-2'>
        <form className='flex w-4/5 md:w-80 bg-blue-200 rounded p-3 flex-col text-blue-900' ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input placeholder='Your Name' className='p-2 rounded outline-none' type="text" name="user_name" />
            <label>Email</label>
            <input placeholder='Your E-mail'className='p-2 rounded outline-none'type="email" name="user_email" />
            <label>Message</label>
            <textarea placeholder='Type your message' className='p-2 rounded outline-none' name="message" />
            <button className='p-2 ease-in duration-200 text-center bg-blue-900 flex  justify-center text-blue-200 rounded mt-2 hover:opacity-70' type="submit">Send</button>
        </form>
    </section>
    
  );
};