import React from 'react';
import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import backgroundImage from '/src/assets/im8.png';
import image from '/src/assets/im11.png';

const Mentors: React.FC = () => {
    const { t } = useTranslation();

    return (
        <Box
            display="flex"
            width="100%"
            height="80vh"
            sx={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
            }}
        >
            <Box
                flex={2}
                component="img"
                src={image}
                alt="Your Image"
                sx={{
                    marginLeft: "-10%",
                    marginTop: "-5%",
                    maxWidth: '60%',
                    maxHeight: 'calc(95vh - 80px)',
                    objectFit: 'contain',
                }}
            />
            <Box flex={1} sx={{ marginLeft: "-10%" }}>
                <Typography sx={{ fontFamily: "sans-serif", fontSize: '46px', textAlign: "center", color: "#F26619", fontWeight: "bold", marginBottom: "3%", marginLeft: "-5%" }}>
                    {t('second.title')}
                </Typography>
                <Typography sx={{ fontFamily: "revert-layer", fontSize: '16px', color: "#2F4558", marginRight: "5%" }}>
                    {t('second.paragraph1')}
                </Typography>
                <Typography sx={{ fontFamily: "revert-layer", fontSize: '16px', marginTop: "4%", color: "#2F4558", marginRight: "5%" }}>
                    {t('second.paragraph2')}
                </Typography>
            </Box>
        </Box>
    );
};

export default Mentors;
