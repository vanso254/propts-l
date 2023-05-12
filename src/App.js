import React from "react";
import data from "./data";
import Card from "./Card";

export default function App() {
  const cards=data.map(Trip=>{
    return (
    <Card
        Country={Trip.Country}
        Name={Trip.Name}
        imageUrl={Trip.imageUrl}
        google_maps_location={Trip.google_maps_location}
        DateFrom={Trip.DateFrom}
        DateTo={Trip.DateTo}
        Description={Trip.Description}
    />)
  })
 return(
  <div>
{cards}
  </div>
 )
}
/*<Card
        Country="Kenya"
        Name="Mt. Kenya"
        imageUrl="mt-kenya.jpeg"
        google_maps_location="https://www.google.co.ke/maps/place/Mount+Kenya/@-0.1520948,37.3083242,21z/data=!4m6!3m5!1s0x1827e264a95116b7:0x501b6e20567ff6b8!8m2!3d-0.1521384!4d37.3084079!16zL20vMDFfem1z?hl=en"
        DateFrom="22/03/2022"
        DateTo="27/03/2022"
        Description="Mount Kenya is the highest mountain in Kenya and the second-highest in Africa, after Mount Kilimanjaro. It is a popular destination for hiking and climbing enthusiasts, offering stunning views and diverse wildlife."
      />*/