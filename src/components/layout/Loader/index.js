import { Container } from "./styles";

export const Loader = () => {
  return (
    <Container>
      <div className="lds-ripple">
        <div></div>
        <div></div>
      </div>
    </Container>
  );
};
