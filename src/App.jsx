import Card from "./components/Card/Card";
import EmptyCard from "./components/EmptyCard/EmptyCard";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";




const style = {};

const App = () => {
  return (
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='card/:holiday' element={<Card />} />
          <Route path='/' element={<EmptyCard />} /> 
        </Route>
        <Route path='singleCard/:idText/:idImg' element={<Card />} />
      </Routes>
  );
}

export default App;
