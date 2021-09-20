import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { CurrentWeather } from "./CurrentWeather";

export default {
  title: "Weather/CurrentWeather",
  component: CurrentWeather,
} as ComponentMeta<typeof CurrentWeather>;

const Template: ComponentStory<typeof CurrentWeather> = (props) => (
  <CurrentWeather {...props} />
);

export const Component = Template.bind({});
Component.args = {
  cityName: "Ranchi",
  weather: {
    id: 721,
    title: "Haze",
    description: "haze",
  },

  temperature: {
    current: 27.06,
    feelsLike: 30.8,
  },
  winds: {
    speed: 3.09,
    direction: 340,
  },
  cloud: 75,
};
