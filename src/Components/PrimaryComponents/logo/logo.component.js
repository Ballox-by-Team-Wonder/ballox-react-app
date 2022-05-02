import React from "react";

import logo from "../../../Assets/logo.png";
import { fontSizes } from "../../../Infrastructure/Theme/fontSizes";
import { fontWeights } from "../../../Infrastructure/Theme/fontWeights";
import FlexibleDiv from "../flexibleDiv/flexibleDiv.component";
import { Text } from "../typography/typography.component";

const Logo = ({ displaySideText }) => {
  return (
    <>
      <FlexibleDiv justifyContent={"start"}>
        <img src={logo} style={styles.image} alt={"logo"} />
        <Text
          display={displaySideText ? "block" : "none"}
          fontWeight={fontWeights.bold}
          margin="0px 0px 0px 10px"
          fontSize={fontSizes.desktop_body_text}
          breakPoint={"900px"}
          breakPointDisplay={"none"}
        >
          Ballox
        </Text>
      </FlexibleDiv>
    </>
  );
};

export default Logo;

const styles = {
  image: {
    width: "40px",
  },
};
