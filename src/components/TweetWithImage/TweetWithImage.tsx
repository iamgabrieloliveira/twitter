import React from 'react';
import {
    TweetHeader,
    Container,
    TweetTitle,
    TweetImage,
    TextContainer,
    UserAvatar,
    UserData
} from "./style";

export function TweetWithImage() {
    return (
        <Container>
            <TweetHeader>
                <UserAvatar/>
                <TextContainer>
                    <UserData>
                        <p>Gabriel <span style={{color: '#7A7A7A'}}>@oliveira - 27 jun</span></p>
                    </UserData>
                    <TweetTitle>
                        Meu primeiro post...
                    </TweetTitle>
                </TextContainer>
            </TweetHeader>
            <TweetImage/>
        </Container>
    )
}