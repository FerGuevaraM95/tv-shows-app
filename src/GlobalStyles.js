import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  ul, li, h1, h2, h3, p, button {
    margin: 0;
    padding: 0;
  }

  ul {
    list-style: none;
  }

  button: {
    background: transparent;
    border: 0;
    outline: 0;
  }

  body {
    background: #FFFFFF;
    margin: 0 auto;
  }

  .app {
    @media(min-width: 500px) {
      max-width: 500px;
      margin: 20px auto;
      border-radius: 50px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }
  }


.lds-ripple {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-ripple div {
  position: absolute;
  border: 4px solid #FE6D8E;
  opacity: 1;
  border-radius: 50%;
  animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
}
.lds-ripple div:nth-child(2) {
  animation-delay: -0.5s;
}
@keyframes lds-ripple {
  0% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: 0px;
    left: 0px;
    width: 72px;
    height: 72px;
    opacity: 0;
  }
}

`;
