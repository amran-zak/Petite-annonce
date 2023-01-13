import * as React from 'react'
import { Box, Avatar, Collapse, Grid, Button, IconButton, Table, TableBody, TableCell,
  TableContainer, TableHead, TableRow, Typography, Paper } from '@mui/material'
/* icons */
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import VisibilityIcon from '@mui/icons-material/Visibility'
import ClearIcon from '@mui/icons-material/Clear';

export default function CollapsibleTable() {
  const [open, setOpen] = React.useState(false)

  return (
    <React.Fragment>
        <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
            <TableHead>
                <TableRow>
                    <TableCell/>
                    <TableCell>Annonce</TableCell>
                    <TableCell>Nom</TableCell>
                    <TableCell>Prix</TableCell>
                    <TableCell>Dates</TableCell>
                    <TableCell/>
                </TableRow>
            </TableHead>
            {Array.from(Array(1)).map((_, index) => (
                <TableBody key={index}>
                    <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                        <TableCell>
                        <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
                            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                        </IconButton>
                        </TableCell>
                        <TableCell component="th" scope="row" sx={{ display: 'flex', flexDirection: 'row' }}>
                            <Avatar 
                                variant="rounded" 
                                src="https://a0.muscache.com/im/pictures/miso/Hosting-678699115983888002/original/9136a64e-e2d2-4f02-a9c9-cf28d469a6c9.jpeg?im_w=1200" 
                                sx={{ objectFit: 'cover', mr: 2 }}
                            ></Avatar>
                            <Typography>à Fraisans</Typography>
                        </TableCell>
                        <TableCell>
                            <Typography>Gîte Spa privatif : Chez l'Pierre</Typography>
                        </TableCell>
                        <TableCell>
                            155 € par nuit
                        </TableCell>
                        <TableCell>
                            du 23-06-2022<br></br>au 30-06-2022
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
                                <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                >
                                <ClearIcon/>
                                </Button>
                            </Grid>
                        </Grid>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                            <Collapse in={open} timeout="auto" unmountOnExit>
                            <Box sx={{ margin: 1 }}>
                                <Typography sx={{ fontWeight: 'bold' }}>Description</Typography>
                                    <p>Besoin d'un séjour détente ? D'une capacité de 2 à 4 personnes le Gîte Spa chez l'Pierre du Relais des Forges vous propose un hébergement insolite tout confort équipé d'un SPA privatif (sauna et bains à remous) dans le Jura !</p>
                                    <p>N'attendez plus pour découvrir le charme de notre gîte SPA, équipé également d'une terrasse privative pour pourrez profiter des beaux jours dans notre magnifique domaine.<br></br>
                                    Vous disposerez également d'un accès à notre piscine chauffée extérieure ouverte en saison.</p>
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
