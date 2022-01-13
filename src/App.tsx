import React from "react";
import logo from "./logo.svg";
import "./App.css";

// type primitives
let a: number | null = 10;
let name: string = "it-program";
let isSamurai: boolean | null = true;
isSamurai = null;

// type no-primitive
// arrays
let names: Array<string> = ["cat", "dog", "bird"];
let names2: string[] = ["cat", "dog", "bird"];

names.forEach((n) => {
  console.log(n);
});

// object
type Address = {
  country?: string | null;
  city?: string | null;
};

type User = {
  sayHello: Function;
  name: string;
  age: number | null;
  isSamurai: boolean;
  address: Address | null;
};

interface IUser {
  sayHello: IFunction;
  name: string;
  age: number | null;
  isSamurai: boolean;
  address: Address | null;
}

let user: User = {
  sayHello(message: string) {
    alert("Hello " + message);
  },
  name: "Vika",
  age: 26,
  isSamurai: true,
  address: null,
};

// type Function
interface IFunction {
  sayHello: Function;
}

interface IFunction2 {
  sayHello: (message: string) => void;
}

interface ISum {
  sum: (a: number, b: number) => number;
}

const sum = (a: number, b: number): number => {
  return a + b;
};

// generate automatic type
let initialState = {
  name: null as string | null,
  age: null as number | null,
  isSamurai: null as boolean | null,
  address: [] as Array<Address>,
  counter: 0,
};

export type InitialStateType = typeof initialState;

let state: InitialStateType = {
  counter: 1,
  address: [{ country: null, city: null }],
  age: 24,
  isSamurai: false,
  name: "Lilya",
};

let GET_TASKS = "APP/GetTASKS";
type GetTypeAction = {
  type: typeof GET_TASKS;
  id: number;
};

let action: GetTypeAction = {
  id: 12,
  type: GET_TASKS,
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
