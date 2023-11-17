import { Route, Routes } from "react-router";

import { Auth, Home } from "./pages";

const App = () => {
  return (
    <div className="wrapper">
      <Routes>
      <Route path="/*" element={<Auth />} />
        <Route path="/im" element={<Home />} />
      </Routes>

    </div>
  );
}

export default App;

