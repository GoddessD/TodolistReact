import React from "react";

export const List = (props) => {
	return (
		<div className="text-center">
			{props.list.map((item,index)=>{return(
				<li>{item.label}</li>
			)})}
		</div>
	);
};


