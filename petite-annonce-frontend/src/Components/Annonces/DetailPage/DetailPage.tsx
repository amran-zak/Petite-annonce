import * as React from "react";
import Gallery from "./Gallery";
import { grey } from "@mui/material/colors";
import {
  Box,
  Grid,
  Container,
  Avatar,
  Typography,
  Link,
  Checkbox,
  Divider,
  Icon,
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
    name: "Chambres",
    value: "2 ch",
  },
  {
    icon: "room_preferences",
    name: "Pièces",
    value: "5",
  },
  {
    icon: "yard",
    name: "Jardin",
    value: "Oui",
  },
  {
    icon: "grid_3x3",
    name: "Charges comprises",
    value: "Oui",
  },
];
function DetailPage(): JSX.Element {
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
                      <p>479 990 € · Charges comprises</p>
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
                      <Link href="#" variant="body2">
                        Voir les 28 annonces
                      </Link>
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
                    L agence Twist, la référence de l agence à prix fixe 4990€ sur
                    Bordeaux vous présente à la vente cette maison dans le secteur
                    Pontac.
                    <br />
                    La visite virtuelle du bien est disponible sur notre site
                    internet. Pour plus de réactivité, vous pouvez joindre Nicolas
                    Prado au [Coordonnées masquées].Dans un environnement
                    privilégié, localisée Emile Lalanne, vous serez séduit par l
                    emplacement que vous offre cette maison, à proximité immédiate
                    des commerces, transports ( tram et bus) et écoles.
                    <br />
                    Sur une parcelle de 700m2 cette maison a été édifiée dans les
                    années 2001. Très bien entretenue, vous n avez plus qu à poser
                    vos valises ! Le jardin est calme et à l abris des regards.
                    Les volumes sont généreux et la luminosité est omniprésente
                    grâce à son exposition SUD. Intégralement de plain-pied, on
                    découvre une belle entrée, un espace salon/salle à manger
                    confortable, une cuisine ouverte aménagée, un cellier. Le tout
                    donnant sur 2 terrasses qui accueilleront parfaitement vos
                    repas d été. Côté nuit, on retrouve 1 chambre parentale avec
                    dressing et salle d eau , 2 chambres de belles dimensions avec
                    rangements, 1 salle de bains, un bureau ou une chambre d
                    enfant. Un garage de 28m2 vient compléter ce bien. Surface :
                    115 m² <br />
                    Prix du bien :479990.00 €<br /> Prix du bien hors honoraires :
                    475000 €<br /> Honoraires TTC : 1.05 % soit 4990 € <br />
                    Honoraires à la charge de : Acquéreur Date de réalisation du
                    diagnostic énergétique : 15/12/2022
                    <br /> Montant estimé des dépenses annuelles d énergie pour un
                    usage standard : entre 1080 € et 1510 € par an
                    <br /> Prix moyens des énergies indexés sur l année 2021
                    (abonnements compris)
                    <br /> Consommation énergie primaire : 134 kWh/m²/an
                    <br />
                    Consommation énergie finale : Non communiquée.
                  </p>
                </div>
              </section>
              <Typography variant="body2" sx={{ fontSize: "16px", mb: 2 }}>
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
        </Container>
      </Box>
  );
}

export default DetailPage;
