import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing(2)};
  padding: ${props => props.theme.spacing(4)};
  border: 1px solid ${props => props.theme.colors.gray};
  border-radius: 4px;
  margin-bottom: ${props => props.theme.spacing(5)};
`;

export const FormLabel = styled.label`
  font-size: ${props => props.theme.fontSizes.medium};
  font-weight: ${props => props.theme.FontWeight.medium};
`;

export const FormInput = styled.input`
  font-size: ${props => props.theme.fontSizes.medium};
  font-weight: ${props => props.theme.FontWeight.light};
  padding: ${props => props.theme.spacing(1)};
  border: 1px solid ${props => props.theme.colors.gray};
  border-radius: 4px;
  
    ::placeholder {
    color: ${props => props.theme.colors.gray};
    opacity: 0.7;
`;

export const FormBtn = styled.button`
  font-size: ${props => props.theme.fontSizes.medium};
  font-weight: ${props => props.theme.FontWeight.light};
  color: ${props => props.theme.colors.white};
  background-color: ${props => props.theme.colors.accent};
  padding: ${props => props.theme.spacing(2)};
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: blue;
  }
`;
