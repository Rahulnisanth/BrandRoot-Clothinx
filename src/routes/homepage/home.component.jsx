import { Outlet } from "react-router-dom";
import Directory from "../../components/directory/directory.component";

const Home = () => {
  const categories = [
    {
      id: 1,
      title: "Hats",
      imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
      routeLink: "shop/hats",
    },
    {
      id: 2,
      title: "Jacket",
      imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
      routeLink: "shop/jackets",
    },
    {
      id: 3,
      title: "Shoes",
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
      routeLink: "shop/sneakers",
    },
    {
      id: 4,
      title: "Men",
      imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
      routeLink: "shop/mens",
    },
    {
      id: 5,
      title: "Women",
      imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
      routeLink: "shop/womens",
    },
  ];
  return (
    <div>
      <Directory categories={categories} />
      <Outlet />
    </div>
  );
};

export default Home;
