import React from 'react';
import { Box, Button, Stack, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import backgroundImage from '/src/assets/im8.png';
import image from '/src/assets/im7.png';
import { WiDirectionRight } from "react-icons/wi";
import { Link } from 'react-router-dom';
import { useAuth } from './AuthContexte';
const First: React.FC = () => {
    const { t } = useTranslation();
    const { user } = useAuth()
    return (
        <Box display="flex" width="100%">
            <Box
                flex={5}
                sx={{
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    position: 'relative',
                    display: 'flex',
                    color: '#2F4558',
                    width: '50%',
                }}
            >
                <Stack direction="column">
                    <Typography sx={{ zIndex: 1, fontFamily: "sans-serif", fontSize: '53px', fontWeight: "bold", marginTop: "18%", marginLeft: "8%" }}>
                        {t('first.title')}
                    </Typography>
                    <Stack sx={{ marginTop: "3%" }}>
                        <Typography sx={{ zIndex: 1, fontFamily: "revert-layer", fontSize: '16px', marginLeft: "8%" }}>
                            {t('first.description')}
                            <Typography sx={{ zIndex: 1, fontFamily: "revert-layer", fontSize: '16px' }}>
                                {t('first.description_continued')}
                            </Typography>
                        </Typography>
                    </Stack>{!user &&
                        <Link to='/Signup'>
                            <Button
                                variant="contained"
                                sx={{
                                    width: "180px",
                                    '&:hover': { backgroundColor: '#F6B12D' },
                                    backgroundColor: "#F26619",
                                    height: "40px",
                                    marginLeft: "8%",
                                    marginTop: "6%"
                                }}
                                endIcon={<WiDirectionRight />}
                            >
                                {t('first.button')}
                            </Button></Link>}
                </Stack>
            </Box>
            <img src={image} alt="Your Image" style={{ maxWidth: '100%', maxHeight: 'calc(100vh - 70px)', flex: 3 }} />
        </Box>
    );
};

export default First;
