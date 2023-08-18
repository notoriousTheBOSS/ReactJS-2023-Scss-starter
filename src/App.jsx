import Header from "./components/Header";
import Footer from "./components/Footer";
import Homepage from "./components/Pages/Homepage";

import { Routes, Route } from "react-router-dom";
import Flowers from "./components/Pages/Flowers";
import Plantspage from "./components/Pages/Plantspage";
import Dynamic from "./components/UI/Dynamic";
import NotFound from "./components/Pages/NotFound";
// import Dynamicpage from "./components/Pages/Dynamicpage";
const App = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/flowers/:id" element={<Dynamic />} />
                <Route path="/flowers" element={<Flowers />} />
                <Route path="/plants" element={<Plantspage />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </>
    );
};

export default App;
