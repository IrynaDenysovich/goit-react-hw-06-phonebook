import styled from '@emotion/styled';

export const LabelFilter = styled.label`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const InputFilter = styled.input`
  font-size: 18px;
  padding: 10px;
  background-color: white;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px #3a799966;
  }
`;
