import * as React from "react";
import Gallery from "./Gallery";
import { grey } from "@mui/material/colors";
import { Box, Grid, Container, Avatar, Typography, Checkbox, Divider, Icon, Card, TextField, Button, IconButton } from "@mui/material";
import { Call, Chat, FavoriteBorder, Favorite, Share } from "@mui/icons-material";
import "../../DetailPage.scss";
import Map, { Marker, NavigationControl } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { DPE, GES } from "react-dpe-generator";
import { useState } from "react";

import AnnoncesServices from "../../../../Services/Annonces.services";

import { useParams } from "react-router-dom";

import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';

const token =
  "pk.eyJ1IjoiZ2lzZmVlZGJhY2siLCJhIjoiY2l2eDJndmtjMDFkeTJvcHM4YTNheXZtNyJ9.-HNJNch_WwLIAifPgzW2Ig";
const marker = {
  longitude: -122.4,
  latitude: 37.8,
  name: "CK Block, Salt Lake",
  city: "Bordeaux",
  state: "new aqutaine",
  country: "France",
};
const label = { inputProps: { "aria-label": "Checkbox demo" } };
const addFavoris = (event: React.MouseEvent<HTMLButtonElement>) => {
  event.stopPropagation();
};

const currencies = [ // a adapter en fonction des informations qu'aura indiquer le déposeur de l'annonce
  { value: '1', label: '1 personne', },
  { value: '2', label: '2 personnes', },
  { value: '3', label: '3 personnes', },
  { value: '4', label: '4 personnes', },
  { value: '5', label: '5 personnes', },
];
function DetailPage(): JSX.Element {
  const [selectedValue, setSelectedValue] = useState("1");
  const result = 0;
  const frais_services = 200;
  const taxes = 20;



  const [data, setData] = React.useState(undefined);
  const [maison, setMaison] = React.useState("");
  const [meuble, setMeuble] = React.useState("");
  const [m2, setM2] = React.useState("");
  const [chambre, setChambre] = React.useState("");
  const [personne, setPersonne] = React.useState("");
  const [jardin, setJardin] = React.useState("");
  const [bain, setBain] = React.useState("");
  const [toilette, setToilette] = React.useState("");

  const { id } = useParams<{ id: string }>();


  const criteres = [{

    icon: "home",
    name: "Type de bien",
    value: maison,

  },

  {

    icon: "chair",
    name: "Meublé / Non meublé",
    value: meuble,

  },

  {

    icon: "aspect_ratio",
    name: "Surface",
    value: m2,

  },

  {

    icon: "bed",
    name: "Chambre(s)",
    value: chambre,

  },

  {

    icon: "groups",
    name: "Peronne(s)",
    value: personne,

  },

  {

    icon: "yard",
    name: "Jardin",
    value: jardin,

  },

  {

    icon: "bathroom",
    name: "Salle(s) de bain",
    value: bain,

  },

  {

    icon: "wc",
    name: "Toilette(s)",
    value: toilette,

  },

  ];
  console.log(data)
  React.useEffect(() => {
    AnnoncesServices.findByID(id).then(
      (response) => {
        setData(response.data.publication)
        setMaison(response.data.publication.Typebien)
        setMeuble(response.data.publication.Meuble)
        setM2(response.data.publication.surfaceValue)
        setChambre(response.data.publication.roomValue)
        setBain(response.data.publication.bathroomValue)
        setPersonne(response.data.publication.personValue)
        setJardin(response.data.publication.ValueGarden)
        setToilette(response.data.publication.wcValue)


      }).catch(
        (error) => {
          console.log(error.message);
        }
      );
  }, []);

  const calculateResult = (value: string, frais_services, taxes) => {
    setResult(parseInt(value) * 340 + frais_services + taxes);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
    calculateResult(event.target.value, frais_services, taxes);
  };
  return (
    <Box sx={{ mt: 6 }}>
      {data ? (
        <Container maxWidth="xl" sx={{ overflowY: "scroll", height: "80vh" }}>
          <Grid container>
            <Grid item xs={7}>
              <Box display="flex" flexDirection="column">
                <Gallery></Gallery>
                <Divider sx={{ my: 5 }}></Divider>
                <Typography variant="h6" sx={{ fontSize: "17px", mb: 5 }}>
                  Critères
                </Typography>
                <Grid
                  container
                  spacing={{ xs: 2, md: 3 }}
                  columns={{ xs: 4, sm: 8, md: 12 }}
                  sx={{ px: 5 }}
                >
                  {Array.from(criteres).map((item, index) => (
                    <Grid item xs={2} sm={4} md={4} key={index}>
                      <Box display="flex" flexDirection="row" alignItems="center">
                        <Avatar
                          sx={{ width: 30, height: 30, bgcolor: grey[400] }}
                        >
                          <Icon sx={{ color: "white" }}>{item.icon}</Icon>
                        </Avatar>
                        <Box
                          display="flex"
                          flexDirection="column"
                          alignItems="start"
                          ml="5px"
                        >
                          <Typography variant="caption">{item.name}</Typography>
                          <Typography>{item.value}</Typography>
                        </Box>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
                <Divider sx={{ my: 5 }}></Divider>
                <Typography variant="h6" sx={{ fontSize: "17px", mb: 5 }}>
                  Ce que compose ce logement
                </Typography>
                <p>
                {data.detailsAnnonceAirbnb}
                </p>

                <Divider sx={{ my: 5 }}></Divider>
              </Box>
              <Box
                sx={{
                  px: 5,
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <DPE value={data.dpeValue} />
                <GES value={data.gesValue} />
              </Box>
              <p>
                Montant estimé des dépenses annuelles d’énergie pour un usage
                standard entre NC et NC par an. Prix moyen des énergies indexé au
                NC (abonnement compris).
              </p>
            </Grid>
            <Grid
              item
              xs={5}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "start",
              }}
            >
              <section className="description">
                <Box sx={{ width: "100%" }}>
                  <Box
                    sx={{
                      display: "flex",
                      width: "100%",
                      justifyContent: "space-between",
                      mb: "10px",
                    }}
                  >
                    <Typography
                      gutterBottom
                      variant="caption"
                      color="text.secondary"
                      align="left"
                    >
                      {data.createdAt}
                    </Typography>

                    <div>
                      <Checkbox
                        {...label}
                        onClick={addFavoris}
                        icon={<FavoriteBorder />}
                        checkedIcon={<Favorite color="error" />}
                      />
                      <IconButton aria-label="share" style={{ color: "white" }}>
                        <Share />
                      </IconButton>
                    </div>
                  </Box>
                  <h1>{data.titreAnnonce}</h1>

                  <div className="price">
                    <div className="main-tag">
                      <p>{data.prixValue} € / nuit</p>
                    </div>
                  </div>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "100%",
                    my: "15px",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <Avatar
                      alt="Lary Smith"
                      src="https://i.pravatar.cc/150?img=2"
                      sx={{ width: 56, height: 56, mr: 1 }}
                    />
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                      <Typography variant="h6" sx={{ fontSize: "17px" }}>
                        {data.user.firstname.toUpperCase()}    {data.user.lastname.toUpperCase()}

                      </Typography>
                      <Typography variant="subtitle2" sx={{ fontSize: "11px" }}>
                        Owner
                      </Typography>
                    </Box>
                  </Box>
                  <div>
                    <IconButton aria-label="call" size="medium" style={{ color: "white" }}>
                      <Call />
                    </IconButton>
                    <IconButton aria-label="chat" size="medium" style={{ color: "white" }}>
                      <Chat />
                    </IconButton>
                  </div>
                </Box>

                <div className="show-hide-text wrapper">
                  <a id="show-more" className="show-less" href="#show-less">
                    Voir moins
                  </a>
                  <a id="show-less" className="show-more" href="#show-more">
                    Voir plus
                  </a>
                  <p>
                    {data.description}
                  </p>
                </div>
              </section>
              <Grid container spacing={2} xs={12} sm={12} sx={{ pt: 2 }}>
                <Card sx={{
                  pt: 2, my: 'auto', width: '80%', marginLeft: '15%',
                  backgroundColor: 'rgb(240,237,255)'
                }}
                >
                  <Typography component="h1" variant="h5" sx={{ mb: 5, mt: 1 }}>{data.prixValue} € / nuit</Typography>
                  <form noValidate>
                    <Grid container xs={12} sm={12} sx={{ mt: 3 }}>
                      <Grid xs={12} sm={6} sx={{ textAlign: 'center' }}>
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
                      <Grid xs={12} sm={6} sx={{ textAlign: 'center' }}>
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
                      <Grid xs={12} sm={12} sx={{ mt: 5, textAlign: 'center' }}>
                        <TextField
                          id="filled-select-currency-native"
                          onChange={handleChange}
                          type="number"
                          value={selectedValue}
                          sx={{ backgroundColor: 'white', width: '10vw' }}
                          helperText="Nombre de nuit(s)"
                          variant="filled"
                        >
                          {currencies.map((option) => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </TextField>
                      </Grid>

                      <Grid container xs={12} sm={12} sx={{ m: 5 }}>
                        <Grid xs={12} sm={6}>Frais de service</Grid>
                        <Grid xs={12} sm={6} sx={{ textAlign: 'right' }}>{data.fraisValue} €</Grid>
                      </Grid>
                      <Grid container xs={12} sm={12} sx={{ mx: 5 }}>
                        <Grid xs={12} sm={6}>Taxes</Grid>
                        <Grid xs={12} sm={6} sx={{ textAlign: 'right' }}>{data.chargesValue} €</Grid>
                      </Grid>

                      <Grid container xs={12} sm={12} sx={{ mt: 5, mx: 5, p: 1, borderBottom: '#694ed4 2px solid' }}>
                        <Grid xs={12} sm={6}>
                          <Typography component="h1" variant="h5">
                            TOTAL
                          </Typography>
                        </Grid>
                        <Grid xs={12} sm={6} sx={{ textAlign: 'right' }}>
                          <Typography component="h1" variant="h5">
                            {data.prixValue+ data.fraisValue+ data.chargesValue}    €
                          </Typography>
                        </Grid>
                      </Grid>

                      <Grid xs={12} sm={12} sx={{ textAlign: 'center' }}>
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
              <Grid container xs={8} sx={{ mx: 'auto' }}>
                <Typography variant="body2" sx={{ fontSize: "16px", mb: 2, mt: 5 }}>
                      {data.adresse_complet}                </Typography>
                <Map
                  initialViewState={{
                    longitude: -122.4,
                    latitude: 37.8,
                    zoom: 14,
                  }}
                  mapboxAccessToken={token}
                  style={{ width: "100%", height: 400 }}
                  mapStyle="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json"
                >
                  <NavigationControl />
                  <Marker longitude={marker.longitude} latitude={marker.latitude} style={{ color: "white" }} />
                </Map>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      ) : (
        <Stack sx={{ color: 'grey.500' }}
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={3}>
          <CircularProgress color="secondary" />
        </Stack>
      )}
    </Box>
  );
}

export default DetailPage;
