import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import ArticleSection from "./ArticleSection";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<ArticleSection />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
