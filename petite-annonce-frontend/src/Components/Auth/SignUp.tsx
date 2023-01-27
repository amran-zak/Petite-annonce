import * as React from 'react';
import { Avatar, Button, CssBaseline, TextField, Link, Grid, Box, Typography, Container, IconButton, } from '@mui/material';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import DeleteIcon from '@mui/icons-material/Delete';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import UserData from '../../Types/User.types';
import AuthService from '../../Services/Auth.services'


export default function SignUp() {

    const [message, setMessage] = React.useState(undefined);
    const [user, setUser] = React.useState(undefined);

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

    const onchangeNumber = (e: any) => {
        setNumber(e.target.value);
    }
    


    const [images, setImages] = React.useState([]);

    const handleChange = (e: { target: { files: any; }; }) => {
        const selectedFiles = e.target.files;
        setImages(selectedFiles);
    };

    const handleDelete = (index: number) => {
        setImages(prevImages => Array.from(prevImages).filter((_, i) => i !== index));
    };

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
            number: data.get('phone'),
            address: data.get('address'),
            code_postal: data.get('code_postal'),
            city: data.get('city')
        };
        console.log(user_data)
        AuthService.signUp(user_data)
        .then((response: any) => {
            setMessage(response.data.message);
            setUser(response.data.user.firstname)
            setEmail(''); setLastname(''); setFirstname('');
            setNumber(''); setAddress(''); setCity(''); setCode_postal('');
            setPassword(''); setConfPassword(''); 
        })
        .catch((e: Error) => {
        console.log(e);
        });}
    };

    return (
            <Container component="main" maxWidth="md" sx={{ py: 5, overflowY: 'scroll', height: '100vh', maxWidth: '100vw !important' }}>
                <CssBaseline/>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 5 }}>
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
                    { user ? (<Typography component="h4" variant="h5">
                       Bienvenue {user} 👋 !
                    </Typography>)
                    : (<Typography component="h4" variant="h5">

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
                            <Grid item xs={12} sm={6}>
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
                                    fullWidth
                                    name="phone"
                                    label="Numéro de téléphone"
                                    id="number"
                                    autoComplete="phone"
                                    type="number"
                                    value={number}
                                    onChange={onchangeNumber}
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
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <Grid item xs={12} sm={12} sx={{ ml: 2, mt: 3 }}>
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
                                    <Grid item xs={12} sm={12} sx={{ ml: 2, mt: 3 }}>
                                        <TextField
                                            fullWidth
                                            name="code_postal"
                                            label="Code postal"
                                            id="codepostal"
                                            autoComplete="codepostal"
                                            value={code_postal}
                                            onChange={onchangeCode_postal}
                                            type="number"
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={12} sx={{ ml: 2, mt: 3 }}>
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
                                <Grid item xs={12} sm={6} sx={{ mt: 3 }}>
                                    <div>
                                        <input
                                            accept="image/*"
                                            style={{ display: 'none' }}
                                            id="contained-button-file"
                                            multiple={false}
                                            type="file"
                                            onChange={handleChange}
                                        />
                                        <label htmlFor="contained-button-file">
                                            <Button variant="contained" component="span"
                                                    sx={{ backgroundColor: '#694ed4 !important;' }}
                                            >
                                                Ajouter des photos <AddAPhotoIcon />
                                            </Button>
                                        </label>
                                        <Grid container spacing={2}>
                                            {Array.from(images).map((image, index) => (
                                                <Grid item xs={12} sm={12} key={index} sx={{ mt: 3 }}>
                                                    <img src={URL.createObjectURL(image)}
                                                         style={{
                                                             width: '100%',
                                                             height: 'auto',
                                                             maxWidth: '200px',
                                                             maxHeight: '200px',
                                                             margin: 1
                                                         }}
                                                         alt={image}
                                                    />
                                                    <IconButton onClick={() => handleDelete(index)} sx={{ backgroundColor: 'transparent !important' }}>
                                                        <DeleteIcon color="secondary"/>
                                                    </IconButton>
                                                </Grid>
                                            ))}
                                        </Grid>
                                        {images.length === 0 && <Typography align="center" variant="subtitle1" color="textSecondary" sx={{ mt: 2 }}>Aucune image sélectionnée</Typography>}
                                    </div>
                                </Grid>
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2 }}
                                >
                                    Inscription
                                </Button>
                            </Grid>
                            <Grid item xs={12} sm={6} sx={{ my: 'auto' }}>
                                <Link href="/connexion" variant="body2">
                                    Vous avez déjà un compte ? Connectez-vous !
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
    );
}