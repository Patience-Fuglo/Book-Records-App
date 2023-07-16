import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
// import { addFavourite } from "../../../server/controllers/user.controller";

const DisplayAllBook = (props) => {
  const { bookList, setBookList } = props;
  const navigate = useNavigate();
  const [btnText, setBtnText] = useState("Add to Favourite");
  const [isFavourite, setIsFavourite] = useState(false);
  const [getUSerId, setUserId] = useState("");
  useEffect(() => {
    axios
      .get("http://localhost:8001/api/book/all")
      .then((res) => {
        console.log(res.data);
        setBookList(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    let user_id = localStorage.getItem("userId");
    setUserId(user_id);
    axios
      .get(`http://localhost:8001/api/book/isfav/${user_id}`)
      .then((res) => {
        console.log(res.data);
        if (res.data.exists) {
          let result = res.data.exists.map((v) => ({
            ...v,
            isFavourite: true,
          }));
          console.log("result", result);
        }
      })
      .catch((err) => console.log(err));
  }, []);
  const deleteFilter = (idFromBelow) => {
    axios
      .delete(`http://localhost:8001/api/book/delete/${idFromBelow}`)
      .then((res) => {
        console.log(res.data);
        const newList = bookList.filter(
          (product, index) => product._id !== idFromBelow
        );
        setBookList(newList);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const addFavourite = (product) => {
    const user_id = localStorage.getItem("userId");
    console.log(user_id);
    console.log(product);
    // let product = product.find(i=> i._id = product._id)
    // if (btnText == "Add to Favourite") {
    axios({
      method: "PATCH",
      withCredentials: true,
      url: `http://localhost:8001/api/book/update/${product}`,
      data: {
        userId: user_id,
      },
    }).then((res) => {
      console.log(res.data);
    });
    window.location.reload();
  };

  return (
    <div>
      <header>All Books:</header>
      {bookList.map((product, index) => {
        const exists = product.fans.filter((f) => f._id == getUSerId);
        return (
          <div key={index} className="bookDetails">
            <Link to={`/book/detail/${product._id}`}>
              <b>Book Title:</b> {product.title}
            </Link>
            <br />
            <br />
            <button onClick={() => navigate(`/book/edit/${product._id}`)}>
              Edit
            </button>
            &nbsp;
            <button onClick={() => deleteFilter(product._id)}>Delete</button>
            &nbsp;
            <button onClick={() => addFavourite(product._id)}>
              {exists.length ? "Remove From Favourite" : "Add to Favourite"}
            </button>
            <br />
            <h2>Users who like this book:</h2>
            {product.fans.map((f, i) => (
              <ul key={i}>
                <li>
                  {f.first_name} {f.last_name}{" "}
                </li>
              </ul>
            ))}
          </div>
        );
      })}
    </div>
  );
};

export default DisplayAllBook;
