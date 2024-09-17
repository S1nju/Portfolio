import {Avatar, Heading,Link,SegmentedControl } from '@radix-ui/themes'
import { links } from '../assets/links'

import React from 'react'
import './contact.css'

export default function Contact() {


  return (
    <div className='contact'>
         <Heading align='center' size='9' weight='medium' ><hr></hr>Contact Me<hr></hr></Heading>
         <br></br>
         <br></br>
         <br></br>
         <br></br>

          <Avatar style={{scale:'2' }}
 src={require('../assets/skills.gif')}
    fallback="A"
    size='9'

  />
         <br></br>
         <br></br>
         <br></br>
         <br></br>     <br></br>
         <SegmentedControl.Root defaultValue="inbox" color="gray"  size="3" radius="full">
  <SegmentedControl.Item className='link' value="Instgram"><Link  href="#"><i className="fa-brands fa-instagram"></i></Link></SegmentedControl.Item>
  <SegmentedControl.Item value="Facebook"><Link  href="#"><i className="fa-brands fa-facebook"></i></Link></SegmentedControl.Item>
  <SegmentedControl.Item value="Email"><Link  href = {`mailto:${links.email}`}><i className="fa-regular fa-envelope"></i></Link></SegmentedControl.Item>
  <SegmentedControl.Item value="Github"><Link  href={links.github}><i className="fa-brands fa-github"></i></Link></SegmentedControl.Item>

  <SegmentedControl.Item value="Linkdin"><Link  href={links.linkdin}><i className="fa-brands fa-linkedin"></i></Link></SegmentedControl.Item>
</SegmentedControl.Root>




    </div>
  )
}
