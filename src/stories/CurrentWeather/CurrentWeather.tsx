import clsx from "clsx";
import React from "react";
import styles from "./CurrentWeather.module.scss";

interface Props {
  cityName: string;
  weather: {
    id: number;
    title: string;
    description: string;
  };
  temperature: {
    current: number;
    feelsLike: number;
  };
  winds: {
    speed: number;
    direction: number;
  };
  visibility?: number;
  cloud: number;
}

export function CurrentWeather(props: Props) {
  return (
    <div className={styles.CurrentWeatherContainer}>
      <div className={styles.Row_1}>
        <div className={clsx(styles.WeatherContainer, styles.Col)}>
          <i
            className={clsx(
              styles.WeatherIcon,
              `wi wi-owm-${props.weather.id}`
            )}
          ></i>
          <span>{props.weather.title}</span>
          <span style={{ fontSize: "2rem" }}>
            {Math.round(props.temperature.current)}&#8451;
          </span>
          <span style={{ fontSize: "1.5rem" }}>{props.cityName}</span>
        </div>
        <div className={clsx(styles.TemperatureContainer, styles.Col)}>
          <div className={styles.Row}>
            <i className={clsx(styles.WeatherIcon, `wi wi-thermometer`)}></i>
            <div className={styles.Col}>
              <span>Current: {props.temperature.current}&#8451;</span>
              <span>Feels Like: {props.temperature.current}&#8451;</span>
            </div>
          </div>
        </div>
        <div className={clsx(styles.WindsContainer, styles.Col)}>
          <i
            className={clsx(
              styles.WeatherIcon,
              `wi wi-wind towards-${props.winds.direction}-deg`
            )}
          ></i>
          <span>
            Winds {props.winds.speed} at {props.winds.direction}
          </span>
        </div>
      </div>
      <div className={styles.Row_2}>
        <div className={clsx(styles.VisibilityContainer, styles.Col)}>
          <span>Visibility</span>
          <span>{props.visibility || "N/A"}</span>
        </div>
        <div className={clsx(styles.CloudsContainer, styles.Col)}>
          <div className={styles.Row}>
            <i className={clsx(styles.WeatherIcon, "wi wi-cloud")}></i>
            <div className={styles.Col}>
              <span>Cloud Cover</span>
              <span>{props.cloud}%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
