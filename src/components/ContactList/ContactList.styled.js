import styled from '@emotion/styled';

export const ContainertList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ListContact = styled.li`
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

export const BtnDelete = styled.button`
  margin-left: 10px;
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
