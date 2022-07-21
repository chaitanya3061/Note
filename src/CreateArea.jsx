import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';



function CreateArea(props) {
  const [fullbody, setbody] = useState({
    title: "",
    content: ""
  });

  function additems(event) {
    props.onadd(fullbody);
    setbody({
      title: "",
      content: ""
    });
    event.preventDefault();
  }
  function change(event) {
    const { name, value } = event.target;
    setbody((prevItems) => {
      return {
        ...prevItems,
        [name]: value
      };
    });
  }

  return (
    <div>
      <form>
        <input
          onChange={change}
          name="title"
          placeholder="Title"
          value={fullbody.title}
        />
        <textarea
          onChange={change}
          name="content"
          placeholder="Take a note"
          rows="3"
          value={fullbody.content}
        />
        <button onClick={additems}>
        <AddIcon></AddIcon>
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
