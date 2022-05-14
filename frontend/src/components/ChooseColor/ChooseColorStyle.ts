import styled from "styled-components";

export const ChooseContainer = styled.div`
  [class="show"] {
    background: ${(props) => props.theme.mainColor};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    width: 117px;
    height: 36px;
    position: absolute;
    left: 3%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    bottom: 120%;
    overflow: hidden;
    transition-delay: 0.6s;
    transition: 0.5s;

    &::before {
      content: "";
      width: 10px;
      height: 10px;
      position: absolute;
      left: 30%;
      bottom: 0;
      background: ${(props) => props.theme.mainColor};
      box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
      transform: rotate(45deg) translateY(50%);
    }

    .color {
      width: 20px;
      height: 20px;
      border: 0.5px solid #a4a4a4;
      border-radius: 50%;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      transition: 0.3s;
      cursor: pointer;
      position: relative;
      top: 0;
      opacity: 1;

      transition: all 0.5s;
      transition-delay: 0.2s;
    }
    .color:nth-child(1) {
      background: #ffffff;
      top: 0;
    }
    .color:nth-child(2) {
      background: #fa9adf;
      top: 0;
    }
    .color:nth-child(3) {
      background: #ff974b;
      top: 0;
    }
    .color:nth-child(4) {
      background: #2f2f2f;
      top: 0;
    }

    .color:hover {
      transform: scale(1.2);
    }
  }
  [class="not"] {
    transform: translateX(35px);
    width: 0px;
    height: 0px;
    position: absolute;
    bottom: 100%;
    left: 3%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: none;
    visibility: hidden;
    overflow: hidden;
    transition: 0.3s;
    transition-delay: 0.1s;

    &::before {
      content: "";
      width: 10px;
      height: 10px;
      position: absolute;
      left: 30%;
      bottom: 0;
      background: ${(props) => props.theme.mainColor};
      box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
      transform: rotate(45deg) translateY(50%);
    }

    .color {
      width: 0px;
      height: 0px;
      border-radius: 50%;
      cursor: pointer;
      border: 10px solid black;
      position: relative;
      overflow: hidden;
      opacity: 0;
      transition: 0.2s;
    }
    .color:nth-child(1) {
      top: 10px;
      transition: 0.3s;
      transition-delay: 0.5s;
    }
    .color:nth-child(2) {
      top: 25px;
      transition: 0.3s;
      transition-delay: 0.5s;
    }
    .color:nth-child(3) {
      top: 50px;
      transition: 0.3s;
      transition-delay: 0.5s;
    }
    .color:nth-child(4) {
      top: 75px;
      transition: 0.3s;
      transition-delay: 0.5s;
    }
  }
`;
