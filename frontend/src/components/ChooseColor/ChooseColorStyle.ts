import styled from "styled-components";

export const ChooseContainer = styled.div`
  background: ${(props) => props.theme.mainColor};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  width: 117px;
  height: 36px;
  position: absolute;
  bottom: 120%;
  display: flex;
  justify-content: space-around;
  align-items: center;

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
  }
  .color:nth-child(1) {
    background: #ffffff;
  }
  .color:nth-child(2) {
    background: #fa9adf;
  }
  .color:nth-child(3) {
    background: #ff974b;
  }
  .color:nth-child(4) {
    background: #2f2f2f;
  }
`;
