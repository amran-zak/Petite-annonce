import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';

export default function SignUp() {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    };

    const [images, setImages] = React.useState([]);

    const handleChange = (e: { target: { files: any; }; }) => {
        const selectedFiles = e.target.files;
        setImages(selectedFiles);
    };

    const handleDelete = (index: number) => {
        setImages(prevImages => Array.from(prevImages).filter((_, i) => i !== index));
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
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField 
                                    required 
                                    fullWidth 
                                    name="password" 
                                    label="Confirmez votre mot de passe" 
                                    type="password" 
                                    id="password-" 
                                    autoComplete="new-password"
                                />
                            </Grid>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <Grid item xs={12} sm={12} sx={{ ml: 2, mt: 3 }}>
                                        <TextField
                                            fullWidth
                                            name="phone"
                                            label="Numéro de téléphone"
                                            id="phone"
                                            autoComplete="phone"
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={12} sx={{ ml: 2, mt: 3 }}>
                                        <TextField
                                            fullWidth
                                            name="address"
                                            label="Adresse"
                                            id="address"
                                            autoComplete="address"
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={12} sx={{ ml: 2, mt: 3 }}>
                                        <TextField
                                            fullWidth
                                            name="codepostal"
                                            label="Code postal"
                                            id="codepostal"
                                            autoComplete="codepostal"
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={12} sx={{ ml: 2, mt: 3 }}>
                                        <TextField
                                            fullWidth
                                            name="city"
                                            label="Ville"
                                            id="city"
                                            autoComplete="city"
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