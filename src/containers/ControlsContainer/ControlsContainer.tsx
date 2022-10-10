import { Title } from "../../components/Typography/Title/Title";
import { Slider } from "@mui/material";
import React from "react";
import { Card } from "../../components/Card/Card";
import styles from "./styles.module.scss";

type Props = {
  spinningEnabled?: boolean;
};

export const ControlsContainer = ({ spinningEnabled }: Props) => {
  const marks = [
    {
      value: 100,
      label: "100px",
    },
    {
      value: 500,
      label: "500px",
    },
  ];

  function sizeSliderValue(value: number) {
    return `${value}px`;
  }

  return (
    <section>
      <Title tag="h1" size="lg">
        Controls
      </Title>
      <Card>
        <Title tag="p" size="sm">
          Size
        </Title>
        <div className={styles.sliderContainer}>
          <Slider
            defaultValue={250}
            valueLabelDisplay="auto"
            getAriaValueText={sizeSliderValue}
            valueLabelFormat={sizeSliderValue}
            step={50}
            min={100}
            max={500}
            color="secondary"
            marks={marks}
          />
        </div>
      </Card>
    </section>
  );
};
