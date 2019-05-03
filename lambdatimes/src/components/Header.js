import React from "react";
import moment from "moment";
import styled from "styled-components";

// Refactor this component to use styled components and not classNames.
// You can find the corresponding CSS in the CSS/index.css file

// # Start Style # //

const HeaderStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  background-color: #fff;
  border-bottom: 1px solid lightgrey;
  width: 100%;
  height: 120px;
  margin-top: 44px;
  padding-bottom: 15px;

  // Media Queries
  @media (min-width: 1280px) {
    width: 1280px;
  }
  h1 {
    font-size: 60px;
    font-family: Didot, serif;
    font-weight: bold;
    flex: 8;
    text-align: center;
    color: #000;
  }
`;

const Span = styled.span`
  align-self: flex-end;
  font-size: 11px;
  font-weight: bold;
  letter-spacing: 1px;
  flex: 1;

  // Date
  ${props =>
    props.Date
      ? ` text-transform: uppercase; margin-left: 25px; flex: 1; `
      : null}
  
  // Time
  ${props =>
    props.Temp ? 
    ` text-align: right; margin-right: 25px; flex: 1; ` 
    : null}
  
  `;
// # End Style # //

const Header = () => {
  return (
    <HeaderStyle>
      <Span Date>{moment().format("LL")}</Span>
      <h1>Lambda Times</h1>
      <Span Temp>98°</Span>
    </HeaderStyle>
  );
};

export default Header;
