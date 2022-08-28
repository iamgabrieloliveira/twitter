import styled from "styled-components";

export const Main = styled.div`
  display: flex
`
export const TwitterWallpaper = styled.img``
export const Right = styled.div`
  background: black;

  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 60px;

  width: 100%;
  color: white;
`
export const LoginTitle = styled.h1`
  font-size: 60px;
`
export const LoginSubTitle = styled.h2`
  margin-top: 30px;
`
export const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  width: 150px;

  margin-top: 24px;
`
export const Button = styled.button`
  border-radius: 14px;
  height: 40px;

  font-size: 17px;

  cursor: pointer;
  transition: .3s;
`

export const LoginButton = styled(Button)`
  color: #33A1F2;

  border: 1.5px solid #33A1F2;
  background: transparent;

  &:hover {
    color: white;
    background: #33A1F2;
  }
`

export const RegisterButton = styled(Button)`
  color: white;
  background: #33A1F2;

  border: none;

  &:hover {
    color: #33A1F2;
    background: transparent;

    border: 1.5px solid #33A1F2;
  }
`

export const Footer = styled.footer`
  position: absolute;
  bottom: 0;

  display: flex;
  justify-content: space-around;

  width: 100%;
  height: 50px;

  padding: 12px;

  background: black;

  > span {
    color: #7A7A7A;
  }
`