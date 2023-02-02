import * as React from "react";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Paper,
  Box,
  Grid,
  Typography,
  FormControl,
  InputLabel,
  IconButton,
  OutlinedInput,
  InputAdornment,
  FormHelperText,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import background from "../../Style/Img/house.jpeg";
import LoginData from "../../Types/Login.types";
import AuthService from "../../Services/Auth.services";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
export default function Login(): JSX.Element {
  const [user, setUser] = React.useState(undefined);

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required("Email est requis")
      .email("Email n'est pas valide"),
    password: Yup.string().required("Mot de passe requis "),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>({
    resolver: yupResolver(validationSchema),
    criteriaMode: "all",
  });
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const onSubmit = (data) => {
    console.log(data);
    AuthService.login(data)
      .then((response: any) => {
        setUser(response.data.User.firstname);
        if (response.data.User) {
          localStorage.setItem("user", JSON.stringify(response.data.User));
        }
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  return (
    <Grid
      container
      component="main"
      sx={{ overflowY: "scroll", height: "100vh" }}
    >
      <CssBaseline />
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: `url(${background})`,
          backgroundRepeat: "no-repeat",
          backgroundColor: (t) =>
            t.palette.mode === "light"
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Connexion
          </Typography>
          {user ? (
            <Typography component="h1" variant="h5">
              Hi {user} 👋🙂
            </Typography>
          ) : (
            <Typography component="h1" variant="h5"></Typography>
          )}
          <form style={{ width: "100%" }} onSubmit={handleSubmit(onSubmit)}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Adresse Email"
              autoComplete="email"
              autoFocus
              {...register("email")}
              error={errors.email ? true : false}
              helperText={errors.email?.message}
            />

            <FormControl fullWidth variant="outlined" margin="normal" required>
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

            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Rester connecté"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Connexion
            </Button>
            <Grid container sx={{ mt: 2 }}>
              <Grid item>
                <Link href="/nouveau_mot_de_passe" variant="body2">
                  Vous avez oublié votre mot de passe ?
                </Link>
              </Grid>
            </Grid>
            <Grid container sx={{ mt: 2 }}>
              <Grid item>
                <Link href="/inscription" variant="body2">
                  {"Vous n'avez pas de compte ? Inscrivez-vous !"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Grid>
    </Grid>
  );
}
