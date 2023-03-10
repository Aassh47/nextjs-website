import { Box, Button, Flex, Heading, HStack, Image, Link, Text } from '@chakra-ui/react';
import React from 'react';
import { Avatar, AvatarBadge, AvatarGroup } from '@chakra-ui/react'
// import Link from 'next/link';

export default function TopContainer() {
  return (
    <Box backgroundImage={"/images/background.webp"} backgroundSize="contain" py="20" mt="5">
        <HStack>
          {/* left */}
        <Box w="50%" color={"white"} pl="44">
          <Heading fontSize={60}>Build your next idea even faster</Heading>
            <Text lineHeight={"8"}>One Year Panaverse DAO Earn as you Learn Program. Consolidating Web 3.0, Metaverse,
                 Artificial Intelligence (AI), Cloud, 
                Edge, and Ambient Computing/IoT Technologies
                </Text>
                <Box mt="5">

                <Button colorScheme={"blue"} mr="2.5">Buy now</Button>
                <Button colorScheme={"blue"} variant="outline">View components</Button>

                </Box>
                <Flex alignItems={"center"}>
                <AvatarGroup size='md' max={3} mt="5">
  <Avatar
   name="Zia Khan"
   src="https://pbs.twimg.com/profile_images/1478630664190795778/xuBHOC65_400x400.jpg" 
   />
  <Avatar
   name="Adil Altaf" 
   src="https://avatars.githubusercontent.com/u/62209503?v=4"
   />
  <Avatar
   name="Owais Ali"
    src="https://chakrademosite-ows-ali.vercel.app/me.jpg"
     />
  <Avatar
   name='Prosper Otemuyiwa'
    src='https://bit.ly/prosper-baba' 
    />
  <Avatar 
  name='Christian Nwamba'
   src='https://bit.ly/code-beast' 
   />
</AvatarGroup>
<Text mt="5" ml="3">
 Tutorial by:{" "}
 <Link target={"_blank"} color={"blue.500"} href="https://www.youtube.com/@owaisali124">
 Owais Ali 
 </Link>
 </Text>
 <Text mt="5" ml="3">
 & Created by:{" "}
 <Link target={"_blank"} color={"blue.500"} href="https://github.com/Aassh47">
 Asif Hussain
 </Link>
 </Text>
</Flex>
        </Box>
        {/* right */}
        <Box w="50%">
          <Image src="\images\banner.png"/>
        </Box>
        </HStack>
        </Box>
  );
}
