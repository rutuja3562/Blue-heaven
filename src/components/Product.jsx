import {
  Box,
  Flex,
  Stack,
  Text,
  Select
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { fetchData } from "../Redux/product/action";
import { ProductComponent } from "./ProductComponent";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { useNavigate, useSearchParams } from "react-router-dom";
import { MdLocalDining } from "react-icons/md";
export const Product = () => {
   const product = useSelector((state) => state);
   const dispatch = useDispatch();
   useEffect(() => {
     if (product?.length === 0) {
       dispatch(fetchData());
     }
   }, [dispatch, product?.length]);

   // ***product component****//
   const navigate = useNavigate();
   const[loding,setLoding]=useState(true)
   const [searchParams, setSearchParams] = useSearchParams();
   const [brandValue, setBrandValue] = useState(
     searchParams.getAll("brand") || []
   );
   const [packSize, setPackSize] = useState(
     searchParams.getAll("quantity") || []
   );
   const [priceValue, setPriceValue] = useState(
     searchParams.getAll("price") || []
   );
   const [orderValue, setOrderValue] = useState(
     searchParams.getAll("_order") || []
   );
   const [products, setProducts] = useState([]);
   // const dispatch = useDispatch();

  useEffect(() => {
    getdata();
     
  }, [setProducts]);
  const getdata = async () => {
    await fetch("https://blueheavenapi.herokuapp.com/products")
      .then((data) => data.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((err) => {
        console.log("e", err);
      });
  };

   const HandleSelect = (e) => {
     setOrderValue(e.target.value);
     if (e.target.value === "low") {
       const data = [...products].sort((a, b) => {
         return a.price - b.price;
       });
       // console.log(data);
       setProducts(data);
     }
     if (e.target.value === "high") {
       const data = [...products].sort((a, b) => {
         return b.price - a.price;
       });
       // console.log("dta", data);
       setProducts(data);
     }
   };

    const brandValueHandler = async(e) => {
      const data = await fetch(
        "https://blueheavenapi.herokuapp.com/products"
      ).then((d) => d.json());
      setBrandValue(e.target.value);
      console.log(e.target.value)
      if (e.target.value == "Dabar") {
        const filteredArr = data.filter((a) => {
          if (a.brand == "Dabar") {
            return a;
          }
        });
        setProducts(filteredArr);
      } else if (e.target.value == "Lakme") {
        const filteredArr = data.filter((a) => {
          if (a.brand == "Lakme") {
            return a;
          }
        });
        setProducts(filteredArr);
      } else if (e.target.value == "MAYBELLINE NEW YORK") {
        const filteredArr = data.filter((a) => {
          if (a.brand == "MAYBELLINE NEW YORK") {
            return a;
          }
        });
        setProducts(filteredArr);
      } else if (e.target.value == "Revlon") {
        const filteredArr = data.filter((a) => {
          if (a.brand == "Revlon") {
            return a;
          }
        });
        setProducts(filteredArr);
      } else if (e.target.value == "Rosy") {
        const filteredArr = data.filter((a) => {
          if (a.brand == "Rosy") {
            return a;
          }
        });
        setProducts(filteredArr);
      } else {
        setProducts(data);
      }
    };
    

     const priceHandler = async (e) => {
      // console.log(e.target.value)
    setPriceValue(e.target.value);
    const data = await fetch(
      "https://blueheavenapi.herokuapp.com/products"
    ).then((d) => d.json());

    if (e.target.value == "0-50") {
      const filteredArr = data.filter((a) => {
        if (a.price >= 0 && a.price <= 50) {
          return a;
        }
      });
      setProducts(filteredArr);
    } else if (e.target.value == "51-150") {
      const filteredArr = data.filter((a) => {
        if (a.price > 51 && a.price <= 150) {
          return a;
        }
      });
      setProducts(filteredArr);
    } else if (e.target.value == "151-300") {
      const filteredArr = data.filter((a) => {
        if (a.price > 151 && a.price <= 300) {
          return a;
        }
      });
      setProducts(filteredArr);
    } else if (e.target.value == "301-400") {
      const filteredArr = data.filter((a) => {
        if (a.price > 301 && a.price <= 400) {
          return a;
        }
      });
      setProducts(filteredArr);
    } else if (e.target.value == "401-1000") {
      const filteredArr = data.filter((a) => {
        if (a.price > 401 && a.price <= 1000) {
          return a;
        }
      });
      setProducts(filteredArr);
    } else {
      setProducts(data);
    }
  };
  useEffect(() => {
    setSearchParams(
      {
        brand: brandValue,
        quantity: packSize,
        price: priceValue,
        _order: orderValue,
      },
      { replace: true }
    );
    const params = {
      brand: searchParams.getAll("brand"),
      quantity: searchParams.getAll("quantity"),
      price: searchParams.getAll("price"),
      _sort: "price",
      _order: searchParams.get("_order"),
    };
    dispatch(fetchData(params));
  }, [
    setSearchParams,
    searchParams,
    brandValue,
    priceValue,
    orderValue,
    packSize,
  ]);
 
  return (
    <Box width={"75%"} margin="auto" mt="1rem">
     
        <Box w={"100%"}>
          <Box mt={"20px"} mb={"20px"}></Box>
          <Box border={"1px solid #e8e8e8"}>
            <Flex>
              <Box
                width={"100%"}
                textAlign={"left"}
                m={"1rem"}
                fontWeight={300}
              >
                <Text
                  fontSize={"16px"}
                  fontWeight={400}
                  borderBottom={"1px solid #e8e8e8"}
                >
                  Products & Services
                </Text>
                <Flex>
                  <Flex width={"100%"} mt={"1.5rem"}>
                    <Box width="25%">
                      <Text fontSize={"16px"} fontWeight={400}>
                        Makeup
                      </Text>
                    </Box>
                    <Box mb={"2rem"} width="185px" ml="10px">
                      <Select
                        id="cars1"
                        borderColor="1px solid black"
                        _hover={{ border: "black" }}
                        borderWidth="1px"
                        width="100%"
                        focusBorderColor="black"
                        borderRadius="0"
                        onChange={HandleSelect}
                        p={0}
                      >
                        <option>price</option>
                        <option value="low">Low To High</option>
                        <option value="high">High To Low</option>
                      </Select>
                    </Box>
                    <Box mb={"2rem"} width="185px" ml="20px">
                      <Select
                        id="cars1"
                        onChange={brandValueHandler}
                        borderColor="1px solid black"
                        _hover={{ border: "black" }}
                        borderWidth="1px"
                        width="100%"
                        focusBorderColor="black"
                        borderRadius="0"
                      >
                        <option border="1px solid blue">Brand</option>
                        <option value="Lakme">Lakme</option>
                        <option value="Dabar">Dabar</option>
                        <option value="Rosy">Rosy</option>
                        <option value="Revlon">Revlon</option>
                        <option value="MAYBELLINE NEW YORK">MAYBELLINE</option>
                      </Select>
                    </Box>
                    <Box mb={"2rem"} width="185px" ml="20px">
                      <Select
                        id="cars1"
                        onChange={priceHandler}
                        borderColor="1px solid black"
                        _hover={{ border: "black" }}
                        borderWidth="1px"
                        width="100%"
                        focusBorderColor="black"
                        borderRadius="0"
                        // padding={0}
                      >
                        <option>Price</option>
                        <option value="0-50">0-50</option>
                        <option value="51-150">51-150</option>
                        <option value="151-300">151-300</option>
                        <option value="301-400">301-400</option>
                        <option value="401-1000">401-1000</option>
                      </Select>
                    </Box>
                  </Flex>
                </Flex>
              </Box>
            </Flex>
            <Flex>
              <Box width="100%" borderLeft={"1px solid #e8e8e8"}>
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
    </Box>
  );
  
};
