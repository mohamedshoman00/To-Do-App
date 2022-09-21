import React from "react";

export default function TodoCreate({
	todo,
	setTodo,
	clearInput,
	inputRef,
	isInputEmpty,
	preventSubmit,
}) {
	return (
		<div className="form__input">
			<div className="container d-flex justify-content-flex-start flex-column">
				<div className="container d-flex justify-content-flex-start">
					<input
						className="styleHover"
						id="outlined-basic"
						placeholder="What's need to be done?"
						value={todo}
						variant="outlined"
						onChange={(e) => setTodo(e.target.value)}
						onFocus={clearInput}
						ref={inputRef}
						aria-describedby="component-error-text"
						onKeyPress={preventSubmit}
						style={{
							width: 360,
							height: 50,
							borderRadius: 20,
							paddingLeft: 15,
							border: "1px solid #808080",
							boxShadow: "0 0 4px #808080",
							outline: "none",
						}}
					/>
				</div>
				{!isInputEmpty ? (
					<></>
				) : (
					<>
						<span
							className="MuiFormHelperText-root"
							style={{
								textAlign: "left",
								paddingLeft: 30,
								position: "absolute",
								top: 195,
								color: "rgba(0, 0, 0, 0.54)",
								fontSize: "0.75rem",
							}}
						>
							Task can't be empty
						</span>
					</>
				)}
			</div>
			<button
				className="btn btn-outline-success"
				style={{
					width: 150,
					height: 50,
					borderRadius: 20,
					boxShadow: "0 0 4px #808080",
				}}
				onKeyPress={preventSubmit}
			>
				Add Task
			</button>
		</div>
	);
}
