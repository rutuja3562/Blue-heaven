import React from "react";
import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import "./styles/Home.css";
import { Link } from "react-router-dom";
export const Home = () => {
  return (
    <>
      <Box width="100%" margin={"auto"} marginTop="20px">
        <Flex width="75%" margin={"auto"} mb="5rem">
          <Box>
            <Image src="https://3.imimg.com/data3/BX/CS/MY-3792183/foundation-250x250.jpg" />
            <Text bg=""> Foundation</Text>
          </Box>
          <Box>
            <Image src="https://3.imimg.com/data3/BK/MD/MY-3792183/01-250x250.jpg" />
            <Text>Nail Paints</Text>
          </Box>
          <Box>
            <Image src="https://3.imimg.com/data3/RK/XF/MY-3792183/01-250x250.jpg" />
            <Text>Lip Gloss</Text>
          </Box>
          <Box>
            <Image src="https://3.imimg.com/data3/QC/FL/MY-3792183/fairness-scrub-250x250.jpg" />
            <Text>Fairness Scrub</Text>
          </Box>
          <Box>
            <Image src="https://3.imimg.com/data3/NL/QG/MY-3792183/fruit-bleach-250x250.jpg" />
            <Text>Fruit Bleech</Text>
          </Box>
        </Flex>
        <Heading as={"h3"} fontWeight={"400"} mb="2rem">
          About Us
        </Heading>
        <Box width="75%" margin={"auto"} mb="2rem">
          <Text>
            Blue Heaven Cosmetics was started in 1974 by two young brothers,
            company MD's Mr.Charanjit Singh and Mr. Gurnam Singh with big dreams
            and ambitions. By virtue of their determination and commitment Blue
            Heaven Cosmetics has been able to experience such an eventful
            journey revolutionizing the Indian decorative cosmetics industry.
          </Text>
        </Box>
        <Box width={"75%"} margin="auto" mt={"2rem"} mb="2rem">
          <Heading as={"h3"} fontWeight={"400"} mb="2rem">
            Products & Services
          </Heading>
          <Flex justifyContent={"space-between"} flexWrap="wrap">
            <Box width={"23%"} objectFit="contain" className="transition">
              <Flex
                height={"58%"}
                objectFit="contain"
                alignItems={"center"}
                justifyContent="center"
              >
                <img
                  src={
                    "https://3.imimg.com/data3/BX/CS/MY-3792183/foundation-250x250.jpg"
                  }
                  alt="img10"
                  width={"60%"}
                />
              </Flex>
              <Box pb="40px">
                <Text p="0" m="2" fontSize={"20px"} fontWeight={500}>
                  Makeup
                </Text>
                <Text p="0" m="2" fontSize={"16"}>
                  Foundation
                </Text>
                <Text fontSize={"16"} p="0" m="2">
                  Compact
                </Text>
                <Text fontSize={"16"} p="0" m="2">
                  Pan Cake foundation
                </Text>
                <Text fontSize={"16"} color="teal" fontWeight={"500"}>
                  <Link to="/product">View Details</Link>
                </Text>
              </Box>
            </Box>
            <Box width={"23%"} objectFit="contain" className="transition">
              <Flex
                height={"58%"}
                objectFit="contain"
                alignItems={"center"}
                justifyContent="center"
              >
                <img
                  src={
                    "https://4.imimg.com/data4/QY/OX/GLADMIN-3792183/1-250x250.jpg"
                  }
                  alt="img10"
                  width={"79%"}
                />
              </Flex>
              <Box>
                <Text p="0" m="2" fontSize={"20px"} fontWeight={500}>
                  Lipstick
                </Text>
                <Text fontSize={"16"} p="0" m="2">
                  Baked Break Lipstick
                </Text>
                <Text fontSize={"16"} p="0" m="2">
                  Ceries Pink Lipstick
                </Text>
                <Text fontSize={"16"} p="0" m="2">
                  Coral Red Lipstick
                </Text>
                <Text fontSize={"16"} color="teal" fontWeight={"500"}>
                  <Link to="/product">View Details</Link>
                </Text>
              </Box>
            </Box>
            <Box width={"23%"} className="transition">
              <Flex
                height={"58%"}
                objectFit="contain"
                alignItems={"center"}
                justifyContent="center"
              >
                <img
                  src={
                    "https://3.imimg.com/data3/RK/XF/MY-3792183/01-250x250.jpg"
                  }
                  alt="img10"
                  width={"87%"}
                />
              </Flex>
              <Box>
                <Text p="0" m="2" fontSize={"20px"} fontWeight={500}>
                  Lips Products
                </Text>
                <Text fontSize={"16"} p="0" m="2">
                  Lip Gloss
                </Text>
                <Text fontSize={"16"} p="0" m="2">
                  Lip Stick
                </Text>
                <Text fontSize={"16"} p="0" m="2">
                  Lip Liner
                </Text>
                <Text fontSize={"16"} color="teal" fontWeight={"500"}>
                  <Link to="/product">View Details</Link>
                </Text>
              </Box>
            </Box>
            <Box width={"23%"} className="transition">
              <Flex
                height={"58%"}
                objectFit="contain"
                alignItems={"center"}
                justifyContent="center"
              >
                <img
                  src={
                    "https://3.imimg.com/data3/NL/QG/MY-3792183/fruit-bleach-500x500.jpg"
                  }
                  alt="img10"
                  width={"86%"}
                />
              </Flex>
              <Box pb="40px">
                <Text p="0" m="2" fontSize={"20px"} fontWeight={500}>
                  Bleach Cream
                </Text>
                <Text fontSize={"16"} p="0" m="2">
                  Fruit Bleach
                </Text>
                <Text fontSize={"16"} p="0" m="2">
                  Gold Bleach
                </Text>
                <Text fontSize={"16"} p="0" m="2">
                  Personal Bleach
                </Text>
                <Text fontSize={"16"} color="teal" fontWeight={"500"}>
                  <Link to="/product">View Details</Link>
                </Text>
              </Box>
            </Box>
            <Box width={"23%"} className="transition" mt={"40px"} pb="40px">
              <Flex
                objectFit="contain"
                height={"58%"}
                alignItems={"center"}
                justifyContent="center"
              >
                <img
                  src={
                    "https://3.imimg.com/data3/QC/FL/MY-3792183/fairness-scrub-250x250.jpg"
                  }
                  alt="img10"
                  width={"60%"}
                />
              </Flex>
              <Box>
                <Text p="0" m="2" fontSize={"20px"} fontWeight={500}>
                  Scrub
                </Text>
                <Text p="0" m="2" fontSize={"16"}>
                  Fairness Scrub
                </Text>
                <Text fontSize={"16"} p="0" m="2">
                  Mix Fruit Scrub
                </Text>
                <Text fontSize={"16"} p="0" m="2">
                  Facial Scrub
                </Text>
                <Text fontSize={"16"} color="teal" fontWeight={"500"}>
                  <Link to="/product">View Details</Link>
                </Text>
              </Box>
            </Box>

            <Box width={"23%"} mt={"40px"} className="transition">
              <Flex
                height={"58%"}
                objectFit="contain"
                alignItems={"center"}
                justifyContent="center"
              >
                <img
                  src={
                    "https://3.imimg.com/data3/US/UJ/MY-3792183/lip-balm-250x250.jpg"
                  }
                  alt="img10"
                  width={"80%"}
                />
              </Flex>
              <Box pb="40px">
                <Text p="0" m="2" fontSize={"20px"} fontWeight={500}>
                  LipCare
                </Text>
                <Text p="0" m="2" fontSize={"16"}>
                  Lip Balm
                </Text>
                <Text fontSize={"16"} p="0" m="2">
                  Lip Guard
                </Text>
                <Text fontSize={"16"} p="0" m="2"></Text>
                <Text fontSize={"16"} color="teal" fontWeight={"500"}>
                  <Link to="/product">View Details</Link>
                </Text>
              </Box>
            </Box>
            <Box width={"23%"} mt={"40px"} className="transition">
              <Flex
                height={"58%"}
                objectFit="contain"
                alignItems={"center"}
                justifyContent="center"
              >
                <img
                  src={
                    "https://3.imimg.com/data3/ML/RO/MY-3792183/mascara-250x250.jpg"
                  }
                  alt="img10"
                  width={"60%"}
                  height="100%"
                />
              </Flex>
              <Box pb="40px">
                <Text p="0" m="2" fontSize={"20px"} fontWeight={500}>
                  Eyes Products
                </Text>
                <Text p="0" m="2" fontSize={"16"}>
                  Maskara
                </Text>

                <Text fontSize={"16"} p="0" m="2">
                  Eye Liner
                </Text>

                <Text fontSize={"16"} color="teal" fontWeight={"500"} mt="40px">
                  <Link to="/product">View Details</Link>
                </Text>
              </Box>
            </Box>
            <Box
              flexDirection={"column"}
              width={"23%"}
              mt={"40px"}
              className="transition"
            >
              <Flex
                height={"58%"}
                objectFit="contain"
                alignItems={"center"}
                justifyContent="center"
              >
                <img
                  src={
                    "https://3.imimg.com/data3/WJ/EO/MY-3792183/01-250x250.jpg"
                  }
                  alt="img10"
                  width={"60%"}
                />
              </Flex>
              <Box pb="40px">
                <Text p="0" m="2" fontSize={"20px"} fontWeight={500}>
                  Traditional Items
                </Text>
                <Text p="0" m="2" fontSize={"16"}>
                  Sindoor
                </Text>
                <Text fontSize={"16"} p="0" m="2">
                  Kajal
                </Text>
                <Text fontSize={"16"} p="0" m="2"></Text>
                <Text fontSize={"16"} color="teal" fontWeight={"500"} mt="40px">
                  <Link to="/product">View Details</Link>
                </Text>
              </Box>
            </Box>
          </Flex>
        </Box>
      </Box>
    </>
  );
};
