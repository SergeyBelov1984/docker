import { useState } from "react";
import "./Input.css";

const Input = () => {
  const [date, setDate] = useState("");
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");

  return (
    <div className="InputForm">
      <h1>Добавить фото</h1>
      <p>Дата:</p>
      <input
        value={date}
        onChange={(e) => setDate(e.target.value)}
        type="date"
        name=""
        id=""
      />
      <p>Автор:</p>
      <input
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        type="text"
        name=""
        id=""
      />
      <p>Описание:</p>

      <textarea
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        name=""
        id=""
      />
      <p>Фото:</p>
      <input type="file" name="" id="" />
      <button className="button">Создать</button>
    </div>
  );
};

export default Input;
