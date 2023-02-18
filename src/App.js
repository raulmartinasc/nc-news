import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import ArticleSection from "./ArticleSection";
import IndividualArticle from "./IndividualArticle";
import Topics from "./Topics";
import Nav from "./Nav";
import ErrorPage from "./ErrorPage";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Nav />
        <Routes>
          <Route path="/" element={<ArticleSection />} />
          <Route path="/articles" element={<ArticleSection />} />
          <Route path="/articles/:article_id" element={<IndividualArticle />} />
          <Route path="/topics" element={<Topics />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
