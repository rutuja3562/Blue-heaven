import React from 'react'
import { Box ,Flex,Link,Stack,Text} from '@chakra-ui/react'
import {
  TiSocialFacebook,
  TiSocialPinterest,
  TiSocialTwitter,
  AiFillApple
} from "react-icons/ti";
import { GrApple } from "react-icons/gr";
import { BsInstagram } from "react-icons/bs";
import { FaRobot } from "react-icons/fa";
import { BiMobile } from "react-icons/bi";

export const Footer = () => {
  return (
    <Box width="75%" margin="auto" mt="1rem">
      <Flex justifyContent={"space-between"}>
        <Box>
          <Text>We are here to help you!</Text>
        </Box>
        <Flex>
          <Flex alignItems={"center"} justifyContent="center">
            <Text>Go Mobile : </Text>
            <Box>
              <GrApple size="27px" />
            </Box>
            <Box>
              <FaRobot size="27px" />
            </Box>
            <Box>
              <BiMobile size="27px" />
            </Box>
          </Flex>
          <Flex alignItems={"center"} justifyContent="center">
            <Text>Follow us on : </Text>
            <Flex>
              <Box
                bg={"#3b5998"}
                boxSize={"30px"}
                borderRadius={"50%"}
                mr={"1rem"}
              >
                <TiSocialFacebook color="white" size={"30px"} />
              </Box>

              <Box
                bg={"blue"}
                boxSize={"30px"}
                borderRadius={"50%"}
                mr={"1rem"}
              >
                <TiSocialTwitter color="white" size={"30px"} />
              </Box>
              <Flex
                bg={"#517fa4"}
                boxSize={"30px"}
                borderRadius={"50%"}
                textAlign="center"
                alignItems={"center"}
                justifyContent={"center"}
                mr={"1rem"}
              >
                <BsInstagram color="white" size={"20px"} />
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Flex
        columns={{ base: 1, sm: 2, md: 4 }}
        spacing={0}
        width={"100%"}
        fontSize={"14px"}
        fontWeight={"400"}
        padding={"1rem"}
      >
        <Stack align={"flex-start"} w={"20%"} textDecoration="none">
          <Text></Text>
          <Text>About Us</Text>
          <Text href={"#"}>Join Sales</Text>
          <Text href={"#"}>Success Stories</Text>
          <Text href={"#"}>Press Section</Text>
          <Text href={"#"}>Advertise with Us</Text>
          <Text href={"#"}>Jobs & Careers</Text>
        </Stack>
        <Stack align={"flex-start"} w={"20%"}>
          <Text></Text>
          <Text>Help</Text>
          <Text href={"#"}>Join Sales</Text>
          <Text href={"#"}>Feedback</Text>
          <Text href={"#"}>Complaints</Text>
          <Text href={"#"}>customer Care</Text>
          <Text href={"#"}>Contact Us</Text>
        </Stack>
        <Stack align={"flex-start"} w={"20%"}>
          <Text></Text>
          <Text>Suppliers Tool Kit</Text>
          <Text href={"#"}>Sell on IndiaMART</Text>
          <Text href={"#"}>Latest BuyLead</Text>
          <Text href={"#"}>Learning Center</Text>
          <Text href={"#"}>Ship With IndiaMart</Text>
        </Stack>
        <Stack align={"flex-start"} w={"20%"}>
          <Text></Text>
          <Text>Buyers Tool Kit</Text>
          <Text href={"#"}>POst Your Requirement</Text>
          <Text href={"#"}>Products You Buy</Text>
          <Text href={"#"}>Search Products & Suppliers </Text>
          <Text href={"#"}>Pay With IndiaMART</Text>
        </Stack>
        <Stack align={"flex-start"} w={"20%"}>
          <Text></Text>
          <Text>Events</Text>
          <Text href={"#"}>Tred Shows</Text>
          <Text href={"#"}>Conferences</Text>
          <Text href={"#"}>Events by Country </Text>
          <Text href={"#"}>Pay With IndiaMART</Text>
        </Stack>
      </Flex>
    </Box>
  );
}
