import React, {useState} from 'react';
import {FormModal} from '../../components/FormModal/FormModal';
import {
    Main,
    Footer,
    Right,
    ButtonsWrapper,
    LoginButton,
    LoginTitle,
    LoginSubTitle,
    RegisterButton,
    TwitterWallpaper,
} from "./style";

const footerData: string[] = [
    'Sobre',
    'Central de Ajuda',
    'Termos de Serviço',
    'Política de Privacidade',
    'Política de cookies',
    'Acessibilidade',
    'Informações de anúncios',
    'Blog',
    'Status',
    'Carreiras',
    'Recursos da marca',
    'Publicidade',
    'Marketing',
    'Twitter para Empresas',
    'Desenvolvedores',
    '2022 Twitter, Inc'
]

interface ModalTypes {
    login: {
        typeId: number,
        label: string,
        button: string,
        needConfirmPassword: boolean,
    },
    register: {
        typeId: number,
        label: string,
        button: string,
        needConfirmPassword: boolean,
    }
}

const modalTypes: ModalTypes = {
    login: {
        typeId: 1,
        label: 'Entrar no twitter',
        button: 'Login',
        needConfirmPassword: false,
    },
    register: {
        typeId: 2,
        label: 'Criar conta',
        button: 'Registrar',
        needConfirmPassword: true,
    }
}

export function Login() {

    const [loginModal, setLoginModal] = useState(false);
    const [registerModal, setRegisterModal] = useState(false);

    return (
        <>
            <Main>
                {loginModal &&
                    <FormModal close={() => setLoginModal(!loginModal)} modal={modalTypes.login}/>}
                {registerModal &&
                    <FormModal close={() => setRegisterModal(!registerModal)} modal={modalTypes.register}/>}
                <TwitterWallpaper src="/assets/twitter-login.png" alt="twitter wallpaper"/>
                <Right>
                    <LoginTitle>
                        Acontecendo agora
                    </LoginTitle>
                    <LoginSubTitle>
                        Inscreva-se no Twitter hoje mesmo.
                    </LoginSubTitle>

                    <ButtonsWrapper>
                        <LoginButton onClick={() => setLoginModal(!loginModal)}>
                            Entrar
                        </LoginButton>
                        <RegisterButton onClick={() => setRegisterModal(!registerModal)}>
                            Registrar
                        </RegisterButton>
                    </ButtonsWrapper>
                </Right>
            </Main>
            <Footer>
                {footerData.map(item => <span>{item}</span>)}
            </Footer>
        </>
    )
}