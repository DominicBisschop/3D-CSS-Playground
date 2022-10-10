import React from "react";
import { Title } from "../../components/Typography/Title/Title";
import { Card } from "../../components/Card/Card";

export const CodeBlockContainer = () => {
  return (
    <section>
      <Title tag="h1" size="lg">
        Code
      </Title>
      <Card height="300px">Code block goes here</Card>
    </section>
  );
};
