import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import UserData from '../../Types/User.types';
import AuthService from '../../Services/Auth.services'

const theme = createTheme();

export default function SignUp() {

    const [message, setMessage] = React.useState(undefined);

    const [firstname, setFirstname] = React.useState('');
    const [lastname, setLastname] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [number, setNumber] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [confPassword, setConfPassword] = React.useState('');
    const [address, setAddress] = React.useState('');
    const [code_postal, setCode_postal] = React.useState('');
    const [city, setCity] = React.useState('');


    const onchangeFirstName = (e: any) => {
        setFirstname(e.target.value);
    }

    const onchangeLastName = (e: any) => {
        setLastname(e.target.value);
    }

    const onchangeEmail = (e: any) => {
        setEmail(e.target.value);
    }

    const onchangeNumber = (e: any) => {
        setNumber(e.target.value);
    }

    const onchangePassword = (e: any) => {
        setPassword(e.target.value);
    }

    const onchangeConfPassword = (e: any) => {
        setConfPassword(e.target.value);
    }

    const onchangeAddress = (e: any) => {
        setAddress(e.target.value);
    }

    const onchangeCode_postal = (e: any) => {
        setCode_postal(e.target.value);
    }

    const onchangeCity = (e: any) => {
        setCity(e.target.value);
    }



    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);

        if (data.get('password') != data.get('confPassword')) {
            // if 'password' and 'confirm password'
            // does not match.
            alert("password Not Match");
        }
        else {
        const user_data: UserData = {
            firstname: data.get('firstName'),
            lastname: data.get('lastName'),
            email: data.get('email'),
            password: data.get('password'),
            number: data.get('number'),
            address: data.get('address'),
            code_postal: data.get('code_postal'),
            city: data.get('city')
        };
        console.log(user_data)
        AuthService.signUp(user_data)
        .then((response: any) => {
            setMessage(response.data.msg);
            setEmail(''); setLastname(''); setFirstname('');
            setNumber(''); setAddress(''), setCity(''); setCode_postal('');
            setPassword(''); setConfPassword('');
        })
        .catch((e: Error) => {
        console.log(e);
        });}
    };

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="md" sx={{ mb: 5}}>
                <CssBaseline/>
                <Box sx={{marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon/>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Inscription
                    </Typography>
                    { message ? (<Typography component="h1" variant="h5">
                        {message} 👍✅
                    </Typography>)
                    : (<Typography component="h1" variant="h5">
                        
                    </Typography>)}
                    
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField 
                                    autoComplete="given-name" 
                                    name="firstName" 
                                    required 
                                    fullWidth 
                                    id="firstName" 
                                    label="Nom de famille" 
                                    autoFocus
                                    value={firstname}
                                    onChange={onchangeFirstName}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField 
                                    required 
                                    fullWidth 
                                    id="lastName" 
                                    label="Prénom" 
                                    name="lastName" 
                                    autoComplete="family-name"
                                    value={lastname}
                                    onChange={onchangeLastName}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField 
                                    required 
                                    fullWidth 
                                    id="email" 
                                    label="Adresse Email" 
                                    name="email" 
                                    autoComplete="email"
                                    value={email}
                                    onChange={onchangeEmail}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField 
                                    required 
                                    fullWidth 
                                    name="password" 
                                    label="Mot de passe" 
                                    type="password" 
                                    id="password" 
                                    autoComplete="new-password"
                                    value={password}
                                    onChange={onchangePassword}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField 
                                    required 
                                    fullWidth 
                                    name="confPassword" 
                                    label="Confirmez votre mot de passe" 
                                    type="password" 
                                    id="confPassword" 
                                    autoComplete="new-password"
                                    value={confPassword}
                                    onChange={onchangeConfPassword}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth 
                                    name="number" 
                                    label="Numéro de téléphone" 
                                    id="number" 
                                    autoComplete="phone"
                                    type="number"
                                    value={number}
                                    onChange={onchangeNumber}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Button 
                                    variant="contained" 
                                    component="label" 
                                    sx={{ mt: 1}}
                                >
                                    Ajouter une photo de profile&nbsp;<AddPhotoAlternateIcon/>
                                    <input type="file" hidden/>
                                </Button>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField 
                                    fullWidth 
                                    name="address" 
                                    label="Adresse" 
                                    id="address" 
                                    autoComplete="address"
                                    value={address}
                                    onChange={onchangeAddress}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField 
                                    fullWidth 
                                    name="code_postal" 
                                    label="Code postal" 
                                    id="code_postal" 
                                    autoComplete="codepostal"
                                    value={code_postal}
                                    type="number"
                                    onChange={onchangeCode_postal}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField 
                                    fullWidth 
                                    name="city" 
                                    label="Ville" 
                                    id="city" 
                                    autoComplete="city"
                                    value={city}
                                    onChange={onchangeCity}
                                />
                            </Grid>
                        </Grid>
                        <Button 
                            type="submit" 
                            fullWidth 
                            variant="contained" 
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Inscription
                        </Button>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Link href="/connexion" variant="body2">
                                    Vous avez déjà un compte ? Connectez-vous !
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}