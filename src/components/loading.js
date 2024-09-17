
import { Flex, Spinner } from '@radix-ui/themes';
import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom';

import './style.css'
export default function Loading() {
  const [loading,setloading]=useState(true);
  console.log(loading)

useEffect(()=>{
  const onPageLoad = () => {
    console.log('page loaded');
    setloading(false);
    // do something else
  };

  // Check if the page has already loaded
  if (document.readyState === 'complete') {
    onPageLoad();
  } else {
    window.addEventListener('load', onPageLoad, false);
    // Remove the event listener when component unmounts
    return () => window.removeEventListener('load', onPageLoad);
  }


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
