import styled from '@emotion/styled';

export const FilterSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing(2)};
  padding: ${props => props.theme.spacing(4)};
  border: 1px solid ${props => props.theme.colors.gray};
  border-radius: 4px;
  margin-bottom: ${props => props.theme.spacing(2)};
`;

export const FilterLabel = styled.label`
  display: block;
  font-size: ${props => props.theme.fontSizes.medium};
  font-weight: ${props => props.theme.FontWeight.medium};
`;

export const FilterInput = styled.input`
  font-size: ${props => props.theme.fontSizes.medium};
  font-weight: ${props => props.theme.FontWeight.light};
  padding: ${props => props.theme.spacing(1)};
  border: 1px solid ${props => props.theme.colors.gray};
  border-radius: 4px;

  ::placeholder {
    color: ${props => props.theme.colors.gray};
    opacity: 0.7;
  }
`;
