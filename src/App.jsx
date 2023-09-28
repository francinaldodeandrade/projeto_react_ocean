import "./App.css";
import Card from "./components/Card/Card";

function App() {
  const item1 = {
    nome: "Rick Sanchez",
    url_img: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
  };
  const item2 = {
    nome: "Morty Smith",
    url_img: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
  };
  const item3 = {
    nome: "Summer Smith",
    url_img: "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
  };
  const item4 = {
    nome: "Beth Smith",
    url_img: "https://rickandmortyapi.com/api/character/avatar/4.jpeg",
  };
  const item5 = {
    nome: "Rick Sanchez",
    url_img: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
  };
  const item6 = {
    nome: "Morty Smith",
    url_img: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
  };
  const item7 = {
    nome: "Summer Smith",
    url_img: "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
  };
  const item8 = {
    nome: "Beth Smith",
    url_img: "https://rickandmortyapi.com/api/character/avatar/4.jpeg",
  };

  const itens = [item1, item2, item3, item4, item5, item6, item7, item8];

  return (
    <>
      {itens.map(function (item) {
        return <Card item={item} />;
      })}
    </>
  );
}

export default App;
