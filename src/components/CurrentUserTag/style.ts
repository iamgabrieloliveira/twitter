import styled from 'styled-components';

export const Container = styled.div`
  width: 230px;
  height: 40px;

  position: absolute;
  bottom: 20px;

  display: flex;
  align-items: center;

  gap: 10px;
`
export const UserPhoto = styled.div`
  width: 34px;
  height: 34px;

  border-radius: 50%;

  background: #7A7A7A;
`

export const Content = styled.div`
  text-align: left;

  h1, h2 {
    font-size: 17px;
  }

  h2 {
    color: #7A7A7A;
  }
`