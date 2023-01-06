import { Button, Grid } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import PageNotFound from "../../Style/Img/NotFound.png";

function NotFoundPage(): JSX.Element {
  const navigate = useNavigate();

  const handleRedirect = () => {
    const next = "/";
    navigate(next);
  };

  return (
    <div className="not-found">
      <Grid
        container
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        sx={{ height: "95vh" }}
      >
        <img src={PageNotFound} width="300px" alt="Not Found 404 img" />
        <div>
          <Button
            color="primary"
            size="medium"
            type="button"
            variant="contained"
            onClick={handleRedirect}
          >
            Return to Home
          </Button>
        </div>
      </Grid>
    </div>
  );
}
export default NotFoundPage;
