import React from 'react';
import { Box, Typography, IconButton, Link, Stack, Divider } from '@mui/material';
import { styled } from '@mui/material/styles';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const FooterBox = styled(Box)(({ theme }) => ({
    backgroundColor: '#2F4558',
    color: 'white',
    padding: theme.spacing(1),
    textAlign: 'center',
}));

const Footer: React.FC = () => {
    const { t } = useTranslation();

    return (
        <FooterBox>
            <Stack direction={{ xs: 'column', md: 'row' }} spacing={2} justifyContent="space-around">
                <Box>
                    <Typography sx={{ color: "#F26619", fontSize: 24, fontFamily: "sans-serif", fontWeight: "bold", p: 1 }}>Skillo</Typography>
                    <Typography sx={{ fontFamily: "revert-layer", fontSize: '13px', color: "white ", mb: "10px" }}>
                        {t('slogan')}
                    </Typography>
                    <Stack direction="row" spacing={2} justifyContent="center">
                        <IconButton aria-label="facebook" sx={{ '&:hover': { backgroundColor: '#F6B12D' }, }} color="inherit">
                            <FaFacebookF />
                        </IconButton>
                        <IconButton aria-label="twitter" sx={{ '&:hover': { backgroundColor: '#F6B12D' }, }} color="inherit">
                            <FaTwitter />
                        </IconButton>
                        <IconButton aria-label="instagram" sx={{ '&:hover': { backgroundColor: '#F6B12D' }, }} color="inherit">
                            <FaInstagram />
                        </IconButton>
                        <IconButton aria-label="linkedin" sx={{ '&:hover': { backgroundColor: '#F6B12D' }, }} color="inherit">
                            <FaLinkedinIn />
                        </IconButton>
                    </Stack>
                </Box>

                {/* Quick Links */}
                <Box>
                    <Typography sx={{ color: "#F26619", fontSize: 24, fontFamily: "sans-serif", fontWeight: "bold", p: 1 }}>{t('quickLinks')}</Typography>
                    <Stack spacing={0.5}>
                        <Link href="#" color="inherit" sx={{ fontFamily: "revert-layer", fontSize: '13px', color: "white " }} underline="hover">
                            {t('privacy')}
                        </Link>
                        <Link href="#" color="inherit" sx={{ fontFamily: "revert-layer", fontSize: '13px', color: "white " }} underline="hover">
                            {t('conditions')}
                        </Link>
                        <Link href="#" color="inherit" sx={{ fontFamily: "revert-layer", fontSize: '13px', color: "white " }} underline="hover">
                            {t('support')}
                        </Link>
                    </Stack>
                </Box>

                {/* Contact Us */}
                <Box>
                    <Typography sx={{ color: "#F26619", fontSize: 24, fontFamily: "sans-serif", fontWeight: "bold", p: 1 }}>{t('contactUs')}</Typography>
                    <Stack spacing={0.5} alignItems="center">
                        <Box display="flex" alignItems="center">
                            <FaPhoneAlt style={{ marginRight: '5px', color: "#F6B12D" }} />
                            <Typography sx={{ fontFamily: "revert-layer", fontSize: '13px', color: "white " }}>{t('phone')}</Typography>
                        </Box>
                        <Box display="flex" alignItems="center">
                            <FaEnvelope style={{ marginRight: '5px', color: "#F6B12D" }} />
                            <Typography sx={{ fontFamily: "revert-layer", fontSize: '13px', color: "white " }}>Email: contact@skillo.com</Typography>
                        </Box>
                        <Box display="flex" alignItems="center">
                            <FaMapMarkerAlt style={{ marginRight: '5px', color: "#F6B12D" }} />
                            <Typography sx={{ fontFamily: "revert-layer", fontSize: '13px', color: "white " }}>{t('adress')}</Typography>
                        </Box>
                    </Stack>
                </Box>
            </Stack>
            <Divider sx={{ mt: "1%" }} />
            <Typography sx={{ mt: 1, mb: -1, fontFamily: "revert-layer", fontSize: '13px', color: "white " }}>
                &copy; {new Date().getFullYear()} All rights are reserved.
            </Typography>
        </FooterBox>
    );
};

export default Footer;
