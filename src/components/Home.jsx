import React from "react";
import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import "./styles/Home.css";

export const Home = () => {
  return (
    <>
      <Box width="100%" margin={"auto"} marginTop="20px">
        <Flex width="75%" margin={"auto"}>
          <Image src="https://3.imimg.com/data3/BX/CS/MY-3792183/foundation-250x250.jpg" />
          <Image src="https://3.imimg.com/data3/BK/MD/MY-3792183/01-250x250.jpg" />
          <Image src="https://3.imimg.com/data3/RK/XF/MY-3792183/01-250x250.jpg" />
          <Image src="https://3.imimg.com/data3/ML/RO/MY-3792183/mascara-250x250.jpg" />
          <Image src="https://3.imimg.com/data3/NL/QG/MY-3792183/fruit-bleach-250x250.jpg" />
        </Flex>
        <Heading as={"h2"} fontWeight={"500"}>
          About Us
        </Heading>
        <Box width="75%" margin={"auto"}>
          <Text>
            Blue Heaven Cosmetics was started in 1974 by two young brothers,
            company MD's Mr.Charanjit Singh and Mr. Gurnam Singh with big dreams
            and ambitions. By virtue of their determination and commitment Blue
            Heaven Cosmetics has been able to experience such an eventful
            journey revolutionizing the Indian decorative cosmetics industry.
          </Text>
        </Box>
        <Box width={"75%"} margin="auto" mt={"2rem"}>
          <Text fontSize={"24px"} mb={"2rem"}>
            Products & Services
          </Text>
          <Flex justifyContent={"space-between"} flexWrap="wrap">
            <Box width={"23%"} objectFit="contain" className="transition">
              <Box>
                <img
                  src={
                    "https://3.imimg.com/data3/BX/CS/MY-3792183/foundation-250x250.jpg"
                  }
                  alt="img10"
                  width={"60%"}
                />
              </Box>
              <Box>
                <Heading p="0" m="2">
                  Makeup
                </Heading>
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
                  View Details
                </Text>
              </Box>
            </Box>
            <Box width={"23%"} objectFit="contain" className="transition">
              <Box>
                <img
                  src={
                    "https://4.imimg.com/data4/QY/OX/GLADMIN-3792183/1-250x250.jpg"
                  }
                  alt="img10"
                  width={"79%"}
                />
              </Box>
              <Box>
                <Heading p="0" m="2">
                  Lipstick
                </Heading>
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
                  View Details
                </Text>
              </Box>
            </Box>
            <Box width={"23%"} objectFit="contain" className="transition">
              <Box>
                <img
                  src={
                    "https://3.imimg.com/data3/RK/XF/MY-3792183/01-250x250.jpg"
                  }
                  alt="img10"
                  width={"87%"}
                />
              </Box>
              <Box>
                <Heading p="0" m="2">
                  Lips Products
                </Heading>
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
                  View Details
                </Text>
              </Box>
            </Box>
            <Box width={"23%"} className="transition">
              <Box>
                <img
                  src={
                    "https://3.imimg.com/data3/NL/QG/MY-3792183/fruit-bleach-500x500.jpg"
                  }
                  alt="img10"
                  width={"86%"}
                />
              </Box>
              <Box>
                <Heading p="0" m="2">
                  Bleach Cream
                </Heading>
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
                  View Details
                </Text>
              </Box>
            </Box>
            <Box
              width={"23%"}
              objectFit="contain"
              className="transition"
              mt={"40px"}
            >
              <Box>
                <img
                  src={
                    "https://3.imimg.com/data3/QC/FL/MY-3792183/fairness-scrub-250x250.jpg"
                  }
                  alt="img10"
                  width={"60%"}
                />
              </Box>
              <Box>
                <Heading p="0" m="2">
                  Scrub
                </Heading>
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
                  View Details
                </Text>
              </Box>
            </Box>

            <Box
              width={"23%"}
              objectFit="contain"
              mt={"40px"}
              className="transition"
            >
              <Box>
                <img
                  src={
                    "https://3.imimg.com/data3/US/UJ/MY-3792183/lip-balm-250x250.jpg"
                  }
                  alt="img10"
                  width={"80%"}
                />
              </Box>
              <Box>
                <Heading p="0" m="2">
                  LipCare
                </Heading>
                <Text p="0" m="2" fontSize={"16"}>
                  Lip Balm
                </Text>
                <Text fontSize={"16"} p="0" m="2">
                  Lip Guard
                </Text>
                <Text fontSize={"16"} p="0" m="2"></Text>
                <Text fontSize={"16"} color="teal" fontWeight={"500"} mt="40px">
                  View Details
                </Text>
              </Box>
            </Box>
            <Box
              width={"23%"}
              objectFit="contain"
              mt={"40px"}
              className="transition"
            >
              <Box height={"60%"} objectFit="cover">
                <img
                  src={
                    "https://3.imimg.com/data3/ML/RO/MY-3792183/mascara-250x250.jpg"
                  }
                  alt="img10"
                  width={"60%"}
                  height="58%"
                />
              </Box>
              <Box>
                <Heading p="0" m="2">
                  Eyes Products
                </Heading>
                <Text p="0" m="2" fontSize={"16"}>
                  Maskara
                </Text>
                <Text fontSize={"16"} p="0" m="2">
                  Eye Shadow
                </Text>
                <Text fontSize={"16"} p="0" m="2">
                  Eye Liner
                </Text>
                <Text fontSize={"16"} color="teal" fontWeight={"500"}></Text>
                <Text fontSize={"16"} color="teal" fontWeight={"500"} mt="-6px">
                  View Details
                </Text>
              </Box>
            </Box>
            <Box
              width={"23%"}
              objectFit="contain"
              mt={"40px"}
              className="transition"
            >
              <Box height={"60%"} objectFit="contain">
                <img
                  src={
                    "https://3.imimg.com/data3/WJ/EO/MY-3792183/01-250x250.jpg"
                  }
                  alt="img10"
                  width={"60%"}
                  height="58%"
                />
              </Box>
              <Box>
                <Heading p="0" m="2">
                  LipCare
                </Heading>
                <Text p="0" m="2" fontSize={"16"}>
                  Lip Balm
                </Text>
                <Text fontSize={"16"} p="0" m="2">
                  Lip Guard
                </Text>
                <Text fontSize={"16"} p="0" m="2"></Text>
                <Text fontSize={"16"} color="teal" fontWeight={"500"} mt="35px">
                  View Details
                </Text>
              </Box>
            </Box>
          </Flex>
        </Box>
        <Box height={"350px"}></Box>
      </Box>
    </>
  );
};
