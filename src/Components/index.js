import React from "react";
import { TitleWrapper, Title, RedTitle } from "./Styled/headers";
import { HomeContainer } from "./Styled/containers";
import Counter from "./SubComponents/counter";
import ClassCounter from "./SubComponents/classCounter";
import "./index.css";

function Home() {
  return (
    <HomeContainer>
      <TitleWrapper secondary>
        <Title>Mini taller de Styled-Components y</Title>
      </TitleWrapper>
      <TitleWrapper primary>
        <RedTitle>React Hooks</RedTitle>
      </TitleWrapper>
      <Counter title="Comienzo de la demo de Hooks"></Counter>
    </HomeContainer>
  );
}

export default Home;
