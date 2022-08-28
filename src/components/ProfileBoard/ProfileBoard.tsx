import React from 'react';
import {TweetsWrapper} from "../TweetsWrapper/TweetsWrapper";
import {TweetWithImage} from "../TweetWithImage/TweetWithImage";
import {
    Container,
    Button,
    Content,
    IconText,
    UserData,
    ProfileImage,
    RelationshipData,
    BackgroundImage,
} from "./style";

export function ProfileBoard() {
    return (
        <>
            <Container>
                <BackgroundImage/>
                <ProfileImage src="/assets/pingu.jpg"/>
                <Content>
                    <UserData>
                        <h1>Gabriel</h1>
                        <h2>@oliveiradeus</h2>
                    </UserData>
                    <p className="description">Description....</p>
                    <IconText><img src="/assets/location.png" alt="Location"/><p>location</p></IconText>
                    <IconText><img src="/assets/cake.png" alt="Cake"/><p>dia 1 de maio</p></IconText>
                    <RelationshipData>
                        <p><span style={{color: '#7A7A7A'}}>Seguindo</span> 91</p>
                        <p><span style={{color: '#7A7A7A'}}>Seguidores</span> 789</p>
                    </RelationshipData>
                    <Button>Editar perfil</Button>
                </Content>
            </Container>
            <TweetsWrapper>
                <TweetWithImage/>
            </TweetsWrapper>
        </>
    )
}