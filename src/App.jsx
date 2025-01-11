import Navbar from "./Components/Navbar/Navbar";
import Category from "./Components/Category/Category";
import Topic from "./Components/Topic/Topic";
import Settings from "./Components/Settings/settings";
import Home from "./Layouts/Home";
import CategoryLayout from "./Layouts/categoryLayout/CategoryLayout";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      {/* <Navbar />
      <Category />
      <Topic /> */}
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="category/:id" element={<CategoryLayout />} />
        <Route path="/settings" element={<Settings />} />
      </Route>
    </Routes>
  );
};

export default App;
