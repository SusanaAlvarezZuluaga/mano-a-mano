import SingleCard from "../../components/Singlecard/singleCard";
import image1 from "../../assets/Tap1.png";
import image2 from "../../assets/Tap2.png";
import image3 from "../../assets/Tap3.png";
import image4 from "../../assets/Tap4.png";
import image5 from "../../assets/Tap5.png";
import specs1 from "../../assets/specs1.png";
import specs2 from "../../assets/specs2.png";
import specs3 from "../../assets/specs3.png";
import specs4 from "../../assets/specs4.png";
import specs5 from "../../assets/specs5.png";
import "./style.css";
import { Link } from "react-router-dom";
import ComparePage from "../ComparePage";

const products = [
  {
    id: 1,
    src: image1,
    title: "Sauber Kitchen Mixer Tap Dual Spout with Pull Out Spray",
    description: "",
    specs: specs1,
  },
  {
    id: 2,
    src: image2,
    title: "Sauber Baden Pull Out Kitchen Mixer Tap",
    description: "",
    specs: specs2,
  },
  {
    id: 3,
    src: image3,
    title: "Sauber Kitchen Mixer Tap with Pull Out Spray",
    description: "",
    specs: specs3,
  },
  {
    id: 4,
    src: image4,
    title: "Sauber Aarau Kitchen Mixer Tap Chrome",
    description: "",
    specs: specs4,
  },
  {
    id: 5,
    src: image5,
    title: "Sauber Vevey Brushed Kitchen Mixer Tap",
    description: "",
    specs: specs5,
  },
];

function HomePage({ compare, setCompare }) {
  return (
    <>
      <div className='wrapper'>
        <Link to='/compare'>
          Compare {compare.length > 0 ? compare.length : null}
        </Link>
        {products.map((product) => (
          <SingleCard setCompare={setCompare} key={product.id} {...product} />
        ))}
      </div>
    </>
  );
}
export default HomePage;
