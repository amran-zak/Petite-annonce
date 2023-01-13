/* eslint-disable react/react-in-jsx-scope */
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
  OutlinedInput,
  InputAdornment,
  FormControlLabel,
} from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
// import { useNavigate } from "react-router-dom";
import ItemList from "./ItemList";

import { grey } from "@mui/material/colors";
import { styled } from "@mui/material/styles";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";

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
  const [expanded, setExpanded] = React.useState<string | boolean>("panel1");

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : true);
    };
  const [state, setState] = React.useState("Plus récent");

  const handleSelectChange = (event: SelectChangeEvent) => {
    setState(event.target.value);
  };
  // const navigate = useNavigate();
  // const routeChange = () => {
  //   const path = `/details`;
  //   navigate(path);
  // };
  const tri: Array<string> = [
    "Plus récent",
    "Plus ancien",
    "Prix croissant",
    "Prix décroissant",
  ];
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
      }}
    >
      <Box
        sx={{
          overflowY: "scroll",
          width: "330px",
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
                paddingY: "15px",
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
                        <Checkbox checked={true} size="small" name="Location" />
                      }
                      label="Location"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={true}
                          size="small"
                          name="Colocation"
                        />
                      }
                      label="Colocation"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox checked={false} size="small" name="Maison" />
                      }
                      label="Maison"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox checked={false} size="small" name="Airbnb" />
                      }
                      label="Airbnb"
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
                  <ButtonGroup
                    fullWidth
                    variant="outlined"
                    aria-label="outlined button group"
                  >
                    <Button>1</Button>
                    <Button>2</Button>
                    <Button>3</Button>
                    <Button>4</Button>
                    <Button>5</Button>
                    <Button>6+</Button>
                  </ButtonGroup>
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
                          checked={true}
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
                        <Checkbox checked={true} size="small" name="Meublé" />
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
            <Button fullWidth variant="contained" sx={{ marginRight: "14px" }}>
              Valider
            </Button>
            <Button fullWidth variant="outlined">
              Reset
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
              sx={{ width: "200px" }}
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
          {Array.from(Array(10)).map((_, index) => (
            <div key={index}>
              <ItemList></ItemList>
            </div>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default Home;
