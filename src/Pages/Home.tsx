
import First from '../Components/First'
import Navbar from '../Components/Navbar'
import { Box } from '@mui/material'
import StatisticsBox from '../Components/StatisticsBox'
import Mentors from '../Components/Mentors'
import Categories from '../Components/Categories'
import Courses from '../Components/Courses'
import Profs from '../Components/Profs'
import Feedbacks from '../Components/Feedbacks'
import Footer from '../Components/footer'
import Questions from '../Components/Questions'
function Home() {
    return (

        <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Navbar />
            <First />
            <StatisticsBox />
            <Mentors />
            <Categories />
            <Courses />
            <Profs />
            <Feedbacks />
            <Questions />
            <Footer />
        </Box>
    )
}

export default Home