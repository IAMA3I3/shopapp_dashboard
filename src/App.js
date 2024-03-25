import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./screens/Home"
import Artisan from "./screens/Artisan"
import ArtisanPorfolio from "./screens/ArtisanPortfolio"
import PayoutDetail from "./screens/PayoutDetail"
import DisputeDetail from "./screens/DisputeDetail"
import UserDetail from "./screens/UserDetail"

const App = () => {

  return (
    <BrowserRouter>

      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Artisan />} path="/artisan/:id" />
        <Route element={<ArtisanPorfolio />} path="/artisan_portfolio/:id" />
        <Route element={<PayoutDetail />} path="/payout_detail/:id" />
        <Route element={<DisputeDetail />} path="/dispute_detail/:id" />
        <Route element={<UserDetail />} path="/user/:id" />
      </Routes>

    </BrowserRouter>
  )
}

export default App