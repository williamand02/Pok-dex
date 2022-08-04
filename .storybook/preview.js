import { addDecorator } from "@storybook/react";
import withGlobalStyle from './withGlobalStyles.tsx';

addDecorator(withGlobalStyle);

// export const parameters = {
//   actions: { argTypesRegex: "^on[A-Z].*" },
//   controls: {
//     matchers: {
//       color: /(background|color)$/i,
//       date: /Date$/,
//     },
//   },
// }