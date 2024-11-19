import Link from 'next/link'
import React from 'react'

//an example of a nested enpoint in an url

//to create an endpoint in nextjs15 all you need is the folder and it can be nested with subfolders

// this would point to /dashboard/users

const page = () => {
  return (
    <div>
        <h1> Dashboard Users</h1>
        <ul className='mt-10'>
            <li>
                <Link href="/dashboard/users/1"> User1 </Link>
                
                User 1</li>
                <li>
                <Link href="/dashboard/users/2"> User2 </Link></li>   
                <li><Link href="/dashboard/users/3"> User3 </Link></li>
                <li><Link href="/dashboard/users/4"> User4 </Link>
                </li>

        </ul>


    </div>
  )
}

export default page