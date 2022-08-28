import React from 'react';
import {Container, Content} from "./style";

export function ProfileHeader() {
    return (
        <Container>
            <img src="/assets/arrow-left.png" alt="arrow-left"/>
            <Content>
                <h1>Gabriel</h1>
                <h2>100 Tweets</h2>
            </Content>
        </Container>
    )
}