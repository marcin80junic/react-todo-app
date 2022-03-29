import React, { useState, useEffect } from "react";
import { FaTrash } from "react-icons/fa"
import { BsFillHandThumbsUpFill } from "react-icons/bs"
import { ImCross } from "react-icons/im"
import styles from "../../styles/TodoItem.module.css"


const TodoItem = (props) => {

    const { completed, id, title } = props.todo
    const [editing, setEditing] = useState(false)

    useEffect(() => {
        return () => {
            console.log("Cleaning up...")
        }
    }, [])

    useEffect(() => {
        if(editing) {
            document.querySelector(`[data="${id}"]`).focus()
        }
    }, [editing])

    const toggleEdit = (e) => {
        setEditing(!editing)
    }

    const cancelEdit = () => {
        props.cancelEdit(id)
        toggleEdit()
    }

    const editDone = () => {
        props.setUpdate(title, id, true)
        toggleEdit()
    }

    const handleUpdate = event => {
        switch(event.key) {
            case "Enter": editDone()
                break
            case "Escape": cancelEdit()
                break
            default: props.setUpdate(event.target.value, id, false)
        }
    }

    const completedStyle = {
        fontStyle: "italic",
        color: "#595959",
        opacity: 0.4,
        textDecoration: "line-through",
    }

    let viewMode = {}
    let editMode = {}

    if (editing) {
        viewMode.display = "none"
    } else {
        editMode.display = "none"
    }

    return (
        <li className={ styles.item }>
            <div onDoubleClick={ toggleEdit } style={ viewMode }>
                <input
                    type="checkbox"
                    className={ styles.checkbox }
                    checked={ completed }
                    onChange= {() => props.handleChangeProps(id) }
                />
                <button onClick={ () => props.deleteTodoProps(id) }>
                    <FaTrash style={{ color: "orangered", fontSize: "16px" }} />
                </button>
                <span style={ completed ? completedStyle : null }>
                    { title }
                </span>
            </div>
            <div style={ editMode }>
                <button onClick={ cancelEdit }>
                    <ImCross style={{ color: "red", fontSize: "16px" }} />
                </button>
                <button onClick={ editDone }>
                    <BsFillHandThumbsUpFill style={{ color: "green", fontSize: "16px" }} />
                </button>
                <input
                    type="text"
                    name="editTitle"
                    data={ id }
                    className={ styles.textInput }
                    value={ title } 
                    onChange={ handleUpdate }
                    onKeyDown={ handleUpdate }
                />

            </div>
        </li>
    )
}

export default TodoItem