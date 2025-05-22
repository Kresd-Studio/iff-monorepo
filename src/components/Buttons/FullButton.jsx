import React from "react";
import styled from "styled-components";

export default function FullButton({ icon, title, action, border }) {
  return (
    <Wrapper
      className="animate pointer radius20"
      onClick={action ? () => action() : null}
      border={border}
    >
      {icon}
      {title}
    </Wrapper>
  );
}

const Wrapper = styled.button`
  border: 1px solid ${(props) => (props.border ? "#707070" : "#7620ff")};
  background-color: ${(props) => (props.border ? "transparent" : "#7620ff")};
  width: 100%;
  padding: 15px;
  outline: none;
  font-size: 1.125rem;
  display: flex;
  gap: 4px;
  justify-content: center;
  color: ${(props) => (props.border ? "#707070" : "#fff")};
  :hover {
    background-color: ${(props) => (props.border ? "transparent" : "#580cd2")};
    border: 1px solid #7620ff;
    color: ${(props) => (props.border ? "#7620ff" : "#fff")};
  }
`;

