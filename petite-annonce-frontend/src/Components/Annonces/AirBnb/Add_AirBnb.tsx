import * as React from 'react';
import {useState} from 'react';
import { Button, Card, Container, Grid, IconButton, TextField, Typography } from '@mui/material/';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import DeleteIcon from '@mui/icons-material/Delete';


export default function Add_AirBnb() {
    const [images, setImages] = useState([]);

    const handleChange = (e: { target: { files: any; }; }) => {
        const selectedFiles = e.target.files;
        setImages(selectedFiles);
    };

    const handleDelete = (index: number) => {
        setImages(prevImages => Array.from(prevImages).filter((_, i) => i !== index));
    };

    return (
        <Container sx={{ pb: 5, textAlign: 'left', overflowY: 'scroll', height: '100vh', maxWidth: '100vw !important', marginLeft: '0', top: '30px'}}>
            <form noValidate>
                <Grid container sx={{ mt: 3 }}>
                    <TextField
                        id="titre"
                        label="Titre de votre annonce"
                        type="text"
                        required
                        fullWidth
                        sx={{ backgroundColor: 'white' }}
                    />
                </Grid>
                <Grid container sx={{ mt: 3 }}>
                    <TextField
                        id="lieux"
                        label="Adresse de votre annonce"
                        type="text"
                        required
                        fullWidth
                        sx={{ backgroundColor: 'white' }}
                    />
                </Grid>
                <Grid container spacing={2} sx={{ m: 3 }}>
                    <div>
                        <input
                            accept="image/*"
                            style={{ display: 'none' }}
                            id="contained-button-file"
                            multiple
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
                                <Grid item xs={6} sm={4} key={index}>
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

                <Grid container spacing={2} sx={{ my: 3, textAlign: 'center', mx: 3 }}>
                    <Grid xs={12} sm={4}>
                        <TextField
                            id="nbperson"
                            label="Nombre de personne(s) maximale à accueillir"
                            fullWidth
                            InputProps={{
                                inputProps: { min: 0, max: 20 }
                            }}
                            required
                            sx={{ backgroundColor: 'white', mt: 2 }}
                        />
                    </Grid>
                    <Grid xs={12} sm={3}>
                        <TextField
                            id="nblit"
                            label="Nombre de lit(s)"
                            InputProps={{
                                inputProps: { min: 0, max: 20 }
                            }}
                            required
                            sx={{ backgroundColor: 'white', mt: 2 }}
                        />
                    </Grid>
                    <Grid xs={12} sm={3}>
                        <TextField
                            id="nbchambre"
                            label="Nombre de chambre(s)"
                            fullWidth
                            InputProps={{
                                inputProps: { min: 0, max: 20 }
                            }}
                            required
                            sx={{ backgroundColor: 'white', mt: 2 }}
                        />
                    </Grid>

                    <Grid xs={12} sm={4}>
                        <TextField
                            id="nbsalledebain"
                            label="Nombre de salle(s) de bain"
                            fullWidth
                            InputProps={{
                                inputProps: { min: 0, max: 20 }
                            }}
                            required
                            sx={{ backgroundColor: 'white', mt: 2 }}
                        />
                    </Grid>
                    <Grid xs={12} sm={3}>
                        <TextField
                            id="nbwc"
                            label="Nombre de toilette(s)"
                            InputProps={{
                                inputProps: { min: 0, max: 20 }
                            }}
                            required
                            sx={{ backgroundColor: 'white', mt: 2 }}
                        />
                    </Grid>
                </Grid>

                <Grid container spacing={2} sx={{ my: 3 }}>
                    <Grid container spacing={2} xs={12} sm={6} sx={{ pb: 5 }}>



                        <Grid xs={12} sx={{ mx: 5 }}>
                            <Typography component="h1" variant="h5" sx={{ my: 3 }}>Description</Typography>
                            <TextField
                                id="description"
                                label="Description de votre annonce"
                                multiline
                                fullWidth
                                rows={5}
                                variant="outlined"
                                sx={{ backgroundColor: 'white' }}
                            />
                        </Grid>
                        <Grid xs={12} sx={{ mx: 5 }}>
                            <Typography component="h1" variant="h5" sx={{ my: 3 }}>Ce que compose ce logement</Typography>
                        </Grid>
                        <Grid xs={12} container spacing={2} sx={{ mx: 5 }}>
                            <Grid xs={12} sm={5}>
                                <TextField
                                    id="details1"
                                    label="Détails de votre annonce"
                                    multiline
                                    fullWidth
                                    rows={5}
                                    variant="outlined"
                                    sx={{ backgroundColor: 'white' }}
                                />
                            </Grid>
                            <Grid xs={12} sm={5}>
                                <TextField
                                    id="details2"
                                    label="Détails de votre annonce"
                                    multiline
                                    fullWidth
                                    rows={5}
                                    variant="outlined"
                                    sx={{ backgroundColor: 'white' }}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2} xs={12} sm={6} sx={{ pt: 2 }}>
                        <Card sx={{
                            pt: 2, my: 'auto', width: '70%', marginLeft: '30%',
                            backgroundColor: 'rgb(240,237,255)'
                        }}
                        >

                                <TextField
                                    id="prix"
                                    label="Prix € / nuit"
                                    type="text"
                                    required
                                    sx={{ backgroundColor: 'white', mx: 3 }}
                                />
                                <Grid container spacing={2} xs={12} sm={12} sx={{ mt: 3 }}>
                                    <Grid container xs={12} sm={12} sx={{ m: 5 }}>
                                        <TextField
                                            id="frais"
                                            label="Prix € des frais de services"
                                            fullWidth
                                            type="text"
                                            required
                                            sx={{ backgroundColor: 'white', mx: 3 }}
                                        />
                                    </Grid>
                                    <Grid container xs={12} sm={12} sx={{ mx: 5 }}>
                                        <TextField
                                            id="taxes"
                                            label="Prix € des taxes"
                                            fullWidth
                                            type="text"
                                            required
                                            sx={{ backgroundColor: 'white', mx: 3 }}
                                        />
                                    </Grid>

                                    <Grid xs={12} sm={12} sx={{ textAlign: 'center'}}>
                                        <Button
                                            type="submit"
                                            variant="contained"
                                            sx={{ mt: 3, mb: 2, backgroundColor: '#694ed4 !important;' }}
                                            href="/voir_annonce_airbnb"
                                        >
                                            AJOUTER L'ANNONCE
                                        </Button>
                                    </Grid>
                                </Grid>
                        </Card>
                    </Grid>
                </Grid>
            </form>
        </Container>
    );
}
