import React, { useState, useEffect } from "react"
import { v4 as uuidv4 } from "uuid";
import Header from "./Header";
import InputTodo from "./InputTodo";
import TodosList from "./TodosList";


const TodoContainer = (props) => {

    const getInitialTodos = () => {
        // getting stored items
        const temp = localStorage.getItem("todos")
        const savedTodos = JSON.parse(temp)
        return savedTodos || []
    }

    const [todos, setTodos] = useState(getInitialTodos())

    useEffect(() => {
        // storing todos items
        const temp = JSON.stringify(todos)
        localStorage.setItem("todos", temp)
    }, [todos])

    const handleChange = id => {
        setTodos(prevTodos => {
            return prevTodos.map(todo => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        completed: !todo.completed
                    }
                }
                return todo;
            })
        })
    }

    const delTodo = id => {
        setTodos([
            ...todos.filter(todo => todo.id !== id)
        ])
    }

    const addTodoItem = title => {
        const newTodo = {
            id: uuidv4(),
            title: title,
            prevTitle: title,
            completed: false
        }
        setTodos([...todos, newTodo])
    }

    const cancelEdit = id => {
        for(let i = 0; i < todos.length; i++) {
            if (todos[i].id === id) {
                setUpdate(todos[i].prevTitle, id)
                break
            }
        }
    }

    const setUpdate = (updatedTitle, id, editDone) => {
        setTodos(
            todos.map(todo => {
                if (todo.id === id) {
                    todo.title = updatedTitle
                    if (editDone) {
                        todo.prevTitle = updatedTitle
                    }
                }
                return todo
            })
        )
    }

    return (
        <div className="container">
            <div className="inner">
                <Header />
                <InputTodo addTodoProps={addTodoItem} />
                <TodosList
                    todos={todos}
                    handleChangeProps={handleChange}
                    deleteTodoProps={delTodo}
                    cancelEdit={cancelEdit}
                    setUpdate={setUpdate}
                />
            </div>
        </div>
    )

}

export default TodoContainer