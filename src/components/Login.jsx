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
} from "@chakra-ui/react";
import { useState } from "react";
import { Signup } from "./Signup";

export const Login = () => {
  const { isOpen, onToggle, onClose } = useDisclosure();
  const [login, setLogin] = useState(true);
  return (
    <Box>
      {login ? (
        <Button variant="link" bg="white" mr={5} onClick={onToggle}>
          Signup
        </Button>
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
          <PopoverContent style={{ marginLeft: "150%", marginTop: "10%" }}>
            <Signup />
            <PopoverArrow />
            <PopoverCloseButton />
          </PopoverContent>
      </Popover>
    </Box>
  );
};
