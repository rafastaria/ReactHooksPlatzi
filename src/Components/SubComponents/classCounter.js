import React, { useState } from "react";
import {
  PaperContainer,
  CenterContainer,
  ButtonContainer,
} from "../Styled/containers";
import { MainButton } from "../Styled/buttons";

class ClassCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0, title: "inicial" };
  }

  sumFunction = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  render() {
    return (
      <CenterContainer>
        <PaperContainer elevation={3}>
          {this.props.title}
          {this.props.secondTitle}
          <ButtonContainer>
            <MainButton
              onClick={() => this.sumFunction()}
              variant="contained"
              color="primary"
            >
              BOTÓN
            </MainButton>
          </ButtonContainer>
        </PaperContainer>
      </CenterContainer>
    );
  }
}

export default ClassCounter;
