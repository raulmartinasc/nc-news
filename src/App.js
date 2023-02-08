import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import ArticleSection from "./ArticleSection";
import IndividualArticle from "./IndividualArticle";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<ArticleSection />} />
          <Route path="/articles/:article_id" element={<IndividualArticle />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
