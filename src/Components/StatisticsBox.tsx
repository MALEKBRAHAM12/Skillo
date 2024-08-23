import React from 'react';
import { Box, Typography, Grid, Stack } from '@mui/material';
import { useTranslation } from 'react-i18next';
import CountUp from 'react-countup';
import backgroundImage from '/src/assets/im8.png'; // Assurez-vous que le chemin de l'image est correct

const StatisticsBox: React.FC = () => {
    const { t } = useTranslation();

    const num = [
        33000,  // Use numeric values for CountUp
        2000,
        150,
        620,
        20000
    ];

    const infoKeys = [
        "students",
        "reviews",
        "mentors",
        "courses",
        "lessons"
    ];

    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            width="100%"
            height="40vh"
            sx={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
            }}
        >
            <Box
                sx={{
                    backgroundColor: "#2F4558",
                    padding: 2,
                    width: "100%"
                }}
            >

                <Grid container direction="row" spacing='150px' sx={{ alignItems: "center", justifyContent: "center" }}>
                    {infoKeys.map((key, index) => (
                        <Grid item key={index}>
                            <Stack direction="column" alignItems="center">
                                <Typography sx={{
                                    fontFamily: "sans-serif", '&:hover': {
                                        transform: 'scale(1.07)',
                                        transition: "transform 0.9s"
                                    }, fontSize: "40px", color: "#F26619", fontWeight: "bold"
                                }} textAlign="center">
                                    <CountUp end={num[index]} duration={4} separator="." />+
                                </Typography>
                                <Typography sx={{ fontFamily: "sans-serif", fontSize: "20px", color: "white " }} textAlign="center">
                                    {t(key)}
                                </Typography>
                            </Stack>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Box>
    );
};

export default StatisticsBox;
