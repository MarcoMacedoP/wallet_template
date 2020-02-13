import styled from 'styled-components/native';

export const CenterModal = styled.View`
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
`;
export const ContainerModal = styled.View`
  height: 80%;
  width: 90%;
  flex-direction: column;
  justify-content: space-between;
  background-color: white;
  border-radius: 25px;
`;

export const IconBoxModal = styled.View`
  width: 100%;
  height: 10%;
  margin-top: 16px;
  justify-content: center;
  align-items: center;
  background-color: white;
`;
export const IconModal = styled.Image`
    width: 80%;
    height: 80%;
    resize-mode: contain;
`;