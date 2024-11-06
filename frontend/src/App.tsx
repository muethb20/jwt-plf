import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import LoginPage from "./pages/login/login.page.tsx";
import DashboardPage from "./pages/dashboard/dashboard.page.tsx";
import ProductsPage from "./pages/products/products.page.tsx";
import HeaderComponent from "./components/header/header.component.tsx";
import FooterComponent from "./components/footer/footer.component.tsx";

function App() {

  return (
    <>
      <BrowserRouter>
          <HeaderComponent/>
            <Routes>
                    <Route path={'/login'} element={<LoginPage/>}/>
                    <Route path={'/dashboard'} element={<DashboardPage/>}/>
                    <Route path={'/products'} element={<ProductsPage/>}/>
            </Routes>
          <FooterComponent/>
      </BrowserRouter>
    </>
  )
}

export default App
