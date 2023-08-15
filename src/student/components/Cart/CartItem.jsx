import { Button,IconButton } from "@mui/material";
import React from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
const CartItem = () => {
  return (
    <div className="p-5 shadow-lg border rounded-md">
      <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]">
        <img
          className="w-full h-full object-cover object-top"
          src="https://images.unsplash.com/photo-1505693314120-0d443867891c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2luZ2xlJTIwYmVkfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
          alt=""
        />
      </div>

      <div className="flex space-x-5  text-gray-900">
        <p className="font-semibold"> Nagpur</p>
      </div>
      <div className="flex space-x-5  text-gray-900">
        <p className="opacity-70">84 Park Street , FL 32927</p>
      </div>
      <div className="flex space-x-5  text-gray-900">
        <p className="font-semibold"> ₹5000</p>
      </div>

      <div className="lg:flex items-center lg:space lg:space-x-10 pt-4">
        <div className="flex items-center space-x-2">
          <IconButton>
            <RemoveCircleOutlineIcon />
          </IconButton>
          <span className="py-1 px-7 border rounded-sm "> 3</span>
            <IconButton sx={{color:"RGB(145 85 253"}}>
              <AddCircleOutlineIcon />
            </IconButton>
         
        </div>
        <div>
          <Button sx={{color:"RGB(145 85 253"}}>Remove</Button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
