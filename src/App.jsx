import Home from "./routes/homepage/home.component";
import { Route, Routes } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";

const Shop = () => {
  return <h1>I am the shopping page</h1>;
};

const Contact = () => {
  return <h1>I am the Contact page</h1>;
};

const Signin = () => {
  return <h1>I am the Signin page</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="contact" element={<Contact />} />
        <Route path="signin" element={<Signin />} />
      </Route>
    </Routes>
  );
};

export default App;
