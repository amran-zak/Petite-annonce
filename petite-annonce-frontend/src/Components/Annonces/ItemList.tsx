import * as React from "react";
import { Typography, Box, Icon, Card, CardContent, CardMedia, Checkbox, CardActionArea } from "@mui/material";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import prod1 from "../../Style/Img/itemImg.jpg";

import { useNavigate } from "react-router-dom";



interface ItemListprops {
  id : string;
  titreAnnonce : string;
  prixValue : number;
  description : string;
  pieceValue : number;
  surfaceValue : number;
  adresse_complet: string;


}

      const ItemList : React.FC<ItemListprops> = (props) =>   {

  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const addFavoris = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
  };
  return (
    <Box sx={{ position: "relative", mb: 2 }}>
      <Card>
        <CardActionArea sx={{ 
                            display: "flex", flexDirection: "row", 
                            backgroundColor: 'white !important',
                            borderBottom: '#694ed4 2px solid'
                        }}
        >
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
                  <b>{props.titreAnnonce}</b>
                </Typography>
                <Typography
                  gutterBottom
                  variant="body2"
                  color="text.secondary"
                  align="left"
                >
                  {props.adresse_complet}
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
              {props.description}
            </Typography>

            <Box display="flex" flexDirection="row">
              <Typography
                align="left"
                component="span"
                sx={{ fontSize: "16px", marginRight: "10px" }}
              >
                <b>€{props.prixValue}</b>
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
                  <b>{props.pieceValue} pièces</b>
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
                  <b>{props.surfaceValue} m²</b>
                </Typography>
              </Box>
            </Box>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
}
export default ItemList;
