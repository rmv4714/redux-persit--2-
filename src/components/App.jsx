import React, { useEffect, useState } from "react";import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import { connect } from "react-redux"

function App(props) {
  const [user, setUser] = useState([]);

  const fetchData = () => {
    return fetch("https://dummyjson.com/todos")
          .then((response) => response.json())
          .then((data) => setUser(data));
  }

  useEffect(() => {
    fetchData();
  },[])
  // const [notes, setNotes] = useState([]);

  // function addNote(newNote) {
  //   setNotes(prevNotes => {
  //     return [...prevNotes, newNote];
  //   });
  // }

  // function deleteNote(id) {
  //   setNotes(prevNotes => {
  //     return prevNotes.filter((noteItem, index) => {
  //       return index !== id;
  //     });
  //   });
  // }

  // console.log(props.todos.allTodoData, "todostodos")
  return (
    <div>
      <Header />
      <CreateArea />
      {props.todos.allTodoData?.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={noteItem.id}
            title={noteItem.title}
            dateTime = {noteItem.dateAndTime}
  