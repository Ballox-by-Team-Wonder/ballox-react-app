import React from "react";
import { colors } from "../../../Infrastructure/Theme/colors";
import { fontSizes } from "../../../Infrastructure/Theme/fontSizes";
import { fontWeights } from "../../../Infrastructure/Theme/fontWeights";
import Button from "../../PrimaryComponents/button/button.component";
import Card from "../../PrimaryComponents/card/card.component";
import FlexibleDiv from "../../PrimaryComponents/flexibleDiv/flexibleDiv.component";
import { Text } from "../../PrimaryComponents/typography/typography.component";

const UserDropDown = ({ display, setDisplayCard }) => {
  return (
    <>
      <Card
        opacity={display ? "1" : "0"}
        position={"absolute"}
        width={"220px"}
        right={"55px"}
        top={"77px"}
        background={colors.white}
        padding={"15px 0px 0px 0px"}
        zIndex={"5000"}
      >
        <FlexibleDiv
          padding={" 0px 0px 0px 27px"}
          flexDirection={"column"}
          alignItems={"flex-start"}
        >
          <Text fontSize={fontSizes.desktop_smallest}>Ebubechi Ihediwa</Text>
          <Text
            display={"inline-block"}
            width={"70%"}
            top={"-20px"}
            color={colors.black.soft}
            fontSize={fontSizes.mobile_details}
          >
            NIN:68735612345588783999999
          </Text>
        </FlexibleDiv>

        <FlexibleDiv justifyContent={"start"} padding={" 0px 0px 0px 27px"}>
          <FlexibleDiv
            top={"-13px"}
            width={"90%"}
            height={"2px"}
            background={"#F2F2F2"}
          >
            {" "}
          </FlexibleDiv>
        </FlexibleDiv>

        <FlexibleDiv
          justifyContent={"flex-start"}
          padding={" 0px 0px 20px 27px"}
        >
          <Button
            hoverBorder={colors.green}
            hoverColor={colors.green}
            fontWeight={fontWeights.bold}
            fontSize={"12px"}
            radius={"4px"}
            width={"60%"}
            background={colors.green}
            padding={"13px 5px 13px 5px"}
          >
            Connect To Wallet
          </Button>
        </FlexibleDiv>
        <FlexibleDiv
          padding={" 20px 0px 20px 0px"}
          justifyContent={"start"}
          background={"#F9F9F9"}
        >
          <Text margin={"0px 0px 0px 27px"} fontSize={"14.5px"}>
            LogOut
          </Text>
        </FlexibleDiv>
      </Card>
    </>
  );
};

export default UserDropDown;
