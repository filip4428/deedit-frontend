import * as React from 'react';
import styled from "styled-components"
import Button from 'react-bootstrap/Button';


const ButtonsWrapper = styled.div`
display:flex;
`



// interface TitleProps {
//     readonly marginRight?: string;
//   };
  
  const LoginButton = styled(Button)`
    /* margin-right: ${props => props.marginRight }; */
  `




const Login:React.FC = ()=>{

  


    return(
        <ButtonsWrapper>
<LoginButton variant="secondary"  >Log In</LoginButton>

<LoginButton variant="secondary" >Sign Up</LoginButton>
</ButtonsWrapper>
    )
}

export default Login;