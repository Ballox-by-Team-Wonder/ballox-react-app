import React from "react";
import styled from "styled-components";

const FlexibleDivStyles = styled.div`
  width: ${({ width }) => (width ? width : "100%")};
  height: ${({ height }) => (height ? height : "")};
  position: ${({ position }) => (position ? position : "relative")};
  display: ${({ display }) => (display ? display : "flex")};
  flex-direction: ${({ flexDirection }) =>
    flexDirection ? flexDirection : "row"};
  align-items: ${({ alignItems }) => (alignItems ? alignItems : "center")};
  justify-content: ${({ justifyContent }) =>
    justifyContent ? justifyContent : "space-evenly"};
  padding: ${({ padding }) => (padding ? padding : "")};
  background: ${({ background }) => (background ? background : "")};
  z-index: ${({ zIndex }) => (zIndex ? zIndex : "")};
  top: ${({ top }) => (top ? top : "")};
  left: ${({ left }) => (left ? left : "")};
  right: ${({ right }) => (right ? right : "")};
  bottom: ${({ bottom }) => (bottom ? bottom : "")};
  box-shadow: ${({ shadow }) => (shadow ? shadow : "")};
  @media only screen and (max-width: ${({ breakPoint }) =>
      breakPoint ? breakPoint : ""}) {
    display: ${({ breakPointDisplay }) =>
      breakPointDisplay ? breakPointDisplay : ""};
    width: ${({ breakPointWidth }) => (breakPointWidth ? breakPointWidth : "")};
  }
  @media only screen and (max-width: 490px) {
    display: ${({ smallScreenDisplay }) =>
      smallScreenDisplay ? smallScreenDisplay : ""};
    width: ${({ smallScreenWidth }) =>
      smallScreenWidth ? smallScreenWidth : ""};
  } ;
`;

const FlexibleDiv = ({
  children,
  width,
  height,
  position,
  display,
  flexDirection,
  alignItems,
  justifyContent,
  padding,
  background,
  zIndex,
  right,
  left,
  top,
  bottom,
  shadow,
  breakPoint,
  breakPointDisplay,
  breakPointWidth,
  smallScreenDisplay,
  smallScreenWidth,
}) => {
  return (
    <>
      <FlexibleDivStyles
        width={width}
        height={height}
        position={position}
        display={display}
        flexDirection={flexDirection}
        alignItems={alignItems}
        justifyContent={justifyContent}
        padding={padding}
        background={background}
        zIndex={zIndex}
        right={right}
        left={left}
        top={top}
        bottom={bottom}
        shadow={shadow}
        breakPoint={breakPoint}
        breakPointDisplay={breakPointDisplay}
        breakPointWidth={breakPointWidth}
        smallScreenDisplay={smallScreenDisplay}
        smallScreenWidth={smallScreenWidth}
      >
        {children}
      </FlexibleDivStyles>
    </>
  );
};

export default FlexibleDiv;
