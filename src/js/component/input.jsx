import React,{ useState } from "react";

export const Input = (props) => {
	const [inputValue,setInputValue] = useState("")
	const addItem=(e)=> {
		if (e.key === "Enter" && inputValue!= "" ){
			let newList = props.list.concat({label:inputValue,done:false})
			props.setList(newList)
		}
	}
		return (
		<div className="text-center">
		<Input onChange={e=>setInputValue(e.target.Value)} onKeyPress={e=>addItem(e)} />	
		</div>
	);
};


