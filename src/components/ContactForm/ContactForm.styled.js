import styled from '@emotion/styled';
import { Field } from 'formik';

export const ContainerForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const LabelForm = styled.label`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Input = styled(Field)`
  font-size: 18px;
  padding: 10px;
  background-color: white;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px #3a799966;
  }

  &:invalid {
    outline: none;
    box-shadow: 0 0 0 3px #ff0000;
  }

  &:placeholder-shown {
    outline: none;
    box-shadow: none;
  }
`;

export const ButtonForm = styled.button`
  border: none;
  background: #3a7999;
  color: #f2f2f2;
  padding: 10px;
  font-size: 18px;
  border-radius: 5px;
  position: relative;
  box-sizing: border-box;
  transition: all 500ms ease;
  cursor: pointer;

  &:hover {
    background: rgba(0, 0, 0, 0);
    color: #3a7999;
    box-shadow: inset 0 0 0 3px #3a7999;
  }
`;
