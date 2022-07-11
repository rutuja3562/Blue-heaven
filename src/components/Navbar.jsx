// rafce
import React, { useState, useEffect } from "react";
// import logo from "./Logos/Logo.svg";
// import help from "./Images/customer.svg";
import styled from "styled-components";
// import group from "./Logos/Group.png";
// import { Signup } from "../Signup/SignUp";
import { Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 64px;
  background: #ffffff;
  box-shadow: 0px 2px 8px rgba(153, 108, 108, 0.1);
  .logo {
    margin-left: 0;
  }
  .logo1 {
    max-width: 50px;
    max-height: 50px;
    border-radius: 20px;
  }

  ul:hover {
    cursor: pointer;
  }
  .nav-links {
    display: flex;
    justify-content: flex-end;
    list-style: none;
    width: 85%;
    padding-top: 15px;
  }
  .nav-links li {
    padding: 8px 16px;
    top: 40px;
  }
  .user {
    max-height: 10px;
    padding: 0px;
  }
  .login {
    padding: 4px 8px;
    /* position: absolute; */
    width: 104px;
    height: 25px;
    right: 83px;
    top: 18px;
    background: #d63c0c;
    border-radius: 5px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.01em;
    text-transform: uppercase;
    color: #ffffff;
    order: 0;
    flex-grow: 0;
    margin: 0px 10px;
    text-decoration: none;
    left: 16px;
    top: 8px;
    position: static;
  }
  .textTT {
    /* Button */
    font-family: "Poppins", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    /* identical to box height */
    letter-spacing: -0.01em;
    text-transform: uppercase;
    color: #2f2f2f;
    /* Inside Auto Layout */
    /* flex: none; */
    order: 0;
    flex-grow: 0;
    margin: 0px 0px;
    text-decoration: none;
  }
  .custo {
    justify-content: center;
    align-items: center;
    padding: 8px 16px;
  }
  .mobile-menu-icon {
    display: none;
  }
  @media screen and (max-width: 780px) {
    .logo {
      display: flex;
      position: absolute;
      top: 15px;
      left: 35px;
    }
    /* .mobile-menu-icon {
            background-color: gray;
        } */
    .nav-links {
      display: none;
    }
    .nav-links-mobile {
      position: absolute;
      display: block;
      background-color: #d63c0c;
      left: 0;
      top: 75px;
      transition: all 0.5s ease-out;
      width: 100%;
      text-align: center;
      letter-spacing: normal;
      /* align-items: center; */
    }
    .textTT {
      margin-top: 2%;
      color: #2f2f2f;
      text-align: center;
      padding: 32px;
      width: 100%;
      transition: all 0.5s ease;
      font-family: Poppins;
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
      letter-spacing: -0.01em;
      text-transform: uppercase;
      color: #ffffff;
    }
    .login {
      border: none;
      margin-left: 43.9%;
    }
    .mobile-menu-icon {
      display: block;
      position: absolute;
      font-size: 30px;
      color: #2f2f2f;
      background-color: #d63c0c;
      border: none;
      outline: none;
      top: 15px;
      right: 25px;
    }
  }
`;
export const Navbar = () => {
  const [isMob, setIsMob] = useState(false);
  const [profile, setProfile] = useState("");
  const [login, setLogin] = useState(true);
  const handleurl = (e) => {
    setProfile(e);
  };
  useEffect(() => {
    handleurl();
  }, []);

  return (
    <>
      <Nav>
        <img className="logo" alt="" src={""} />
        <ul className={"nav-links"}>
          <li>
            <Link to="/Home" style={{ textDecoration: "none" }}>
              <Text className="textTT">HOME</Text>
            </Link>
          </li>
          <li>
            <Text className="textTT">Products & Services</Text>
          </li>
          <li>
            <Text className="textTT">About Us</Text>
          </li>
          <li>
            <Text className="textTT">Contact Us</Text>
          </li>
          <li>
            {login ? (
              <Text
                className="login"
                data-bs-toggle="modal"
                href="#exampleModalToggle"
                role="button"
                onClick={() => {
                  setLogin(false);
                }}
              >
                LOG IN
              </Text>
            ) : (
              <Text
                className="login"
                role="button"
                onClick={() => {
                  setLogin(true);
                  setProfile();
                }}
              >
                LOG OUT
              </Text>
            )}
          </li>
          <li className="user">
            <a className="user">
            {/* <img className="logo1" alt="" src={!profile ? group : profile} />*/}
            </a>
          </li>
          <button
            className="mobile-menu-icon text-white"
            onClick={() => setIsMob(!isMob)}
          >
            {isMob ? (
              <i className="fas fa-times"></i>
            ) : (
              <i className="fas fa-bars"></i>
            )}
          </button>
        </ul>
      </Nav>
      {/*<Signup handleurl={handleurl}></Signup>*/}
    </>
  );
};

