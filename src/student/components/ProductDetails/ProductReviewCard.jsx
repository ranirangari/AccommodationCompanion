import React from "react";
import { Avatar } from "@mui/material";
import { Rating, Box, Typography, Grid } from "@mui/material";

const ProductReviewCard = () => {
  return (
    <div className="">
      <Grid container spacing={2} gap={3}>
        <Grid item xs={1}>
          <Box>
            <Avatar
              className="text-white"
              sx={{ width: 56, height: 56, bgcolor: "#9155FD" }}R
            //   alt={item.user.firstName}
              src=""
            >
              {/* {item.user.firstName[0].toUpperCase()} */}
            </Avatar>
          </Box>
        </Grid>
        <Grid item xs={9}>
          <div className="space-y-2">
            <div className="">
              <p className="font-semibold text-lg">Rani</p>
              <p className="opacity-70">April 5, 2023</p>
            </div>
            <div>
            

              <Rating
                value={4.5}
                // onChange={(event, newValue) => {
                //   setValue(newValue);
                // }}
                name="half-rating"
                defaultValue={2.5}
                precision={0.5}
              />
             
            </div>
            <p>
              {/* {item.review} */}
              Lorem ipsum, dolor sit amet consectetur   
            </p>
          </div>
        </Grid>
      </Grid>
      <div className="col-span-1 flex"></div>
    </div>
  );
};

export default ProductReviewCard;
