import * as React from "react";
import { grey } from "@mui/material/colors";
import { Box, Grid, Container, Avatar, Typography, Divider, Card, TextField, Button, IconButton } from "@mui/material";
import "mapbox-gl/dist/mapbox-gl.css";
import { useState } from "react";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import DeleteIcon from "@mui/icons-material/Delete";

const type_annonce = [
    { value: '1', label: 'Vente', },
    { value: '2', label: 'Location', },
    { value: '3', label: 'AirBNB', }
];
const type_bien = [
    { value: '1', label: 'Maison', },
    { value: '2', label: 'Appartement', },
    { value: '3', label: 'Villa', }
];
const meuble = [
    { value: '1', label: 'Meublé', },
    { value: '2', label: 'Non meublé', }
];
const charge = [
    { value: '1', label: 'Oui', },
    { value: '2', label: 'Non', }
];
const jardin = [
    { value: '1', label: 'Oui', },
    { value: '2', label: 'Non', }
];
function Add_Annonces(): JSX.Element {

    const handleDelete = (index: number) => {
        setImages(prevImages => Array.from(prevImages).filter((_, i) => i !== index));
    };

    const error_message = 'Entrez un nombre';

    const useValue = (selectName: string) => {
        const [selectedValue, setSelectedValue] = useState("");
        return { [selectName]: selectedValue, setSelectedValue: setSelectedValue };
    };

    const [errorSurface, setErrorSurface] = useState("");
    const [errorRoom, setErrorRoom] = useState("");
    const [errorPiece, setErrorPiece] = useState("");
    const [errorPerson, setErrorPerson] = useState("");
    const [errorBathroom, setErrorBathroom] = useState("");
    const [errorWc, setErrorWc] = useState("");
    const [errorDpe, setErrorDpe] = useState("");
    const [errorGes, setErrorGes] = useState("");
    const [errorPrix, setErrorPrix] = useState("");
    const [errorFrais, setErrorFrais] = useState("");
    const [errorCharges, setErrorCharges] = useState("");

    const [selectedValueTypeannonce, setSelectedValueTypeannonce] = useState("1");
    const [images, setImages] = React.useState<FileList | File[]>([]);
    const [selectedValueTypebien, setSelectedValueTypebien] = useState("1");
    const [selectedValueMeuble, setSelectedValueMeuble] = useState("1");
    const surfaceValue = useValue("surface");
    const roomValue = useValue("room");
    const pieceValue = useValue("piece");
    const personValue = useValue("person");
    const [selectedValueGarden, setSelectedValueGarden] = useState("1");
    const bathroomValue = useValue("bathroom");
    const wcValue = useValue("wc");
    const dpeValue = useValue("dpe");
    const gesValue = useValue("ges");
    const prixValue = useValue("prix");
    const fraisValue = useValue("frais");
    const chargesValue = useValue("charges");
    const [selectedValueChargescomp, setSelectedValueChargescomp] = useState("1");

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, type: string) => {
        const value = event.target.value;

        if(type === 'image') {
            if (event.target instanceof HTMLInputElement) {
                const selectedFiles = Array.from(event.target.files);
                setImages(selectedFiles);
            }
        }

        if(type === 'typeannonce') {
            setSelectedValueTypeannonce(event.target.value);
        }

        if(type === 'typebien') {
            setSelectedValueTypebien(event.target.value);
        }
        if(type === 'meuble') {
            setSelectedValueMeuble(event.target.value);
        }
        if(type === 'garden') {
            setSelectedValueGarden(event.target.value);
        }
        if(type === 'chargescomp') {
            setSelectedValueChargescomp(event.target.value);
        }

        if (!/^[0-9]*$/.test(value)) {
            if(type === 'surface'){ setErrorSurface(error_message); }
            if(type === 'room'){ setErrorRoom(error_message); }
            if(type === 'piece'){ setErrorPiece(error_message); }
            if(type === 'person'){ setErrorPerson(error_message); }
            if(type === 'bathroom'){ setErrorBathroom(error_message); }
            if(type === 'wc'){ setErrorWc(error_message); }
            if(type === 'dpe'){ setErrorDpe(error_message); }
            if(type === 'ges'){ setErrorGes(error_message); }
            if(type === 'prix'){ setErrorPrix(error_message); }
            if(type === 'frais'){ setErrorFrais(error_message); }
            if(type === 'charges'){ setErrorCharges(error_message); }
        }
        else {
            if(type === 'surface'){ setErrorSurface(""); surfaceValue.setSelectedValue(value); }
            if(type === 'room'){ setErrorRoom(""); roomValue.setSelectedValue(value); }
            if(type === 'piece'){ setErrorPiece(""); pieceValue.setSelectedValue(value); }
            if(type === 'person'){ setErrorPerson(""); personValue.setSelectedValue(value); }
            if(type === 'bathroom'){ setErrorBathroom(""); bathroomValue.setSelectedValue(value); }
            if(type === 'wc'){ setErrorWc(""); wcValue.setSelectedValue(value); }
            if(type === 'dpe'){ setErrorDpe(""); dpeValue.setSelectedValue(value); }
            if(type === 'ges'){ setErrorGes(""); gesValue.setSelectedValue(value); }
            if(type === 'prix'){ setErrorPrix(""); prixValue.setSelectedValue(value); }
            if(type === 'frais'){ setErrorFrais(""); fraisValue.setSelectedValue(value); }
            if(type === 'charges'){ setErrorCharges(""); chargesValue.setSelectedValue(value); }
        }
    };
    return (
        <Box sx={{ mt: 6 }} component="form" noValidate>
            <Container maxWidth="xl" sx={{ overflowY: "scroll", height: "80vh" }}>
                <Grid container>
                    <Grid item xs={7}>
                        <Grid xs={12}>
                            <Grid xs={12}>
                                <Typography variant="caption">Type de l'annonce</Typography>
                            </Grid>
                            <Grid xs={12}>
                                <TextField
                                    id="typeannonce"
                                    required
                                    onChange={(event) => handleChange(event, 'typeannonce')}
                                    select
                                    value={selectedValueTypeannonce}
                                    sx={{ backgroundColor: 'white' }}
                                    SelectProps={{
                                        native: true,
                                    }}
                                    variant="filled"
                                >
                                    {type_annonce.map((option) => (
                                        <option key={option.value} value={option.value}>
                                            {option.label}
                                        </option>
                                    ))}
                                </TextField>
                            </Grid>
                        </Grid>
                        <Grid xs={12} sx={{ mt: 3 }}>
                            <input
                                accept="image/*"
                                style={{ display: 'none' }}
                                id="image"
                                multiple
                                type="file"
                                onChange={(event) => handleChange(event, 'image')}
                            />
                            <label htmlFor="image">
                                <Button variant="contained" component="span"
                                        sx={{ backgroundColor: '#694ed4 !important;' }}
                                >
                                    Ajouter des photos <AddAPhotoIcon />
                                </Button>
                            </label>
                            <Grid container spacing={2}>
                                {Array.from(images).map((image, index) => (
                                    <Grid item xs={6} sm={4} key={index}>
                                        <img src={URL.createObjectURL(image)}
                                             style={{
                                                 width: '100%',
                                                 height: 'auto',
                                                 maxWidth: '200px',
                                                 maxHeight: '200px',
                                                 margin: 1
                                             }}
                                             alt=""
                                        />
                                        <IconButton onClick={() => handleDelete(index)} sx={{ backgroundColor: 'transparent !important' }}>
                                            <DeleteIcon color="secondary"/>
                                        </IconButton>
                                    </Grid>
                                ))}
                            </Grid>
                            {images.length === 0 && <Typography align="center" variant="subtitle1" color="textSecondary" sx={{ mt: 2 }}>Aucune image sélectionnée</Typography>}
                        </Grid>
                        <Box display="flex" flexDirection="column">
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
                                <Grid item xs={2} sm={4} md={4}>
                                    <Box display="flex" flexDirection="row" alignItems="center">
                                        <Avatar
                                            sx={{ width: 30, height: 30, bgcolor: grey[400] }}
                                        >

                                        </Avatar>
                                        <Box
                                            display="flex"
                                            flexDirection="column"
                                            alignItems="start"
                                            ml="5px"
                                        >
                                            <Typography variant="caption">Type de bien</Typography>
                                            <TextField
                                                id="typebien"
                                                required
                                                onChange={(event) => handleChange(event, 'typebien')}
                                                select
                                                value={selectedValueTypebien}
                                                sx={{ backgroundColor: 'white' }}
                                                SelectProps={{
                                                    native: true,
                                                }}
                                                variant="filled"
                                            >
                                                {type_bien.map((option) => (
                                                    <option key={option.value} value={option.value}>
                                                        {option.label}
                                                    </option>
                                                ))}
                                            </TextField>
                                        </Box>
                                    </Box>
                                </Grid>
                                <Grid item xs={2} sm={4} md={4}>
                                    <Box display="flex" flexDirection="row" alignItems="center">
                                        <Avatar
                                            sx={{ width: 30, height: 30, bgcolor: grey[400] }}
                                        >

                                        </Avatar>
                                        <Box
                                            display="flex"
                                            flexDirection="column"
                                            alignItems="start"
                                            ml="5px"
                                        >
                                            <Typography variant="caption">Meublé / non Meublé</Typography>
                                            <TextField
                                                id="meuble"
                                                required
                                                onChange={(event) => handleChange(event, 'meuble')}
                                                select
                                                value={selectedValueMeuble}
                                                sx={{ backgroundColor: 'white' }}
                                                SelectProps={{
                                                    native: true,
                                                }}
                                                variant="filled"
                                            >
                                                {meuble.map((option) => (
                                                    <option key={option.value} value={option.value}>
                                                        {option.label}
                                                    </option>
                                                ))}
                                            </TextField>
                                        </Box>
                                    </Box>
                                </Grid>
                                <Grid item xs={2} sm={4} md={4}>
                                    <Box display="flex" flexDirection="row" alignItems="center">
                                        <Avatar
                                            sx={{ width: 30, height: 30, bgcolor: grey[400] }}
                                        >

                                        </Avatar>
                                        <Box
                                            display="flex"
                                            flexDirection="column"
                                            alignItems="start"
                                            ml="5px"
                                        >
                                            <Typography variant="caption">Surface m²</Typography>
                                            <Typography>
                                                <TextField
                                                    id="surface"
                                                    required
                                                    onChange={(event) => handleChange(event, 'surface')}
                                                    type="text"
                                                    value={surfaceValue.surface}
                                                    sx={{ backgroundColor: 'white', width: '10vw' }}
                                                    variant="filled"
                                                    error={errorSurface !== ''}
                                                    helperText={errorSurface}
                                                />
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Grid>
                                <Grid item xs={2} sm={4} md={4}>
                                    <Box display="flex" flexDirection="row" alignItems="center">
                                        <Avatar
                                            sx={{ width: 30, height: 30, bgcolor: grey[400] }}
                                        >

                                        </Avatar>
                                        <Box
                                            display="flex"
                                            flexDirection="column"
                                            alignItems="start"
                                            ml="5px"
                                        >
                                            <Typography variant="caption">Chambre(s)</Typography>
                                            <Typography>
                                                <TextField
                                                    id="room"
                                                    required
                                                    onChange={(event) => handleChange(event, 'room')}
                                                    type="text"
                                                    value={roomValue.room}
                                                    sx={{ backgroundColor: 'white', width: '10vw' }}
                                                    variant="filled"
                                                    error={errorRoom !== ''}
                                                    helperText={errorRoom}
                                                />
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Grid>
                                {(selectedValueTypeannonce === "1" || selectedValueTypeannonce === "2") && (
                                    <Grid item xs={2} sm={4} md={4}>
                                        <Box display="flex" flexDirection="row" alignItems="center">
                                            <Avatar
                                                sx={{ width: 30, height: 30, bgcolor: grey[400] }}
                                            >
                                            </Avatar>
                                            <Box
                                                display="flex"
                                                flexDirection="column"
                                                alignItems="start"
                                                ml="5px"
                                            >
                                                <Typography variant="caption">Pièce(s)</Typography>
                                                <Typography>
                                                    <TextField
                                                        id="piece"
                                                        required
                                                        onChange={(event) => handleChange(event, 'piece')}
                                                        type="text"
                                                        value={pieceValue.price}
                                                        sx={{ backgroundColor: 'white', width: '10vw' }}
                                                        variant="filled"
                                                        error={errorPiece !== ''}
                                                        helperText={errorPiece}
                                                    />
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </Grid>
                                )}
                                {selectedValueTypeannonce === "3" && (
                                    <Grid item xs={2} sm={4} md={4}>
                                        <Box display="flex" flexDirection="row" alignItems="center">
                                            <Avatar
                                                sx={{ width: 30, height: 30, bgcolor: grey[400] }}
                                            >

                                            </Avatar>
                                            <Box
                                                display="flex"
                                                flexDirection="column"
                                                alignItems="start"
                                                ml="5px"
                                            >
                                                <Typography variant="caption">Personne(s)</Typography>
                                                <Typography>
                                                    <TextField
                                                        id="person"
                                                        required
                                                        onChange={(event) => handleChange(event, 'person')}
                                                        type="text"
                                                        value={personValue.person}
                                                        sx={{ backgroundColor: 'white', width: '10vw' }}
                                                        variant="filled"
                                                        error={errorPerson !== ''}
                                                        helperText={errorPerson}
                                                    />
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </Grid>
                                )}
                                <Grid item xs={2} sm={4} md={4}>
                                    <Box display="flex" flexDirection="row" alignItems="center">
                                        <Avatar
                                            sx={{ width: 30, height: 30, bgcolor: grey[400] }}
                                        >

                                        </Avatar>
                                        <Box
                                            display="flex"
                                            flexDirection="column"
                                            alignItems="start"
                                            ml="5px"
                                        >
                                            <Typography variant="caption">Jardin</Typography>
                                            <Typography>
                                                <TextField
                                                    id="garden"
                                                    required
                                                    onChange={(event) => handleChange(event, 'garden')}
                                                    select
                                                    value={selectedValueGarden}
                                                    sx={{ backgroundColor: 'white' }}
                                                    SelectProps={{
                                                        native: true,
                                                    }}
                                                    variant="filled"
                                                >
                                                    {jardin.map((option) => (
                                                        <option key={option.value} value={option.value}>
                                                            {option.label}
                                                        </option>
                                                    ))}
                                                </TextField>
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Grid>
                                {selectedValueTypeannonce === "3" && (
                                    <Grid item xs={2} sm={4} md={4}>
                                        <Box display="flex" flexDirection="row" alignItems="center">
                                            <Avatar
                                                sx={{width: 30, height: 30, bgcolor: grey[400]}}
                                            >

                                            </Avatar>
                                            <Box
                                                display="flex"
                                                flexDirection="column"
                                                alignItems="start"
                                                ml="5px"
                                            >
                                                <Typography variant="caption">Salle(s) de bain</Typography>
                                                <Typography>
                                                    <TextField
                                                        id="bathroom"
                                                        required
                                                        onChange={(event) => handleChange(event, 'bathroom')}
                                                        type="text"
                                                        value={bathroomValue.bathroom}
                                                        sx={{backgroundColor: 'white', width: '10vw'}}
                                                        variant="filled"
                                                        error={errorBathroom !== ''}
                                                        helperText={errorBathroom}/>
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </Grid>
                                )}
                                {selectedValueTypeannonce === "3" && (
                                    <Grid item xs={2} sm={4} md={4}>
                                        <Box display="flex" flexDirection="row" alignItems="center">
                                            <Avatar
                                                sx={{width: 30, height: 30, bgcolor: grey[400]}}
                                            >

                                            </Avatar>
                                            <Box
                                                display="flex"
                                                flexDirection="column"
                                                alignItems="start"
                                                ml="5px"
                                            >
                                                <Typography variant="caption">Toilette(s)</Typography>
                                                <Typography>
                                                    <TextField
                                                        id="wc"
                                                        required
                                                        onChange={(event) => handleChange(event, 'wc')}
                                                        type="text"
                                                        value={wcValue.wc}
                                                        sx={{backgroundColor: 'white', width: '10vw'}}
                                                        variant="filled"
                                                        error={errorWc !== ''}
                                                        helperText={errorWc}/>
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </Grid>
                                )}
                                {(selectedValueTypeannonce === "1" || selectedValueTypeannonce === "2") && (
                                    <Grid item xs={2} sm={4} md={4}>
                                        <Box display="flex" flexDirection="row" alignItems="center">
                                            <Avatar
                                                sx={{ width: 30, height: 30, bgcolor: grey[400] }}
                                            >

                                            </Avatar>
                                            <Box
                                                display="flex"
                                                flexDirection="column"
                                                alignItems="start"
                                                ml="5px"
                                            >
                                                <Typography variant="caption">Charges comprises</Typography>
                                                <TextField
                                                    id="chargescomp"
                                                    required
                                                    onChange={(event) => handleChange(event, 'chargescomp')}
                                                    select
                                                    value={selectedValueChargescomp}
                                                    sx={{ backgroundColor: 'white' }}
                                                    SelectProps={{
                                                        native: true,
                                                    }}
                                                    variant="filled"
                                                >
                                                    {charge.map((option) => (
                                                        <option key={option.value} value={option.value}>
                                                            {option.label}
                                                        </option>
                                                    ))}
                                                </TextField>
                                            </Box>
                                        </Box>
                                    </Grid>
                                )}
                            </Grid>
                            {selectedValueTypeannonce === "3" && (
                                <Divider sx={{ my: 5 }}></Divider>
                            )}
                            {selectedValueTypeannonce === "3" && (
                                <Typography variant="h6" sx={{ fontSize: "17px", mb: 5 }}>
                                    Ce que compose ce logement
                                </Typography>
                            )}
                            {selectedValueTypeannonce === "3" && (
                                <TextField
                                    id="details"
                                    required
                                    label="Détails de votre annonce"
                                    multiline
                                    fullWidth
                                    rows={5}
                                    variant="outlined"
                                    sx={{ backgroundColor: 'white' }}
                                />
                            )}
                        </Box>
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
                                <TextField
                                    id="titre"
                                    required
                                    label="Titre de l'annonce"
                                    fullWidth
                                    variant="outlined"
                                    sx={{ backgroundColor: 'white' }}
                                />
                            </Box>
                            <Box sx={{ width: "100%" }}>
                                <TextField
                                    id="adresse"
                                    required
                                    label="Adresse"
                                    fullWidth
                                    variant="outlined"
                                    sx={{ backgroundColor: 'white' }}
                                />
                            </Box>
                            <TextField
                                id="details"
                                required
                                label="Décrivez l'équipement présent dans votre logement"
                                multiline
                                fullWidth
                                rows={8}
                                variant="outlined"
                                sx={{ backgroundColor: 'white' }}
                            />
                            <Grid container xs={12} sm={12} sx={{ mb: 5, mt: 5, textAlign: 'center' }}>
                                <Grid xs={6}>
                                    <Typography variant="caption">DPE</Typography>
                                    <Typography>
                                        <TextField
                                            id="dep"
                                            onChange={(event) => handleChange(event, 'dpe')}
                                            type="text"
                                            value={dpeValue.dpe}
                                            sx={{ backgroundColor: 'white', width: '10vw', mb: 2 }}
                                            variant="filled"
                                            error={errorDpe !== ''}
                                            helperText={errorDpe}
                                        />
                                    </Typography>
                                </Grid>
                                <Grid xs={6}>
                                    <Typography variant="caption">GES</Typography>
                                    <Typography>
                                        <TextField
                                            id="ges"
                                            onChange={(event) => handleChange(event, 'ges')}
                                            type="text"
                                            value={gesValue.ges}
                                            sx={{ backgroundColor: 'white', width: '10vw' }}
                                            variant="filled"
                                            error={errorGes !== ''}
                                            helperText={errorGes}
                                        />
                                    </Typography>
                                </Grid>
                                <p>
                                    Montant estimé des dépenses annuelles d’énergie pour un usage
                                    standard entre NC et NC par an. Prix moyen des énergies indexé au
                                    NC (abonnement compris).
                                </p>
                            </Grid>
                        </section>
                        <Grid container spacing={2} xs={12} sm={12} sx={{ pt: 2 }}>
                            <Card sx={{
                                pt: 2, my: 'auto', width: '80%', marginLeft: '15%',
                                backgroundColor: 'rgb(240,237,255)'
                            }}
                            >
                                <Typography variant="caption" sx={{ mb: 5, mt: 1 }}>Prix / nuit</Typography>
                                <Typography>
                                    <TextField
                                        id="prix"
                                        required
                                        onChange={(event) => handleChange(event, 'prix')}
                                        type="text"
                                        value={prixValue.prix}
                                        sx={{ backgroundColor: 'white', width: '10vw', mb: 5 }}
                                        variant="filled"
                                        error={errorPrix !== ''}
                                        helperText={errorPrix}
                                    />
                                </Typography>
                                {selectedValueTypeannonce === "3" && (
                                <Grid container xs={12} sm={12} sx={{ mb: 5 }}>
                                    <Grid xs={6}>
                                        <Typography variant="caption">Frais de services</Typography>
                                        <Typography>
                                            <TextField
                                                id="frais"
                                                required
                                                onChange={(event) => handleChange(event, 'frais')}
                                                type="text"
                                                value={fraisValue.frais}
                                                sx={{ backgroundColor: 'white', width: '10vw' }}
                                                variant="filled"
                                                error={errorFrais !== ''}
                                                helperText={errorFrais}
                                            />
                                        </Typography>
                                    </Grid>
                                    <Grid xs={6}>
                                        <Typography variant="caption">Charges</Typography>
                                        <Typography>
                                            <TextField
                                                id="charges"
                                                required
                                                onChange={(event) => handleChange(event, 'charges')}
                                                type="text"
                                                value={chargesValue.charges}
                                                sx={{ backgroundColor: 'white', width: '10vw' }}
                                                variant="filled"
                                                error={errorCharges !== ''}
                                                helperText={errorCharges}
                                            />
                                        </Typography>
                                    </Grid>
                                </Grid>
                                )}
                            </Card>
                        </Grid>
                        <Grid xs={6} sx={{ mt: 5, mx: 'auto' }}>
                            {(selectedValueTypeannonce === "1" || selectedValueTypeannonce === "2") && (
                                <Button
                                    type="submit"
                                    variant="contained"
                                    sx={{ backgroundColor: '#694ed4 !important;' }}
                                    href="/details"
                                >
                                    AJOUTER L'ANNONCE
                                </Button>
                            )}
                            {selectedValueTypeannonce === "3" && (
                                <Button
                                    type="submit"
                                    variant="contained"
                                    sx={{ backgroundColor: '#694ed4 !important;' }}
                                    href="/airbnb"
                                >
                                    AJOUTER L'ANNONCE
                                </Button>
                            )}
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default Add_Annonces;
