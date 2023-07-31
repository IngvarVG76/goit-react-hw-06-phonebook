import styled from '@emotion/styled';

export const ContList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const ContItem = styled.li`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing(2)};
  padding: ${props => props.theme.spacing(2)};
  border: 1px solid ${props => props.theme.colors.gray};
  border-radius: 4px;
`;

export const ContButton = styled.button`
  font-size: ${props => props.theme.fontSizes.small};
  font-weight: ${props => props.theme.FontWeight.light};
  color: ${props => props.theme.colors.white};
  background-color: ${props => props.theme.colors.accent};
  padding: ${props => props.theme.spacing(1)};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-left: auto;

  &:hover {
    background-color: blue;
  }
`;
