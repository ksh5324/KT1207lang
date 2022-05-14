import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import Chat from "../components/chat/Chat";
import Layout from "../components/Layout";
import { theme_type } from "../interface/theme";
import useTheme from "../util/hooks/useTheme";

import styled from "styled-components";

const Index = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const Home: NextPage = () => {
  const [theme, chooseTheme, setTheme] = useTheme();

  useEffect(() => {
    setTheme();
  }, []);

  return (
    <Index>
      <Chat chooseTheme={chooseTheme} />
    </Index>
  );
};

export default Home;
