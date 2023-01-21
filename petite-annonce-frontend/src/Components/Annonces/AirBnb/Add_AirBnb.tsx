import * as React from "react";
import { grey } from "@mui/material/colors";
import {
    Box,
    Grid,
    Container,
    Avatar,
    Typography,
    Checkbox,
    Divider,
    Icon, Card, TextField, Button, Select,
} from "@mui/material";
import "mapbox-gl/dist/mapbox-gl.css";
import {SetStateAction, useState} from "react";

function Add_Annonces(): JSX.Element {

    const error_message = 'Les caractères autorisés sont uniquement les chiffres';

    /*interface Value {
        [key: string]: string;
        setSelectedValue: React.Dispatch<SetStateAction<string>>;
    }*/

    const useValue = (selectName: string) => {
        const [selectedValue, setSelectedValue] = useState("");
        return { [selectName]: selectedValue, setSelectedValue: setSelectedValue };
    };

    const [errorFrais, setErrorFrais] = useState("");
    const [errorCharges, setErrorCharges] = useState("");

    const fraisValue = useValue("frais");
    const chargesValue = useValue("charges");

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, type: string) => {
        const value = event.target.value;
        if (!/^[0-9]*$/.test(value)) {
            if(type === 'frais'){
                setErrorFrais("Enter a number");
            }else{
                setErrorCharges("Enter a number");
            }
        } else {
            if(type === 'frais'){
                setErrorFrais("");
                fraisValue.setSelectedValue(value);
            }else{
                setErrorCharges("");
                chargesValue.setSelectedValue(value);
            }
        }
    };

    return (
                                <Grid container xs={12} sm={12} sx={{ mb: 5, mt: 5 }}>
                                    <Grid xs={6}>
                                        <Typography variant="caption">Frais de services</Typography>
                                        <Typography>
                                            <TextField
                                                id="frais"
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
    );
}

export default Add_Annonces;
