
import LeftSection from '../Components/LeftSection'
import { Stack } from '@mui/material'
import LoginSection from '../Components/LoginSection'

function Login() {
    return (
        <Stack direction="row">
            <LoginSection />

            <LeftSection />

        </Stack>
    )
}

export default Login