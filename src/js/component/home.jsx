import React,{useState} from "react";
import { Input } from "./input.jsx";
import { List } from "./list.jsx";
import { Counter } from "./counter.jsx";

const Home = () => {
	const [list, setList] = useState([])
	return (
		<div className="text-center">
			<h1>Todos</h1>
			<Input setList = {setList}/>
			<List list = {list} setList = {setList}  />
			<Counter numberofItemsLeft = {list.length}/>
		</div>
	);
};

export default Home;
