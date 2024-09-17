import { Box, Card, Heading, Inset, Text,Strong, Flex,Button, Link } from '@radix-ui/themes'
import React, { useState } from 'react'
import './project.css'
import { projects } from './projects'
import 'bootstrap/dist/css/bootstrap.css';

export default function Project() {
  const [more,setmore]=useState(false)

  function handleload(){
    setmore(prev=>!prev)
  }
  const projectcards = projects.map((item,key)=>

 {if (key<5) {
  return (<Box className='projectcard' key={key} maxWidth="240px"  >
  <Card size="2"  variant="surface" style={{
    height:'350px'
  }}  >
    <Inset clip="padding-box" side="top" pb="current">
      <img
        src={item.img}
        alt="Bold typography"
        style={{
          display: 'block',
          objectFit: 'cover',
          width: '100%',
          height: 140,
          backgroundColor: 'var(--gray-5)',
        }}
      />
    </Inset>
    <Flex direction='column'  height='100%'>
    <Text as="p" size="3">
      <Strong>{item.title}:</Strong> {item.discription}
    </Text>
    <Link style={{justifySelf:'end'}}  href={item.demo}> <Button size="3" variant="solid" ><i className="fa-solid fa-arrow-up-right-from-square"></i>View Demo</Button></Link></Flex>
  </Card>  </Box> )
 }else{
  return ( <Box className='projectcard' maxWidth="240px"   key={key} style={{display:(more)?'block':'none'}}>
  <Card size="2" style={{
    height:'350px'
  }} >
    <Inset clip="padding-box" side="top" pb="current">
      <img
        src={item.img}
        alt="Bold typography"
        style={{
          display: 'block',
          objectFit: 'cover',
          width: '100%',
          height: 140,

          backgroundColor: 'var(--gray-5)',
        }}
      />
    </Inset>
    <Text as="p" size="3">
      <Strong>{item.title}:</Strong> {item.discription}
    </Text>
    <Link href={item.demo}> <Button  size="3" variant="solid" ><i className="fa-solid fa-arrow-up-right-from-square"></i>View Demo</Button></Link>
  </Card>  </Box>
)
 }}




  )

  return (
    <div className='project'>



<Heading weight='medium' size='9' ><hr></hr>Projects<hr></hr></Heading>


  <Flex direction='row' align='center' justify='center' wrap='wrap' gap='3'>
{projectcards}



  </Flex>
  {more? <Button size="3" variant="solid" onClick={handleload}>Show less</Button> :<Button size="3" variant="solid" onClick={handleload}>Show more</Button>}

    </div>
  )
}
