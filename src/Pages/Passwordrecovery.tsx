import { Stack } from "@mui/material"
import LeftSection from "../Components/LeftSection"
import Password from "../Components/Passwordrecovery"

function Passwordrecovery() {
    return (
        <Stack direction="row">
            <Password />
            <LeftSection />

        </Stack>
    )
}

export default Passwordrecovery