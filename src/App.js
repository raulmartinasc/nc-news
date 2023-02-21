import { BrowserRouter, Routes, Route } from "react-router-dom";
import ArticleSection from "./Components/ArticleSection";
import IndividualArticle from "./Components/IndividualArticle";
import Nav from "./Components/Navbar/Nav";
import ErrorPage from "./Components/ErrorPage";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<ArticleSection />} />
          <Route path="/articles" element={<ArticleSection />} />
          <Route path="/articles/:article_id" element={<IndividualArticle />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
