import * as React from "react";
import {
  Box,
  Icon,
  Divider,
  Checkbox,
  Typography,
  FormControl,
  ButtonGroup,
  Button,
  AppBar,
  Toolbar,
  FormGroup,
  InputLabel,
  MenuItem,
  Slider,
  OutlinedInput,
  InputAdornment,
  FormControlLabel,
} from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import ItemList from "./ItemList";
import { grey } from "@mui/material/colors";
import { styled } from "@mui/material/styles";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import AnnoncesServices from "../../Services/Annonces.services";
import { useNavigate } from "react-router-dom";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(() => ({
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    sx={{ padding: "0px !important" }}
    expandIcon={<KeyboardArrowDownIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    fontSize: "medium",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: 0,
  paddingLeft: theme.spacing(2),
  paddingBottom: theme.spacing(2),
}));
const FilterHeader = styled(Typography)(() => ({
  fontWeight: 500,
  fontSize: "14px",
  color: "rgba(0, 0, 0, 0.6)",
}));
function Home(): JSX.Element {
  const [expanded, setExpanded] = React.useState<string | boolean>("panel0");

  const [pub, setPub] = React.useState<any>([]);
  const [PubFilted, setPubFilted] = React.useState<any>([]);
  const [message, setMessage] = React.useState<string | undefined>(undefined);

  const [search, setSearch] = React.useState<string>("");
  const [min, setMin] = React.useState<number>(0);
  const [max, setMax] = React.useState<number>(800);
  const [minSurf, setMinSurf] = React.useState<number>(0);
  const [maxSurf, setMaxSurf] = React.useState<number>(100);
  const [searchAddress, setSearchAddress] = React.useState<string>("");
  const [typeAnnonce, setTypeAnnonce] = React.useState({
    Location: false,
    Vente: false,
    Airbnb: false,
  });
  const [typeLogement, setTypeLogement] = React.useState({
    Appartement: false,
    Maison: false,
    Villa: false,
  });

  const [slider, setSlider] = React.useState<number[]>([20, 60]);
  const marks = [
    {
      value: 0,
      label: "1",
    },
    {
      value: 20,
      label: "2",
    },
    {
      value: 40,
      label: "3",
    },
    {
      value: 60,
      label: "4",
    },
    {
      value: 80,
      label: "5",
    },
    {
      value: 100,
      label: "6+",
    },
  ];
  function valueLabelFormat(value: number) {
    return marks.findIndex((mark) => mark.value === value) + 1;
  }
  const handleSlider = (event: Event, newValue: number | number[]) => {
    setSlider(newValue as number[]);
  };

  React.useEffect(() => {
    AnnoncesServices.findAll()
      .then((response) => {
        setPub(response.data.publications);
        setPubFilted(response.data.publications);
        setMessage(response.data.message);
      })
      .catch((error) => {
        setMessage(error.message);
      });
  }, []);

  const navigate = useNavigate();

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : true);
    };
  const [state, setState] = React.useState("Plus récent");

  const handleSelectChange = (event: SelectChangeEvent) => {
    setState(event.target.value);
  };
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };
  const handleMin = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMin(+event.target.value);
  };
  const handleMax = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMax(+event.target.value);
  };
  const handleMinSurf = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMinSurf(+event.target.value);
  };
  const handleMaxSurf = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMaxSurf(+event.target.value);
  };
  const handleSearchAddress = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchAddress(event.target.value);
  };

  const handleTypeAnnonce = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTypeAnnonce({
      ...typeAnnonce,
      [event.target.name]: event.target.checked,
    });
  };
  const handleTypeLogement = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTypeLogement({
      ...typeLogement,
      [event.target.name]: event.target.checked,
    });
    console.log(typeAnnonce);
  };
  const { Location, Vente, Airbnb } = typeAnnonce;
  const { Appartement, Maison, Villa } = typeLogement;

  const tri: Array<string> = [
    "Plus récent",
    "Plus ancien",
    "Prix croissant",
    "Prix décroissant",
  ];

  const handleFilter = () => {
    let annonceFilter = "";
    let logementFilter = "";
    for (const key in typeAnnonce) {
      if (typeAnnonce[key]) {
        annonceFilter = key + "" + annonceFilter;
      }
    }
    for (const key in typeLogement) {
      if (typeLogement[key]) {
        logementFilter = key + "" + logementFilter;
      }
    }
    console.log(annonceFilter);
    console.log(logementFilter);
    const filtered = pub.filter(
      (element) =>
        element.titreAnnonce.toLowerCase().includes(search.toLowerCase()) &&
        element.adresse_complet
          .toLowerCase()
          .includes(searchAddress.toLowerCase()) &&
        element.Typeannonce.toLowerCase().includes(
          annonceFilter.toLowerCase()
        ) &&
        element.Typebien.toLowerCase().includes(logementFilter.toLowerCase()) &&
        element.prixValue >= min &&
        element.prixValue <= max &&
        element.surfaceValue >= minSurf &&
        element.surfaceValue <= maxSurf
    );
    console.log(filtered);

    setPubFilted(filtered);
  };

  return (
    <Box
      // onClick={routeChange}
      sx={{
        display: "flex",
        flexDirection: "row",
      }}
    >
      <Box
        sx={{
          overflowY: "scroll",
          width: "350px",
          height: "92vh",
        }}
        flexDirection="column"
      >
        <Box
          sx={{
            height: "100%",
            position: "relative",
          }}
        >
          <Box sx={{ padding: "0 10px" }}>
            <Box
              position="sticky"
              display={"flex"}
              flexDirection={"row"}
              sx={{
                paddingY: "20px",
                top: 0,
                zIndex: 1,
                backgroundColor: "white",
              }}
            >
              <Icon fontSize="small" sx={{ marginRight: "10px" }}>
                tune
              </Icon>
              <Typography variant="subtitle2">Filter</Typography>
              <Divider />
            </Box>

            <FormControl fullWidth sx={{ mt: 3 }} size="small">
              <InputLabel htmlFor="outlined-adornment-amount">
                Search
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-amount"
                value={search}
                onChange={handleSearch}
                startAdornment={
                  <InputAdornment position="start">
                    <Icon fontSize="small" sx={{ marginRight: "10px" }}>
                      search
                    </Icon>
                  </InputAdornment>
                }
                label="Search"
              />
            </FormControl>
            <FormControl fullWidth sx={{ my: 1 }} size="small">
              <InputLabel htmlFor="outlined-adornment-location">
                Location
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-location"
                value={searchAddress}
                onChange={handleSearchAddress}
                endAdornment={
                  <InputAdornment position="end">
                    <Icon fontSize="small" sx={{ marginLeft: "10px" }}>
                      location_on
                    </Icon>
                  </InputAdornment>
                }
                label="Location"
              />
            </FormControl>
            <div>
              <Accordion
                expanded={expanded === "panel0"}
                onChange={handleChange("panel0")}
              >
                <AccordionSummary
                  aria-controls="panel1d-content"
                  id="panel1d-header"
                >
                  <FilterHeader>Type de annonce</FilterHeader>
                </AccordionSummary>
                <AccordionDetails>
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={Location}
                          size="small"
                          name="Location"
                          onChange={handleTypeAnnonce}
                        />
                      }
                      label="Location"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={Vente}
                          size="small"
                          name="Vente"
                          onChange={handleTypeAnnonce}
                        />
                      }
                      label="Vente"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={Airbnb}
                          size="small"
                          name="Airbnb"
                          onChange={handleTypeAnnonce}
                        />
                      }
                      label="Airbnb"
                    />
                  </FormGroup>
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expanded === "panel1"}
                onChange={handleChange("panel1")}
              >
                <AccordionSummary
                  aria-controls="panel1d-content"
                  id="panel1d-header"
                >
                  <FilterHeader>Type de logement</FilterHeader>
                </AccordionSummary>
                <AccordionDetails>
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={Appartement}
                          size="small"
                          name="Appartement"
                          onChange={handleTypeLogement}
                        />
                      }
                      label="Appartement"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={Maison}
                          size="small"
                          name="Maison"
                          onChange={handleTypeLogement}
                        />
                      }
                      label="Maison"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={Villa}
                          size="small"
                          name="Villa"
                          onChange={handleTypeLogement}
                        />
                      }
                      label="Villa"
                    />
                  </FormGroup>
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expanded === "panel2"}
                onChange={handleChange("panel2")}
              >
                <AccordionSummary
                  aria-controls="panel2d-content"
                  id="panel2d-header"
                >
                  <FilterHeader>Intervalle des prix</FilterHeader>
                </AccordionSummary>
                <AccordionDetails>
                  <Box display={"flex"} flexDirection={"row"}>
                    <FormControl size="small" sx={{ mr: 1 }}>
                      <InputLabel htmlFor="outlined-adornment-amount">
                        Min
                      </InputLabel>
                      <OutlinedInput
                        id="outlined-adornment-amount"
                        type="number"
                        value={min}
                        onChange={handleMin}
                        endAdornment={
                          <InputAdornment position="end">€</InputAdornment>
                        }
                        label="Search"
                      />
                    </FormControl>
                    <FormControl size="small">
                      <InputLabel htmlFor="outlined-adornment-amount">
                        Max
                      </InputLabel>
                      <OutlinedInput
                        id="outlined-adornment-amount"
                        type="number"
                        value={max}
                        onChange={handleMax}
                        endAdornment={
                          <InputAdornment position="end">€</InputAdornment>
                        }
                        label="Search"
                      />
                    </FormControl>
                  </Box>
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expanded === "panel3"}
                onChange={handleChange("panel3")}
              >
                <AccordionSummary
                  aria-controls="panel3d-content"
                  id="panel3d-header"
                >
                  <FilterHeader>Nombre de pièces</FilterHeader>
                </AccordionSummary>
                <AccordionDetails>
                  <Slider
                    valueLabelFormat={valueLabelFormat}
                    getAriaLabel={() => "range"}
                    value={slider}
                    onChange={handleSlider}
                    valueLabelDisplay="auto"
                    marks={marks}
                  />
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expanded === "panel4"}
                onChange={handleChange("panel4")}
              >
                <AccordionSummary
                  aria-controls="panel2d-content"
                  id="panel2d-header"
                >
                  <FilterHeader>Surface du terrain</FilterHeader>
                </AccordionSummary>
                <AccordionDetails>
                  <Box display={"flex"} flexDirection={"row"}>
                    <FormControl size="small" sx={{ mr: 1 }}>
                      <InputLabel htmlFor="outlined-adornment-amount">
                        Min
                      </InputLabel>
                      <OutlinedInput
                        id="outlined-adornment-amount"
                        type="number"
                        value={minSurf}
                        onChange={handleMinSurf}
                        endAdornment={
                          <InputAdornment position="end">m²</InputAdornment>
                        }
                        label="Search"
                      />
                    </FormControl>
                    <FormControl size="small">
                      <InputLabel htmlFor="outlined-adornment-amount">
                        Max
                      </InputLabel>
                      <OutlinedInput
                        id="outlined-adornment-amount"
                        type="number"
                        value={maxSurf}
                        onChange={handleMaxSurf}
                        endAdornment={
                          <InputAdornment position="end">m²</InputAdornment>
                        }
                        label="Search"
                      />
                    </FormControl>
                  </Box>
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expanded === "panel5"}
                onChange={handleChange("panel5")}
              >
                <AccordionSummary
                  aria-controls="panel5d-content"
                  id="panel5d-header"
                >
                  <FilterHeader>Type de vendeur</FilterHeader>
                </AccordionSummary>
                <AccordionDetails>
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={false}
                          size="small"
                          name="Particuliers"
                        />
                      }
                      label="Particuliers"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={false}
                          size="small"
                          name="Professionnels"
                        />
                      }
                      label="Professionnels"
                    />
                  </FormGroup>
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expanded === "panel6"}
                onChange={handleChange("panel6")}
              >
                <AccordionSummary
                  aria-controls="panel6d-content"
                  id="panel6d-header"
                >
                  <FilterHeader>Meublé / Non meublé</FilterHeader>
                </AccordionSummary>
                <AccordionDetails>
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Checkbox checked={false} size="small" name="Meublé" />
                      }
                      label="Meublé"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={false}
                          size="small"
                          name="Non meublé"
                        />
                      }
                      label="Non meublé"
                    />
                  </FormGroup>
                </AccordionDetails>
              </Accordion>
            </div>
          </Box>
        </Box>
        <AppBar
          position="sticky"
          sx={{
            top: "auto",
            bottom: 0,
            alignSelf: "flex-end",
            height: "64px",
            backgroundColor: grey[300],
          }}
        >
          <Toolbar
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Button
              fullWidth
              variant="contained"
              sx={{ marginRight: "14px" }}
              onClick={handleFilter}
            >
              Valider
            </Button>
            <Button fullWidth variant="outlined">
              Annuler
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
      <Box sx={{ width: "100%", overflowY: "scroll", height: "92vh", pl: 4 }}>
        <Box
          sx={{
            m: 3,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h6"
            align="left"
            sx={{ fontWeight: "bold", mr: 3 }}
          >
            Feed
          </Typography>
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <Select
              value={state}
              onChange={handleSelectChange}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
              sx={{ width: "200px", textAlign: "start" }}
            >
              {tri.map((item, index) => (
                <MenuItem key={index} value={item}>{`${item}`}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
        <Box
          sx={{
            pr: 3,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography
            variant="caption"
            display="block"
            sx={{ textAlign: "end", fontStyle: "italic" }}
            gutterBottom
          >
            {PubFilted.length > 0 ? PubFilted.length + " annonces trouvés" : ""}
          </Typography>
          {PubFilted ? (
            PubFilted.map(
              ({
                titreAnnonce,
                _id,
                prixValue,
                description,
                pieceValue,
                surfaceValue,
                adresse_complet,
                Typeannonce,
                Typebien,
              }) => (
                <div
                  key={_id}
                  onClick={() =>
                    Typeannonce == "AirBNB"
                      ? navigate(`/airbnb/` + _id)
                      : navigate(`/details/` + _id)
                  }
                >
                  <ItemList
                    id={_id}
                    titreAnnonce={titreAnnonce}
                    prixValue={prixValue}
                    description={description}
                    pieceValue={pieceValue}
                    surfaceValue={surfaceValue}
                    adresse_complet={adresse_complet}
                    Typeannonce={Typeannonce}
                    Typebien={Typebien}
                  />
                </div>
              )
            )
          ) : (
            <Stack
              sx={{ color: "grey.500" }}
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={3}
            >
              <CircularProgress color="secondary" />
            </Stack>
          )}
        </Box>
      </Box>
    </Box>
  );
}

export default Home;
