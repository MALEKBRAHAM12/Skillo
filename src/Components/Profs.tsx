import { Box, Typography, CardContent } from '@mui/material';
import React from 'react';
import backgroundImage from '/src/assets/im8.png';
import { useTranslation } from 'react-i18next';
interface Prof {
    id: number;
    name: string;
    imageUrl: string;
    category: string;
}

const ProfsData: Prof[] = [
    { id: 1, name: 'Prof. John Doe', imageUrl: '/src/assets/prof1.png', category: "uxUiDesigner" },
    { id: 2, name: 'Prof. Jane Smith', imageUrl: '/src/assets/prof2.png', category: "webDeveloper" },
    { id: 3, name: 'Prof. Michael Brown', imageUrl: '/src/assets/prof3.png', category: "mobileDeveloper" },
    { id: 4, name: 'Prof. Sarah Wilson', imageUrl: '/src/assets/prof4.png', category: "digitalMarketer" },
    { id: 5, name: 'Prof. David Johnson', imageUrl: '/src/assets/prof5.png', category: "graphicDesigner" },
    { id: 6, name: 'Prof. Emily Davis', imageUrl: '/src/assets/prof6.png', category: "videoEditor" },
    { id: 7, name: 'Prof. Daniel Taylor', imageUrl: '/src/assets/prof7.png', category: "contentCreator" },
    { id: 8, name: 'Prof. Laura White', imageUrl: '/src/assets/prof8.png', category: "3DModeliser" }
];

const Profs: React.FC = () => {
    const { t } = useTranslation();
    return (
        <Box display="flex" width="100%" sx={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            justifyContent: 'center',
            alignItems: 'center',
            height: '95vh' // Adjusted height
        }}>
            <Box display="flex" width="85%" sx={{
                height: '75vh', // Adjusted height
                background: "radial-gradient(circle, rgba(248,184,61,1) 0%, rgba(242,102,25,1) 76%)",
                marginTop: '0%',
                borderRadius: '12px',
                flexDirection: 'column',
                overflow: 'hidden'
            }}>
                <Typography sx={{ color: 'white', fontFamily: "sans-serif", fontSize: '35px', fontWeight: 'bold', textAlign: 'center', mt: "10px" }}>{t('ourExpertiseMentors')}</Typography>
                <Box sx={{ display: 'flex', overflow: 'hidden', width: '100%', mt: 3, position: 'relative' }}>
                    <Box
                        sx={{
                            display: 'flex',
                            animation: 'scroll 33s linear infinite',
                            '@keyframes scroll': {
                                '0%': { transform: 'translateX(0)' },
                                '100%': { transform: 'translateX(-100%)' }
                            },
                            backgroundColor: 'rgba(255, 255, 255, 0)',
                        }}
                    >
                        {ProfsData.concat(ProfsData).map(prof => (
                            <Box key={prof.id} sx={{ flex: '0 0 auto', width: '25%', color: '#2F4558', mx: "-10px" }}> {/* Adjusted margin */}
                                <Box sx={{ height: '100%', backgroundColor: "transparent" }}>
                                    <Box display="flex" justifyContent="center">
                                        <img src={prof.imageUrl} alt={prof.name} style={{ height: '250px', width: "80%", objectFit: 'contain' }} /> {/* Adjusted image size */}
                                    </Box>
                                    <CardContent>
                                        <Typography sx={{ fontFamily: "revert-layer", fontSize: '20px', color: "#2F4558", fontWeight: "bold", textAlign: "center", mt: "2%", mb: "2%" }}>{prof.name}</Typography>
                                        <Typography sx={{ fontFamily: "revert-layer", fontSize: '15px', color: "#2F4558", textAlign: "center", mt: "2%", mb: "2%" }}>{t(prof.category)}</Typography>
                                    </CardContent>
                                </Box>
                            </Box>
                        ))}
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default Profs;
