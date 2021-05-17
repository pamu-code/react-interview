import React, {useState} from 'react';
import './App.css';

/* Global array was moved to restricted area visible array 

const todos = [
    {id: 1, name: 'Go to the supermarket', complete: false},
    {id: 2, name: 'Call Alice', complete: false},
    {id: 3, name: 'Ask Alice to call Bob', complete: false},
    {id: 4, name: 'Do the dishes', complete: false},
    {id: 5, name: 'Change car tyres', complete: false}
];

*/


/* Class-based App/ React component left here for reference

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newTodoName: '',
            todos: todos
        };
    }

    generateNewId() {
        return this.state.todos.length + 1;
    }

    onSubmit(event) {
        event.preventDefault();

        var newTodos = this.state.todos.slice();
        newTodos.push({
            id: this.generateNewId(),
            name: this.state.newTodoName,
            complete: false
        });

        this.setState({todos: newTodos, newTodoName: ''});
    }

    onClick(id) {
        var todoItems = this.state.todos.slice();
        for (let i = 0; i < this.state.todos.length; i++) {
            if (todoItems[i].id === id) {
                var newComplete = !todoItems[i].complete;
                todoItems[i].complete = newComplete;
            }
        }

        this.setState({
            todos: todoItems
        });
    }

    onChange(event) {
        this.setState({newTodoName: event.target.value});
    }
    onRemoveClick(id) {
        //implement this logic
        console.log('Remove Item!');
    }
*/

// Refactored functional components based implementation below


function App (props) {

// global array moved here to restrict visibility
    const todos_initTable = [
    {id: 1, name: 'Go to the supermarket', complete: false},
    {id: 2, name: 'Call Alice', complete: false},
    {id: 3, name: 'Ask Alice to call Bob', complete: false},
    {id: 4, name: 'Do the dishes', complete: false},
    {id: 5, name: 'Change car tyres', complete: false}
    ];
// this declaration moved here for function level visibility
    var todoItemsList; 

//state/setState React class implementation functionality replaced with useState React function implementation
    const [newTodoName, set_newTodoName] = useState('')
    const [todos, set_todos] = useState(todos_initTable)

//methods before changed to named lambda functions

    const generateNewId = () => {
        return (todos.length + 1);
    }

    const onSubmit = (event) => {
        event.preventDefault();

        let newTodos = todos.slice();
        newTodos.push({
            id: generateNewId(),
            name: newTodoName,
            complete: false
        });

        set_todos(newTodos)
        set_newTodoName('')
    //    this.setState({todos: newTodos, newTodoName: ''});
    }

    const onClick = (id) => {
        todoItemsList = todos.slice();
        for (let i = 0; i < todos.length; i++) {
            if (todoItemsList[i].id === id) {
                let newComplete = !todoItemsList[i].complete; //toggle
                todoItemsList[i].complete = newComplete;
            }
        }
        set_todos(todoItemsList)
    //    this.setState({todos: todoItems});
    }

    const onChange = (event) => {
        set_newTodoName(event.target.value)
    //    this.setState({newTodoName: event.target.value});
    }

    // logic created to remove items from the list
    const onRemoveClick = (id) => {
        //TASK WAS:implement this logic

        // make working copy from state object
        todoItemsList = todos.slice();

        // loop array until correct one found
        for (let i = 0; i < todos.length; i++) {
            if (todoItemsList[i].id === id) {
                // remove item
                todoItemsList.splice(i, 1);
                // exit from the loop after task done
                break;
            }
        }

        // update state object and get the change rendered
        set_todos(todoItemsList)

        console.log('Remove Item!');
    }

    const todoItemsToScreen = () => {
        let retVal = [];

        for (let i = 0; i < todos.length; i++) {
            let todo = todos[i];
            retVal.push(
                <Hello
                    key={todo.id}
                    todo={todo}
                    onClick={onClick}
                    onRemoveClick={onRemoveClick}
                />
            );
        }
        return retVal;
    };

//    render() {
        return (
            <div className="">
                {todoItemsToScreen()}
                <Bar
                    onSubmit={onSubmit}
                    newTodoName={newTodoName}
                    onInputChange={onChange}
                />
            </div>
        );
//    }
} //React function component App/ ends here

//class Hello extends React.Component {
//    render() {


//React function component Hello/
const Hello = (props) => {
        var color;
        var text;

        if (props.todo.complete === true) {
            color = 'lightgreen';
            text = 'Complete';
        } else {
            color = 'pink';
            text = 'Incomplete';
        }

        return (
            <div className="wrapper" style={{backgroundColor: color}}>
                <h3>{props.todo.name}</h3>
                <button
                    className="btn"
                    onClick={() => { 
                        props.onClick(props.todo.id)} 
                    }
                    data-testid="toggle">
                    {text}
                </button>
                <button
                    className="btn"
                    onClick={() => {
                        props.onRemoveClick(props.todo.id) }
                    }
                    >
                    Remove from list
                </button>
            </div>
        );//return
    } // React function component Hello/ ends here

//class Bar extends React.Component {
//    render() {

// React function component Bar/
const Bar = (props) => {
    return (
            <form
                className="wrapper"
                style={{'grid-template-columns': '7fr 2fr'}}
                onSubmit = {props.onSubmit}>
                <input
                    placeholder="Add new todo"
                    value={props.newTodoName}
                    onChange={props.onInputChange}
                />
                <button
                    className="btn btn-success"
                    type="submit"
                    value="Submit">
                    Submit
                </button>
            </form>
        );
    } // React function component Bar/ ends here

// App/ exported to index.js
export {App};

// Hello/ exported to App.test.js
export {Hello};
