import React from 'react';
import {ProfileHeader} from '../ProfileHeader/ProfileHeader';
import {ProfileBoard} from '../ProfileBoard/ProfileBoard';
import styled from 'styled-components';

const Container = styled.div`
  width: 45%;
  background: black;

  border: 1px solid #2F3336;
`

export function ProfileTemplate() {
    return (
        <Container>
            <ProfileHeader/>
            <ProfileBoard/>
        </Container>
    )
}