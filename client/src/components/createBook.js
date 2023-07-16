import React, { useState } from "react";
import axios from "axios";

const CreateBook = (props) => {
  const { bookList, setBookList } = props;
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const userId = localStorage.getItem("userId");
  console.log(userId);
  const submitHandler = (e) => {
    e.preventDefault();

    console.log(userId);
    if (userId != null) {
      axios
        .post("http://localhost:8001/api/book/add", {
          title,
          description,
          // fans: [userId],
          userId: userId,
        })
        .then((res) => {
          console.log(res.data);
          if (res.status === 200 && res.data) {
            setBookList([...bookList, res.data]);
          }
          setTitle("");
          setDescription("");
          window.location.reload();
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      alert("heads up! you have to login first");
      window.location.href = "./login";
    }
  };
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(to top, rgba(114, 51, 51, 0) 10%, rgba(0, 100, 0, 2)), url("https://tse3.mm.bing.net/th?id=OIP.KdMsSKnjpjCxUIAfR_r2RQHaEe&pid=Api&P=0&h=180")`,
        backgroundRepeat: "no-repeat",
        width: "100%",
        backgroundSize: "cover",
        height: "300px",
      }}
    >
      <form id="bookForm" onSubmit={submitHandler}>
        <div className="form-fields">
          <label>Title</label>
          <input
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            name="title"
            type="text"
            required={true}
          />
        </div>
        <br />
        <div className="form-fields">
          <label>Description</label>
          <input
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            name="description"
            type="text"
            required={true}
            minLength={5}
          />
        </div>
        <br />
        {}
        <input className="submit-input" type="submit" value="Create" />
      </form>
    </div>
  );
};
export default CreateBook;
