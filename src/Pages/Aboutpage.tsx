import React, { useState } from 'react';
import { Box, Typography, Icon, Paper } from '@mui/material';
import Navbar from '../Components/Navbar';
import Footer from '../Components/footer';
import backgroundImage from '/src/assets/im8.png';
import ReactPlayer from 'react-player';
import { motion } from 'framer-motion';
import { SiMinds } from "react-icons/si";
import { FaPeopleGroup } from "react-icons/fa6";
import { styled } from '@mui/material/styles';
import { IoAccessibility } from "react-icons/io5";
import { MdLocationOn, MdPhone, MdVerified } from "react-icons/md";

type ItemData = {
    key: string;
    icon: React.ElementType;
    description: string;
};

type LocationData = {
    image: string;
    address: string;
    phone: string;
    mapSrc: string;
};

const DemoPaper = styled(Paper)(({ theme }) => ({
    width: "30%",
    height: "30%",
    display: "flex",
    justifyContent: "center",
    padding: theme.spacing(2),
    ...theme.typography.body2,
    textAlign: 'center',
    borderRadius: "10px",
    '&:hover': {
        transform: 'scale(1.07)',
        transition: "transform 0.9s",
        border: "2px solid #F26619"
    }
}));

const itemData: ItemData[] = [
    { key: 'Accessibilité', icon: IoAccessibility, description: "Nous croyons que l'éducation doit être accessible à tous, partout. Nous nous engageons à offrir des cours disponibles 24/7 pour répondre aux besoins d'apprentissage." },
    { key: "Qualité de l'enseignement", icon: MdVerified, description: "Nous nous engageons à fournir un enseignement de haute qualité avec des contenus pédagogiques conçus par des experts dans leur domaine." },
    { key: 'Innovation', icon: SiMinds, description: "Nous sommes dédiés à l'innovation continue dans l'éducation en ligne. Nous intégrons les dernières technologies et méthodes pédagogiques pour créer des expériences d'apprentissage." },
    { key: 'Support personnalisé', icon: FaPeopleGroup, description: "Nous croyons en l'importance du soutien individualisé pour chaque apprenant. Notre équipe est disponible pour offrir une assistance personnalisée et des conseils adaptés." },
];

const locationData: LocationData[] = [
    {
        image: '/src/assets/tunis.jpg',
        address: '123 Rue de Tunis, Tunis',
        phone: '123-456-789',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3237.9455361031933!2d10.171077315508004!3d36.80649467995152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd336aa9cc081d%3A0x8e16c49a51772571!2sTunis%2C%20Tunisia!5e0!3m2!1sen!2s!4v1597690016537!5m2!1sen!2s',
    },
    {
        image: '/src/assets/sfax.jpg',
        address: '456 Rue de Sfax, Sfax',
        phone: '987-654-321',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3218.2783070587127!2d10.74181931550818!3d34.73900628042348!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1302134a823d4831%3A0xd1f0de72e7d87f34!2sSfax%2C%20Tunisia!5e0!3m2!1sen!2s!4v1597690056537!5m2!1sen!2s',
    },
    {
        image: '/src/assets/sousse.jpg',
        address: '789 Rue de Sousse, Sousse',
        phone: '555-666-777',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3216.3293996150097!2d10.619326615508258!3d35.82560527932709!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1302fc0a73bbf4cd%3A0x4a2bfe0bb7b0cfbb!2sSousse%2C%20Tunisia!5e0!3m2!1sen!2s!4v1597690096537!5m2!1sen!2s',
    },
    {
        image: '/src/assets/gabes.jpg',
        address: '101 Rue de Gabes, Gabes',
        phone: '888-999-000',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.965029717331!2d10.081913615507804!3d33.88153648066016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12e2d3244a0bb03d%3A0xc7f4d5a3c40f6235!2sGab%C3%A8s%2C%20Tunisia!5e0!3m2!1sen!2s!4v1597690136537!5m2!1sen!2s',
    },
    {
        image: '/src/assets/bizerte.jpg',
        address: '202 Rue de Bizerte, Bizerte',
        phone: '111-222-333',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3224.475407631158!2d9.859804315508352!3d37.274717279847654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12e35b1e353ac41f%3A0x6d7fd7b58fa9bc0a!2sBizerte%2C%20Tunisia!5e0!3m2!1sen!2s!4v1597690176537!5m2!1sen!2s',
    },
];

