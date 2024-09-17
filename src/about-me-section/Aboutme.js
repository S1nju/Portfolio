import { Avatar, Button, Flex, Text } from '@radix-ui/themes'
import React from 'react'
import ParticlesComponent from '../components/particle'
import './abtme.css'


export default function Aboutme() {
  return (


    <div style={{padding:'20px',
    display:'flex',

    flexFlow:'column wrap',
    alignItems:'center',

    justifyContent:'center'


    }} className='abtme'>




<ParticlesComponent id='particles' ></ParticlesComponent>

  <Avatar
   src={require('../assets/avatar.png')}
    fallback="A"
    size='9'
    style={{opacity:'0'}}
  />
  <Avatar
   src={require('../assets/avatar.png')}
    fallback="A"
    size='5'
    style={{opacity:'0'}}
  />
      <div style={{}}>
      <Flex gap='4' align='start' direction='column'  wrap='wrap' >
      <Avatar
   src={require('../assets/avatar.png')}
    fallback="A"
    size='9'
    style={{zIndex:'1'}}
  />
       <Text weight='medium'  wrap='wrap' >👋 Hi there! I'm a Front-End Developer with a passion for creating dynamic, user-friendly web applications using React.js.
          With one year of hands-on experience, I specialize in leveraging React Bootstrap and Material UI to build responsive and intuitive interfaces.</Text>

          <Button size="3" variant="solid"> Let's Connect</Button></Flex>
          </div>


    </div>
  )
}
