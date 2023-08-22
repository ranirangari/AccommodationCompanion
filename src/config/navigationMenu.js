export const navigation = {
  categories: [
    {
      id: "house",
      name: "House",
      featured: [
        {
          name: "Get inspiration for your next stay",
          imageSrc:
            "https://images.unsplash.com/photo-1560067174-c5a3a8f37060?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fHNpbmdsZSUyMGJlZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
          imageAlt: "FabHouse Landmark Guestline",
        },
        {
          name: "Stay at our unique houses",

          imageSrc:
            "https://images.unsplash.com/photo-1512918580421-b2feee3b85a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fHNpbmdsZSUyMGJlZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
          imageAlt: "FabHouse Landmark Guestline",
        },
      ],
      sections: [
        {
          id: "cities",
          name: "Cities",
          items: [
            { name: "Nagpur", id: "nagpur", href: `{house/cities/nagpur}` },
            { name: "Mumbai", id: "mumbai", href: `{house/cities/mumbai}` },
            { name: "Pune", id: "pune", href: `{house/cities/pune}` },
            { name: "Delhi", id: "delhi", href: `{house/cities/delhi}` },
          ],
        },
        {
          id: "facilities",
          name: "Facilities",
          items: [
            { name: "Balcony", id: "balcony",href: `{house/facilities/balcony}` },
            { name: "Pet Friendly", id: "petFriendly",href: `{house/facilities/petFriendly}` },
            { name: "Swimming pool", id: "swimmingPool",href: `{house/facilities/swimmingPool}` },
            { name: "TV", id: "tv",href: `{house/facilities/tv}` },
          ],
        },
        
        {
          id: "brands",
          name: "Brands",
          items: [
            { name: "Radisson Blu", id: "radissonBlu",href: `{house/brands/radissonBlu}` },
            { name: "Crowne Plaza", id: "crownePlaza",href: `{house/brands/crownePlaza}` },
            { name: "Holiday Inn", id: "holidayInn",href: `{house/brands/holidayInn}` },
            { name: "Counterfeit", id: "counterFeit",href: `{house/brands/counterFeit}` },
          ],
        },
      ],
    },
    {
      id: "apartment",
      name: "Apartment",
      featured: [
        {
          name: "Get inspiration for your next stay",
          imageSrc:
            "https://images.unsplash.com/flagged/photo-1556438758-8d49568ce18e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNpbmdsZSUyMGJlZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
          imageAlt: "Fab Apartment Landmark Guestline",
        },
        {
          name: "Stay at our unique apartments",
          id: "#",
          imageSrc:
            "https://images.unsplash.com/photo-1505693314120-0d443867891c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2luZ2xlJTIwYmVkfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
          imageAlt: "Fab Apartment Landmark Guestline",
        },
      ],
      sections: [
        {
          id: "cities",
          name: "Cities",
          items: [
            { name: "Nagpur", id: "nagpur", href: `{apartment/cities/nagpur}` },
            { name: "Mumbai", id: "mumbai", href: "`{apartment/cities/mumbai}` " },
            { name: "Pune", id: "pune", href: `{apartment/cities/pune}` },
            { name: "Delhi", id: "delhi", href: `{apartment/cities/delhi}` },
          ],
        },
        {
          id: "facilities",
          name: "Facilities",
          items: [
            { name: "Balcony", id: "balcony",href: `{apartment/facilities/balcony}` },
            { name: "Pet Friendly", id: "petFriendly",href: `{apartment/facilities/petFriendly}` },
            { name: "Swimming pool", id: "swimmingPool",href: `{apartment/facilities/swimmingPool}` },
            { name: "TV", id: "tv",href: `{apartmente/facilities/tv}` },
          ],
        },
        {
          id: "brands",
          name: "Brands",
          items: [
            { name: "Radisson Blu", id: "radissonBlu",href: `{house/brands/radissonBlu}` },
            { name: "Crowne Plaza", id: "crownePlaza",href: `{house/brands/crownePlaza}` },
            { name: "Holiday Inn", id: "holidayInn",href: `{house/brands/holidayInn}` },
            { name: "Counterfeit", id: "counterFeit",href: `{house/brands/counterFeit}` },
          ],
        },
      ],
    },
  ],
  pages: [
    { name: "", id: "/" },
    { name: "", id: "/" },
  ],
};
