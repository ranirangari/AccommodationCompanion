import { React } from "react";
import { Button, Grid, Typography } from "@mui/material";
const Footer = () => {
  return (
    <div>
      <Grid
        className="bg-black text-white text-center mt-10"
        container
        sx={{
          bgcolor: "black",
          color: "white",
          py: 3,
        }}
      >
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-2" variant="h6">
            Cities{" "}
          </Typography>
          <div>
            <Button className="pb-2" variant="h6" gutterButton>
              {" "}
              Mumbai
            </Button>
          </div>
          <div>
            <Button className="pb-2" variant="h6" gutterButton>
              {" "}
              Pune
            </Button>
          </div>
          <div>
            <Button className="pb-2" variant="h6" gutterButton>
              {" "}
              Nagpur
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-2" variant="h6">
            Homes{" "}
          </Typography>
          <div>
            <Button className="pb-2" variant="h6" gutterButton>
              {" "}
              House
            </Button>
          </div>
          <div>
            <Button className="pb-2" variant="h6" gutterButton>
              {" "}
              Apartment
            </Button>
          </div>
          <div>
            <Button className="pb-2" variant="h6" gutterButton>
              {" "}
              Guest House
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-2" variant="h6">
            About{" "}
          </Typography>
          <div>
            <Button className="pb-2" variant="h6" gutterButton>
              {" "}
              Privacy
            </Button>
          </div>
          <div>
            <Button className="pb-2" variant="h6" gutterButton>
              {" "}
              Safety
            </Button>
          </div>
          <div>
            <Button className="pb-2" variant="h6" gutterButton>
              {" "}
              Terms & Conditions
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-2" variant="h6">
            Facilities{" "}
          </Typography>
          <div>
            <Button className="pb-2" variant="h6" gutterButton>
              {" "}
              Parking
            </Button>
          </div>
          <div>
            <Button className="pb-2" variant="h6" gutterButton>
              {" "}
              Wifi
            </Button>
          </div>
          <div>
            <Button className="pb-2" variant="h6" gutterButton>
              {" "}
              Garden
            </Button>
          </div>
        </Grid>

        <Grid className="pt-18" item xs={12}>
          <Typography variant="body2" component="p" align="center">
            &copy; 2023 Accommodation Companion - Rani Rangari.
          </Typography>
          <Typography variant="body2" component="p" align="center">
            All rights reserved.
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
