import SingleCard from "../../components/Singlecard/singleCard";
import image1 from "../../assets/Tap1.png";
import image2 from "../../assets/Tap2.png";
import image3 from "../../assets/Tap3.png";
import image4 from "../../assets/Tap4.png";
import image5 from "../../assets/Tap5.png";
import "./style.css";
import { useState } from "react";

const products = [
  {
    id: 1,
    src: image1,
    title: "Sauber Kitchen Mixer Tap Dual Spout with Pull Out Spray",
    description: "",
  },
  {
    id: 2,
    src: image2,
    title: "Sauber Baden Pull Out Kitchen Mixer Tap",
    description: "",
  },
  {
    id: 3,
    src: image3,
    title: "Sauber Kitchen Mixer Tap with Pull Out Spray",
    description: "",
  },
  {
    id: 4,
    src: image4,
    title: "Sauber Aarau Kitchen Mixer Tap Chrome",
    description: "",
  },
  {
    id: 5,
    src: image5,
    title: "Sauber Vevey Brushed Kitchen Mixer Tap",
    description: "",
  },
];

function HomePage() {
  const [compare, setCompare] = useState([]);
  console.log(compare);

  return (
    <>
      <div className='wrapper'>
        {products.map((product) => (
          <SingleCard setCompare={setCompare} key={product.id} {...product} />
        ))}
      </div>
    </>
  );
}
export default HomePage;
