import React, { useState, useRef } from 'react';
import { Box, Typography, Icon, Stack, Paper, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';
import { motion, useInView } from 'framer-motion';

import { SiMaterialdesignicons } from "react-icons/si";
import { MdDesignServices } from "react-icons/md";
import { FaLaptopCode } from "react-icons/fa";
import { TbDeviceMobileCode } from "react-icons/tb";
import { IoMdStats } from "react-icons/io";
import { TbCube3dSphere } from "react-icons/tb";
import { MdOutlineVideoSettings } from "react-icons/md";
import { TfiWrite } from "react-icons/tfi";

const DemoPaper = styled(Paper)(({ theme }) => ({
    width: "88%",
    height: "88%",
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

type ItemData = {
    key: string;
    icon: React.ElementType;
};

const itemData: ItemData[] = [
    { key: 'graphicDesign', icon: SiMaterialdesignicons },
    { key: 'uxUiDesign', icon: MdDesignServices },
    { key: 'webDevelopment', icon: FaLaptopCode },
    { key: 'appDevelopment', icon: TbDeviceMobileCode },
    { key: 'digitalMarketing', icon: IoMdStats },
    { key: '3dModeling', icon: TbCube3dSphere },
    { key: 'videoEditing', icon: MdOutlineVideoSettings },
    { key: 'contentWriting', icon: TfiWrite }
];

const Categories: React.FC = () => {
    const { t } = useTranslation();
    const [startIndex, setStartIndex] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const handleNext = () => {
        setStartIndex((prevIndex) => (prevIndex + 1) % itemData.length);
    };

    const handlePrev = () => {
        setStartIndex((prevIndex) => (prevIndex - 1 + itemData.length) % itemData.length);
    };

    const getVisibleItems = () => {
        return [
            itemData[startIndex % itemData.length],
            itemData[(startIndex + 1) % itemData.length],
            itemData[(startIndex + 2) % itemData.length],
            itemData[(startIndex + 3) % itemData.length],
        ];
    };

    const animationVariants = (direction: string) => ({
        hidden: { opacity: 0, x: direction === 'left' ? -50 : 50 },
        visible: { opacity: 1, x: 0 }
    });

    return (
        <Box display="flex" width="100%" justifyContent="center" sx={{
            backgroundColor: "#F6B12D", textAlign: "center"
        }} ref={ref}>
            <Stack direction="column" width="100%">
                <Box sx={{ backgroundColor: '#F6B12D', width: "700px", padding: '2px', borderRadius: '11px', marginBottom: '8px', marginLeft: "24%", textAlign: 'center' }}>
                    <Typography sx={{ fontFamily: "sans-serif", color: 'white', fontSize: '50px', fontWeight: "bold" }}>
                        {t('exploreCategories')}
                    </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Button onClick={handlePrev} sx={{ minWidth: "20px", height: "20px", marginRight: "3px", marginLeft: "8px", backgroundColor: "#2F4558", color: "white" }}>&lt;</Button>
                    <Box sx={{ display: "grid", flex: 1, gap: 5, mx: 2, marginBottom: "5%", gridTemplateColumns: "repeat(4, 1fr)" }}>
                        {getVisibleItems().map((item, index) => (
                            <motion.div
                                key={index}
                                initial="hidden"
                                animate={isInView ? "visible" : "hidden"}
                                variants={animationVariants(index < 2 ? 'left' : 'right')}
                                transition={{ duration: 1, delay: index * 0.3 }}
                            >
                                <DemoPaper variant="elevation">
                                    <Box display="flex" flexDirection="column" alignItems="center">
                                        <Icon component={item.icon} sx={{ fontSize: 40, mb: 2, color: "#F26619" }} />
                                        <Typography sx={{ fontWeight: "bold", mb: 2, fontFamily: "revert-layer", fontSize: '20px', color: "#2F4558" }}>
                                            {t(`${item.key}.title`)}
                                        </Typography>
                                        <Typography sx={{ fontFamily: "revert-layer", fontSize: '12px', color: "#2F4558" }}>
                                            {t(`${item.key}.description`)}
                                        </Typography>
                                    </Box>
                                </DemoPaper>
                            </motion.div>
                        ))}
                    </Box>
                    <Button onClick={handleNext} sx={{ minWidth: "20px", height: "20px", marginLeft: "8px", marginRight: "8px", backgroundColor: "#2F4558", color: "white" }}>&gt;</Button>
                </Box>
            </Stack>
        </Box>
    );
};

export default Categories;
