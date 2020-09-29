import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  TextField,
  Button,
  Box,
  List,
  ListItem,
  ListItemText,
  Checkbox,
} from "@material-ui/core/";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

// あとでしてみること
// Inputの内容を別々のStateで管理して内容を削除できるかどうか

// defaultの値
const Default = {
  todotext: "おきまりTodo",
  subtext: "おきまりTodoコンテンツ2",
  doing: false,
};

const Todo = () => {
  const classes = useStyles();
  const [todo, SetTodo] = useState([Default]);
  const [todotitle, SetTodoTitle] = useState("");
  console.log(todo);

  const handleCheangeTodo = (e) => {
    SetTodoTitle(e.target.value);
  };

  // Inputの中身を削除させる変数
  const initialState = {
    todotext: "",
    subtext: "",
  };

  //   Inputの中身をresetさせる;
  const resetTodo = () => {
    SetTodoTitle({ ...initialState });
  };

  //   他に同じ内容が入力されていないかチェックする
  //   厳密等価演算子 ===
  const isTodoInclude = () => {
    return todo.some((todo) => todo.title === todotitle);
  };

  const addTodo = () => {
    SetTodo([
      ...todo, //配列に中を展開する
      {
        todotext: todotitle,
        subtext: todotitle,
        doing: false,
      },
    ]);
    // 登録が完了したら、Inputの内容を空にする
    resetTodo();
  };

  //   論理演算子 && ||
  //   それぞれ「AND」「OR」という意味で、条件処理の中で使うことが多い演算子

  return (
    <div>
      {/* <Nav/>ナビゲーションバーはあとで作成する */}
      <h1>Todoあぷりだよん</h1>

      <TextField
        id="outlined-basic"
        label="内容入力"
        variant="outlined"
        value={todotitle.todotext}
        onChange={handleCheangeTodo}
      />
      <TextField
        id="outlined-basic"
        label="内容入力2"
        variant="outlined"
        value={todotitle.subtext}
        onChange={handleCheangeTodo}
      />
      {/* 登録するときに登録済みのTodoなのか判定する */}
      <Button
        disabled={todotitle === "" || isTodoInclude()}
        variant="contained"
        color="primary"
        onClick={addTodo}
      >
        Primary
      </Button>

      <List className={classes.root} component="ul">
        {todo.map((x) => (
          <ListItem key={x.todotext} component="li">
            <ListItemText>{x.todotext}</ListItemText>
            <ListItemText>{x.subtext}</ListItemText>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default Todo;
