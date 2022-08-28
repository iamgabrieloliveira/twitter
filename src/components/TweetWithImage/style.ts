import styled from 'styled-components';

export const Container = styled.div`
  height: 300px;
`
export const TweetHeader = styled.div`
  display: flex;
  align-items: center;

  gap: 12px;
`
export const TweetImage = styled.div`
  width: 95%;
  height: 250px;

  background: #7A7A7A;

  margin-top: 10px;

  border-radius: 14px;
`
export const UserAvatar = styled.div`
  width: 50px;
  height: 50px;

  background: #7A7A7A;

  border-radius: 50%;
`
export const UserData = styled.div`
  display: flex;

  > p {
    color: white;
  }
`
export const TweetTitle = styled.p`
  color: white;
`
export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;

  gap: 5px;
`
