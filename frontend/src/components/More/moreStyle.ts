import styled from "styled-components";

export const MoreContainer = styled.div`
  position: absolute;
  top: 90%;
  right: 10%;
  width: 156px;
  height: 87px;
  background: ${(props) => props.theme.mainColor};
  box-shadow: 0px -4px 8px 2px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  .more {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding-left: 18px;
  }
  .icon {
    width: 20%;
    svg {
      path {
        fill: ${(props) => props.theme.stroke};
      }
    }
  }
  div {
    width: 100%;
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 15px;
    color: ${(props) => props.theme.fontColor};
  }
`;
