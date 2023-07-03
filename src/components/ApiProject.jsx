'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'

export default function Projects() {
    const [itemsApi, setItemsApi] = useState([])
  
    useEffect(() => {
      let abortController = new AbortController(); 
  
      function getGitHubAPI() {
        fetch('https://api.github.com/users/henrickva/repos')
        .then(async res => {
          if (!res.ok) {
            throw new Error(res.status)
          }
          var data = await res.json()
          setItemsApi(data)
        })
        .catch(e => console.log(e))
      }
  
      getGitHubAPI()
  
      return () => abortController.abort();  
    }, [])

    return(
        <div className='flex items-center justify-center h-screen'>
            <div className='h-full w-full flex flex-col justify-center items-center p-10'>
                <p className='text-sm italic text-center mb-4 w-full'>
                    Below are some projects for you to choose from. Simply click on the project name, and you will be redirected to the corresponding GitHub page.
                </p>
                <ul className='overflow-x-auto h-full'>
                    {itemsApi.map(item => (
                    <li className='flex flex-col text-start bg-dark-blue m-2 p-2 rounded'
                        key={item.id}>
                        <Link href={item.html_url} target="_blank" className='font-bold hover:opacity-80'>{item.name.toUpperCase()}</Link>
                        <Link href={item.url} target="_blank">URL: {item.url}</Link>
                        <span>Created at: { Intl.DateTimeFormat('pt-BR')
                        .format(new Date(item.created_at))}
                        </span>
                    </li>
                    ))
                    }
                </ul>
            </div>
        </div>
    )
} 