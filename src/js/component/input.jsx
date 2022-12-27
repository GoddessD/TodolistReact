import React,{ useState } from "react";

export const Input = (props) => {
	const [inputValue,setInputValue] = useState("")
	const addItem=(e)=> {
		if (e.key === "Enter" && inputValue!= "" ){
			let newList = props.list.concat({label:inputValue,done:false})
			props.setList(newList)
			props.updateFetch(newList)
			setInputValue("")


		}
	}
		return (
		<div className="text-center">
		<input onChange={e=>setInputValue(e.target.value)} onKeyDown={e=>addItem(e)} value={inputValue} />	
		</div>
	);
}

export default Input;