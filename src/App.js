import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/navigation-route";
import Index from "./routes/home/index-route";
import MensRoute from "./routes/mens/mens-route";
import WomensRoute from "./routes/womens/womens-route";
import AccessoriesRoute from "./routes/accessories/accessories-route";
import SignInRoute from "./routes/authentication/signin-route";
import SignUpRoute from "./routes/authentication/signup-route";



function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Index />} />
        <Route path="/men" element={<MensRoute />} />
        <Route path="/women" element={<WomensRoute />} />
        <Route path="/accessories" element={<AccessoriesRoute />} />
        <Route path="/signin" element={<SignInRoute />} />
        <Route path="/signup" element={<SignUpRoute />} />
      </Route>
    </Routes>
  );
}

export default App;
