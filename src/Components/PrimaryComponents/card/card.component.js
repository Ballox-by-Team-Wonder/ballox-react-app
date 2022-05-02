import React from 'react';
import styled from 'styled-components';

const Cardstyles = styled.div`
 width: ${({ width }) => (width ? width : "100%")};
  height: ${({ height }) => (height ? height : "")};
  position: ${({ position }) => (position ? position : "relative")};
  display: ${({ display }) => (display ? display : "flex")};
  flex-direction: ${({ flexDirection }) =>
    flexDirection ? flexDirection : "column"};
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
  box-shadow:0 4px 21px 0 rgb(49 49 49 / 20%);
  opacity:${({opacity})=>opacity ? opacity :'1'};
  transition: opacity .5s ease-in-out;

`

const Card = React.forwardRef( (props,ref) => {
      
    return (
      <>
        <Cardstyles
          width={props.width}
          height={props.height}
          position={props.position}
          display={props.display}
          flexDirection={props.flexDirection}
          alignItems={props.alignItems}
          justifyContent={props.justifyContent}
          padding={props.padding}
          background={props.background}
          zIndex={props.zIndex}
          right={props.right}
          left={props.left}
          top={props.top}
          bottom={props.bottom}
          opacity={props.opacity}
          ref={ref}
        >
          {props.children}
        </Cardstyles>
      </>
    );
  });

  
  export default Card;
  

//   {
//     children,
//     width,
//     height,
//     position,
//     display,
//     flexDirection,
//     alignItems,
//     justifyContent,
//     padding,
//     background,
//     zIndex,
//     right,
//     left,
//     top,
//     bottom,
//     opacity,

//   }