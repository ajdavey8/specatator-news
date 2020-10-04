import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 246px;
  margin: 28px auto;
`

const Container = styled.div`
  ${({ theme }) => theme.mediaLarge} {
  border-bottom: 0.5px solid ${({ theme }) => theme.lightGrey};
  }
`



const Header = () => (
  <Container>
    <Wrapper>
      <img src="https://uploads-ssl.webflow.com/5d9b7070166f6262119ae16a/5d9b7139166f6203e99ae7c4_spectator-logo.svg" />
    </Wrapper>
  </Container>
)

export default Header;