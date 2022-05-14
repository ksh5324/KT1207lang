import React, { useCallback, useState } from "react";
import { ChatContainer } from "./chatStyle";
import Footer from "../Footer/Footer";

const Chat = ({ chooseTheme }: any) => {
  const [show, setShow] = useState(false);

  const toggleColor = useCallback(() => {
    setShow((prev) => !prev);
  }, []);

  return (
    <ChatContainer>
      <header>d</header>
      <main>d</main>
      <Footer toggleColor={toggleColor} chooseTheme={chooseTheme} show={show} />
    </ChatContainer>
  );
};

export default Chat;
