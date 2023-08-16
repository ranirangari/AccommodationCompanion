import React from "react";
import AddressCard from "../AddressCard/AddressCard";
import OrderTracker from "./OrderTracker";

import { Box, Grid } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import StarBorderIcon from '@mui/icons-material/StarBorder';
const OrderDetails = () => {
  return (
    <div className=" px:5 lg:px-20">
      <div>
        <h1 className="font-bold text-xl py-5"> Address</h1>
        <AddressCard />
      </div>
      <div className="py-20">
        <OrderTracker activeStep={3} />
      </div>

      <Grid className="space-y-5" container>
        {[1,1,1].map((item)=>  <Grid
          item
          container
          className="shadow-xl rounded-md p-5 border"
          sx={{ alignItems: "center", justifyContent: "space-between" }}
        >
          <Grid item xs={6}>
            <div className="flex items-center space-x-4">
              <img
                className="w-[10rem] h-[10rem] object-cover object-top shadow-sm"
                src="https://images.unsplash.com/photo-1585314545477-c4be889f112c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c2luZ2xlJTIwYmVkfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                alt=""
              />

              <div className="space-y-2 ml-5">
                <p className="font-semibold">Mumbai</p>
                <p className="opacity-50 text-sm font-semibold">32 Pawnee Street , MT 59701</p>
                <p>₹3000</p>
              </div>
            </div>
          </Grid>

          <Grid item>
            <Box sx={{color:deepPurple[500]}}>
              <StarBorderIcon sx={{fontSize:"2rem"}} className="px-2"/>
              <span>Rate & Review Rooms</span>
            </Box>
          </Grid>
        </Grid>)}
      
      </Grid>
    </div>
  );
};

export default OrderDetails;
