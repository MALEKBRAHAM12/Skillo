import { Box, ImageList, ImageListItem, ImageListItemBar, Stack, Typography, Grid } from '@mui/material';
import Navbar from '../Components/Navbar';
import backgroundImage from '/src/assets/im8.png';
import image from '/src/assets/proff.jpeg';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import Footer from '../Components/footer';


function Mentor1() {
    return (
        <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Navbar />
            <Box display="flex" width="100%" height="280vh" sx={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',

            }}>
                <Stack textAlign='center' spacing={3} width="100%">
                    <motion.div
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <Typography sx={{ fontFamily: "sans-serif", marginTop: "1%", fontSize: '50px', color: "#2F4558", fontWeight: "bold" }}>
                            Nos Professeurs
                        </Typography>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <Typography sx={{ fontFamily: "revert-layer", fontSize: '20px', color: "#2F4558", marginX: "5%" }}>
                            Contenu riche et précieux sous la supervision des meilleurs professeurs et enseignants en Tunisie. La plateforme Skillo s'est efforcée d'attirer les meilleurs professeurs et enseignants compétents de toute la République pour accompagner vos enfants dans leur voyage vers la réussite.
                        </Typography>
                    </motion.div>
                    <Grid container spacing={2} alignItems="center" justifyContent="center">
                        <Grid item xs={12} md={12} textAlign="center">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                            >
                                <Box display="flex" justifyContent="center">
                                    <img src={image} alt="Your Image" style={{ width: '60%', maxHeight: 'calc(90vh - 60px)', borderRadius: "10px", border: "solid 3px #F26619" }} />
                                </Box>
                            </motion.div>
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.6 }}
                            >
                                <Stack direction="row">
                                    <Box sx={{ marginTop: '6%' }}>
                                        <Stack direction="column"><motion.div
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.8 }}
                                        >
                                            <Typography sx={{ fontFamily: "sans-serif", fontSize: '50px', marginTop: "20%", color: "#2F4558", fontWeight: "bold" }}>Découvrez nos professeurs</Typography>
                                            <Typography sx={{ fontFamily: "revert-layer", fontSize: '20px', color: "#2F4558", marginX: "5%" }}>Contenu de haute qualité préparé par les meilleurs professeurs en Tunisie.</Typography></motion.div>
                                        </Stack>
                                    </Box>
                                    <Box sx={{ width: '40%', marginTop: '6%', height: 450, overflowY: 'scroll', '&::-webkit-scrollbar': { display: 'none' } }}>
                                        <ImageList>
                                            {itemData.map((item) => (
                                                <ImageListItem key={item.img}>
                                                    <img style={{ minWidth: "100px", minHeight: "30px", objectFit: "cover" }}
                                                        srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                                        src={`${item.img}?w=248&fit=crop&auto=format`}
                                                        alt={item.title}
                                                        loading="lazy"
                                                    />
                                                    <ImageListItemBar
                                                        title={item.title}
                                                        subtitle={<span>by: {item.author}</span>}
                                                        position="below"
                                                    />
                                                </ImageListItem>
                                            ))}
                                        </ImageList>
                                    </Box>
                                </Stack>
                            </motion.div>
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.8 }}
                            >
                                <Box sx={{ marginTop: '3%' }}>
                                    <Typography sx={{ fontFamily: "sans-serif", fontSize: '50px', color: "#2F4558", fontWeight: "bold" }}>Statistiques des compétences</Typography>
                                    <Grid container spacing={5} justifyContent="center" sx={{ marginTop: '2%', marginLeft: "0.3%" }}>
                                        {skillsData.map((skill, index) => (
                                            <Grid item xs={12} sm={6} md={4} key={index}>
                                                <motion.div
                                                    initial={{ opacity: 0, scale: 0.8 }}
                                                    whileInView={{ opacity: 1, scale: 1 }}
                                                    viewport={{ once: true }}
                                                    transition={{ duration: 0.8, delay: index * 0.2 }}
                                                >
                                                    <Box textAlign="center" sx={{ backgroundColor: "#F6B12D", width: "300px" }}>
                                                        <Typography sx={{ fontFamily: "sans-serif", fontSize: '20px', color: "white", fontWeight: "bold" }}>{skill.name}</Typography>
                                                        <Typography sx={{ fontFamily: "sans-serif", fontSize: '40px', color: "#F26619", fontWeight: "bold" }}><CountUp end={skill.percentage} duration={4} separator="." />%</Typography>
                                                    </Box>
                                                </motion.div>
                                            </Grid>
                                        ))}
                                    </Grid>
                                </Box>
                            </motion.div>
                        </Grid>
                    </Grid>
                </Stack>
            </Box>
            <Footer />
        </Box>
    );
}

export default Mentor1;

const itemData = [
    {
        img: '/src/assets/prof1.png',
        title: 'prof1',
        author: '@bkristastucchio',
    },
    {
        img: '/src/assets/prof2.png',
        title: 'prof2',
        author: '@rollelflex_graphy726',
    },
    {
        img: '/src/assets/prof3.png',
        title: 'prof3',
        author: '@helloimnik',
    },
    {
        img: '/src/assets/prof4.png',
        title: 'prof4',
        author: '@nolanissac',
    },
    {
        img: '/src/assets/prof5.png',
        title: 'prof5',
        author: '@hjrc33',
    },
    {
        img: '/src/assets/prof6.png',
        title: 'prof6',
        author: '@arwinneil',
    },
    {
        img: '/src/assets/prof7.png',
        title: 'prof7',
        author: '@tjdragotta',
    },
    {
        img: '/src/assets/prof8.png',
        title: 'prof8',
        author: '@katie_wasserman',
    },
];

const skillsData = [
    { name: 'Pédagogie', percentage: 95 },
    { name: 'Communication', percentage: 90 },
    { name: 'Expertise en matière', percentage: 92 },
    { name: 'Innovation', percentage: 88 },
    { name: 'Encadrement', percentage: 91 },
    { name: 'Méthodologie', percentage: 89 },
];
