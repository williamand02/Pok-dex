import React from "react";
import { StoryFn } from "@storybook/addons";
import GlobalStyles from "../src/styles/global";

function withGlobalStyles(storyFn: StoryFn) {
  return (
    <>
      <GlobalStyles />
      {storyFn()}
    </>
  );
}

export default withGlobalStyles;
