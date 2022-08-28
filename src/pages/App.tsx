import React from 'react';
import {Left} from '../components/Left/Left'
import {Right} from '../components/Right/Right';
import {ProfileTemplate} from "../components/ProfileTemplate/ProfileTemplate";
import styled from 'styled-components';

const SystemTemplate = styled.div`
  display: flex;
  height: 100%;
`

export function App() {
    return (
        <SystemTemplate>
            <Left/>
            <ProfileTemplate/>
            <Right/>
        </SystemTemplate>
    )
}