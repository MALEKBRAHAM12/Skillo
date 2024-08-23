import { Box, Button, Card, CardContent, CardMedia, Grid, Stack, TextField, Typography } from '@mui/material'
import Navbar from '../Components/Navbar'
import Footer from '../Components/footer'
import backgroundImage from '/src/assets/im8.png';
import { motion } from 'framer-motion';
import { useAuth } from '../Components/AuthContexte';
interface BlogPost {
    id: number;
    title: string;
    image: string;
    date: string;
    excerpt: string;
    link: string;
}

// Données d'exemple pour les articles de blog
const blogPosts: BlogPost[] = [
    {
        id: 1,
        title: "Comment créer un site web attractif",
        image: "/src/assets/blog/art1.PNG",
        date: "15 juillet 2024",
        excerpt: "Découvrez les meilleures pratiques pour créer un site web qui attire l'attention de vos visiteurs.",
        link: "https://xn--russir-en-b4a.fr/site-internet-attractif-nos-10-conseils/"
    },
    {
        id: 2,
        title: "Comment créer un site web attractif",
        image: "/src/assets/blog/art1.PNG",
        date: "15 juillet 2024",
        excerpt: "Découvrez les meilleures pratiques pour créer un site web qui attire l'attention de vos visiteurs.",
        link: "/blog/comment-creer-un-site-web-attractif"
    }, {
        id: 3,
        title: "Comment créer un site web attractif",
        image: "/src/assets/blog/art1.PNG",
        date: "15 juillet 2024",
        excerpt: "Découvrez les meilleures pratiques pour créer un site web qui attire l'attention de vos visiteurs.",
        link: "/blog/comment-creer-un-site-web-attractif"
    }, {
        id: 4,
        title: "Comment créer un site web attractif",
        image: "/src/assets/blog/art1.PNG",
        date: "15 juillet 2024",
        excerpt: "Découvrez les meilleures pratiques pour créer un site web qui attire l'attention de vos visiteurs.",
        link: "/blog/comment-creer-un-site-web-attractif"
    }, {
        id: 5,
        title: "Comment créer un site web attractif",
        image: "/src/assets/blog/art1.PNG",
        date: "15 juillet 2024",
        excerpt: "Découvrez les meilleures pratiques pour créer un site web qui attire l'attention de vos visiteurs.",
        link: "/blog/comment-creer-un-site-web-attractif"
    },
    {
        id: 6,
        title: "Les tendances du design web pour 2024",
        image: "/src/assets/blog/art1.PNG",
        date: "10 juillet 2024",
        excerpt: "Explorez les dernières tendances en matière de design web et comment les appliquer à vos projets.",
        link: "/blog/tendances-design-web-2024"
    },
    // Ajoutez d'autres articles de blog selon vos besoins
];
function Blogpage() {
    const { user } = useAuth()
    return (
        <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Navbar />
            <Box display="flex" width="100%" height={user ? "230vh" : "170vh"} sx={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',

            }}><Stack direction="column" textAlign="center" spacing={3}>
                    <motion.div
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <Typography sx={{ fontFamily: "sans-serif", fontSize: '50px', marginTop: "1%", color: "#2F4558", fontWeight: "bold" }}>
                            Bienvenue sur notre Blog
                        </Typography>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <Typography sx={{ fontFamily: "revert-layer", fontSize: '20px', color: "#2F4558", marginX: "5%" }}>Bienvenue sur le blog de Skillo, votre source d'inspiration éducative. Découvrez des articles enrichissants et des conseils pratiques pour stimuler votre apprentissage et votre croissance professionnelle.</Typography></motion.div>
                    <Grid container spacing={3} justifyContent="center" sx={{ mt: 5 }}>
                        {blogPosts.map((post) => (
                            <Grid item key={post.id} xs={12} sm={6} md={4}>
                                <Card sx={{ maxWidth: 345, backgroundColor: "#DCDFDA", borderRadius: "10px" }}>
                                    <CardMedia
                                        component="img"
                                        height="270"
                                        image={post.image}
                                        alt={post.title}
                                    />
                                    <CardContent>

                                        <Typography variant="body2" color="text.secondary" sx={{ color: '#2F4558', fontWeight: "bold", fontSize: '14px' }}>
                                            {post.date}
                                        </Typography>

                                        <Box sx={{ display: 'flex', justifyContent: 'center', mt: '10px' }}>
                                            <a href={post.link} style={{ textDecoration: 'none' }}>
                                                <Typography color="primary" sx={{ cursor: 'pointer', fontSize: "16px", color: "#F26619", fontWeight: 'bold', '&:hover': { textDecoration: 'underline' } }}>
                                                    Lire l'article complet
                                                </Typography>
                                            </a>
                                        </Box>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                    {!!user &&
                        <> <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: "center", marginLeft: "20px", mt: 5, width: "800px", height: "200px", py: 5, backgroundColor: '#F6B12D' }}>
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                            >
                                <Typography sx={{ fontFamily: 'sans-serif', fontSize: '30px', color: '#2F4558', fontWeight: 'bold' }}>
                                    Abonnez-vous à notre Newsletter
                                </Typography>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                            >
                                <Typography sx={{ fontFamily: 'revert-layer', fontSize: '18px', color: '#2F4558', mt: 2, mb: 4 }}>
                                    Recevez les dernières nouvelles, articles et mises à jour directement dans votre boîte mail.
                                </Typography>
                            </motion.div>
                            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '80%', maxWidth: 500 }}>
                                <motion.div
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8 }}
                                >
                                    <TextField
                                        fullWidth
                                        variant="outlined"
                                        placeholder="Entrez votre adresse e-mail"
                                        sx={{ mb: 2, backgroundColor: '#FFFFFF', borderRadius: '4px' }}
                                    />
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8 }}
                                >
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        sx={{ width: '100%', py: 1, fontWeight: 'bold' }}
                                    >
                                        S'abonner
                                    </Button>
                                </motion.div>
                            </Box>
                        </Box></>}
                </Stack>

            </Box>
            <Footer />
        </Box>
    )
}

export default Blogpage