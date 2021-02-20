import styled from 'styled-components'

export const Container = styled.div`
  margin: 24px;

  @media(min-width: 500px) {
    padding-bottom: 180px;
  }
`;

export const Title = styled.h1`
  font-size: 20px;
  font-weight: 600;
  line-height: 32px;
  color: #12153D;
`;

export const InfoContainer = styled.div`
  display: flex;
  margin: 0;
`;

export const Info = styled.span`
  margin: 4px 7px;
  font-size: 10px;
  font-weight: 400;
  color: #9A9BB2;
`;

export const Categories = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 12px 0;
`;

export const CategoryChip = styled.li`
  margin: 0 6px 6px;
  padding: 4px 12px;
  font-size: 10px;
  font-weight: 500;
  color: #434670;
  border: solid 0.75px #dcdce2;
  border-radius: 25px;
`;

export const Summary = styled.div`
  margin: 30px 0;
`;

export const Subtitle = styled.h2`
  margin-bottom: 8px;
  font-size: 16px;
  font-weight: 500;
  line-height: 28px;
  color: #12153D;
`;

export const Text = styled.p`
  font-size: 11px;
  font-weight: 400;
  line-height: 18px;
  color: #737599;
`;



