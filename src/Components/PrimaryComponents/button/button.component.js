import React from "react";
import styled from "styled-components";
import { colors } from "../../../Infrastructure/Theme/colors";

const ButtonStyles = styled.button`
  width: ${({ width }) => (width ? width : "")};
  height: ${({ height }) => (height ? height : "")};
  padding: ${({ padding }) => (padding ? padding : "")};
  border-radius: ${({ radius }) => (radius ? radius : "")};
  cursor: pointer;
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "")};
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : "")};
  color: ${({ color }) => (color ? color : "white")};
  background: ${({ background }) => (background ? background : colors.primary)};
  border: ${({ border }) => (border ? border : "none")};
  outline: ${({ outline }) => (outline ? outline : "none")};
  transition: background 0.5s ease-in;
  position: relative;
  top: ${({ top }) => (top ? top : "")};
  &:hover {
    transition: 0.5s ease-in;
    color: ${({ hoverColor }) => (hoverColor ? hoverColor : colors.primary)};
    background: white;
    border: ${({ hoverBorder }) =>
      ` .9px solid ${hoverBorder}`
        ? ` .9px solid ${hoverBorder}`
        : `.9px solid ${colors.primary}`};
    @media only screen and (max-width: ${({ breakPoint }) =>
        breakPoint ? breakPoint : ""}) {
      display: ${({ breakPointDisplay }) =>
        breakPointDisplay ? breakPointDisplay : ""};
    }
  }
`;
const Button = ({
  children,
  background,
  fontWeight,
  fontSize,
  color,
  padding,
  height,
  width,
  radius,
  border,
  outline,
  top,
  hoverColor,
  hoverBorder,
}) => {
  return (
    <ButtonStyles
      background={background}
      fontSize={fontSize}
      fontWeight={fontWeight}
      color={color}
      padding={padding}
      height={height}
      width={width}
      radius={radius}
      border={border}
      outline={outline}
      top={top}
      hoverColor={hoverColor}
      hoverBorder={hoverBorder}
    >
      {children}
    </ButtonStyles>
  );
};

export default Button;
