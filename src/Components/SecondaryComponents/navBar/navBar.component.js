import React, { useState } from "react";
import { colors } from "../../../Infrastructure/Theme/colors";
import { fontSizes } from "../../../Infrastructure/Theme/fontSizes";
import { fontWeights } from "../../../Infrastructure/Theme/fontWeights";
import Button from "../../PrimaryComponents/button/button.component";
import FlexibleDiv from "../../PrimaryComponents/flexibleDiv/flexibleDiv.component";
import { DropDownIcon, UserIcon } from "../../PrimaryComponents/icons/icons";
import Logo from "../../PrimaryComponents/logo/logo.component";
import { Text } from "../../PrimaryComponents/typography/typography.component";
import UserDropDown from "../userDropDown/userDropDown";

const NavBar = () => {
  const [displayCard, setDisplayCard] = useState(false);
  const displayHandler = () => {
    setDisplayCard(!displayCard);
  };
  return (
    <>
      <FlexibleDiv
        shadow={"0 2px 4px 0 rgb(0 0 0 / 4%)"}
        flexDirection={"column"}
        position={"fixed"}
        top={"0px"}
        left={"0px"}
      >
        <FlexibleDiv background={colors.white} height={"60px"} padding={"23px"}>
          <FlexibleDiv
            width={"20%"}
            padding={"0px 0px 0px 22px"}
            justifyContent={"center"}
          >
            <Logo displaySideText={true} />
          </FlexibleDiv>

          <FlexibleDiv width={"60%"} justifyContent={"center"}>
            <FlexibleDiv
              breakPoint={"900px"}
              breakPointDisplay={"none"}
              width={"40%"}
            >
              {/* <Text fontSize={fontSizes.desktop_smallest} fontWeight={fontWeights.semiBold} color={colors.black.soft}  >Public Polls</Text> */}
              <Text
                fontSize={fontSizes.desktop_smallest}
                color={colors.primary}
                fontWeight={fontWeights.bold}
              >
                Create Polls
              </Text>
            </FlexibleDiv>
            <FlexibleDiv
              smallScreenWidth={"100%"}
              breakPointWidth={"60%"}
              breakPoint={"900px"}
              breakPointDisplay={"flex"}
              display={"none"}
              width="40%"
            >
              <Button
                fontWeight={fontWeights.bold}
                fontSize={"12px"}
                radius={"4px"}
                width={"70%"}
                padding={"13px 5px 13px 5px"}
              >
                Create Election
              </Button>
            </FlexibleDiv>
          </FlexibleDiv>

          <FlexibleDiv width={"20%"} justifyContent={"center"}>
            <div onClick={displayHandler} style={styles.circle}>
              <UserIcon
                onClick={displayHandler}
                size={"25px"}
                color={colors.white}
              />
            </div>
            <DropDownIcon
              onClick={displayHandler}
              fontWeight={fontWeights.medium}
              style={styles.arrow}
              size={"35px"}
            />
          </FlexibleDiv>

          <UserDropDown display={displayCard} setDisplayCard={setDisplayCard} />
        </FlexibleDiv>

        <FlexibleDiv height={"1px"} background={"#dd090900"}></FlexibleDiv>

        <FlexibleDiv padding={"5px"} background={"#fff"}>
          <FlexibleDiv
            smallScreenWidth={"100%"}
            breakPointWidth={"90%"}
            breakPoint={"900px"}
            width={"60%"}
          >
            <Text
              fontSize={fontSizes.desktop_smallest}
              fontWeight={fontWeights.medium}
              color={"#B1B1B1"}
            >
              DashBoard
            </Text>
            <Text
              fontSize={fontSizes.desktop_smallest}
              fontWeight={fontWeights.medium}
              color={"#B1B1B1"}
            >
              Voting Results
            </Text>
            <Text
              fontSize={fontSizes.desktop_smallest}
              fontWeight={fontWeights.medium}
              color={"#B1B1B1"}
            >
              Available Polls
            </Text>
          </FlexibleDiv>
        </FlexibleDiv>
      </FlexibleDiv>
    </>
  );
};

export default NavBar;

const styles = {
  circle: {
    width: "30px",
    height: "30px",
    borderRadius: "40px",
    padding: "6px",
    background: colors.primary,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
  },
  arrow: {
    marginLeft: "10px",
    cursor: "pointer",
  },
};
