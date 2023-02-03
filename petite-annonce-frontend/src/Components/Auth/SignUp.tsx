import * as React from "react";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Link,
  Grid,
  Box,
  MenuItem,
  FormControl,
  Typography,
  Container,
  IconButton,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  FormHelperText,
} from "@mui/material";
import Alert, { AlertColor } from "@mui/material/Alert";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import DeleteIcon from "@mui/icons-material/Delete";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import UserData from "../../Types/User.types";
import AuthService from "../../Services/Auth.services";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
export default function SignUp() {
  const [message, setMessage] = React.useState({ text: "", severity: "" });
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();
  const [validated, setvalidated] = React.useState(false);
  const [cities, setcities] = React.useState([{ nomCommune: "" }]);
  const [city, setCity] = React.useState("");
  const [confPassword, setConfPassword] = React.useState("");

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const numberRegExp = /^[0-9]+$/;

  const validationSchema = Yup.object().shape({
    lastname: Yup.string().required("Prénom est requis"),
    firstname: Yup.string().required("Nom est requis"),
    email: Yup.string()
      .required("Email est requis")
      .email("Email n'est pas valide"),
    number: Yup.string()
      .required("Téléphone est requis")
      .matches(phoneRegExp, "Entrer un numéro valide")
      .min(9, "Entrer un numéro valide")
      .max(10, "Entrer un numéro valide"),
    password: Yup.string()
      .required("Mot de passe est requis")
      .min(6, "Doit contenir au moins 6 caractères")
      .max(40, "Doit contenir au plus 40 caractères"),
    address: Yup.string().required("Adresse est requise"),
    code_postal: Yup.string()
      .required("Code postale est requis")
      .matches(numberRegExp, "Entrer un code postale valide")
      .min(5, "Entrer un code postale valide")
      .max(5, "Entrer un code postale valide"),
    city: Yup.string().required("Ville est requise"),
  });

  const {
    register,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm<UserData>({
    resolver: yupResolver(validationSchema),
    criteriaMode: "all",
  });

  const handleCity = (event: SelectChangeEvent) => {
    console.log(event.target.value);
    setCity(event.target.value as string);
  };

  const onchangeConfPassword = (e: any) => {
    setConfPassword(e.target.value);
  };

  const [images, setImages] = React.useState([]);

  const handleClick = () => {
    setvalidated(true);
  };

  const handleChange = (e: { target: { files: any } }) => {
    const selectedFiles = e.target.files;
    setImages(selectedFiles);
  };

  const handleDelete = (index: number) => {
    setImages((prevImages) =>
      Array.from(prevImages).filter((_, i) => i !== index)
    );
  };

  const handleCodePostal = (code: number | FormDataEntryValue | null) => {
    AuthService.getCityByCode(code)
      .then((response: any) => {
        if (response.data) {
          setcities(response.data);
        } else {
          setcities([]);
        }
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  const onSubmit = (data) => {
    AuthService.signUp(data)
      .then((response: any) => {
        setMessage({ text: response.data.message, severity: "success" });
        navigate("/connexion");
      })
      .catch((e: Error) => {
        console.log(e);
        setMessage({
          text: e.message,
          severity: "error",
        });

        setOpen(true);
        setInterval(function () {
          setOpen(false);
        }, 4000);
      });
  };

  return (
    <Container
      component="main"
      maxWidth="md"
      sx={{
        py: 5,
        overflowY: "scroll",
        height: "100vh",
        maxWidth: "100vw !important",
      }}
    >
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mb: 5,
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Inscription
        </Typography>

        <form style={{ marginTop: "10px" }} onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="family-name"
                required
                fullWidth
                id="firstName"
                label="Nom"
                autoFocus
                {...register("firstname")}
                error={errors.firstname ? true : false}
                helperText={errors.firstname?.message}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="given-name"
                required
                fullWidth
                id="lastName"
                label="Prénom"
                {...register("lastname")}
                error={errors.lastname ? true : false}
                helperText={errors.lastname?.message}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="email"
                label="Adresse Email"
                autoComplete="email"
                {...register("email")}
                error={errors.email ? true : false}
                helperText={errors.email?.message}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                type="numeric"
                inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">+33</InputAdornment>
                  ),
                }}
                fullWidth
                label="Numéro de téléphone"
                id="phone"
                {...register("number")}
                error={errors.number ? true : false}
                helperText={errors.number?.message}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl
                fullWidth
                variant="outlined"
                margin="normal"
                required
              >
                <InputLabel
                  error={errors.password ? true : false}
                  htmlFor="outlined-adornment-password"
                >
                  Mot de passe
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={showPassword ? "text" : "password"}
                  {...register("password")}
                  error={errors.password ? true : false}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? (
                          <VisibilityOff
                            style={{
                              backgroundColor: "transparent !important",
                            }}
                          />
                        ) : (
                          <Visibility
                            style={{
                              backgroundColor: "transparent !important",
                            }}
                          />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                />
                <FormHelperText
                  error={errors.password ? true : false}
                  id="component-error-text"
                >
                  {errors.password?.message}
                </FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl
                fullWidth
                variant="outlined"
                margin="normal"
                required
              >
                <InputLabel
                  error={errors.password ? true : false}
                  htmlFor="outlined-adornment-password"
                >
                  Confirmez mot de passe
                </InputLabel>
                <OutlinedInput
                  required
                  id="outlined-adornment-password"
                  type={showPassword ? "text" : "password"}
                  value={confPassword}
                  onChange={onchangeConfPassword}
                  error={getValues("password") !== confPassword && validated}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? (
                          <VisibilityOff
                            style={{
                              backgroundColor: "transparent !important",
                            }}
                          />
                        ) : (
                          <Visibility
                            style={{
                              backgroundColor: "transparent !important",
                            }}
                          />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                />
                {getValues("password") !== confPassword && validated ? (
                  <FormHelperText error id="component-error-text">
                    Le mot de passe doit correspondre
                  </FormHelperText>
                ) : (
                  ""
                )}
              </FormControl>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Grid item xs={12} sm={12} sx={{ ml: 2, mt: 3 }}>
                  <TextField
                    required
                    fullWidth
                    label="Adresse"
                    id="address"
                    autoComplete="address"
                    {...register("address")}
                    error={errors.address ? true : false}
                    helperText={errors.address?.message}
                  />
                </Grid>
                <Grid item xs={12} sm={12} sx={{ ml: 2, mt: 3 }}>
                  <TextField
                    required
                    fullWidth
                    label="Code postal"
                    id="codepostal"
                    autoComplete="postal-code"
                    type="numeric"
                    {...register("code_postal", {
                      onChange: () =>
                        handleCodePostal(getValues("code_postal")),
                    })}
                    error={errors.code_postal ? true : false}
                    helperText={errors.code_postal?.message}
                  />
                </Grid>
                <Grid item xs={12} sm={12} sx={{ ml: 2, mt: 3 }}>
                  <FormControl fullWidth required sx={{ textAlign: "start" }}>
                    <InputLabel id="demo-simple-select-label">Ville</InputLabel>
                    <Select
                      label="Ville"
                      id="city"
                      autoComplete="city"
                      {...register("city", {
                        onChange: (e) => {
                          handleCity(e);
                        },
                      })}
                      error={errors.city ? true : false}
                      value={city}
                    >
                      {Array.from(cities).map((item, index) => (
                        <MenuItem value={item.nomCommune} key={index}>
                          {item.nomCommune}
                        </MenuItem>
                      ))}
                    </Select>
                    {errors.city ? (
                      <FormHelperText error id="component-error-text">
                        {errors.city.message}
                      </FormHelperText>
                    ) : (
                      ""
                    )}
                  </FormControl>
                </Grid>
              </Grid>
              <Grid item xs={12} sm={6} sx={{ mt: 3 }}>
                <div>
                  <input
                    accept="image/*"
                    style={{ display: "none" }}
                    id="contained-button-file"
                    multiple={false}
                    type="file"
                    onChange={handleChange}
                  />
                  <label htmlFor="contained-button-file">
                    <Button
                      variant="contained"
                      component="span"
                      sx={{ backgroundColor: "#694ed4 !important;" }}
                    >
                      Ajouter des photos <AddAPhotoIcon />
                    </Button>
                  </label>
                  <Grid container spacing={2}>
                    {Array.from(images).map((image, index) => (
                      <Grid item xs={12} sm={12} key={index} sx={{ mt: 3 }}>
                        <img
                          src={URL.createObjectURL(image)}
                          style={{
                            width: "100%",
                            height: "auto",
                            maxWidth: "200px",
                            maxHeight: "200px",
                            margin: 1,
                          }}
                          alt={image}
                        />
                        <IconButton
                          onClick={() => handleDelete(index)}
                          sx={{ backgroundColor: "transparent !important" }}
                        >
                          <DeleteIcon color="secondary" />
                        </IconButton>
                      </Grid>
                    ))}
                  </Grid>
                  {images.length === 0 && (
                    <Typography
                      align="center"
                      variant="subtitle1"
                      color="textSecondary"
                      sx={{ mt: 2 }}
                    >
                      Aucune image sélectionnée
                    </Typography>
                  )}
                </div>
              </Grid>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={() => handleClick()}
              >
                Inscription
              </Button>
            </Grid>
            <Grid item xs={12} sm={6} sx={{ my: "auto" }}>
              <Link href="/connexion" variant="body2">
                Vous avez déjà un compte ? Connectez-vous !
              </Link>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Container>
  );
}
