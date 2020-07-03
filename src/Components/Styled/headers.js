import react from "react";
import styled, { css } from "styled-components";

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: white;
`;

const TitleWrapper = styled.section`
  padding: 4em;
  margin-bottom: 10px;
  background: ${(props) => (props.primary ? "black" : "green")};
`;

const RedTitle = styled(Title)`
  color: red;
`;

export { TitleWrapper, Title, RedTitle };
