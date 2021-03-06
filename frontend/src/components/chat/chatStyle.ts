import styled from "styled-components";

export const ChatContainer = styled.div`
  width: 615px;
  height: 640px;
  background: ${(props) => props.theme.mainColor};
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.25);
  border-radius: 60px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  transition: 0.5s;
  padding: 27px;

  .line {
    width: 100%;
    height: 0px;
    border: 1px solid ${(props) => props.theme.header};
  }

  header {
    width: 100%;
    height: 20%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-right: 30px;
    position: relative;
    svg {
      circle {
        fill: ${(props) => props.theme.header};
      }
    }

    .flex {
      display: flex;
    }

    .picture {
      width: 43px;
      height: 43px;
      border-radius: 50%;
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 9px;
    }

    .profile {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
    }

    .id {
      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 15px;
      line-height: 18px;
      color: ${(props) => props.theme.fontColor};
    }
    .name {
      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 10px;
      line-height: 12px;
      color: ${(props) => props.theme.fontColor};
    }
  }
  main {
    width: 100%;
    height: 100%;
    padding: 14px;
    pre {
      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 24px;
      color: ${(props) => props.theme.fontColor};
    }
  }
  footer {
    width: 555px;
    height: 141px;
    background: ${(props) => props.theme.textArea};
    border: 3px solid ${(props) => props.theme.stroke};
    border-radius: 15px;
    position: relative;

    textarea {
      width: 100%;
      height: 80%;
      resize: none;
      outline: none;
      border: none;
      padding-left: 14px;
      padding-right: 14px;
      padding-top: 14px;
      margin-top: 5px;
      background: transparent;
      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 15px;
      line-height: 15px;
      color: ${(props) => props.theme.fontColor};

      ::-webkit-scrollbar {
        width: 10px;
        height: 100%;
      }
      ::-webkit-scrollbar-track {
        background: ${(props) => props.theme.scrollBackground};
        border-radius: 13px;
      }
      ::-webkit-scrollbar-thumb {
        background: ${(props) => props.theme.scrollPart};
        border-radius: 13px;
      }
      ::-webkit-scrollbar-thumb:hover {
        cursor: pointer;
      }
    }
    .footer-footer {
      width: 100%;
      position: absolute;
      top: 100%;
      transform: translateY(calc(-100% - 8px));
      .iconContainer {
        display: flex;
        gap: 16px;
        .icon {
          cursor: pointer;
        }
        svg {
          path {
            fill: ${(props) => props.theme.stroke};
          }
        }
      }
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-right: 14px;
      padding-left: 14px;

      button {
        width: 62px;
        height: 28px;
        background: ${(props) => props.theme.button};
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
        border-radius: 6px;
        outline: none;
        border: none;
        color: ${(props) => props.theme.buttonText};
        cursor: pointer;
      }
    }
  }
  .not-show {
    opacity: 0;
  }
`;
