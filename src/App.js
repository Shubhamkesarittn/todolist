import React,{useState} from "react";
import ToDoList from "./ToDoList";

function App() {
    const [inputList, setinputList] = useState();
    const [Items, setItems] = useState([]);


    const listOfItems = () => {
        setItems((oldItems) => {
        return[...oldItems, inputList];
        });
        setinputList('');
    }

    const deleteItems = (id) => {
        setItems((oldItems) => {
            return oldItems.filter((arrElem, index) => {
                return index !== id;
            })
        })
    }

    const toggleItems = (id) => {
        setItems((oldItems) => {
            return oldItems.filter((arrElem, index) => {
                return index !== id;
            })
        })
    }

    return (
        <div className="todocard">
            <h1>Todo List</h1>
            <div className="todo-list">
                <div className="todoform">
                    <input
                    type="text"
                    value={inputList}
                    placeholder="Enter a title…"
                    onChange={e => setinputList(e.target.value)}
                    />
                    <button onClick={listOfItems} type="submit"><i className="fas fa-plus"></i></button>
                </div>
                {Items.map((itemval, index) => (
                    <ToDoList id={index} key={index} text ={itemval} onSelect={deleteItems}  />
                ))}
            </div>
        </div>
    );
}

export default App;
