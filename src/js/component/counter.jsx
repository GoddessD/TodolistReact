import React from "react";

export const Counter = (props) => {
	
	const cleanTasks = async () => {
		let clearedList= []
		props.setList(clearedList)
		props.updateFetch(clearedList)
		

	}
	return (
		<div className="text-center">
			{props.numberofItemsLeft} <button onClick={()=>cleanTasks()}>Clear All</button>
		</div>
	);
};


