import React, { useEffect, useState } from 'react';
import { Grid, Card, CardContent, Typography, Button, Box, Stack } from '@mui/material';
import { MdOutlineSlowMotionVideo, MdGroups } from "react-icons/md";
import backgroundImage from '/src/assets/im8.png';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useAuth } from './AuthContexte';
import { useNavigate } from 'react-router-dom';
// Exemple de données de cours
interface Course {
    id: number;
    titleKey: string;
    imageUrl: string;
    videosCount: number;
    subscribersCount: number;
    descriptionKey: string;
    youtubeurl: string;
}

const coursesData: Course[] = [
    { id: 1, titleKey: 'masteringAdobeIllustrator', imageUrl: '/src/assets/im11.jpeg', videosCount: 10, subscribersCount: 50, descriptionKey: 'illustratorDescription', youtubeurl: "https://youtu.be/YyABz5BDl-I?si=DSfFizkezOEEswz_" },
    { id: 2, titleKey: 'uxUiDesignForBeginners', imageUrl: '/src/assets/im12.jpeg', videosCount: 8, subscribersCount: 40, descriptionKey: 'uxUiDescription', youtubeurl: "https://youtu.be/zl3EOqCYpWs?si=_xZyBZIrrMzYfBpq" },
    { id: 3, titleKey: 'createWebsiteWithMern', imageUrl: '/src/assets/im13.jpeg', videosCount: 12, subscribersCount: 55, descriptionKey: 'mernDescription', youtubeurl: "https://youtu.be/tSpA7XaDIaY?si=1ltHTWOCq8-oeBEg" },
    { id: 4, titleKey: 'appWithReactNative', imageUrl: '/src/assets/im14.jpeg', videosCount: 9, subscribersCount: 48, descriptionKey: 'reactNativeDescription', youtubeurl: "https://youtu.be/RmrulUeZyPo?si=TYaXTAyX5sTVrnvE" },
    { id: 5, titleKey: 'digitalMarketingMastery', imageUrl: '/src/assets/im15.jpeg', videosCount: 11, subscribersCount: 52, descriptionKey: 'digitalMarketingDescription', youtubeurl: "https://www.youtube.com/live/nkNHn0VqVBA?si=LhB93PvWd_bfuw_K" },
    { id: 6, titleKey: 'threeDModelingWithBlender', imageUrl: '/src/assets/im16.jpeg', videosCount: 7, subscribersCount: 36, descriptionKey: 'blenderDescription', youtubeurl: "https://youtu.be/iYp6SyHwTA0?si=wEWrmWFpKo-4zkw5" },
];

const Courses: React.FC = () => {
    const { t, i18n } = useTranslation();
    const [cardHeight, setCardHeight] = useState(340); // Initial height
    const [buttonStart, setButtonStart] = useState(80);
    const { user } = useAuth()
    const navigate = useNavigate();
    useEffect(() => {
        // Adjust height based on the current language
        if (i18n.language === 'fr') {
            setCardHeight(380);
            setButtonStart(90); // Increase height for French
        } else {
            setCardHeight(340); // Default height for other languages
            setButtonStart(80);
        }
    }, [i18n.language]);
    const navigateToLogin = () => {
        navigate("/login"); // Naviguer vers la page de connexion '/login'
    };
    return (
        <Box display="flex" width="100%" sx={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover'
        }}>
            <Stack>
                <Typography sx={{ fontFamily: "sans-serif", fontSize: '50px', color: "#2F4558", fontWeight: "bold", marginBottom: "3%", marginTop: "2%", marginLeft: "5%" }} >{t('ourPopularCourses')}</Typography>
                <Grid container spacing={3} sx={{ mb: 3 }}>
                    {coursesData.map((course, index) => (
                        <Grid item xs={12} sm={6} md={4} key={course.id} >
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                viewport={{ once: true }}
                            >
                                <Card sx={{ width: 350, height: cardHeight, ml: 4, mb: 2 }}>
                                    <Box sx={{ height: 160, overflow: 'hidden' }}>
                                        <img src={course.imageUrl} alt={t(course.titleKey)} style={{ width: '350px', height: '160px', aspectRatio: "16/9" }} />
                                    </Box>
                                    <CardContent>
                                        <Typography sx={{ fontFamily: "sans-serif", fontSize: '23px', color: "#F26619", fontWeight: "bold", textAlign: "center", mt: "-2%", mb: "2%" }}>{t(course.titleKey)}</Typography>
                                        <Typography gutterBottom sx={{ fontFamily: "revert-layer", fontSize: '16px', fontWeight: "bold", color: "#2F4558" }}>  <MdOutlineSlowMotionVideo color='#F26619' /> {`${course.videosCount} ${t('videos')} | `}
                                            <MdGroups color='#F26619' /> {`${course.subscribersCount} ${t('subscribers')}`}
                                        </Typography>
                                        <Typography sx={{ fontFamily: "revert-layer", fontSize: '14px', color: "#2F4558" }}>{t(course.descriptionKey)}</Typography>
                                        {!!user ?
                                            <><Button
                                                variant="contained"
                                                sx={{
                                                    '&:hover': {
                                                        backgroundColor: "#F6B12D",
                                                        transform: 'scale(1.07)',
                                                        transition: "transform 0.9s",
                                                    },
                                                    backgroundColor: "#F26619",
                                                    fontSize: '12px',
                                                    mt: "5%",
                                                    width: buttonStart,
                                                    marginLeft: "75%",
                                                    height: "30px",
                                                }}
                                                onClick={() => window.location.href = course.youtubeurl}
                                            >
                                                {t('start')}
                                            </Button></>
                                            : <><Button
                                                variant="contained"
                                                sx={{
                                                    '&:hover': {
                                                        backgroundColor: "#525351",
                                                        transform: 'scale(1.07)',
                                                        transition: "transform 0.9s",
                                                    },
                                                    backgroundColor: "#585858",
                                                    fontSize: '12px',
                                                    mt: "5%",
                                                    width: buttonStart,
                                                    marginLeft: "75%",
                                                    height: "30px",
                                                }}
                                                onClick={navigateToLogin}
                                            >
                                                {t('register')}
                                            </Button></>}
                                    </CardContent>
                                </Card>
                            </motion.div>
                        </Grid>
                    ))}
                </Grid>
            </Stack>
        </Box>
    );
};

export default Courses;
