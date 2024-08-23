
import LeftSection from '../Components/LeftSection'
import { Stack } from '@mui/material'
import SignupSection from '../Components/SignupSection'

function Signup() {
    return (
        <Stack direction="row">
            <SignupSection />
            <LeftSection />

        </Stack>
    )
}

export default Signup