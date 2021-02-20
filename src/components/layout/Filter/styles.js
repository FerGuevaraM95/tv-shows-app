import styled from 'styled-components'

export const Text = styled.p`
  margin: 0 30px 10px;
  font-size: 10px;
  font-weight: 400;
  color: #434670;
  opacity: 0.5;
`;

export const FilterContainer = styled.ul`
  display: flex;
  margin: 0px 16px 32px;
`;

export const Chip = styled.li`
  margin: 0 8px;
  padding: 4px 11px;
  font-size: 12px;
  font-weight: 500;
  color: ${props => props.isActive ? "#FFFFFF" : "#434670"};
  background-color: ${props => props.isActive ? "#FE6D8E" : "#FFFFFF"};
  border: solid 0.75px ${props => props.isActive ? "#FFFFFF" : "#DCDCE2"};
  border-radius: 25px;
  cursor: pointer;
`;

