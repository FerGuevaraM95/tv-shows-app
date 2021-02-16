import styled from 'styled-components'

export const Card = styled.div`
  flex: 0 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  scroll-snap-align: center;
`;

export const ShowImage = styled.img`
  width: 65%;
`;

export const ShowTitle = styled.h2`
  margin: 20px auto 4px;
  font-size: 16px;
  font-weight: 600;
  color: #12153D;
`;

export const RaitingBox = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

export const Raiting = styled.p`
  font-size: 9px;
  font-weight: 500;
  color: #434670;
`;

export const Star = styled.img`
  width: 12px;
`;

