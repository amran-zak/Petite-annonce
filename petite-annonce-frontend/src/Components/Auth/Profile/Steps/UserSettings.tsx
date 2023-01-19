import * as React from 'react'
import { Grid, TextField, Box, Button } from '@mui/material'

export default function AccountSettings() {
    return (
        <Box pb={4} display="flex" flexDirection="column">
            <Grid container spacing={2} sx={{ mt: 2 }}>
                <Grid item xs={12} sm={6}>
                    <TextField 
                        name="firstName" 
                        required 
                        fullWidth 
                        id="firstName" 
                        label="Nom de famille" 
                        value="value"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField 
                        required 
                        fullWidth 
                        id="lastName" 
                        label="Prénom" 
                        name="lastName"
                        value="value"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField 
                        required 
                        fullWidth 
                        id="email" 
                        label="Adresse Email" 
                        name="email" 
                        value="value"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField 
                        fullWidth 
                        name="phone" 
                        label="Numéro de téléphone" 
                        id="phone" 
                        value="value"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField 
                        required 
                        fullWidth 
                        name="password" 
                        label="Mot de passe" 
                        type="password" 
                        id="password" 
                        value="value"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField 
                        required 
                        fullWidth 
                        name="password" 
                        label="Confirmez votre mot de passe" 
                        type="password" 
                        id="password-" 
                        value="value"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField 
                        fullWidth 
                        name="address" 
                        label="Adresse" 
                        id="address" 
                        value="value"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField 
                        fullWidth 
                        name="codepostal" 
                        label="Code postal" 
                        id="codepostal" 
                        value="value"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField 
                        fullWidth 
                        name="city" 
                        label="Ville" 
                        id="city" 
                        value="value"
                    />
                </Grid>
            </Grid>
            <Grid>
                <Button 
                    type="submit" 
                    variant="contained" 
                    sx={{ mt: 5 }}
                >
                    Valider les modifications
                </Button>
            </Grid>
        </Box>
    )
}