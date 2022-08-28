import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  height: 450px;
  width: 100%;

  background: gray;

  border-bottom: 2px solid #2F3336;
`
export const BackgroundImage = styled.div`
  height: 370px;
  background-image: url("/assets/wallpaper.jpg");
  background-position: center;
  object-fit: cover;
  overflow: hidden;
  background-size: 900px;
  background-repeat: no-repeat;
`
export const ProfileImage = styled.img`
  background-color: #7A7A7A;

  border: 3.75px solid #000000;
  border-radius: 50%;

  width: 140px;
  height: 140px;

  position: absolute;
  z-index: 100;

  margin-top: 120px;
  margin-left: 20px;
`
export const Content = styled.div`
  position: relative;

  background: black;
  color: white;

  padding: 30px 0px 20px 30px;

  display: flex;
  flex-direction: column;
  gap: 8px;
  
  .description {
    font-weight: lighter;
    font-size: 14px;
}
`
export const Button = styled.button`
  background: transparent;

  color: #33A1F2;
  font-weight: bold;
  font-size: 15px;
  width: 120px;
  height: 45px;

  border: 1px solid #33A1F2;
  border-radius: 19.5px;

  position: absolute;
  top: 13px;
  right: 14px;

  cursor: pointer;
  transition: .4s;

  &:hover {
    opacity: .8;
  }
`
export const UserData = styled.div`
  text-align: left;

  > h2 {
    font-size: 16px;
    font-weight: lighter;
    color: #7A7A7A;
  }
`
export const IconText = styled.div`
  display: flex;
  align-items: center;

  gap: 5px;
`

export const RelationshipData = styled.div`
  display: flex;
  gap: 8px;
`