
import {Logo, Wrapper} from "./login.styled"
import Form from "./components/form/form.component"
import logo from '../../assets/icons/logo.svg';
import { Container, Grid } from "@mui/material";

export default function Login() {
    return (
        <>
        <Container>
                <Wrapper container justifyContent={'center'}>
                    <Grid item xs={3} justifyContent ={'center'}>
                        <Grid container justifyContent={'center'}>
                            <Logo src={logo} alt={'Netflix Logo'}/>
                            <Form/>
                        </Grid>   
                    </Grid>
                </Wrapper>
            </Container>
        </>
        
    )
}