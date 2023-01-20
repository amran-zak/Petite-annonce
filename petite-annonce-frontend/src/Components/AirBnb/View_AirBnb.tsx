import React, { useState } from 'react';
import {Box, Button, Card, CardMedia, Container, Grid, Modal, Paper, TextField, Typography } from '@mui/material/';
import Map, { Marker, NavigationControl } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const token = "pk.eyJ1IjoiZ2lzZmVlZGJhY2siLCJhIjoiY2l2eDJndmtjMDFkeTJvcHM4YTNheXZtNyJ9.-HNJNch_WwLIAifPgzW2Ig";

const images = [
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
];

const currencies = [ // a adapter en fonction des informations qu'aura indiquer le déposeur de l'annonce
    { value: '1', label: '1 personne', },
    { value: '2', label: '2 personnes', },
    { value: '3', label: '3 personnes', },
    { value: '4', label: '4 personnes', },
    { value: '5', label: '5 personnes', },
];

export default function View_AirBnb() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [marker] = useState({
        longitude: -122.4,
        latitude: 37.8
    });


    return (
        <Container sx={{ pb: 5, textAlign: 'left', overflowY: 'scroll', height: '100vh', maxWidth: '100vw !important', marginLeft: '0', top: '30px'}}>
            <Grid container spacing={2} sx={{ mt: 5 }}>
                <Grid xs={12} sx={{ textAlign: 'right' }}>
                    <Button
                        type="submit"
                        variant="contained"
                        sx={{ mt: 5, mb: 2, backgroundColor: '#694ed4 !important;' }}
                        href="/modifier_annonce_airbnb"
                    >
                        MODIFIER L'ANNONCE
                    </Button>
                </Grid>
                <Grid xs={12} sx={{ mx: 2 }}>
                    <Typography component="h1" variant="h5" sx={{ my: 3 }}>Title de l'annonce</Typography>
                </Grid>
                <Grid xs={12} sx={{ mx: 2 }}>
                    <Typography><a href="#carte"><u>Lieux de l'annonce</u></a></Typography>
                </Grid>
            </Grid>
            <Grid container spacing={2} sx={{ my: 3 }}>
                {images.map(image => (
                    <Grid key={image.img} item xs={12} sm={3} sx={{ mx: 'auto' }}>
                        <Paper sx={{ textAlign: 'center' }}>
                            <CardMedia component="img" src={image.img} alt={image.title} style={{ height: '15vw' }}/>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
            <Grid container spacing={2} sx={{ my: 3 }}>
                <Grid container spacing={2} xs={12} sm={6} sx={{ pb: 5 }}>
                    <Grid sx={{ my: 'auto' }} xs={12} sm={10}>
                        <Typography sx={{ ml: 3, textAlign: 'center' }}><i>12 voyageurs - 5 chambres - 8 lits - 1 salle de bain et 1 toilette</i></Typography>
                    </Grid>
                    <Grid xs={12} sm={2} sx={{ mt: 2 }}>
                        <CardMedia component="img" src='https://st2.depositphotos.com/3143277/8644/i/600/depositphotos_86446164-stock-photo-business-man-in-office.jpg'
                                   alt="" style={{ height: '5vw', width: '5vw', borderRadius: '50%' }}/>
                    </Grid>
                    <Grid xs={12} sx={{ mx: 5 }}>
                        <Typography component="h1" variant="h5" sx={{ my: 3 }}>Description</Typography>
                        <p>
                            Location dans les côtes d'Armor, villa de caractère pour 12 personnes.<br/>
                            Vue imprenable, accès direct sur la grande plage et mer en 3mn à pied.
                        </p>
                        <p>
                            A proximité :<br/>
                            Cap-Fréhel et Fort-La Latte 15km,<br/>
                            Dinard 20km,<br/>
                            St Malo 25 km,<br/>
                            <Button onClick={handleOpen} 
                                    sx={{ backgroundColor: 'transparent !important', color: '#694ed4' }}
                            >
                                <u>Plus de détails ...</u>
                            </Button>
                        </p>
                    </Grid>
                    <Grid xs={12} sx={{ mx: 5 }}>
                        <Typography component="h1" variant="h5" sx={{ my: 3 }}>Ce que compose ce logement</Typography>
                    </Grid>
                    <Grid xs={12} container spacing={2} sx={{ mx: 5 }}>
                        <Grid xs={12} sm={5}>
                            Vue sur la baie<br/>
                            Vue panoramique sur la ville<br/>
                            Accès plage ou bord de mer<br/>
                            Cuisine<br/>
                            Espace de travail dédié<br/>
                        </Grid>
                        <Grid xs={12} sm={5}>
                            Parking gratuit sur place<br/>
                            Lave-linge (Gratuit) dans le logement<br/>
                            Arrière-cour privée – Clôture intégrale<br/>
                            Lit pour bébé<br/>
                            Détecteur de monoxyde de carbone
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container spacing={2} xs={12} sm={6} sx={{ pt: 2 }}>
                    <Card sx={{
                                pt: 2, my: 'auto', width: '70%', marginLeft: '30%',
                                backgroundColor: 'rgb(240,237,255)'
                            }}
                    >
                        <Typography component="h1" variant="h5" sx={{ ml: 3, mb:5 }}>... € / nuit</Typography>
                        <form noValidate>
                            <Grid container spacing={2} xs={12} sm={12} sx={{ mt: 3 }}>
                                <Grid xs={12} sm={6} sx={{ textAlign: 'center'}}>
                                    <TextField
                                        id="date-picker-checkin"
                                        label="Arrivée"
                                        type="date"
                                        sx={{ backgroundColor: 'white' }}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                    />
                                </Grid>
                                <Grid xs={12} sm={6} sx={{ textAlign: 'center'}}>
                                    <TextField
                                        id="date-picker-checkout"
                                        label="Départ"
                                        type="date"
                                        sx={{ backgroundColor: 'white' }}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                    />
                                </Grid>
                                <Grid xs={12} sm={12} sx={{ mt:5, textAlign: 'center'}}>
                                    <TextField
                                        id="filled-select-currency-native"
                                        select
                                        defaultValue="1"
                                        sx={{ backgroundColor: 'white' }}
                                        SelectProps={{
                                            native: true,
                                        }}
                                        helperText="Nombre de personne(s)"
                                        variant="filled"
                                    >
                                        {currencies.map((option) => (
                                            <option key={option.value} value={option.value}>
                                                {option.label}
                                            </option>
                                        ))}
                                    </TextField>
                                </Grid>
                                
                                <Grid container xs={12} sm={12} sx={{ mt: 5, mx: 5 }}>
                                    <Grid xs={12} sm={6}>... € x 5 nuits</Grid>
                                    <Grid xs={12} sm={6} sx={{ textAlign: 'right' }}>... €</Grid>
                                </Grid>
                                <Grid container xs={12} sm={12} sx={{ mx: 5 }}>
                                    <Grid xs={12} sm={6}>Frais de service</Grid>
                                    <Grid xs={12} sm={6} sx={{ textAlign: 'right' }}>... €</Grid>
                                </Grid>
                                <Grid container xs={12} sm={12} sx={{ mx: 5 }}>
                                    <Grid xs={12} sm={6}>Taxes</Grid>
                                    <Grid xs={12} sm={6} sx={{ textAlign: 'right' }}>... €</Grid>
                                </Grid>

                                <Grid container xs={12} sm={12} sx={{ mt:5, mx: 5, p: 1, borderBottom: '#694ed4 2px solid' }}>
                                    <Grid xs={12} sm={6}>
                                        <Typography component="h1" variant="h5">
                                            TOTAL
                                        </Typography>
                                    </Grid>
                                    <Grid xs={12} sm={6} sx={{ textAlign: 'right' }}>
                                        <Typography component="h1" variant="h5">
                                            ... €
                                        </Typography>
                                    </Grid>
                                </Grid>
                                
                                <Grid xs={12} sm={12} sx={{ textAlign: 'center'}}>
                                    <Button
                                        type="submit"
                                        variant="contained"
                                        sx={{ mt: 3, mb: 2 }}
                                    >
                                        Réserver
                                    </Button>
                                </Grid>
                            </Grid>
                        </form>
                    </Card>
                </Grid>
                <Grid container xs={12} sm={10} sx={{ pt: 2, mx: 'auto' }} id={'carte'}>
                    <Typography component="h1" variant="h5" sx={{ mb: 3 }}>Localisation</Typography>
                    <Map
                        initialViewState={{
                            longitude: -122.4,
                            latitude: 37.8,
                            zoom: 14,
                        }}
                        mapboxAccessToken={token}
                        style={{ width: "100%", height: 400}}
                        mapStyle="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json"
                    >
                        <NavigationControl />
                        <Marker longitude={marker.longitude} latitude={marker.latitude} />
                    </Map>
                </Grid>
            </Grid>

            
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: 800,
                        bgcolor: 'background.paper',
                        border: '2px solid #694ed4',
                        boxShadow: 24,
                        p: 4,
                        overflowY: 'scroll',
                        height: '60vh'
                    }}
                >
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        À propos de ce logement
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <p>
                            Location dans les côtes d'Armor, villa de caractère pour 12 personnes.<br/>
                            Vue imprenable, accès direct sur la grande plage et mer en 3mn à pied.
                        </p>
                        <p>
                            A proximité :<br/>
                            Cap-Fréhel et Fort-La Latte 15km,<br/>
                            Dinard 20km,<br/>
                            St Malo 25 km,<br/>
                            Dinan 30km,<br/>
                            Mont St-Michel 95km,<br/>
                            GR 34 à proximité.<br/>
                        </p>
                        <p>
                            Commerces :<br/>
                            Centre-ville à 5mn en voiture, 25mn à pied, avec tous les commerces nécessaires.<br/>
                            Grand marché tous les lundis (en été).<br/>
                            Grand marché tous les mercredis à Matignon (toute l'année).<br/>
                            Le logement<br/>
                            Comprend :
                        </p>
                        <p>
                            5 chambres<br/>
                            Chambre 1 : 1 lit en 140<br/>
                            Chambre 2 : 1 lit en 140<br/>
                            Chambre 3 : 2 lits en 90<br/>
                            Chambre 4 : 2 lits en 90 et 1 lit en 140<br/>
                            Chambre 5 : 1 lit en 160
                        </p>
                        <p>
                            2 salles de bain,<br/>
                            2 WC (dont 1 WC séparé),<br/>
                            une cuisine,<br/>
                            un séjour,<br/>
                            une salle à manger,<br/>
                            une buanderie,<br/>
                            un jardin (nord-ouest),<br/>
                            une terrasse (sud-ouest)<br/>
                            tables et chaises de jardins fournis
                        </p>
                        <p>
                            Draps non fournis<br/>
                            Ménage compris
                        </p>
                        <p>
                            Tarifs et disponibilités, nous contacter :<br/>
                            Mai, Juin, Septembre : 1500€ / semaine<br/>
                            Juillet, Août : 2000€ / semaine<br/>
                            Week-end : 700€<br/>
                            Grand week-end : 950€
                        </p>
                        <p>
                            Non fumeur.<br/>
                            Accès des voyageurs<br/>
                            Maison individuelle avec entrée privée.<br/>
                            Emplacement pour garer 4 voitures.<br/>
                            Autres remarques<br/>
                            Pour une bonne entente avec le voisinage, veuillez ne plus faire de bruit en extérieur après 22h.
                        </p>
                    </Typography>
                </Box>
            </Modal>

        </Container>
    );
}
