import * as React from 'react';
import { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { MdOutlineExpandMore } from "react-icons/md";
import { Box, Typography, useTheme, TextField, Button, Stack } from '@mui/material';
import backgroundImage from '/src/assets/im8.png';
import { toast } from 'sonner';
import { useTranslation } from 'react-i18next';

type AccordionItem = {
    id: string;
    title: string;
    content: string;
};

const Questions: React.FC = () => {
    const { t } = useTranslation();
    const [expanded, setExpanded] = useState<string | false>(false);
    const [newQuestion, setNewQuestion] = useState<string>('');
    const [anyExpanded, setAnyExpanded] = useState<boolean>(false);
    const handleChange =
        (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
            setExpanded(isExpanded ? panel : false);
            setAnyExpanded(isExpanded);
        };

    const handleNewQuestionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNewQuestion(event.target.value);
    };

    const handleSendQuestion = () => {
        console.log('New Question:', newQuestion);
        toast(t('message'));
        setNewQuestion('');
    };

    const theme = useTheme();
    const accordionData: AccordionItem[] = t('questions', { returnObjects: true });

    return (
        <Box sx={{ width: '100%', backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', padding: 1, height: anyExpanded ? '122vh' : '100vh' }}>
            <Typography sx={{ fontFamily: "sans-serif", fontSize: '50px', color: "#2F4558", fontWeight: "bold", marginBottom: "3%", marginLeft: "5%" }}>
                {t('faqTitle')}
            </Typography>
            {accordionData.map((item) => (
                <Box sx={{
                    '&:hover': {
                        backgroundColor: expanded === item.id ? 'none' : "#F6B12D"
                    },
                    width: '70vw',
                    maxWidth: "1200px",
                    marginX: 'auto',
                    marginBottom: 2,
                    borderRadius: "5px",
                    top: 0,
                    zIndex: 1,
                    borderLeft: expanded === item.id ? '5px solid #F26619' : 'none',
                    [theme.breakpoints.down("md")]: {
                        border: "5px solid green",
                        display: "none"
                    }
                }}
                    key={item.id}
                >
                    <Accordion
                        sx={{ borderRadius: 0 }}
                        expanded={expanded === item.id}
                        onChange={handleChange(item.id)}
                    >
                        <AccordionSummary
                            expandIcon={
                                <Box sx={{ color: '#F26619' }}>
                                    <MdOutlineExpandMore />
                                </Box>
                            }
                            aria-controls={`${item.id}-content`}
                            id={`${item.id}-header`}
                        >
                            <Typography sx={{ fontFamily: "revert-layer", fontSize: '22px', color: "#2F4558", fontWeight: "bold", textAlign: "center" }}> {item.title}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography sx={{ fontFamily: "revert-layer", fontSize: '15px', color: "#2F4558" }}>{item.content}</Typography>
                        </AccordionDetails>
                    </Accordion>
                </Box>
            ))}

            <Stack direction="row" marginTop="6%" alignItems="center">
                <img
                    src='/src/assets/conseil.png'
                    alt="Conseillère"
                    width="230px"
                    height="230px"
                    style={{ marginTop: "-12px", marginLeft: '5%' }}
                />
                <Box sx={{ flexGrow: 1, ml: { xs: 2, md: 4 } }}>
                    <Typography sx={{ marginBottom: 2, fontFamily: "sans-serif", fontSize: '45px', marginTop: "-5%", color: "#F26619", fontWeight: "bold", }}>{t('feelFreeToAsk')}</Typography>
                    <Stack direction="row" spacing="5%" alignItems="center" marginTop="2%">
                        <TextField
                            color="secondary" focused
                            label={t('yourQuestion')}
                            value={newQuestion}
                            onChange={handleNewQuestionChange}
                            multiline
                            rows={1}
                            sx={{
                                borderColor: "red ",
                                maxWidth: '700px',
                                flex: 1, "& .MuiInputLabel-root": {
                                    "&.Mui-focused": {
                                        color: "#F26619"
                                    }
                                },
                                "& .MuiOutlinedInput-root": {
                                    borderRadius: "5px",
                                    "&.Mui-focused fieldset": {
                                        borderColor: "#F26619"
                                    }
                                }
                            }}
                        />
                        <Button variant="contained" color="primary" onClick={handleSendQuestion} sx={{ minWidth: '120px', minHeight: '45px', backgroundColor: "#F26619", '&:hover': { backgroundColor: "#F6B12D" } }}>{t('send')}</Button>
                    </Stack>
                </Box>
            </Stack>
        </Box>
    );
};

export default Questions;
