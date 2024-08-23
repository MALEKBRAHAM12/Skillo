import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Container } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { toast } from 'sonner';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { RiLockPasswordFill } from "react-icons/ri";

// Schéma de validation avec Zod
const schema = z.object({
    email: z.string().email("Invalid email address").nonempty("Email is required"),
});

type PasswordRecoveryInputs = z.infer<typeof schema>;

const Password: React.FC = () => {
    const [open, setOpen] = useState(false);

    const { control, handleSubmit, formState: { errors } } = useForm<PasswordRecoveryInputs>({
        resolver: zodResolver(schema)
    });

    const onSubmit = (data: PasswordRecoveryInputs) => {
        console.log(data);
        // Ajoutez ici votre logique de récupération de mot de passe
        setOpen(true);
    };



    return (
        <Container component="main" sx={{ width: "550px" }}>
            <Box sx={{ marginTop: 8, ml: '-10px' }}>
                <Typography sx={{ fontSize: 70, textAlign: "center", color: "#F26619", fontWeight: "bold", fontFamily: "sans-serif", mt: "-10px" }}>
                    Skillo
                </Typography>
                <Typography sx={{ fontSize: 40, textAlign: "center", color: "#F26619", fontWeight: "bold", fontFamily: "sans-serif", mt: "-10px" }}>
                    <RiLockPasswordFill />
                </Typography>
                <Typography sx={{ fontSize: 30, color: "#2F4558", textAlign: "center", fontWeight: "bold", fontFamily: "sans-serif", mt: "10px" }}>
                    Password Recovery
                </Typography>
                <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate sx={{ mt: 1, ml: 2 }}>
                    <Controller
                        name="email"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                            <TextField
                                {...field}
                                size="small"
                                margin="normal"
                                required
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                                error={!!errors.email}
                                helperText={errors.email ? errors.email.message : ""}
                                sx={{
                                    width: "380px", ml: 6,
                                    "& .MuiInputLabel-root": {
                                        "&.Mui-focused": {
                                            color: "#F26619"
                                        }
                                    },
                                    "& .MuiOutlinedInput-root": {
                                        borderRadius: "15px",
                                        "&.Mui-focused fieldset": {
                                            borderColor: "#F26619"
                                        }
                                    }
                                }}
                            />
                        )}
                    />

                    <Button
                        type="submit"
                        variant="contained"
                        sx={{ bgcolor: "#2F4558", mt: 2, width: "130px", ml: 22 }}
                        onClick={() => toast('A code has been sent to your email address. Please check your inbox and follow the instructions to reset your password.')}
                    >
                        Send
                    </Button>
                    <Button component={RouterLink} to="/login" sx={{
                        color: "#2F4558",
                        '&:hover': {
                            fontWeight: "bold"
                        }, fontFamily: "sans-serif", textAlign: "center ", width: "140px", fontSize: "11px", mt: 1, ml: "34%", display: 'flex',
                    }}>
                        Back to Login
                    </Button>
                </Box>
            </Box>
        </Container>
    );
};

export default Password;
