import styled from 'styled-components';
import { Link } from "react-router-dom";

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
  border-radius: 30px;
`;

export const ShowTitle = styled(Link)`
  display: block;
  margin: 20px auto 4px;
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;
  color: #12153D;
`;

export const RaitingBox = styled.div`
  display: flex;
  margin: 10px auto;
  padding-bottom: 20px;
`;

export const Raiting = styled.p`
  font-size: 9px;
  font-weight: 500;
  color: #434670;
`;

export const Star = styled.img`
  width: 12px;
`;

