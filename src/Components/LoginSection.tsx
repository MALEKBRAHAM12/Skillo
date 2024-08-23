import React from 'react';
import { Box, TextField, Button, Typography, Container, Stack } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { MdOutlineVpnKey } from "react-icons/md";
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useAuth } from './AuthContexte';

// Schéma de validation avec Zod
const schema = z.object({
    email: z.string().email("Invalid email address").nonempty("Email is required"),
    password: z.string().min(6, "Password must be at least 6 characters").nonempty("Password is required"),
});

type LoginFormInputs = z.infer<typeof schema>;

const LoginSection: React.FC = () => {
    const { control, handleSubmit, formState: { errors } } = useForm<LoginFormInputs>({
        resolver: zodResolver(schema)
    });

    const { login } = useAuth();

    const onSubmit = (data: LoginFormInputs) => {
        const { email, password } = data;
        // You should replace this with actual login logic, such as an API call
        const userData = { username: 'SampleUser', email };
        login(userData);
    };

    return (
        <Container component="main" sx={{ width: "550px" }}>
            <Box sx={{ marginTop: 8, ml: '-10px' }}>
                <Typography sx={{ fontSize: 70, textAlign: "center", color: "#F26619", fontWeight: "bold", fontFamily: "sans-serif", mt: "-10px" }}>
                    Skillo
                </Typography>
                <Typography sx={{ fontSize: 40, textAlign: "center", color: "#F26619", fontWeight: "bold", fontFamily: "sans-serif", mt: "-10px" }}>
                    <MdOutlineVpnKey />
                </Typography>
                <Typography sx={{ fontSize: 30, color: "#2F4558", textAlign: "center", fontWeight: "bold", fontFamily: "sans-serif", mt: "10px" }}>
                    Login to your account
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
                    <Controller
                        name="password"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                            <TextField
                                size='small'
                                {...field}
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
                    <Stack direction="row" gap="20px" marginLeft="66px" marginTop="10px">
                        <Button component={RouterLink} to="/password-recovery" sx={{
                            color: "#F26619", textAlign: "center ", '&:hover': {
                                fontWeight: "bold"
                            }, fontFamily: "sans-serif", fontSize: "11px"
                        }}>
                            Forgot Password?
                        </Button>
                        <Button component={RouterLink} to="/signup" sx={{
                            color: "#2F4558",
                            '&:hover': {
                                fontWeight: "bold"
                            }, fontFamily: "sans-serif", textAlign: "center ", fontSize: "11px"
                        }}>
                            Don't have an account? Sign up
                        </Button>
                    </Stack>
                    <Button
                        type="submit"
                        variant="contained"
                        sx={{ bgcolor: "#2F4558", mt: 4, mb: 2, width: "130px", ml: 22 }}
                    >
                        Login
                    </Button>
                </Box>
            </Box>
        </Container>
    );
};

export default LoginSection;
