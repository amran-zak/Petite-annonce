import React, { useState } from 'react';
import { Button, Card, Container, Grid, IconButton, TextField, Typography } from '@mui/material/';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import DeleteIcon from '@mui/icons-material/Delete';


export default function Modify_Airbnb() {
    const [images, setImages] = useState([]);

    const handleChange = (e: { target: { files: any; }; }) => {
        const selectedFiles = e.target.files;
        setImages(selectedFiles);
    };

    const handleDelete = (index: number) => {
        setImages(prevImages => Array.from(prevImages).filter((_, i) => i !== index));
    };

    const [images_tab, setImagesTab] = useState([
        {
            img: 'https://www.maisons-france-confort.fr/wp-content/uploads/2021/03/20210304-maisons-france-confort-realisation-maison-contemporaine4.jpg',
            title: 'Image 1',
            author: 'Author 1',
        },
        {
            img: 'https://media.home-design.schmidt/-/media/bynder/schmidt/2021/10/14/12/07/sch_cuisine_tavern_twist_a1_v3/16x9-sch_cuisine_tavern_twist_a1_v3.ashx',
            title: 'Image 2',
            author: 'Author 2',
        },
        {
            img: 'https://img-3.journaldesfemmes.fr/USeLbxpeO5C-AWWKHWX-8J_xVMU=/820x546/smart/9e45ebe939d64e739eb7eed20642de8e/ccmcms-jdf/24418449.jpg',
            title: 'Image 3',
            author: 'Author 3',
        },
        {
            img: 'https://prod-saint-gobain-fr.content.saint-gobain.io/sites/saint-gobain.fr/files/2020-06/amenagement-jardin-reussi-01.jpg',
            title: 'Image 4',
            author: 'Author 4',
        },
    ]);

    const handleDeleteSimple = (index: number) => {
        setImagesTab(prevImages => {
            return prevImages.filter((_,i)=>i!==index);
        });
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
                        value={'TITRE DE ANNONCE'}
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
                        value={'1 AVENUE DE LA GARE, DAX, FRANCE'}
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
                            {images_tab.map((image, index) => (
                                <Grid key={index} item xs={12} sm={3} sx={{ mt: 2, mx: 'auto' }}>
                                    <img src={image.img}
                                         style={{
                                             width: '100%',
                                             height: 'auto',
                                             maxWidth: '200px',
                                             maxHeight: '200px',
                                             margin: 1
                                         }}
                                         alt={image.title}
                                    />
                                    <IconButton onClick={() => handleDeleteSimple(index)} sx={{ backgroundColor: 'transparent !important' }}>
                                        <DeleteIcon color="secondary"/>
                                    </IconButton>
                                </Grid>
                            ))}
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
                        {images.length === 0 && <Typography align="center" variant="subtitle1" color="textSecondary" sx={{ mt: 2 }}>Aucune image ajoutée</Typography>}
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
                            value={6}
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
                            value={3}
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
                            value={3}
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
                            value={1}
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
                            value={1}
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
                                value={'BLABLABLA'}
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
                                    value={'BLABLABLA'}
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
                                    value={'BLABLABLA'}
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
                                value={130}
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
                                        value={120}
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
                                        value={20}
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
                                        MODIFIER L'ANNONCE
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
