import TodoList from "./components/TodoList";
import TodoInput from "./components/TodoInput";
import { useState, useEffect } from "react";

function App() {
  // let todos = ["go to the gym", "eat a salad", "do some homework"];

  //Sekogas koga kje definirame variable koja userot kje ja koristi/interact ja definirame kako Statefull variable
  //Vaka se pisuvaat sekogas state variables. Vtoriot value treba da ima samo "set" pred imeto
  const [todos, setTodos] = useState([]);
  const [todoValue, setTodoValue] = useState("");

  function persistData(newList) {
    localStorage.setItem("todos", JSON.stringify({ todos: newList }));
  }

  function handleAddTodos(newTodo) {
    const newTodoList = [...todos, newTodo];
    persistData(newTodoList);
    setTodos(newTodoList);
  }

  function handleDeleteTodo(index) {
    const newTodoList = todos.filter((todo, todoIndex) => {
      return todoIndex !== index;
    });
    persistData(newTodoList);
    setTodos(newTodoList);
  }
  function handleEditTodo(index) {
    const valueToBeEdited = todos[index];
    setTodoValue(valueToBeEdited);
    handleDeleteTodo(index);
  }

  // if we want to listen to a change of a variable we pass for example todos in [] below, if i want it to run on page load then we leave it empty
  useEffect(() => {
    if (!localStorage) {
      return;
    }

    let localTodos = localStorage.getItem("todos");
    if (!localTodos) {
      return;
    }

    localTodos = JSON.parse(localTodos).todos;
    setTodos(localTodos);
  }, []);

  return (
    <>
      <TodoInput
        todoValue={todoValue}
        setTodoValue={setTodoValue}
        handleAddTodos={handleAddTodos}
      />
      <TodoList
        handleDeleteTodo={handleDeleteTodo}
        handleEditTodo={handleEditTodo}
        todos={todos}
      />
      {/* <TodoList todos={todos}/> Namesto da go koristime vaka moze da koristime State */}
    </>
  );
}

export default App;
