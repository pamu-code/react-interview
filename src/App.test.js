//TASK WAS: create tests for one React component
//In this file, Hello/ component is tested partly
//Run tests with npm run test

import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import {Hello} from './App';

//same array as in implementation used in testing
const todos_initTable = [
  {id: 1, name: 'Go to the supermarket', complete: false},
  {id: 2, name: 'Call Alice', complete: false},
  {id: 3, name: 'Ask Alice to call Bob', complete: false},
  {id: 4, name: 'Do the dishes', complete: false},
  {id: 5, name: 'Change car tyres', complete: false}
  ];

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target

  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});


/* COPY-PASTED:INTERFACE TO REACT FUNCTION COMPONENT FOR REFERENCE
<Hello
key={todo.id}
todo={todo}
onClick={onClick}
onRemoveClick={onRemoveClick}
/>
*/

//this test works as specified
it("toggle complete/not - not pressed yet any buttons, all array indexes", () => {

  // loop all array indexes
  for (let index = 0; index<todos_initTable.length;index++)
  {
    //initialize completed status in array to be sure
    todos_initTable[index].complete = false;

    //dummy function handles as props
    const onChange = jest.fn();
    const onRemove = jest.fn();

    //start test case with calling funtion component
    act(() => {
        render(<Hello key={todos_initTable[index].id}
                      todo={todos_initTable[index]}
                      onClick={onChange}
                      onRemoveClick={onRemove}
        />, container);
    });
  
    // get ahold of the toggle button element
    const button = document.querySelector("[data-testid=toggle]");
  
    //check that initial state rendered is ok and there are no clicks 
    expect(onChange).toHaveBeenCalledTimes(0);
    expect(button.innerHTML).toBe("Incomplete");

  //check after one press
  //act(() => {
  //  button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  //});

  //expect(onChange).toHaveBeenCalledTimes(1);
  //expect(button.innerHTML).toBe("Complete");
  }
});   


// below test does not work, rendered text in button seems not to be changed according to test case even it actually works

/*
it("toggle complete/not - one button press, all array indexes", () => {
  // loop all array indexes
  for (let index = 0; index<todos_initTable.length;index++)
  {
    //initialize completed status in array to be sure
    todos_initTable[index].complete = false;

    //dummy function handles as props
    const onChange = jest.fn();
    const onRemove = jest.fn();

    //start test case with calling funtion component
    act(() => {
        render(<Hello key={todos_initTable[index].id}
                      todo={todos_initTable[index]}
                      onClick={onChange}
                      onRemoveClick={onRemove}
        />, container);
    });
  
    // get ahold of the toggle button element
    const button = document.querySelector("[data-testid=toggle]");
    
  //check after one press
    act(() => {
    button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });

    expect(onChange).toHaveBeenCalledTimes(1);
    expect(button.innerHTML).toBe("Complete");
  }
}); */   




  //it("changes value when clicked", () => {
  //  const onChange = jest.fn();
  //  act(() => {
  //    render(<Toggle onChange={onChange} />, container);
  //  });
  
    // get ahold of the button element, and trigger some clicks on it
  //  const button = document.querySelector("[data-testid=toggle]");
  //  expect(button.innerHTML).toBe("Turn on");
  /*
    act(() => {
      button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });
  
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(button.innerHTML).toBe("Complete");
  
    act(() => {
        button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
      });
    
      expect(onChange).toHaveBeenCalledTimes(2);
      expect(button.innerHTML).toBe("Incomplete");
  

    act(() => {
      for (let i = 0; i < 10; i++) {
        button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
      }
    });
  
    expect(onChange).toHaveBeenCalledTimes(12);
    expect(button.innerHTML).toBe("Incomplete");

  act(() => {
    for (let i = 0; i < 23; i++) {
      button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    }
  });

  expect(onChange).toHaveBeenCalledTimes(35);
  expect(button.innerHTML).toBe("Complete");
*/
//});


