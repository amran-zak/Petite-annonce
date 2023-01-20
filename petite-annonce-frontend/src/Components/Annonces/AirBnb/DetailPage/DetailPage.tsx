import * as React from "react";
import Gallery from "./Gallery";
import { grey } from "@mui/material/colors";
import {
  Box,
  Grid,
  Container,
  Avatar,
  Typography,
  Checkbox,
  Divider,
  Icon, Card, TextField, Button,
} from "@mui/material";
import IconButton from "@mui/material/Button";
import {
  Call,
  Chat,
  FavoriteBorder,
  Favorite,
  Share,
} from "@mui/icons-material";
import "./DetailPage.scss";
import Map, { Marker, NavigationControl } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { DPE, GES } from "react-dpe-generator";
import {useState} from "react";

const token =
  "pk.eyJ1IjoiZ2lzZmVlZGJhY2siLCJhIjoiY2l2eDJndmtjMDFkeTJvcHM4YTNheXZtNyJ9.-HNJNch_WwLIAifPgzW2Ig";
const marker = {
  longitude: -122.4,
  latitude: 37.8,
  name: "CK Block, Salt Lake",
  city: "Kolkata",
  state: "West Bengal",
  country: "India",
};
const label = { inputProps: { "aria-label": "Checkbox demo" } };
const addFavoris = (event: React.MouseEvent<HTMLButtonElement>) => {
  event.stopPropagation();
};
const criteres = [
  {
    icon: "home",
    name: "Type de bien",
    value: "Maison",
  },
  {
    icon: "chair",
    name: "Meublé / Non meublé",
    value: "Meublé",
  },
  {
    icon: "aspect_ratio",
    name: "Surface",
    value: "100 m²",
  },
  {
    icon: "bed",
    name: "Chambre(s)",
    value: "2 ch",
  },
  {
    icon: "groups",
    name: "Peronne(s)",
    value: "5",
  },
  {
    icon: "yard",
    name: "Jardin",
    value: "Oui",
  },
  {
    icon: "bathroom",
    name: "Salle(s) de bain",
    value: "1",
  },
  {
    icon: "wc",
    name: "Toilette(s)",
    value: "1",
  },
];
const currencies = [ // a adapter en fonction des informations qu'aura indiquer le déposeur de l'annonce
  { value: '1', label: '1 personne', },
  { value: '2', label: '2 personnes', },
  { value: '3', label: '3 personnes', },
  { value: '4', label: '4 personnes', },
  { value: '5', label: '5 personnes', },
];
function DetailPage(): JSX.Element {
  const [selectedValue, setSelectedValue] = useState("1");
  const [result, setResult] = useState(0);
  const frais_services = 200;
  const taxes = 20;

  const calculateResult = (value: string, frais_services, taxes) => {
    setResult(parseInt(value) * 340 + frais_services + taxes);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
    calculateResult(event.target.value, frais_services, taxes);
  };
  return (
    <Box sx={{ mt: 6 }}>
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
                Vue sur la baie / Vue panoramique sur la ville / Accès plage ou bord de mer<br/>
                Cuisine / Espace de travail dédié<br/>
                Parking gratuit sur place<br/>
                Lave-linge (Gratuit) dans le logement<br/>
                Arrière-cour privée – Clôture intégrale<br/>
                Lit pour bébé / Détecteur de monoxyde de carbone
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
              <DPE value={200} />
              <GES value={60} />
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
                    18/01/2023 à 21:07
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
                <h1>Maison 5 pièces 115 m²</h1>
                <Typography
                  gutterBottom
                  variant="body2"
                  color="text.secondary"
                  align="left"
                >
                  5 Pièces · 115 m² · Villenave-d Ornon 33140
                </Typography>

                <div className="price">
                  <div className="main-tag">
                    <p>340 € / nuit<br/>Charges comprises</p>
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
                      Lary Smith
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
                </p>
              </div>
            </section>
            <Grid container spacing={2} xs={12} sm={12} sx={{ pt: 2 }}>
              <Card sx={{
                pt: 2, my: 'auto', width: '80%', marginLeft: '15%',
                backgroundColor: 'rgb(240,237,255)'
              }}
              >
                <Typography component="h1" variant="h5" sx={{ mb:5 }}>340 € / nuit</Typography>
                <form noValidate>
                  <Grid container xs={12} sm={12} sx={{ mt: 3 }}>
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
                          onChange={handleChange}
                          select
                          value={selectedValue}
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

                    <Grid container xs={12} sm={12} sx={{ m: 5 }}>
                      <Grid xs={12} sm={6}>Frais de service</Grid>
                      <Grid xs={12} sm={6} sx={{ textAlign: 'right' }}>{frais_services} €</Grid>
                    </Grid>
                    <Grid container xs={12} sm={12} sx={{ mx: 5 }}>
                      <Grid xs={12} sm={6}>Taxes</Grid>
                      <Grid xs={12} sm={6} sx={{ textAlign: 'right' }}>{taxes} €</Grid>
                    </Grid>

                    <Grid container xs={12} sm={12} sx={{ mt:5, mx: 5, p: 1, borderBottom: '#694ed4 2px solid' }}>
                      <Grid xs={12} sm={6}>
                        <Typography component="h1" variant="h5">
                          TOTAL
                        </Typography>
                      </Grid>
                      <Grid xs={12} sm={6} sx={{ textAlign: 'right' }}>
                        <Typography component="h1" variant="h5">
                          {result} €
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
            <Grid container xs={8} sx={{ mx:'auto' }}>
              <Typography variant="body2" sx={{ fontSize: "16px", mb: 2, mt: 5 }}>
                89 Quai des Chartrons, 33300 Bordeaux
              </Typography>
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
                <Marker longitude={marker.longitude} latitude={marker.latitude} style={{ color: "white" }}/>
              </Map>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default DetailPage;
