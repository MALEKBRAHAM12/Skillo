import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Stack, Menu, MenuItem } from '@mui/material';
import { IoSchoolSharp } from "react-icons/io5";
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAuth } from './AuthContexte';
import { MdAccountCircle } from "react-icons/md";


export default function Navbar() {
    const { t, i18n } = useTranslation();
    const location = useLocation();
    const navigate = useNavigate();
    const { user, logout } = useAuth()

    const [selectedItem, setSelectedItem] = useState<string | null>(null);
    const [anchorElCourses, setAnchorElCourses] = useState<null | HTMLElement>(null);
    const [anchorElMentors, setAnchorElMentors] = useState<null | HTMLElement>(null);

    useEffect(() => {
        const path = location.pathname;
        if (path === '/Home') {
            setSelectedItem('Home');
        } else if (path.startsWith('/courses')) {
            setSelectedItem('Course');
        } else if (path === ('/Mentorpage')) {
            setSelectedItem('Mentor');
        } else if (path === '/Blogpage') {
            setSelectedItem('Blog');
        } else if (path === '/Aboutpage') {
            setSelectedItem('About');
        } else {
            setSelectedItem(null);
        }
    }, [location.pathname]);

    const handleButtonClick = (buttonName: string) => {
        setSelectedItem(buttonName);
    };

    const getButtonStyle = (buttonName: string) => ({
        color: "white",
        fontFamily: "sans-serif",
        fontWeight: selectedItem === buttonName ? 'bold' : 'normal'
    });

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };

    const handleCourseClick = (event: React.MouseEvent<HTMLElement>) => {
        setSelectedItem('Course');
        setAnchorElCourses(event.currentTarget);
    };



    const handleCategoryClick = (category: string, type: 'courses' | 'mentors') => {
        if (type === 'courses') {
            setAnchorElCourses(null);
            navigate(`/courses/${category}`);
        } else if (type === 'mentors') {
            setAnchorElMentors(null);
            navigate(`/mentors/${category}`);
        }
    };

    const handleCloseCourses = () => {
        setAnchorElCourses(null);
    };



    return (<>
        <Box sx={{ minHeight: 60 }} />
        <Box sx={{ flexGrow: 1, position: "fixed", width: "100%", zIndex: 99 }}>
            <AppBar position="static" sx={{ bgcolor: "#2F4558" }}>
                <Toolbar sx={{ justifyContent: 'space-between' }}>
                    <Stack direction="row" alignItems="center">
                        <IconButton
                            style={{ color: "white" }}
                            size="large"
                            edge="start"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <IoSchoolSharp />
                        </IconButton>
                        <Typography sx={{ color: "White", fontSize: 30, fontFamily: "sans-serif" }} >
                            {t('skillo')}
                        </Typography>
                    </Stack>

                    <Stack direction="row" spacing={2}>
                        <Link to="/Home" style={{ textDecoration: 'none' }}>
                            <Button sx={getButtonStyle('Home')} onClick={() => handleButtonClick('Home')}>{t('home')}</Button>
                        </Link>
                        <Button sx={getButtonStyle('Course')} onClick={handleCourseClick}>{t('course')}</Button>
                        <Menu
                            anchorEl={anchorElCourses}
                            open={Boolean(anchorElCourses)}
                            onClose={handleCloseCourses}
                        >
                            <MenuItem sx={{ color: '#2F4558', fontFamily: "sans-serif", fontSize: '16px', '&:hover': { backgroundColor: '#F26619', color: "white", fontWeight: "bold" } }} onClick={() => handleCategoryClick('graphicDesign', 'courses')}>{t('graphicDesign.title')}</MenuItem>
                            <MenuItem sx={{ color: '#2F4558', fontFamily: "sans-serif", fontSize: '16px', '&:hover': { backgroundColor: '#F26619', color: "white", fontWeight: "bold" } }} onClick={() => handleCategoryClick('uxUiDesign', 'courses')}>{t('uxUiDesign.title')}</MenuItem>
                            <MenuItem sx={{ color: '#2F4558', fontFamily: "sans-serif", fontSize: '16px', '&:hover': { backgroundColor: '#F26619', color: "white", fontWeight: "bold" } }} onClick={() => handleCategoryClick('webDevelopment', 'courses')}>{t('webDevelopment.title')}</MenuItem>
                            <MenuItem sx={{ color: '#2F4558', fontFamily: "sans-serif", fontSize: '16px', '&:hover': { backgroundColor: '#F26619', color: "white", fontWeight: "bold" } }} onClick={() => handleCategoryClick('appDevelopment', 'courses')}>{t('appDevelopment.title')}</MenuItem>
                            <MenuItem sx={{ color: '#2F4558', fontFamily: "sans-serif", fontSize: '16px', '&:hover': { backgroundColor: '#F26619', color: "white", fontWeight: "bold" } }} onClick={() => handleCategoryClick('digitalMarketing', 'courses')}>{t('digitalMarketing.title')}</MenuItem>
                            <MenuItem sx={{ color: '#2F4558', fontFamily: "sans-serif", fontSize: '16px', '&:hover': { backgroundColor: '#F26619', color: "white", fontWeight: "bold" } }} onClick={() => handleCategoryClick('3dModeling', 'courses')}>{t('3dModeling.title')}</MenuItem>
                            <MenuItem sx={{ color: '#2F4558', fontFamily: "sans-serif", fontSize: '16px', '&:hover': { backgroundColor: '#F26619', color: "white", fontWeight: "bold" } }} onClick={() => handleCategoryClick('videoEditing', 'courses')}>{t('videoEditing.title')}</MenuItem>
                            <MenuItem sx={{ color: '#2F4558', fontFamily: "sans-serif", fontSize: '16px', '&:hover': { backgroundColor: '#F26619', color: "white", fontWeight: "bold" } }} onClick={() => handleCategoryClick('contentWriting', 'courses')}>{t('contentWriting.title')}</MenuItem>
                        </Menu>
                        <Link to="/Mentorpage" style={{ textDecoration: 'none' }}>
                            <Button sx={getButtonStyle('Mentor')} onClick={() => handleButtonClick('Mentor')}>{t('mentor')}</Button>
                        </Link>
                        <Link to="/Blogpage" style={{ textDecoration: 'none' }}>
                            <Button sx={getButtonStyle('Blog')} onClick={() => handleButtonClick('Blog')}>{t('blog')}</Button>
                        </Link>
                        <Link to="/Aboutpage" style={{ textDecoration: 'none' }}>
                            <Button sx={getButtonStyle('About')} onClick={() => handleButtonClick('About')}>{t('about')}</Button>
                        </Link>
                    </Stack>

                    <Stack direction="row" spacing={2}>
                        {!!user ?
                            <><Link to="/Profil"><IconButton size="large" style={{ color: "white" }}><MdAccountCircle />
                            </IconButton></Link><Button onClick={logout} sx={{ backgroundColor: "#F26619", color: "white", minWidth: '80px', height: "35px", marginTop: "20%" }}>
                                    {t('logout')}
                                </Button></>
                            : <> <Link to="/Login" style={{ textDecoration: 'none' }}>
                                <Button sx={{ backgroundColor: "#F6B12D", color: "white", minWidth: '80px' }}>
                                    {t('login')}
                                </Button>
                            </Link>
                                <Link to="/Signup" style={{ textDecoration: 'none' }}>
                                    <Button sx={{ backgroundColor: "#F26619", color: "white", minWidth: '80px' }}>
                                        {t('signup')}
                                    </Button>
                                </Link></>}

                        <Stack direction="row">
                            <Button onClick={() => changeLanguage('en')} sx={{ color: 'white', fontSize: '12px', padding: '8px', marginRight: '-10px' }}>EN</Button>
                            <Button onClick={() => changeLanguage('fr')} sx={{ color: 'white', fontSize: '12px', padding: '8px', marginRight: '-10px' }}>FR</Button>
                        </Stack>
                    </Stack>
                </Toolbar>
            </AppBar>
        </Box></>
    );
}
