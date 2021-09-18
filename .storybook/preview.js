import "../src/stories/assets/weatherIcons/css/weather-icons.min.css";
import "../src/stories/assets/weatherIcons/css/weather-icons-wind.min.css";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
