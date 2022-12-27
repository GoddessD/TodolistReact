import React, { useEffect, useState } from "react";
import { Input } from "./input.jsx";
import { List } from "./list.jsx";
import { Counter } from "./counter.jsx";

const Home = () => {
	const apiUrl = "https://assets.breatheco.de/apis/fake/todos/user/GoddessD"
	const [list, setList] = useState([])
	const getList = () => {
		fetch(apiUrl)
		.then(response => response.json())
		.then(data => setList(data))
		.catch(error => console.log(error))
	}
	
	useEffect(() => {
		
		getList()
	  }, []);

	const updateFetch = (newListOfTodos) => {
		fetch(apiUrl, {
			method: "PUT",
			body: JSON.stringify(newListOfTodos),
			headers: {
				"Content-Type": "application/json"
			}
		})
			.then(response => console.log(response))
			.catch(error => console.log(error))
	}

	return (
		<div className="text-center">
			<h1>Todos</h1>
			<Input list={list} setList={setList} updateFetch={updateFetch} />
			<List list={list} setList={setList} updateFetch={updateFetch} />
			<Counter numberofItemsLeft={list.length} setList={setList} updateFetch={updateFetch} />
		</div>
	);
};

export default Home;