function Aboutpage() {
    const [selectedMapSrc, setSelectedMapSrc] = useState(locationData[0].mapSrc);

    return (
        <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Navbar />
            <Box display="flex" flexDirection="column" width="100%" sx={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                padding: 2,
            }}>
                <Box textAlign="center">
                    <motion.div
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <Typography sx={{ fontFamily: "sans-serif", fontSize: '50px', marginTop: "1%", color: "#2F4558", fontWeight: "bold", textAlign: 'center' }}>
                            La première plateforme éducative en Tunisie
                        </Typography>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <Typography sx={{ fontFamily: "revert-layer", fontSize: '20px', color: "#2F4558", marginX: "5%" }}>
                            Skillo est une plateforme dédiée à l'apprentissage en ligne, offrant une variété de cours couvrant divers domaines. Notre mission est de rendre l'éducation accessible à tous, partout.
                        </Typography>
                    </motion.div>
                </Box>

                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", my: 4 }}>
                    <ReactPlayer
                        url='https://www.youtube.com/watch?v=TcOEt6TdoYQ'
                        width='40vw'
                        height='45vh'
                    />
                </Box>

                <Box sx={{ backgroundColor: '#2F4558' }}>
                    <Typography sx={{ fontFamily: "sans-serif", fontSize: '50px', marginTop: "1%", color: "white", fontWeight: "bold", textAlign: 'center' }}>
                        Nos valeurs
                    </Typography>
                </Box>
                <Box
                    component={motion.div}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        my: 4,
                        gap: 2,
                        flexWrap: "wrap"
                    }}
                >
                    {itemData.map((item, index) => (
                        <DemoPaper key={index} variant="elevation">
                            <Box display="flex" flexDirection="column" alignItems="center">
                                <Icon component={item.icon} sx={{ fontSize: 40, mb: 2, color: "#F26619" }} />
                                <Typography sx={{ fontWeight: "bold", mb: 2, fontFamily: "revert-layer", fontSize: '20px', color: "#2F4558" }}>
                                    {item.key}
                                </Typography>
                                <Typography sx={{ fontFamily: "revert-layer", fontSize: '12px', color: "#2F4558" }}>
                                    {item.description}
                                </Typography>
                            </Box>
                        </DemoPaper>
                    ))}
                </Box>

                <Box sx={{ display: 'flex', flexDirection: 'row', my: 4 }}>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <img src="/src/assets/histoire.jpeg" alt="Notre histoire" style={{ width: '45vw', marginLeft: "10%", height: '60vh', borderRadius: '8px' }} />
                        </Box>
                    </motion.div>
                    <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', marginTop: "-33px", alignItems: 'center', p: 2 }}>
                        <Typography sx={{ fontFamily: "sans-serif", fontSize: '50px', color: "#2F4558", fontWeight: "bold", textAlign: 'center' }}>
                            Notre histoire
                        </Typography>
                        <Typography sx={{ fontFamily: "revert-layer", padding: "20px", fontSize: '20px', color: "#2F4558", textAlign: 'center', mt: 2 }}>
                            Fondée en 2020, Skillo a rapidement évolué pour devenir l'une des principales plateformes d'apprentissage en ligne en Tunisie. Depuis notre lancement, nous avons aidé des milliers d'étudiants à atteindre leurs objectifs académiques et professionnels.
                        </Typography>
                    </Box>
                </Box>

                <Box sx={{ width: "100%", textAlign: "center", mb: 4 }}>
                    <Typography sx={{ fontFamily: "sans-serif", fontSize: '50px', color: "#2F4558", fontWeight: "bold", textAlign: 'center' }} >
                        Nos locaux en Tunisie
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 4 }}>
                        {locationData.map((location, index) => (
                            <Paper
                                key={index}
                                onClick={() => setSelectedMapSrc(location.mapSrc)}
                                sx={{
                                    backgroundColor: '#FFD754',
                                    width: '300px',
                                    cursor: 'pointer',
                                    padding: 2,
                                    borderRadius: 2,
                                    textAlign: 'center',
                                    '&:hover': {
                                        boxShadow: 6,
                                    },
                                }}
                            >
                                <Typography sx={{ fontWeight: "bold", mb: 2, fontFamily: "revert-layer", fontSize: '20px', color: "#2F4558" }}>
                                    <MdLocationOn style={{ marginRight: 1, color: "" }} /> {location.address}
                                </Typography>
                                <Typography sx={{ fontFamily: "revert-layer", fontSize: '15px', color: "#2F4558" }}>
                                    <MdPhone style={{ marginRight: 1 }} /> {location.phone}
                                </Typography>
                            </Paper>
                        ))}
                    </Box>
                </Box>

                <Box sx={{ my: 4, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <iframe
                        src={selectedMapSrc}
                        width="90%"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen
                        aria-hidden="false"
                        tabIndex={0}
                    ></iframe>
                </Box>
            </Box>
            <Footer />
        </Box>
    );
}

export default Aboutpage;
