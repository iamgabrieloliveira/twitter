import styled from 'styled-components';

export const Container = styled.div`
  background: black;

  width: 35%;

  padding: 12px 24px;

  display: flex;
  flex-direction: column;

  gap: 12px;
`

export const SearchInput = styled.input`
  width: 360px;
  height: 50px;

  border: none;
  border-radius: 19.5px;

  background: #202327;

  padding: 12px 35px;

  font-size: 17px;

  &:focus {
    outline: 0;
    color: white;
  }
`
export const MaybeLikeWrapper = styled.div`
  width: 360px;
  min-height: 250px;

  background: #15181C;

  border-radius: 14px;
`
export const WhatsHappenWrapper = styled.div`
  width: 360px;
  min-height: 250px;

  background: #15181C;

  border-radius: 14px;
`