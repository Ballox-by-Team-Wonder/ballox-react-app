import styled from "styled-components";
import { colors } from "../../../Infrastructure/Theme/colors";
import { fontSizes } from "../../../Infrastructure/Theme/fontSizes";

export const HeaderText = styled.h1`
  top: ${({ top }) => (top ? top : "")};
  position: relative;
  color: ${({ color }) => (color ? color : colors.black.strong)};
  font-size: ${({ fontSize }) =>
    fontSize ? fontSize : fontSizes.desktop_header};
  line-height: ${({ lineHeight }) => (lineHeight ? lineHeight : "")};
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : "")};
  font-family: ${({ fontFamily }) => (fontFamily ? fontFamily : "")};
  display: ${({ display }) => (display ? display : "flex")};

  @media only screen and (max-width: 680px) {
    font-size: ${({ resFontSize }) =>
      resFontSize ? resFontSize : fontSizes.mobile_header};
  }
  @media only screen and (max-width: 380px) {
    font-size: ${({ smallScreenFontSize }) =>
      smallScreenFontSize ? smallScreenFontSize : fontSizes.mobile_header};
  }
`;

export const Text = styled.p`
  display: ${({ display }) => (display ? display : "flex")};
  position: relative;
  color: ${({ color }) => (color ? color : colors.black.strong)};
  top: ${({ top }) => (top ? top : "")};
  font-size: ${({ fontSize }) =>
    fontSize ? fontSize : fontSizes.desktop_body_text};
  line-height: ${({ lineHeight }) => (lineHeight ? lineHeight : "")};
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : "")};
  font-family: ${({ fontFamily }) => (fontFamily ? fontFamily : "")};
  margin: ${({ margin }) => (margin ? margin : "")};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: ${({ width }) => (width ? width : "")};
  text-align: ${({ align }) => (align ? align : "")};

  @media only screen and (max-width: ${({ breakPoint }) =>
      breakPoint ? breakPoint : ""}) {
    display: ${({ breakPointDisplay }) =>
      breakPointDisplay ? breakPointDisplay : ""};
  }
  @media only screen and (max-width: 680px) {
    font-size: ${({ resFontSize }) =>
      resFontSize ? resFontSize : fontSizes.mobile_body_text};
  }
  @media only screen and (max-width: 380px) {
    font-size: ${({ smallScreenFontSize }) =>
      smallScreenFontSize ? smallScreenFontSize : fontSizes.mobile_details};
  }
`;
