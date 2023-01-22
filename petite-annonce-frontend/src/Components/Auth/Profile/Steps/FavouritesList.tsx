import * as React from 'react'
import { Box, Avatar, Collapse, Grid, Button, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Checkbox } from '@mui/material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import FavoriteBorder from "@mui/icons-material/FavoriteBorder"
import Favorite from "@mui/icons-material/Favorite"
import VisibilityIcon from '@mui/icons-material/Visibility'

export default function CollapsibleTable() {
  const [open, setOpen] = React.useState(false)
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  return (
    <React.Fragment>
      <TableContainer
        sx={{
          height: '60vh',
          overflow: "hidden",
          overflowY: "scroll",
          "&::-webkit-scrollbar": {
          width: 10
          },
          "&::-webkit-scrollbar-track": {
          backgroundColor: "lightgrey"
          },
          "&::-webkit-scrollbar-thumb": {
          backgroundColor: "primary.light",
          border: 'none'
          }
        }}
      >
        <Table aria-label="collapsible table" sx={{
      height: "max-content"
    }}>
          <TableHead>
            <TableRow>
              <TableCell/>
              <TableCell>Annonce</TableCell>
              <TableCell>Nom</TableCell>
              <TableCell>Prix</TableCell>
              <TableCell/>
            </TableRow>
          </TableHead>
            {Array.from(Array(3)).map((_, index) => (
              <TableBody key={index}>
                <TableRow sx={{ '& > *': { borderBottom: 'unset' } }} key={index}>
                  <TableCell>
                    <IconButton aria-label="expand row" sx={{ backgroundColor: 'transparent !important' }} size="small" onClick={() => setOpen(!open)}>
                      {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                  </TableCell>
                  <TableCell component="th" scope="row" sx={{ display: 'flex', flexDirection: 'row' }}>
                    <Avatar 
                      variant="rounded" 
                      src="https://www.maisons-artis.com/media/cache/og_filter/2020/12/1288-hermes-toit-arriere.jpg" 
                      sx={{ objectFit: 'cover', mr: 2 }}
                    ></Avatar>
                    <Typography>à Dax</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography>À VENDRE MAISON 3 PIÈCES 58 M2</Typography>
                    </TableCell>
                  <TableCell>
                    155 000 €
                  </TableCell>
                  <TableCell>
                    <Grid container>
                      <Grid xs={12} sm={2} sx={{ mx: 'auto' }}>
                        <Button
                          type="submit"
                          fullWidth
                          variant="contained"
                        >
                          <VisibilityIcon/>
                        </Button>
                      </Grid>
                        <Grid xs={12} sm={2} sx={{ mx: 'auto' }}>
                          <Checkbox
                            {...label}
                            icon={<Favorite color="error" />}
                            checkedIcon={<FavoriteBorder />}
                          />
                        </Grid>
                    </Grid>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                      <Box sx={{ margin: 1 }}>
                        <Typography sx={{ fontWeight: 'bold' }}>Description</Typography>
                        <p>Dans un quartier calme de Dax, maison mitoyenne par un coté composée d&apos;un salon séjour, une cuisine, 2 chambres, une salle d&apos;eau, WC.</p>
                        <p>En extérieur attenant à la cuisine, une véranda ainsi qu&apos;un cabanon présent sur la parcelle.<br></br>
                        Le tout sur une parcelle d&apos;environ 390m² entièrement clôturée.</p>
                        <p>Travaux de gros oeuvre à prévoir</p>
                        <p>EXCLUSIVITE STEPHANE PLAZA IMMOBILIER.</p>
                        <p>* Honoraires à la charge du vendeur<br></br>
                        Hors frais notariés, de publicité et d’enregistrement.</p>
                      </Box>
                    </Collapse>
                  </TableCell>
                </TableRow>
              </TableBody>
            ))}
        </Table>
      </TableContainer>
    </React.Fragment>
  )
}