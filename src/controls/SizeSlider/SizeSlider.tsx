import { Title } from "../../components/Typography/Title/Title";
import { Slider } from "@mui/material";
import React from "react";
import styles from "./styles.module.scss";

type Props = {
  defaultValue: number;
  minValue: number;
  maxValue: number;
  step: number;
  value: number;
};

export const SizeSlider = ({
  defaultValue,
  minValue,
  maxValue,
  step,
  value,
}: Props) => {
  const sizeSliderValue = (value: number) => {
    return `${value}px`;
  };

  const sizeSliderMarks = [
    {
      value: minValue,
      label: minValue + "px",
    },
    {
      value: maxValue,
      label: maxValue + "px",
    },
  ];

  return (
    <>
      <Title tag="p" size="sm">
        Size
      </Title>
      <div className={styles.sliderContainer}>
        <Slider
          defaultValue={defaultValue}
          value={value}
          valueLabelDisplay="on"
          getAriaValueText={sizeSliderValue}
          valueLabelFormat={sizeSliderValue}
          step={step}
          min={minValue}
          max={maxValue}
          color="secondary"
          marks={sizeSliderMarks}
        />
      </div>
    </>
  );
};
