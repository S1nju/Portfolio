import { Flex, Heading,Link } from '@radix-ui/themes'
import React from 'react'
import './style.css'
import { links } from '../assets/links'
export default function Header() {

  return (
    <div className="header">
      <Flex justify='between' align='center'>
<Heading size="5" as="h1" weight="medium">S1nju</Heading>
<Flex gap ='3'>
<Link size='2' href = {`mailto:${links.email}`} ><i className="fa-solid fa-envelope"></i> Email</Link>
<Link   size='2'  href={links.github}><i className="fa-brands fa-github"></i> Github</Link>
<Link  size='2'  href={links.linkdin}><i className="fa-brands fa-linkedin"></i> Linkedin</Link></Flex>
</Flex>
    </div>

  )
}
