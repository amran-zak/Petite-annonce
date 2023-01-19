import * as React from 'react';
/* material */
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
/* icons */
import ArticleIcon from '@mui/icons-material/Article';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Typography from '@mui/material/Typography';
import CollectionsIcon from '@mui/icons-material/Collections';
import FavoriteIcon from '@mui/icons-material/Favorite';
/* image */
import photo_profile from "../../Style/Img/photo-profile.png";
import house from "../../Style/Img/house.jpeg";
import not_find from "../../Style/Img/NotFound.png";
/* fade */
import { Fade } from 'react-slideshow-image';
/* css */
import 'react-slideshow-image/dist/styles.css'

const theme = createTheme();

function Login(): JSX.Element {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    };
    const fadeMesAnnonces = [
        { url: house, ville: 'ville 1', titre: 'titre annonce 1' },
        { url: photo_profile, ville: 'ville 2', titre: 'titre annonce 2' },
        { url: not_find, ville: 'ville 3', titre: 'titre annonce 3' }
    ];
    const fadeMesFavoris = [
        { url: photo_profile, ville: 'ville 2', titre: 'titre favori 2' },
        { url: not_find, ville: 'ville 3', titre: 'titre favori 3' },
        { url: house, ville: 'ville 1', titre: 'titre favori 1' },
    ];
    return (
        <ThemeProvider theme={theme}>
            <Grid container component="main" sx={{ height: '100vh' }}>
                <CssBaseline/>
                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={4}
                    sx={{
                        backgroundImage: `url(${photo_profile})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundColor: (t) =>
                        t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
                <Grid item xs={12} sm={8} md={8} component={Paper} elevation={6} square>
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
                            <AccountCircleIcon/>
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Votre profile
                        </Typography>
                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 5 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <TextField 
                                        name="firstName" 
                                        required 
                                        fullWidth 
                                        id="firstName" 
                                        label="Nom de famille" 
                                        value="value"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField 
                                        required 
                                        fullWidth 
                                        id="lastName" 
                                        label="Prénom" 
                                        name="lastName"
                                        value="value"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField 
                                        required 
                                        fullWidth 
                                        id="email" 
                                        label="Adresse Email" 
                                        name="email" 
                                        value="value"
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
                                        value="value"
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
                                        value="value"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField 
                                        fullWidth 
                                        name="phone" 
                                        label="Numéro de téléphone" 
                                        id="phone" 
                                        value="value"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Button 
                                        variant="contained" 
                                        component="label" 
                                        sx={{ mt: 1}}
                                    >
                                        Modifier la photo de profile&nbsp;<CollectionsIcon/>
                                        <input type="file" hidden/>
                                    </Button>
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField 
                                        fullWidth 
                                        name="address" 
                                        label="Adresse" 
                                        id="address" 
                                        value="value"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField 
                                        fullWidth 
                                        name="codepostal" 
                                        label="Code postal" 
                                        id="codepostal" 
                                        value="value"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField 
                                        fullWidth 
                                        name="city" 
                                        label="Ville" 
                                        id="city" 
                                        value="value"
                                    />
                                </Grid>
                            </Grid>
                            <Button 
                                type="submit" 
                                variant="contained" 
                                sx={{ mt: 5}}
                            >
                                Valider les modifications
                            </Button>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
            <Grid component="main" sx={{ 
                                        mt: 5,
                                        boxShadow: '0px 3px 5px -1px rgb(0 0 0 / 20%), 0px 6px 10px 0px rgb(0 0 0 / 14%), 0px 1px 18px 0px rgb(0 0 0 / 12%)' 
                                    }}
            >
                <Grid container xs={12} sx={{ pb: 5 }} component="main">
                    <Grid sm={5}>
                        <Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                                <ArticleIcon/>
                            </Avatar>
                            <Typography component="h1" variant="h4">
                                Vos annonces
                            </Typography>
                        </Box>
                        <Button
                            type="submit"
                            variant="contained"
                            sx={{ mt: 5, mb: 2, mx: 'auto' }}
                        >
                            Voir mes {fadeMesAnnonces.length} annonces
                        </Button>
                    </Grid>
                    <Grid sm={5} sx={{ mx: 'auto', mt: 5 }}>
                        <div className="slide-container">
                            <Fade>
                                {fadeMesAnnonces.map((fadeImage, index) => (
                                    <div className="each-fade" key={index}>
                                        <h3>{fadeImage.titre}</h3>
                                        <span>{fadeImage.ville}</span>
                                        <div className="image-container">
                                            <img src={fadeImage.url} style={{ height: '200px' }} alt="photo de profile"/>
                                        </div>
                                        <Grid container sx={{ mt: 3 }}>
                                            <Grid xs={12} sm={2} sx={{ mx: 'auto' }}>
                                                <Button
                                                    type="submit"
                                                    fullWidth
                                                    variant="contained"
                                                >
                                                    <VisibilityIcon/>
                                                </Button>
                                            </Grid>
                                            <Grid xs={12} sm={2} sx={{ m: 'auto' }}>
                                                {index+1}/{fadeMesAnnonces.length}
                                            </Grid>
                                            <Grid xs={12} sm={2} sx={{ mx: 'auto' }}>
                                                <Button
                                                    type="submit"
                                                    fullWidth
                                                    variant="contained"
                                                >
                                                    <EditIcon/>
                                                </Button>
                                            </Grid>
                                        </Grid>
                                    </div>
                                ))}
                            </Fade>
                        </div>
                    </Grid>
                </Grid>
            </Grid>
            <Grid component="main">
                <Grid container xs={12} sx={{ pb: 5 }} component="main">
                    <Grid sm={5}>
                        <Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                                <ArticleIcon/>
                            </Avatar>
                            <Typography component="h1" variant="h4">
                                Vos favoris
                            </Typography>
                        </Box>
                        <Button
                            type="submit"
                            variant="contained"
                            sx={{ mt: 5, mb: 2, mx: 'auto' }}
                        >
                            Voir mes {fadeMesFavoris.length} favoris
                        </Button>
                    </Grid>
                    <Grid sm={5} sx={{ mx: 'auto', mt: 5 }}>
                        <div className="slide-container">
                            <Fade>
                                {fadeMesFavoris.map((fadeImage, index) => (
                                    <div className="each-fade" key={index}>
                                        <h3>{fadeImage.titre}</h3>
                                        <span>{fadeImage.ville}</span>
                                        <div className="image-container">
                                            <img src={fadeImage.url} style={{ height: '200px' }} alt="photo"/>
                                        </div>
                                        <Grid container sx={{ mt: 3 }}>
                                            <Grid xs={12} sm={2} sx={{ mx: 'auto' }}>
                                                <Button
                                                    type="submit"
                                                    fullWidth
                                                    variant="contained"
                                                >
                                                    <VisibilityIcon/>
                                                </Button>
                                            </Grid>
                                            <Grid xs={12} sm={2} sx={{ m: 'auto' }}>
                                                {index+1}/{fadeMesFavoris.length}
                                            </Grid>
                                            <Grid xs={12} sm={2} sx={{ mx: 'auto' }}>
                                                <Button
                                                    type="submit"
                                                    fullWidth
                                                    variant="contained"
                                                >
                                                    <FavoriteIcon/>
                                                </Button>
                                            </Grid>
                                        </Grid>
                                    </div>
                                ))}
                            </Fade>
                        </div>
                    </Grid>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
}

