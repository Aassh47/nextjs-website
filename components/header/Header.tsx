"use client";

import { Box, Button, Flex, Heading, HStack, Image, Link, List, ListItem } from "@chakra-ui/react";
import { PhoneIcon, AddIcon, WarningIcon, SearchIcon, MoonIcon } from '@chakra-ui/icons'

import React from 'react'
// import Link from "next/link";

export default function Header() {
  return ( 
    <Box pt={5}>
      {/* left area */}
      <Flex justifyContent={"space-around"} alignItems={"center"}>
      <Box>
        <HStack>
        <Image src="/images/Logo.webp" alt="logo"/>
        <List>
          <HStack align={"center"} spacing={10} fontWeight="bold" ml="40px">
          <ListItem>Home</ListItem>
          <ListItem>About Us</ListItem>
          <ListItem>Contact</ListItem>
          </HStack>
        </List>
        </HStack>
      </Box>
  
      {/* right area */}
  
      <Box>
        
       <Box pl="15" as="span">
      <SearchIcon w="25" h="25" />
      </Box> 
  
      <Box px="15" as="span">
      <MoonIcon w="25" h="25"/>
      </Box> 
      <Link href="https://www.piaic.org/" target={"_blank"}>
      <Button variant={"outline"}>Go to PIAIC</Button>
      </Link>
      
      </Box>
      </Flex>
    </Box>
    
    );
  }
  
  

