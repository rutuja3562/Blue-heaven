import {
  Box,
  Stack,
  Text,
  Image,
  Flex,
  useColorModeValue,
  Link,
  ListItem,
  UnorderedList,
  Button,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import {
  addtocartaction,
  getSingleProduct,
} from "../Redux/product/action";
import { addtoCart } from "../Redux/product/action";
import { MdLocalShipping } from "react-icons/md";
import { Link as RouterLink } from "react-router-dom";
// import { Topnavbar } from "../Navbar/Topnavbar";
export const ProductDetails = () => {
  const dispatch = useDispatch();
  const currentProduct = useSelector((state) => state.products.currentProduct);
  console.log("curr", currentProduct);
  const { id } = useParams();
  // console.log("DDD",id)
  useEffect(() => {
    dispatch(getSingleProduct(id));
  }, []);
  const handleAddproduct = (currentProduct) => {
    dispatch(addtoCart(currentProduct));
  };

  return (
    <Box width={"100%"}>
      <Box
        width={"100%"}
        margin={"auto"}
        border="1px solid #e8e8e8"
        mt={"3rem"}
        mb={"3rem"}
        p={"1rem 1rem 2rem 0rem "}
      >
        <Flex justifyContent={"center"}>
          <Box width="25%" border="1px solid #e8e8e8">
            <Flex justifyContent={"center"}>
              <Image
                rounded={"md"}
                alt={"product image"}
                src={currentProduct.imgUrl}
                fit={"cover"}
                align={"center"}
                w={"50%"}
                mt={"18%"}
                ml="10%"
                mr={"3rem"}
                mb={"3rem"}
                justifyContent="center"
              />
            </Flex>
          </Box>
          <Box
            border={"1px solid #e8e8e8"}
            padding={"1rem"}
            ml="10%"
            mr={"3rem"}
            mb={"3rem"}
          >
            <Stack spacing={{ base: 6, md: 4 }} textAlign={"left"}>
              <Box as={"header"}>
                <Text
                  mt={"20%"}
                  lineHeight={1.1}
                  fontWeight={400}
                  fontSize={"16px"}
                  pb="0.25rem"
                >
                  {currentProduct.brand}
                </Text>
                <Text
                  lineHeight={1.1}
                  fontWeight={400}
                  fontSize={"16px"}
                  pb="0.25rem"
                >
                  {currentProduct.brand} {"  "} {currentProduct.title}
                </Text>
                <Text fontWeight={400} fontSize={"16px"}>
                  MRP : {""}{" "}
                  <span className="linethrough">Rs{currentProduct.price}</span>
                </Text>
                <Text fontWeight={400} fontSize={"18px"}>
                  Price :{" "}
                  {Math.floor(
                    currentProduct.price - (10 * currentProduct.price) / 100
                  )}
                </Text>
              </Box>
              <Box margin={"auto"}>
                <Link as={RouterLink} to={"/cart"}>
                  <Button
                    rounded={"none"}
                    w={"50%"}
                    margin="auto"
                    p={"5px"}
                    mr={"5px"}
                    border="1px solid black"
                    bg={useColorModeValue("white")}
                    color={useColorModeValue("black", "gray.900")}
                    onClick={() => handleAddproduct(currentProduct)}
                  >
                    Add to cart
                  </Button>
                </Link>
              </Box>
              <Stack
                direction="row"
                alignItems="center"
                //  border="1px"
                //  marginTop={"-20px"}
              >
                <MdLocalShipping />
                <Text>2-3 business days delivery</Text>
              </Stack>
            </Stack>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};
