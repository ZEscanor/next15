import React from 'react'


// this file is wrapped in square brackets to signify that is dynamic
// ex dashboard/users/[userId]

const page = ({params} : {params :{id : string}}) => {

  const {id} = params;

  return (
    <div>User Profile : {id}</div>
  )
}

export default page