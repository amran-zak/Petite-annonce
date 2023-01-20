import * as React from "react";
import { Typography, Box, Icon } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Checkbox, CardActionArea } from "@mui/material";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import prod1 from "../../Style/Img/itemImg.jpg";
export default function ItemList() {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const addFavoris = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
  };

  return (
    <Box sx={{ position: "relative", mb: 2 }}>
      <Card>
        <CardActionArea sx={{ display: "flex", flexDirection: "row" }}>
          <CardMedia
            component="img"
            height="180"
            image={prod1}
            sx={{ objectFit: "cover", width: "200px" }}
          />
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                mb: "10px",
              }}
            >
              <div>
                <Typography
                  align="left"
                  component="div"
                  sx={{ fontSize: "16px" }}
                >
                  <b>Maison 5 pièces 115 m²</b>
                </Typography>
                <Typography
                  gutterBottom
                  variant="body2"
                  color="text.secondary"
                  align="left"
                >
                  Villenave d ornon 33140
                </Typography>
              </div>
              <Checkbox
                {...label}
                onClick={addFavoris}
                icon={<FavoriteBorder />}
                checkedIcon={<Favorite color="error" />}
              />
            </Box>

            <Typography
              gutterBottom
              variant="body1"
              color="text.secondary"
              align="left"
              mb="15px"
            >
              L agence Twist, la référence de l agence à prix fixe 4990€ sur
              Bordeaux vous présente à la vente cette maison dans le secteur
              Pontac.
            </Typography>

            <Box display="flex" flexDirection="row">
              <Typography
                align="left"
                component="span"
                sx={{ fontSize: "16px", marginRight: "10px" }}
              >
                <b>€2.300</b>
              </Typography>
              <Box
                display="flex"
                flexDirection="row"
                alignItems="center"
                sx={{ marginRight: "10px" }}
              >
                <Icon fontSize="medium" sx={{ marginRight: "5px" }}>
                  meeting_room
                </Icon>
                <Typography
                  align="left"
                  component="span"
                  sx={{ fontSize: "16px" }}
                >
                  <b>5 portes</b>
                </Typography>
              </Box>
              <Box
                display="flex"
                flexDirection="row"
                alignItems="center"
                sx={{ marginRight: "10px" }}
              >
                <Icon fontSize="medium">crop</Icon>
                <Typography
                  align="left"
                  component="span"
                  sx={{ fontSize: "16px" }}
                >
                  <b>66 m²</b>
                </Typography>
              </Box>
            </Box>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
}
