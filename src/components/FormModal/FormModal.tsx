import React, {useState} from 'react';
import axios from 'axios';
import {
    ModalOverlay,
    Container,
    Error,
    Title,
    ErrorsWrapper,
    EmailInput,
    SubmitButton,
    PasswordInput,
} from "./style.";

interface PropsType {
    close: () => void,
    modal: {
        typeId: number,
        label: string,
        button: string,
        needConfirmPassword: boolean,
    },
}

interface FormCredentials {
    email: string,
    password: string,
    confirmPassword?: string,
}

export function FormModal({close, modal}: PropsType) {

    const [emailContent, setEmailContent] = useState<string>('');
    const [passwordContent, setPasswordContent] = useState<string>('');
    const [confirmPasswordContent, setConfirmPasswordContent] = useState<string>('');
    const [validatorErrors, setValidatorErrors] = useState({
        email: null,
        password: null,
        confirmPassword: null,
    });


    const register = () => {
        const newUser: FormCredentials = {
            email: emailContent,
            password: passwordContent,
            confirmPassword: confirmPasswordContent,
        }

        axios.post("http://localhost:8000/api/register", newUser)
            .then((res) => console.log(res))
            .catch((err) => setValidatorErrors(err.response.data.errors))
    }

    const login = () => {
        const loginCredentials: FormCredentials = {
            email: emailContent,
            password: passwordContent,
        }
        axios.post("http://localhost:8000/api/login", loginCredentials)
            .then((res) => console.log(res))
            .catch((err) => console.log(err.response.data.errors))
    }

    return (
        <>
            <ModalOverlay onClick={close}/>
            {
                Object.values(validatorErrors)?.find(error => error != null)
                &&
                <ErrorsWrapper>
                    {Object.values(validatorErrors)
                        .map(error => <Error><p>{error}</p></Error>)}
                </ErrorsWrapper>
            }
            <Container>
                <Title>{modal.label}</Title>
                <EmailInput placeholder="Email" type="text" onChange={(e) => setEmailContent(e.target.value)}/>
                <PasswordInput placeholder="Senha" type="password"
                               onChange={(e) => setPasswordContent(e.target.value)}/>
                {modal.needConfirmPassword
                    &&
                    <PasswordInput
                        type="password"
                        placeholder="Confirme sua senha"
                        onChange={(e) => setConfirmPasswordContent(e.target.value)}
                    />}
                <SubmitButton type="button"
                              onClick={() => modal.typeId === 1 ? login() : register()}>{modal.button}</SubmitButton>
            </Container>
        </>
    )
}