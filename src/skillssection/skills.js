import { Heading,Box,Flex,RadioCards,Text, Progress} from '@radix-ui/themes'
import React from 'react'
import './skills.css'

export default function Skills() {
  return (

    <div className='skillssection'>
<hr></hr>

<Heading size='9' weight='medium' className='heading' style={{color:'white'}}><hr ></hr>Skills<hr ></hr></Heading>

<hr></hr>
<div className='skills'>


  <RadioCards.Root defaultValue="1"  size='3' >
  <Flex direction="row" gap='4' align='center' justify='center' wrap='wrap'>
  <Box  width='350px'>
    <RadioCards.Item  value="1" disabled style={{color:'white'}}>
      <Flex direction="column" width="100%" gap='5'>
        <Text weight="bold">Html/Css</Text>
        <Text> creating dynamic, user-friendly web applications</Text>
        <Progress value={75} size="3" />


      </Flex>
    </RadioCards.Item></Box>
    <Box  width='350px'>
    <RadioCards.Item value="2" disabled style={{color:'white'}}>
      <Flex direction="column" width="100%"  gap='5'>
      <Text weight="bold">JavaScript</Text>
      <Text>  I have a foundational understanding of js programming, which enhances my problem-solving skills and technical versatility</Text>
        <Progress value={85} size="3" />
      </Flex>
    </RadioCards.Item></Box>
    <Box  width='350px'>
    <RadioCards.Item value="3" disabled style={{color:'white'}}>
    <Flex direction="column" width="100%"  gap='5'>
      <Text weight="bold">Reactjs</Text>
      <Text>Crafting modern, scalable applications,Designing clean, responsive layouts</Text>
        <Progress value={85} size="3" />
      </Flex>
    </RadioCards.Item></Box>
    <Box  width='350px'>
    <RadioCards.Item value="4"  disabled style={{color:'white'}}>
    <Flex direction="column" width="100%"  gap='5'>
      <Text weight="bold">AfterEffects</Text>
      <Text>Bringing content to life with three year of experience in Adobe After Effects</Text>
        <Progress value={85} size="3" />
      </Flex>
    </RadioCards.Item></Box>
    <Box  width='350px'>
    <RadioCards.Item value="4"  disabled style={{color:'white'}}>
    <Flex direction="column" width="100%"  gap='5'>
      <Text weight="bold">Sqlite</Text>
      <Text> Managing and creating databases Using Sqlite</Text>
        <Progress value={90} size="3" />
      </Flex>
    </RadioCards.Item></Box>
    </Flex>
  </RadioCards.Root>




</div>
    </div>
  )
}
