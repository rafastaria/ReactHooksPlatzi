import React, { useState } from "react";
import {
  PaperContainer,
  CenterContainer,
  ButtonContainer,
} from "../Styled/containers";
import { MainButton } from "../Styled/buttons";

function Counter(props) {
  // Declara una nueva variable de estado, la cual llamaremos “count”
  const [count, setCount] = useState(0);

  return (
    <CenterContainer>
      <PaperContainer elevation={3}>
        {props.title}
        <CenterContainer>{count}</CenterContainer>
        <ButtonContainer>
          <MainButton
            onClick={() => setCount(count + 3)}
            variant="contained"
            color="primary"
          >
            Aumenta el contador
          </MainButton>
        </ButtonContainer>
      </PaperContainer>
    </CenterContainer>
  );
}

export default Counter;
