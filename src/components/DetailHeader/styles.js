import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  height: 230px;
  overflow-y: hidden;
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 0;
  overflow-x: hidden;
  
  @media(min-width: 500px) {
    border-radius: 50px;
    border-bottom-right-radius: 0;
  };
`;

export const Image = styled.img`
  position: absolute;
  width: 100%;
  bottom: 36px;
  border-bottom-left-radius: 30px;
  /* max-height:500px; */
`;

export const InfoCard = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  position: absolute;
  bottom: 10px;
  left: 22px;
  width: 100%;
  height: 75px;
  border-top-left-radius: 50px;
  border-bottom-left-radius: 50px;
  background-color: #FFFFFF;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);

  
`;

export const ValueContainer = styled.div`
  display: flex;
  flex-direction:column;
  align-items: center;
  font-size: 10px;
  font-weight: 500;
  color: #12153D;

  &:nth-child(1) {
    margin-top: 5px;
  }
  &:nth-child(2) {
    margin-bottom: 5px;
  }
`;

export const Star = styled.img`
  width: 18px;
`;

export const FavoriteStar = styled.img`
  width: 22px;
`;

export const PopularitySquad = styled.span`
  padding: 3px 4px;
  background-color: #51CF66;
  border-radius: 2px;
  font-size: 8px;
  font-weight: 500;
  color: #FFFFFF;
`;

export const Span = styled.span`
  margin-top: 5px;
  font-weight: 500;
  color: #12153D;
`;

export const SpanLight = styled.span`
  font-weight: 400;
  font-size: 7px;
  color: #9A9BB2;
`;

export const SubSpan = styled.span`
  font-size: 8px;
  font-weight: 400;
`;
