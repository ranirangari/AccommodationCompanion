import { React } from "react";
import { Button, Grid, Typography } from "@mui/material";
import { SocialIcon } from "react-social-icons";

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
          <Typography className="pb-5" variant="h6">
            Cities{" "}
          </Typography>
          <div>
            <Button className="pb-5" variant="h6" gutterButton>
              {" "}
              Mumbai
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterButton>
              {" "}
              Pune
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterButton>
              {" "}
              Nagpur
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            Homes{" "}
          </Typography>
          <div>
            <Button className="pb-5" variant="h6" gutterButton>
              {" "}
              House
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterButton>
              {" "}
              Apartment
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterButton>
              {" "}
              Guest House
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            About{" "}
          </Typography>
          <div>
            <Button className="pb-5" variant="h6" gutterButton>
              {" "}
              Privacy
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterButton>
              {" "}
              Safety
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterButton>
              {" "}
              Terms & Conditions
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            Facilities{" "}
          </Typography>
          <div>
            <Button className="pb-5" variant="h6" gutterButton>
              {" "}
              Parking
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterButton>
              {" "}
              Wifi
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterButton>
              {" "}
              Garden
            </Button>
          </div>
        </Grid>
        <Grid></Grid>

        <Grid className="pt-20" item xs={12}>
          <Typography variant="body2" component="p" align="center">
            &copy; 2023 Accommodation Companion - Rani Rangari.
          </Typography>

          <div className="flex p-2 justify-center px-2 space-x-2 rounded-xl">
            <SocialIcon url="https://github.com/ranirangari" />
            <SocialIcon url="https://www.linkedin.com/in/rani-rangari/" />

            <SocialIcon url="https://www.hackerrank.com/ranirangari" />
            <SocialIcon url="https://auth.geeksforgeeks.org/user/ranirangari10/" />
          </div>
          <Typography variant="body2" component="p" align="center">
            All rights reserved.
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
