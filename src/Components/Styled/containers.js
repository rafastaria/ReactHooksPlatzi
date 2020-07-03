import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";

import styled from "styled-components";

const HomeContainer = styled(Container)`
  margin-top: 15px;
`;

const PaperContainer = styled(Paper)`
  width: 250px;
  height: 250px;
  margin: 0 auto;
  text-align: center;
  background: red;
`;
const CenterContainer = styled(HomeContainer)`
  width: 250px;
  margin: 0 auto;
  margin-top: 50px;
`;

const ButtonContainer = styled.div`
  margin-top: 25px;
`;

export { HomeContainer, PaperContainer, CenterContainer, ButtonContainer };
