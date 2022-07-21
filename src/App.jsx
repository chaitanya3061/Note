import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import React, { useState } from "react";

function App() {
  const [items, setitems] = useState([]);
  function addnote(fullbody) {
    setitems((prevItems) => {
      return [...prevItems, fullbody];
    });
  }
  function deletenote(id) {
    setitems((prevItems) => {
      return prevItems.filter((noteitem, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div>
      <Header />
      <CreateArea onadd={addnote} />
      {items.map((noteitem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteitem.title}
            content={noteitem.content}
            ondelete={deletenote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
