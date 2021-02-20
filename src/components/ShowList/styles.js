import styled from 'styled-components'

export const List = styled.div`
  display: flex;
  width: 100%;
  max-width: 500px;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  /* &::-webkit-scrollbar {
    display: none;
  }; */
`;
