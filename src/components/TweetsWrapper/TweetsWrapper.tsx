import React, {ReactComponentElement} from 'react';
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  
  padding: 12px 25px;
`
interface PropsType {
    children: ReactComponentElement<any>
}

export function TweetsWrapper({children}: PropsType) {
    return (
        <Wrapper>
            {children}
        </Wrapper>
    )
}