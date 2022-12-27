import React from "react";

export const List = (props) => {

	const deleteTask = (index) => {
		const newListOfTodos = props.list.filter((_, idx) => idx !== index)
		props.setList(newListOfTodos)
		if (newListOfTodos==null){
			props.updateFetch([])
		}
		else{
			props.updateFetch(newListOfTodos)
		}
		

	}
		

	

	return (
		<div className="text-center">
			{props.list.map((item, index) => {
				return (
					<li>{item.label}  <button onClick={()=>deleteTask(index)}> X</button></li>
				)
			})}
		</div>
	);
};


