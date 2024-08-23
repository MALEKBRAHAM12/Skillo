import { Box, Typography, IconButton, CardActionArea, CardContent, CardMedia, Grid, Paper, Rating } from '@mui/material';
import React, { useState } from 'react';
import backgroundImage from '/src/assets/im8.png';
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import { useTranslation } from 'react-i18next';

interface Feedback {
    name: string;
    image: string;
    description: string;
    rate: number;
}

const Feedbacks: React.FC = () => {
    const { t } = useTranslation();

    const itemData: Feedback[] = [
        {
            name: 'Mariem Mansoura',
            image: 'src/assets/user1.jpeg',
            description: t('feedback1'),
            rate: 4,
        },
        {
            name: 'Farah Ladjimi',
            image: 'src/assets/user2.jpeg',
            description: t('feedback2'),
            rate: 5,
        },
        {
            name: 'Mohamed Mani',
            image: 'src/assets/user3.jpeg',
            description: t('feedback3'),
            rate: 3,
        },
        {
            name: 'Ahmed Mrad',
            image: 'src/assets/user4.jpeg',
            description: t('feedback4'),
            rate: 4,
        },
        {
            name: 'Basma frih',
            image: 'src/assets/user5.png',
            description: t('feedback5'),
            rate: 5,
        },
        {
            name: 'kenza Bahri',
            image: 'src/assets/user6.jpeg',
            description: t('feedback6'),
            rate: 4,
        },
    ];

    const [startIndex, setStartIndex] = useState(0);

    const handleNext = () => {
        if (startIndex < itemData.length - 3) {
            setStartIndex(startIndex + 1);
        }
    };

    const handlePrev = () => {
        if (startIndex > 0) {
            setStartIndex(startIndex - 1);
        }
    };

    return (
        <Box display="flex" width="100%" sx={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            height: '75vh',
            textAlign: 'center',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-start'
        }}>
            <Typography sx={{ color: '#2F4558', fontFamily: "sans-serif", fontSize: '50px', fontWeight: 'bold', mt: "-10px" }}>
                {t('studentsReview')}
            </Typography>
            <Box display="flex" justifyContent="flex-end" alignItems="center" sx={{ mt: 2, width: '100%', pr: '4%' }}>
                <IconButton color="inherit" sx={{ backgroundColor: "#F6B12D", mr: 1, borderRadius: 0 }} aria-label="previous review" onClick={handlePrev}>
                    <GrFormPrevious />
                </IconButton>
                <IconButton color="inherit" sx={{ backgroundColor: "#F26619", borderRadius: 0, ml: 2 }} aria-label="next review" onClick={handleNext}>
                    <MdNavigateNext />
                </IconButton>
            </Box>
            <Grid container spacing={2} sx={{ justifyContent: 'center', mt: '-2px' }}>
                {itemData.slice(startIndex, startIndex + 3).map((item, index) => (
                    <Grid item key={index} sx={{ position: 'relative', mt: "70px" }}>
                        <Box
                            sx={{
                                backgroundColor: '#2F4558',
                                p: 3,
                                borderRadius: '50%',
                                position: 'absolute',
                                top: '-90px',
                                left: '50%',
                                transform: 'translateX(-50%)',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            <CardMedia
                                component="img"
                                image={item.image}
                                alt={item.name}
                                sx={{
                                    zIndex: 10,
                                    width: "120px",
                                    borderRadius: '50%',
                                    boxShadow: 10,
                                    aspectRatio: "1/1"
                                }}
                            />
                        </Box>
                        <Paper
                            elevation={1}
                            sx={{
                                maxWidth: 345,
                                marginX: 3,
                            }}
                        >
                            <CardActionArea sx={{ width: "100%", margin: 0 }}>
                                <CardContent sx={{ marginTop: "60px" }}>
                                    <Typography
                                        gutterBottom
                                        sx={{ fontFamily: "revert-layer", fontSize: '22px', color: "#2F4558", fontWeight: "bold", textAlign: "center" }}
                                        component="div"
                                    >
                                        {item.name}
                                    </Typography>
                                    <Typography sx={{ fontFamily: "revert-layer", fontSize: '12px', color: "#2F4558" }}>
                                        {item.description}
                                    </Typography>
                                    <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
                                        <Rating name="read-only" value={item.rate} readOnly />
                                    </Box>
                                </CardContent>
                            </CardActionArea>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default Feedbacks;
