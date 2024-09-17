import { Heading,Box,Flex,Text,RadioCards } from '@radix-ui/themes'
import React from 'react'
import './education.css'
export default function Education() {
  return (
    <div className='education'>
   <Heading weight='medium' size='9' ><hr></hr>Education<hr></hr></Heading>
   <div className='contente'>
   <div className='leftcards'>
   <Box maxWidth="600px">
  <RadioCards.Root defaultValue="1" disabled size='3'  style={{display:'flex',flexFlow:'column'}}>
    <RadioCards.Item value="1" >
      <Flex direction="column" width="100%" style={{color:'black'}}>
        <Text weight="bold"><i className="fa-solid fa-school"></i>   Bac 2022</Text>
        <Text>Baccalauréat 2022 scientifique mention bien</Text>
        <Text weight='medium'><i className="fa-solid fa-location-dot"></i> Mouloud kacem ain El Turk, Oran,algeria</Text>
      </Flex>
    </RadioCards.Item>
    <RadioCards.Item value="2"style={{opacity:'0'}} >
      <Flex direction="column" width="100%">
        <Text weight="bold">6-core CPU</Text>
        <Text>24 GB RAM</Text>
      </Flex>
    </RadioCards.Item>
    <RadioCards.Item value="1">
    <Flex direction="column" width="100%"  style={{color:'black'}}>
        <Text weight="bold"><i className="fa-solid fa-school"></i> Engineering Schools  (higher cycle)</Text>
        <Text>Engineering and Management of information systems  2025-2028  </Text>
        <Text weight='medium'><i className="fa-solid fa-location-dot"></i> Ecole Nationale Polythechnique d'Oran</Text>
      </Flex>
    </RadioCards.Item>
  </RadioCards.Root>
</Box>

   </div>
   <div className='middleline'></div>
   <div className='rightcards'>
   <Box maxWidth="600px">
  <RadioCards.Root  size='3'  disabled style={{display:'flex',flexFlow:'column'}}>
    <RadioCards.Item value="1" style={{opacity:'0'}}>
      <Flex direction="column" width="100%" >
        <Text weight="bold">8-core CPU</Text>
        <Text>32 GB RAM</Text>
      </Flex>
    </RadioCards.Item>
    <RadioCards.Item value="1">
      <Flex direction="column" width="100%"  style={{color:'black'}}>
        <Text weight="bold"><i className="fa-solid fa-school" ></i> Engineering Schools with  (integrated preparatory cycle)</Text>
        <Text>2 years  preparatory cycle 2022-2024  </Text>
        <Text weight='medium'><i className="fa-solid fa-location-dot"></i> Essa-Tlemcen</Text>
      </Flex>
    </RadioCards.Item>
    <RadioCards.Item value="3" style={{opacity:'0'}} >
      <Flex direction="column" width="100%">
        <Text weight="bold">4-core CPU</Text>
        <Text>16 GB RAM</Text>
      </Flex>
    </RadioCards.Item>
  </RadioCards.Root>
</Box>

   </div></div>

     </div>
  )
}
