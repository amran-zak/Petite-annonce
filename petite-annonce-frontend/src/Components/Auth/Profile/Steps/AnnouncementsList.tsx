import * as React from 'react'
import { Box, Avatar, Collapse, Grid, Button, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import EditIcon from '@mui/icons-material/Edit'
import VisibilityIcon from '@mui/icons-material/Visibility'

import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';

import AnnoncesServices from '../../../../Services/Annonces.services'

export default function CollapsibleTable() {
  const [open, setOpen] = React.useState(false)
  
  const [data, setData] = React.useState(undefined)

  React.useEffect( () => {
      AnnoncesServices.findAllMe()
        .then((response: any) => {
            console.log(response);
            setData(response.data.publications)
        })
        .catch((e: Error) => {
        console.log(e);
        });
      }, [])
  return (
    <React.Fragment>
      {data ? ( 
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
            {data.map(({_id,titreAnnonce, prixValue, adresse_complet, description}) => (
              <TableBody key={_id}>
                <TableRow sx={{ '& > *': { borderBottom: 'unset' } }} key={_id}>
                  <TableCell>
                    <IconButton aria-label="expand row" sx={{ backgroundColor: 'transparent !important' }} size="small" onClick={() => setOpen(!open)}>
                      {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                  </TableCell>
                  <TableCell component="th" scope="row" sx={{ display: 'flex', flexDirection: 'row' }}>
                    <Avatar 
                      variant="rounded" 
                      src="https://www.kontio.com/static/studio/pub/Models/My+House/My+House+115/Kontio+My+House+115B+harja1+muuttovalmis+hirsitalo_finaali_web.jpg?c=model_xl" 
                      sx={{ objectFit: 'cover', mr: 2 }}
                    ></Avatar>
                    <Typography>{adresse_complet}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography>{titreAnnonce}</Typography>
                  </TableCell>
                  <TableCell>
                    {prixValue} €
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
                            <EditIcon/>
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
                        {description}
                      </Box>
                    </Collapse>
                  </TableCell>
                </TableRow>
              </TableBody>
            ))}
        </Table>
      </TableContainer>
      ): (
        <Stack sx={{ color: 'grey.500' }}
             direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={3}>
            <CircularProgress color="secondary" />
          </Stack>
      )}
    </React.Fragment>
  )
}