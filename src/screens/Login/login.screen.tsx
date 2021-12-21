import { Grid } from "@mui/material"
import { grid } from "@mui/system"
import Button from "../../components/buttons/Button/button.component"

export default function Login() {
    return (
        <Grid container justifyContent={'center'}>
            <Grid item xs={4}>
            <Button primary >Entrar</Button>
            </Grid>
        </Grid>
        
    )
}