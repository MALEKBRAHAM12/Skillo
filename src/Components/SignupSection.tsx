import React from 'react';
import { Box, TextField, Button, Typography, Container } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { FaUserCircle } from "react-icons/fa";
import { useAuth } from './AuthContexte';

// Schéma de validation avec Zod
const schema = z.object({
    username: z.string().nonempty("Username is required"),
    email: z.string().email("Invalid email address").nonempty("Email is required"),
    password: z.string().min(6, "Password must be at least 6 characters").nonempty("Password is required"),
    confirmPassword: z.string().nonempty("Confirm Password is required").min(6, "Password must be at least 6 characters"),
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
});

type SignupFormInputs = z.infer<typeof schema>;

const SignupSection: React.FC = () => {
    const { control, handleSubmit, formState: { errors } } = useForm<SignupFormInputs>({
        resolver: zodResolver(schema)
    });

    const { login } = useAuth();

    const onSubmit = (data: SignupFormInputs) => {
        const { username, email } = data;
        const userData = { username, email };
        login(userData); // Connexion de l'utilisateur après l'inscription
        alert("Account created successfully");
    };

    return (
        <Container component="main" sx={{ width: "550px" }}>
            <Box sx={{ marginTop: 4, ml: '-10px' }}>
                <Typography sx={{ fontSize: 70, textAlign: "center", color: "#F26619", fontWeight: "bold", fontFamily: "sans-serif", mt: "-10px" }}>
                    Welcome
                </Typography>
                <Typography sx={{ fontSize: 52, textAlign: "center", color: "#F26619", fontWeight: "bold", fontFamily: "sans-serif", mt: "-10px" }}>
                    <FaUserCircle />
                </Typography>
                <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate sx={(theme) => ({
                    mt: 1, ml: 2,
                    [theme.breakpoints.down("sm")]: {
                        border: "1px solid green",
                    }
                })}>
                    <Controller
                        name="username"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                            <TextField
                                {...field}
                                size="small"
                                margin="normal"
                                required
                                id="username"
                                label="Username"
                                autoComplete="username"
                                autoFocus
                                error={!!errors.username}
                                helperText={errors.username ? errors.username.message : ""}
                                sx={{
                                    ml: 6, width: "380px",
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
                                autoComplete="email"
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
                    <Controller
                        name="password"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                            <TextField
                                {...field}
                                size="small"
                                margin="normal"
                                required
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                error={!!errors.password}
                                helperText={errors.password ? errors.password.message : ""}
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
                    <Controller
                        name="confirmPassword"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                            <TextField
                                {...field}
                                size="small"
                                margin="normal"
                                required
                                name="confirmPassword"
                                label="Confirm Password"
                                type="password"
                                id="confirmPassword"
                                error={!!errors.confirmPassword}
                                helperText={errors.confirmPassword ? errors.confirmPassword.message : ""}
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
                        sx={{ bgcolor: "#2F4558", mt: 2, mb: 2, width: "130px", ml: 22 }}
                    >
                        Sign up
                    </Button>
                </Box>
            </Box>
        </Container>
    );
};

export default SignupSection;
