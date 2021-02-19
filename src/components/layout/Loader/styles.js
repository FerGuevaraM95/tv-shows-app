import styled, { keyframes } from 'styled-components'

const ldsRipple = keyframes`
  from {
    transform: rotate(0deg);
  };
  to {
    transform: rotate(360deg);
  };
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Ripple = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
  & div {
    position: absolute;
    border: 4px solid #FE6D8E;
    opacity: 1;
    border-radius: 50%;
    animation: ${ldsRipple} 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
    &:nth-child(2) {
      animation-delay: -0.5s;
    }
  }
`;
