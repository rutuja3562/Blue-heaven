import {
  Box,
  Checkbox,
  CheckboxGroup,
  Flex,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { fetchData } from "../Redux/product/action";
import { ProductComponent } from "./ProductComponent";
import { useDispatch, useSelector } from "react-redux/es/exports";
export const Product = () => {
  const [brandValue, setBrandValue] = useState();
  const [products, setProducts] = useState([]);
  const [packSize, setPackSize] = useState();
  const [priceValue, setPriceValue] = useState();
  const product = useSelector((state) => state.products.product);
  // console.log(":LLL:",product)
  const dispatch = useDispatch();
  useEffect(() => {
    if (product?.length === 0) {
      dispatch(fetchData());
    }
  }, [dispatch, product?.length]);
  useEffect(()=>{
    getdata();
  },[])
  const getdata = async () => {
    await fetch("https://blueheavenapi.herokuapp.com/products")
      .then((data) => data.json())
      .then((data) => {
        //  dispatch(fetchData(data));
        setProducts(data);
        // console.log("data", data);
      })
      .catch((err) => {
        console.log("e", err);
      });
  };
  return (
    <Box width={"75%"} margin="auto" mt="1rem">
      <Box mt={"20px"} mb={"20px"}></Box>
      <Box border={"1px solid #e8e8e8"}>
        <Flex>
          <Box width={"15%"} textAlign={"left"} m={"1rem"} fontWeight={300}>
            <Text
              fontSize={"14px"}
              fontWeight={500}
              borderBottom={"1px solid #e8e8e8"}
            >
              Category
            </Text>
            <Text fontSize={"12px"} fontWeight={500}>
              Fruites & Vegetables
            </Text>
            <Flex>
              {/*  <FilterComponent />*/}
              <Box width={"100%"} mt={"1.5rem"}>
                <Box mb="1rem" borderBottom="1px solid #e8e8e8" pb={"1rem"}>
                  <Box mb={"2rem"}>
                    <select
                      id="cars1"
                      // onChange={HandleSelect}
                    >
                      <option>price</option>
                      <option value="low">Low To High</option>
                      <option value="high">High To Low</option>
                    </select>
                  </Box>
                  <CheckboxGroup
                    colorScheme="green"
                    defaultValue={brandValue}
                    // onChange={brandValueHandler}
                  >
                    <Text fontSize={"14px"} fontWeight={"500"} mb={"1rem"}>
                      Brand
                    </Text>
                    <VStack
                      direction={["column", "row"]}
                      alignItems={"baseline"}
                      fontSize={"12px"}
                      fontWeight={"375"}
                    >
                      <Checkbox value="Organic">Organic</Checkbox>
                      <Checkbox value="Hoovu Fresh">Hoovu Fresh</Checkbox>
                      <Checkbox value="Brotos">Brotos</Checkbox>
                      <Checkbox value="Fresho">Fresho</Checkbox>
                    </VStack>
                  </CheckboxGroup>
                </Box>
                <Box pb={"1rem"} mb="1rem" borderBottom="1px solid #e8e8e8">
                  <CheckboxGroup
                    colorScheme="green"
                    defaultValue={packSize}
                    // onChange={packSizeHandler}
                  >
                    <Text fontSize={"14px"} fontWeight={"500"} mb={"1rem"}>
                      Pack Size
                    </Text>
                    <VStack
                      direction={["column", "row"]}
                      alignItems={"baseline"}
                      fontSize={"12px"}
                      fontWeight={"375"}
                    >
                      <Checkbox value="1">1 kg</Checkbox>
                      <Checkbox value="2">2 pcs</Checkbox>
                      <Checkbox value="40">40cm</Checkbox>
                      <Checkbox value="100">100 g</Checkbox>
                      <Checkbox value="250">250 g</Checkbox>
                    </VStack>
                  </CheckboxGroup>
                </Box>
                <Box pb={"1rem"} mb="1rem" borderBottom="1px solid #e8e8e8">
                  <CheckboxGroup
                    colorScheme="green"
                    defaultValue={priceValue}
                    // onChange={priceHandler}
                  >
                    <Text fontSize={"14px"} fontWeight={"500"} mb={"1rem"}>
                      Price
                    </Text>
                    <VStack
                      direction={["column", "row"]}
                      alignItems={"baseline"}
                      fontSize={"12px"}
                      fontWeight={"375"}
                    >
                      <Checkbox value="0-50">0-50</Checkbox>
                      <Checkbox value="51-100">51-100</Checkbox>
                      <Checkbox value="101-150">101-150</Checkbox>
                    </VStack>
                  </CheckboxGroup>
                </Box>
              </Box>
            </Flex>
          </Box>
          <Box width="85%" borderLeft={"1px solid #e8e8e8"}>
            <Stack
              width={"97%"}
              direction="row"
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <Text
                textAlign={"left"}
                m={"1rem"}
                fontSize={"20px"}
                fontWeight={400}
              >
                Fruits & Vegetables ({products.length})
              </Text>
            </Stack>
            <Flex flexWrap={"wrap"} borderTop={"1px solid #e8e8e8"}>
              {products.map((e) => {
                return <ProductComponent key={e._id} props={e} />;
              })}
            </Flex>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};
