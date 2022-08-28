import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  background: black;

  min-width: 400px;
  max-width: 23%;

  height: 100%;

  color: white;

  padding: 60px 100px;
`
export const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;

  margin-bottom: 40px;
`
export const Row = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;

  > img {
    width: 25px;
  }
  > h1 {
    font-size: 24px;
  }
  > img, h1 {
    cursor: pointer;
    transition: .3s;

    > img:hover, h1:hover {
      opacity: .7;
    }
  }
`
export const Button = styled.button`
  background: #33A1F2;

  width: 230px;
  height: 50px;

  border-radius: 25px;
  border: none;

  font-size: 17px;
  font-weight: 700;
  color: white;

  cursor: pointer;

  transition: .2s;

  &:hover {
    background: #3095de;
    color: #FFFA;
  }
`