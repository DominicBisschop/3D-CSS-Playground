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

export const OpacitySlider = ({
  defaultValue,
  minValue,
  maxValue,
  step,
  value,
}: Props) => {
  const marks = [
    {
      value: minValue,
      label: minValue,
    },
    {
      value: maxValue,
      label: maxValue,
    },
  ];

  return (
    <>
      <Title tag="p" size="sm">
        Opacity
      </Title>
      <div className={styles.sliderContainer}>
        <Slider
          defaultValue={defaultValue}
          value={value}
          valueLabelDisplay="on"
          step={step}
          min={minValue}
          max={maxValue}
          color="secondary"
          marks={marks}
        />
      </div>
    </>
  );
};
