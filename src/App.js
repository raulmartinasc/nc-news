import "./App.css";

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
