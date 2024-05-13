import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './containers/Header';
import Menu from "./pages/Menu";
import Main from "./pages/Main";
import NotFound from './pages/NotFound';
import Product from './pages/Product';

const App = () => {
  return (
    <>
    <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/menu" element={<Menu />}></Route>
          <Route path="/notfound" element={<NotFound />}></Route>
          <Route path="/product/:brandInput" element={<Product />}></Route>
          <Route path="/*" element={<NotFound />} />
        </Routes>
    </BrowserRouter>
    </>
  );
};

export default App;