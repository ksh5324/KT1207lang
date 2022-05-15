import styled from "styled-components";
import theme from "../../styles/theme";

export const LayoutContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  background: ${(props) => props.theme.body};
  overflow: hidden;

  .background {
    position: absolute;
    width: 130%;
    height: 130%;
    top: -20%;
    left: -20%;

    .back {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background-color: ${(props) => props.theme.background};
    }
  }
`;

export const ImageContainer = styled.div`
  position: absolute;
  top: ${(props: any) => props.y + "%"};
  left: ${(props: any) => props.x + "%"};
  width: ${(props: any) => props.size + "px"};
`;
