export const cities = [
    "Nagpur",
    "Mumbai",
    "Pune",
    "Delhi",
  ];
  
  export const filters = [
    {
      id: "cities",
      name: "Cities",
      options: [
        { value: "nagpur", label: "Nagpur" },
        { value: "mumbai", label: "Mumbai" },
        { value: "pune", label: "Pune" },
        { value: "delhi", label: "Delhi" },
      
      ],
    },
  
    {
      id: "price",
      name: "Price",
      options: [
        { value: "1599-3999", label: "₹1599 To ₹3999" },
        { value: "3999-9999", label: "₹3999 To ₹9999" },
        { value: "10000-15000", label: "₹10000 To ₹15000" },
        { value: "15000-20000", label: "₹15000 To ₹20000" },
       
      ],
    },
    
  ];
  
  export const singleFilter=[

    {
      id: "wifi",
      name: "Wifi",
      options: [
        { value: "Yes", label: "Yes" },
        { value: "No", label: "No" },
       
      ],
    },

   
    
    {
      id: "type",
      name: "Type",
      options: [
        { value: "house", label: "House" },
        { value: "apartment", label: "Apartment" },
        
      ],
    },
  ]
  
  export const sortOptions = [
    
    { name: "Price: Low to High", query: "price_low", current: false },
    { name: "Price: High to Low", query: "price_high", current: false },
  ];
  