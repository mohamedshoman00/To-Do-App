import React, { useState, useEffect, useRef } from "react";
import TodoCreate from "./FormInput";
import TodoList from "./List";
export default function Form() {
	const [newTodo, setNewTodo] = useState("");
	const [todos, setTodos] = useState([
		{
			text: "This is First todo",
			isCompleted: false,
			isEditing: false,
		},
		{
			text: "This is Second todo",
			isCompleted: false,
			isEditing: false,
		},
		{
			text: "This is Third todo",
			isCompleted: false,
			isEditing: false,
		},
	]);
	const inputRef = useRef();
	const noteRef = useRef({});
	const [isInputEmpty, setInputEmpty] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		addTodo(newTodo);
		clearInput();
		inputRef.current.focus();
	};

	const preventSubmit = (e) => {
		if (e.key === "Enter") {
			e.preventDefault();
		}
	};

	const addTodo = (text) => {
		if (text !== "") {
			const newTodos = [...todos, { text }];
			setNewTodo("");
			setTodos(newTodos);
		} else {
			console.log("text", text);
			setInputEmpty(true);
		}
	};

	const removeTodo = (inx) => {
		const newArr = [...todos];
		newArr.splice(inx, 1);
		setTodos(newArr);
	};

	const completeTodo = (inx) => {
		const newTodos = [...todos];
		newTodos[inx].isCompleted = !newTodos[inx].isCompleted;
		setTodos(newTodos);
	};

	const editTodo = (inx) => {
		const newTodos = [...todos];
		newTodos[inx].isEditing = !newTodos[inx].isEditing;
		setTodos(newTodos);
	};

	const saveTodo = (inx) => {
		const newTodos = [...todos];
		newTodos[inx].isEditing = !newTodos[inx].isEditing;
		newTodos[inx].text = noteRef.current[inx].value;
		setTodos(newTodos);
	};

	const clearInput = () => {
		setNewTodo("");
	};

	const setTodo = (todo) => {
		setInputEmpty(false);
		setNewTodo(todo);
	};

	useEffect(() => {}, [todos]);

	return (
		<form onSubmit={handleSubmit} className="form">
			<TodoCreate
				todo={newTodo}
				setTodo={setTodo}
				clearInput={clearInput}
				inputRef={inputRef}
				isInputEmpty={isInputEmpty}
				preventSubmit={preventSubmit}
			/>

			<TodoList
				todos={todos}
				completeTodo={completeTodo}
				editTodo={editTodo}
				deleteTodo={removeTodo}
				saveTodo={saveTodo}
				noteRef={noteRef}
				preventSubmit={preventSubmit}
			/>
		</form>
	);
}