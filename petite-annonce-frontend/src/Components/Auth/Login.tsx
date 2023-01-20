import * as React from 'react';
/* material */
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
/* icons */
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
/* image */
import background from "../../Style/Img/house.jpeg";

import LoginData from '../../Types/Login.types';
import AuthService from '../../Services/Auth.services'

const theme = createTheme();

export default function Login(): JSX.Element {

    const [user, setUser] = React.useState(undefined);
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    
    const onchangeEmail = (e: any) => {
        setEmail(e.target.value);
    }
    const onchangePassword = (e: any) => {
        setPassword(e.target.value);
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        const data = new FormData(event.currentTarget);
        const login_data: LoginData = {
            email: data.get('email'),
            password: data.get('password')
        };
        AuthService.login(login_data)
        .then((response: any) => {
            setUser(response.data.User.firstname);
            if (response.data.User) {
                localStorage.setItem("user", JSON.stringify(response.data.User));
                setEmail(''); setPassword('');
            }
        })
        .catch((e: Error) => {
        console.log(e);
        });

    };

    return (
        <ThemeProvider theme={theme}>
            <Grid container component="main" sx={{ overflowY: 'scroll', height: '100vh' }}>
                <CssBaseline/>
                <Grid
                item
                xs={false}
                sm={4}
                md={7}
                sx={{
                    backgroundImage: `url(${background})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundColor: (t) =>
                    t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
                />
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                    <Box
                        sx={{
                        my: 8,
                        mx: 4,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            <LockOutlinedIcon/>
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Connexion
                        </Typography>
                        { user ? (<Typography component="h1" variant="h5">
                       Hi {user} 👋🙂
                    </Typography>)
                    : (<Typography component="h1" variant="h5">
                        
                    </Typography>)}
                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Adresse Email"
                                name="email"
                                autoComplete="email"
                                autoFocus
                                value={email}
                                onChange={onchangeEmail}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Mot de passe"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                value={password}
                                onChange={onchangePassword}
                            />
                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary" />}
                                label="Rester connecté"
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Connexion
                            </Button>
                            <Grid container sx={{ mt: 2}}>
                                <Grid item>
                                <Link href="/nouveau_mot_de_passe" variant="body2">
                                    Vous avez oublié votre mot de passe ?
                                </Link>
                                </Grid>
                            </Grid>
                            <Grid container sx={{ mt: 2}}>
                                <Grid item>
                                <Link href="/inscription" variant="body2">
                                    {"Vous n'avez pas de compte ? Inscrivez-vous !"}
                                </Link>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </ThemeProvider>

    );
}
