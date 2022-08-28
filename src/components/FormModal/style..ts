import styled from "styled-components";

export const Container = styled.div`
  position: absolute;

  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);

  width: 550px;
  min-height: 500px;

  background: black;

  border-radius: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;

  justify-content: center;

  gap: 5px;

  border: 1px solid #333A;
`

export const ModalOverlay = styled.div`
  position: absolute;
  background: rgba(91, 112, 131, 0.4);
  height: 100%;
  width: 100%;
`

export const Title = styled.h1`
  color: white;

  text-align: center;

  font-size: 40px;
`

export const Input = styled.input`
  background: transparent;
  border: 1px solid rgb(51, 54, 57);
  border-radius: 5px;

  height: 45px;
  width: 300px;

  padding: 5px 12px;

  font-size: 18px;

  color: white;

  &:focus {
    outline: 0;
  }
`

export const EmailInput = styled(Input)``

export const PasswordInput = styled(Input)`
  margin-top: 5px;
`

export const SubmitButton = styled.button`
  height: 45px;
  width: 300px;

  border-radius: 10px;
  border: none;

  color: white;

  font-size: 18px;

  background: #33a1f2;
  transition: .2s;

  margin-top: 12px;

  cursor: pointer;

  &:hover {
    background: black;

    color: #33a1f2;

    border: 1px solid #33a1f2;
  }
`
export const ErrorsWrapper = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;

  display: flex;
  flex-direction: column;
  gap: 10px;
`
export const Error = styled.div`
  min-width: 300px;
  height: 60px;

  padding: 18px 25px;

  background: white;

  box-shadow: 0px 0px 5px 2px rgb(0, 0, 0, .2);

  border-radius: 15px;

  > p {
    color: red;

    font-size: 20px;
  }
`