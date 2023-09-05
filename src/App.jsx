import Header from "./components/Header/Header";
import "./app.css";
import Content from "./components/Content/Content";
import ContentOptions from "./components/ContentOptions/ContentOptions";
import Arguments from "./components/Arguments/Arguments";

function App() {
  return (
    <>
      <Header />
      <div class="container">
        <main>
          <Content />
          <hr />
          <ContentOptions />
          <Arguments />
        </main>
      </div>
    </>
  );
}

export default App;
