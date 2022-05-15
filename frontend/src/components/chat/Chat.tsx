import React, { useCallback, useEffect, useState } from "react";
import { ChatContainer } from "./chatStyle";
import Footer from "../Footer/Footer";
import Image from "next/image";
import kt from "../../assets/image/kt.png";
import More from "../More/More";
import { useSelector } from "react-redux";

const Chat = ({ theme, chooseTheme }: any) => {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);

  const { code } = useSelector((state: any) => state.codes);

  useEffect(() => {
    setShow(false);
    setShow2(false);
  }, [theme]);

  const toggleColor = useCallback(() => {
    setShow((prev) => !prev);
  }, []);

  const toggleMore = useCallback(() => {
    setShow2((prev) => !prev);
  }, []);

  return (
    <ChatContainer>
      <header>
        <div className="flex">
          <div className="picture">
            <Image src={kt} />
          </div>
          <div className="profile">
            <div className="id">kt1207lang</div>
            <div className="name">경대</div>
          </div>
        </div>
        <div className="more" onClick={toggleMore}>
          <svg
            width="6"
            height="27"
            viewBox="0 0 6 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="3" cy="3" r="3" />
            <circle cx="3" cy="13" r="3" />
            <circle cx="3" cy="24" r="3" />
          </svg>
        </div>
        {show2 && <More />}
      </header>
      <div className="line"></div>
      <main>
        <pre>
          {code.map((v: any) => {
            return v + "\n";
          })}
        </pre>
      </main>
      <Footer toggleColor={toggleColor} chooseTheme={chooseTheme} show={show} />
    </ChatContainer>
  );
};

export default Chat;
