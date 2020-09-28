import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Button, Box } from "@material-ui/core/";

const Default = {
  todotext: "おきまりTodo",
  doing: false,
};

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

const Todo = () => {
  const classes = useStyles();
  const [todo, SetTodo] = useState([Default]);
  const [todotitle, SetTodoTitle] = useState("");

  const handleCheangeTodo = (e) => {
    SetTodoTitle(e.target.value);
  };

  //   Inputの中身をresetさせる;
  const resetTodo = () => {
    SetTodoTitle("");
  };

  //   他に同じ内容が入力されていないかチェックする
  //   厳密等価演算子 ===
  const isTodoInclude = () => {
    return todo.some((todo) => todo.title === todotitle);
  };

  return (
    <div>
      {/* <Nav/>ナビゲーションバーはあとで作成する */}
      <h1>Todoあぷりだよん</h1>

      <TextField
        id="outlined-basic"
        label="内容入力"
        variant="outlined"
        onChange={handleCheangeTodo}
      />
      <Button variant="contained" color="primary">
        Primary
      </Button>

      <ul>
        <li></li>
      </ul>
    </div>
  );
};

export default Todo;
