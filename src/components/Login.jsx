import {
  Popover,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  ButtonGroup,
  useDisclosure,
  Button,
  Box,
  Text
} from "@chakra-ui/react";
import { useState } from "react";
import { Signup } from "./Signup";

export const Login = () => {
  const { isOpen, onToggle, onClose } = useDisclosure();
  const [login, setLogin] = useState(true);
  return (
    <Box>
      {login ? (
        <Text
          bg="white"
          fontSize={"18px"}
          fontWeight="376"
          textAlign={"center"}
          mb="1px"
          color="black"
          mr={5}
          onClick={onToggle}
        >
          SIGNUP
        </Text>
      ) : (
        <Button variant="outline" bg="white" mr={5} onClick={onToggle}>
          Logout
        </Button>
      )}
      <Popover
        returnFocusOnClose={false}
        isOpen={isOpen}
        onClose={onClose}
        closeOnBlur={false}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
       
        // style={{display:"flex" ,justifiedContent:"center" ,alignItems:"center"}}
      >
        <PopoverContent style={{ marginLeft: "180%", marginTop: "20%" }}>
          <Signup />
          <Button
            varient={"solid"}
            bg={"#84c225"}
            schema="white"
            color="white"
            width={"100%"}
            fontSize={"14px"}
            fontWeight="450"
            onClick={onClose}
          >
            Continue
          </Button>
          <PopoverArrow />
          <PopoverCloseButton />
        </PopoverContent>
      </Popover>
    </Box>
  );
};
