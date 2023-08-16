import React from "react";
import { Grid } from "@mui/material";
import AdjustIcon from "@mui/icons-material/Adjust";
import { useNavigate } from "react-router-dom";
const OrderCart = () => {
  const navigate=useNavigate();
  return (
    <div onClick={()=>navigate(`/account/order/${5}`)} className="p-5 shadow-md shadow-indigo-400 hover:shadow-2xl border ">
      <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
        <Grid item xs={6}>
          <div className="flex cursor-pointer">
            <img
              className="w-[5rem] h-[5rem] object-cover object-top"
              src="https://images.unsplash.com/photo-1560067174-c5a3a8f37060?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fHNpbmdsZSUyMGJlZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
            <div className="ml-5 space-y-2">
              <p className="">84 Park Street , FL 32927</p>
              <p className="opacity-50 text-xs font-semibold">Nagpur</p>
              <p className="opacity-50 text-xs font-semibold">Double Bed</p>
            </div>
          </div>
        </Grid>
        <Grid item xs={2}>
          <p>₹5000</p>
        </Grid>

        <Grid item xs={4}>
          {true && (
            <div>
              <p>
                <AdjustIcon
                  xs={{ width: "15px", height: "15px" }}
                  className="text-green-600 mr-2"
                />
                <span>Booked on March 03</span>
              </p>
              <p className="text-xs">Your room has been booked!</p>
            </div>
          )}

          {false && (
            <p>
              <span>Check-in on March 03</span>
            </p>
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default OrderCart;
