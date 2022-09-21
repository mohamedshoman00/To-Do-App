import React from "react";
export default function TodoList({
	todos,
	completeTodo,
	editTodo,
	deleteTodo,
	saveTodo,
	noteRef,
	preventSubmit,
}) {
	const [checked, setChecked] = React.useState([0]);
	let UniqKey = 123;
	const handleToggle = (value, inx) => () => {
		const currentIndex = checked.indexOf(value);
		const newChecked = [...checked];

		if (currentIndex === -1) {
			newChecked.push(value);
		} else {
			newChecked.splice(currentIndex, 1);
		}

		setChecked(newChecked);
		completeTodo(inx);
	};
	return (
		<>
			<ul className="jss7">
				{todos.map((todo, inx) => {
					const labelId = `list-todo-${todo}`;
					return (
						<li
							key={`todo-${UniqKey++}`}
							role={undefined}
							dense
							button
							className="d-flex justify-content-evenly align-items-center container pt-2 pb-2"
							style={{ borderBottom: "1px dashed gray", marginBottom: 3 }}
						>
							<div
								className="d-flex justify-content-between align-items-center"
								style={{ width: "80%" }}
							>
								<div className="listItemIcon">
									<input
										type="Checkbox"
										color="primary"
										edge="start"
										checked={checked.indexOf(todo) !== -1}
										tabIndex={-1}
										disableRipple
										inputProps={{ "aria-labelledby": labelId }}
										onClick={handleToggle(todo, inx)}
										onKeyPress={preventSubmit}
									/>
								</div>

								{!todo.isEditing ? (
									<>
										<div
											id={labelId}
											primary={`${todo.text}`}
											style={{
												textDecoration: todo.isCompleted ? "line-through" : "",
											}}
										>
											{todo.text}
										</div>
										<div className="listItemIcon">
											<button
												edge="end"
												aria-label="edit"
												onClick={() => editTodo(inx)}
												className="btn btn-secondary"
											>
												edit
											</button>
										</div>
									</>
								) : (
									<>
										<label htmlFor="task" className="visuallyhidden">
											{todo.text}
										</label>
										<input
											className="form__edit-input"
											defaultValue={todo.text}
											ref={(element) => (noteRef.current[inx] = element)}
											onKeyPress={preventSubmit}
											id="task"
										/>
										<div className="listItemIcon">
											<button
												onClick={() => saveTodo(inx)}
												edge="end"
												aria-label="delete"
												className="btn btn-success"
											>
												Save
											</button>
										</div>
									</>
								)}
							</div>
							<div>
								<button
									onClick={() => deleteTodo(inx)}
									edge="end"
									aria-label="delete"
									className="btn btn-danger"
								>
									Delete
								</button>
							</div>
						</li>
					);
				})}
			</ul>
		</>
	);
}
