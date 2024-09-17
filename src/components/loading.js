
import { Flex, Spinner } from '@radix-ui/themes';
import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom';

import './style.css'
export default function Loading() {
  const [loading,setloading]=useState(true);
  console.log(loading)

useEffect(()=>{

  setloading(false);
},[])


if(!loading){
  return <Outlet></Outlet>
}else{
return  (
<Flex direction='column' align='center' justify='center' height='100vh'>
<Spinner loading={true} size="3" />

</Flex>

)
}




}
