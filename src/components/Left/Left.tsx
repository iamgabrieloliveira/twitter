import React from 'react';
import {CurrentUserTag} from "../CurrentUserTag/CurrentUserTag";
import {UserType} from "../../genericsTypes/__types";
import {
    Container,
    Row,
    Button,
    MenuWrapper,
} from "./style";

interface MenuDataType {
    label: string,
    icon: string,
}

export function Left() {

    const fakeUser: UserType = {
        name: 'Gabriel',
        username: '@oliveiradeus'
    }

    const menuData: MenuDataType[] = [
        {
            label: 'Página inicial',
            icon: './assets/house.png',
        },
        {
            label: 'Notificações',
            icon: '/assets/bell.png',
        },
        {
            label: 'Mensagens',
            icon: '/assets/mail.png',
        },
        {
            label: 'Favoritados',
            icon: '/assets/user.png'
        }
    ];

    return (
        <Container>
            <MenuWrapper>
                {menuData.map(row => {
                    return (
                        <Row>
                            <img src={row.icon} alt={row.label}/>
                            <h1>{row.label}</h1>
                        </Row>
                    )
                })}
            </MenuWrapper>
            <Button>Tweetar</Button>
            <CurrentUserTag user={fakeUser}/>
        </Container>
    )
}
