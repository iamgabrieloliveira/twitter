import React from 'react';
import {UserType} from '../../genericsTypes/__types';
import {
    Container,
    UserPhoto,
    Content,
} from "./style";

interface PropsType {
    user: UserType,
}

export function CurrentUserTag({user}: PropsType) {
    return (
        <Container>
            <UserPhoto/>
            <Content>
                <h1>{user.name}</h1>
                <h2>{user.username}</h2>
            </Content>
        </Container>
    )
}