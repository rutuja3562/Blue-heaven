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
  useEffect(() => {
    getdata();
  }, []);
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
          <Box width={"100%"} textAlign={"left"} m={"1rem"} fontWeight={300}>
            <Text
              fontSize={"14px"}
              fontWeight={500}
              borderBottom={"1px solid #e8e8e8"}
            >
              Products & Services
            </Text>
            <Flex>
              <Flex width={"100%"} mt={"1.5rem"}>
                <Box width="25%">
                  <Text>Makeup</Text>
                </Box>
                <Box mb={"2rem"} width="20%">
                  <select
                    id="cars1"
                    // onChange={HandleSelect}
                  >
                    <option>price</option>
                    <option value="low">Low To High</option>
                    <option value="high">High To Low</option>
                  </select>
                </Box>
                <Box mb={"2rem"} width="20%">
                  <select
                    id="cars1"
                    // onChange={brandValueHandler}
                  >
                    <option>Brand</option>
                    <option value="Lakme">Lakme</option>
                    <option value="MAYBELLINE NEW YORK">
                      MAYBELLINE NEW YORK
                    </option>
                  </select>
                </Box>
                <Box mb={"2rem"} width="20%">
                  <select
                    id="cars1"
                    // onChange={brandValueHandler}
                  >
                    <option>Price</option>
                    <option value="Lakme">0-500</option>
                    <option value="MAYBELLINE NEW YORK">501-1000</option>
                    <option value="MAYBELLINE NEW YORK">1001-1500</option>
                    <option value="MAYBELLINE NEW YORK">1501-2000</option>
                  </select>
                </Box>
              </Flex>
            </Flex>
          </Box>
        </Flex>
        <Flex>
          <Box
            width="100%"
            borderLeft={"1px solid #e8e8e8"}
          >
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
                Products ({products.length})
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
