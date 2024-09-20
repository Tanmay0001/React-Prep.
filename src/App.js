


// // COMPONENT IN REACT

// // // import logo from './logo.svg';
// // // import './App.css';
// // // function App() {
// // // let data="Tanmay Mishra";
// // // function apple()
// // // {
// // // data = "peter";
// // // alert(data);
// // // }
// // // return (
// // // <div className ="App">
// // // <h1> {data}</h1>
// // // <button onClick={apple}>Click Me</button>
// // // </div>

// // // );
// // // }
// // // export default App;








// // // FUCTIONAL COMPONENT

// // import React, { Component } from 'react';
// // import logo from './logo.svg'
// // import './App.css';
// // class App extends Component {

// // constructor()
// // {
// //   super();
// //   this.state={
// //     data:1
// //   }
// // }
// // apple()
// // {
// //   this.setState({data:this.state.data+1})
// // }
// // render()
// // {
// // return (
// // <div className="App">
// // <h1>{this.state.data}</h1>
// // <button onClick={()=>this.apple()}>Update Data</button> 
// // </div>
// // );
// // }
// // }

// // export default App;






// // // // STATE IN FUNCTIONAL COMPONNENT:---
// // import React, { useState } from 'react'; // Import useState from React
// // import logo from './logo.svg';
// // import './App.css';

// // function App() {
// // const [data, setData] = useState('Tanmay'); // Initialize state with useState

// // // Correct function name to match what is used in the onClick
// // function updateData() {
// // setData('Mishra'); // Update the state
// // }

// // return (
// // <div className="App">
// // <h1>{data}</h1>
// // <button onClick={updateData}>Update Data</button>
// // </div>
// // );
// // }

// // export default App;








// // // JSX with React

// // import logo from './logo.svg';
// // import './App.css';
// // import User from './User'
// // function App() {
// //   return(
// //     <div className="App">
// //       <h1>JSX !</h1>
// //       <User />
// //     </div>
// //   )
// // }
// // export default App;








// // // Props with Functional Component

// // import React, { useState } from 'react';
// // import './App.css';
// // import Student from './Student';

// // function App() {
// //   const [name, setName] = useState("Tanmay");

// //   return (
// //     <div className='App'>
// //       <h1>Props in React :)</h1>
// //       <Student name={name} />
// //       <button onClick={() => { setName("Ram") }}>Update Name</button>

// //       {/* Examples of passing multiple props to the Student component */}
// //       {/* 
// //       <Student name={"Tanmay"} email="tanmay@great.com" other={{ address: 'Bangalore', mobile: "000" }} />
// //       <Student name={"Ram"} email="ram@great.com" other={{ address: 'Ayodhya', mobile: "000" }} />
// //       <Student name={"Hanuman"} email="hanuman@great.com" other={{ address: 'Banaras', mobile: "000" }} />
// //       */}
// //     </div>
// //   );
// // }

// // export default App;




// // // Props in Class

// // import logo from './logo.svg';
// // import './App.css';
// // import Student from './Student';
// // import React from 'react'


// // class App extends React.Component {
// //   constructor()
// //   {
// //     super();
// //     this.state={
// //       name:"Tanmay"
// //     }
// //   }
// // render()
// // {
// //   return (
// //     <div className="App">
// //       <h1>Props !</h1>
// //       <Student name={this.state.name} email="tommy@123.com"></Student>
// //       <button onClick={()=>this.setState({name:"Ram"})}>Update Name</button>
// //     </div>
// //   );
// // }
// // }

// // export default App;





// // //  Hide show and Togle in React

// // import logo from './logo.svg'
// // import './App.css';
// // import React from 'react';

// // function App() {
// //   const [status, setStatus]=React.useState(true)
// //   return (
// //     <div className='App'>
// //       {
// //         status? <h1>Hey Ram !</h1>:null
// //       }
// //       {/* <button onClick={()=>setStatus(false)}>Hide</button>
// //       <button onClick={()=>setStatus(true)}>Show</button> */}
// //       <button onClick={()=>setStatus(!status)}>Toggle</button>
// //     </div>
// //   );
// // }

// // export default App;





// // // Handle form in react.js

// // import './App.css'
// // import React, { useState } from 'react';


// // function App() {
// //   const [name,setName]=useState("");
// //   const [tnc,setTnc]=useState(false);
// //   const [interest,setinterest]=useState("");
// //   function getFormData(e)
// //   {
// //     console.log(name,tnc,interest)
// //     e.preventDefault()
// //   }
// //   return (
// //     <div className='App'>
// //       <h1>Hadle the form in React </h1>
// //       <form onSubmit={getFormData}>
// //         <input type="text" placeholder='enter name' onChange={(e)=>setName(e.target.value)}/> <br /> <br />
// //         <select onChange={(e)=>setinterest(e.target.value)}>
// //           <option> Select options </option>
// //           <option>Marvel </option>
// //           <option>DC</option>
// //         </select  >   <br /> <br />
// //         <input type="checkbox" onChange={(e)=>setTnc(e.target.checked)}/><span> Accept term and conditions</span>
// //         <br /> <br />
// //         <button type="submit">submit</button>
// //         {/* <button type="submit">clear</button> */}
// //       </form>
// //     </div>
// //   )
// // }

// // export default App;




// // //  Conditional Rendering ---IF Condition - from Profile.js


// // import './App.css'
// // import logo from './logo.svg';
// // import Profile from './Profile'

// // function App() {
// //   return (
// //     <div className='App'>
// //     <Profile />
// //   </div>
// //   );
// // }

// // export default App;



// // // Basic Form Validation

// // import './App.css'
// // import logo from './logo.svg';
// // import Profile from './Profile'
// // import Login from './Validation'

// // function App() {
// //   const data = true;
// //   return (
// //     <div className='App'>
// //     < />
// //   </div>
// //   );
// // }

// // export default App;








// // // CONSTRUCTOR

// // import logo from './logo.svg'
// // import './App.css'
// // import React from 'react'

// // class App extends React.Component{
// //   constructor()
// //   {
// //     super();
// //     this.state={
// //       data:"Anil"
// //     }
// //   }
// //   render()
// //   {
// //     return(
// //       <h1>Hello world {this.state.data}</h1>
// //     )
// //   }

// // }

// // export default App;









// // // Component Did Mount Life cycle Method:---

// // import './App.css';
// // import React from 'react'
// // class App extends React.Component {
// //   constructor()
// //   {
// //     super();
// //     this.state={
// //       name:"Tanmay"
// //     }
// //   }
// //   componentDidMount()
// //     {
// //       console.log("ComponentDidmount")
// //     }
// //     render()
// //     {
// //       console.log("render")
      
// //       return (
// //       <div className='App'>
// //         <h1>Component Did mount {this.state.name}</h1>
// //         <button onClick={()=>{this.setState({name:"Ram"})}}>Update Name</button>
// //         </div>
// //         );
// //       }
// //     }
// //     export default App;






// // // Component Did Update Life cycle Method:---v


// // import './App.css';
// // import React from 'react';

// // class App extends React.Component {
// //   constructor() {
// //     super();
// //     console.log("constructor");
// //     this.state = {
// //       count: 0
// //     };
// //   }

// //   componentDidUpdate(prevProps, prevState, snapshot) {
// //     console.log("componentDidUpdate", prevState.count, this.state.count);
// //     if (prevState.count === this.state.count) {
// //       alert("data is already the same");
// //     }
// //   }

// //   render() {
// //     // console.log("render")
// //     return (
// //       <div className="App">
// //         <h1>Component Did Update {this.state.count} </h1>
// //         <button onClick={() => { this.setState({ count: 1 }) }}>Update Count</button>
// //       </div>
// //     );
// //   }
// // }

// // export default App;




// // // // Component ShouldComponentUpdate Life cycle Method:---v


// // import './App.css';
// // import React from 'react';

// // class App extends React.Component {
// //   constructor() {
// //     super();
// //     this.state = {
// //       count: 0 // Correct state initialization
// //     };
// //   }
// //   shouldComponentUpdate()
// //   {
// //     console.log("shouldComponentUpdate", this.state.count);
// //     return true;
// //     // if(this.state.count>5 && this.state.count<10)
// //     // {
// //     //   return true;
// //     // }
// //   }

// //   render() {
// //     return (
// //       <div className="App">
// //         <h1>Should Component Update {this.state.count}</h1>
// //         <button onClick={() => this.setState({ count: this.state.count + 1 })}>
// //           Update Counter
// //         </button>
// //       </div>
// //     );
// //   }
// // }
// // export default App;






// // // ComponentWillUnmont Life cycle Method:---v -----.>>>>>>>I student.js 

// // import './App.css';
// // import React from 'react';
// // import Student from './Student';

// // class App extends React.Component {
// //   constructor() {
// //     super();
// //     this.state = {
// //       show: true
// //     };
// //   }

// //   render() {
// //     return (
// //       <div className='App'>
// //         {
// //           this.state.show ? <Student /> : <h1>Child component Removed</h1>
// //         }
// //         <button onClick={() => this.setState({ show: !this.state.show })}>
// //           Toggle Child Component
// //         </button>
// //       </div>
// //     );
// //   }
// // }

// // export default App;



// // // HooKS in React 


// // import './App.css'
// // import React, {useEffect,useState} from 'react';

// // function App() {
// //   const [count, setCount]=useState(0)
// //   useEffect(() => {
// //     console.log("useEffect")

// //   })
// //   return (
// //     <div className='App'>
// //       <h1>useEffect in React {count}</h1>
// //       <button onClick={()=>setCount(count+1)} >Update Counter</button>
// //     </div>

// //   )
// // }

// // export default App;







// // // UseEffect wit specific State and Props

// // import './App.css';
// // import React, {useEffect, useState} from 'react'


// // function App() {
// //   const [data,setData]=useState(10);
// //   const [count,setCount]=useState(9);
// //   useEffect(() => {
// //     console.log("called with data state");
// //   }, [data])
// //   return (
// //     <div className="App">
// //       <h1>Count : {count}</h1>
// //       <h1>Data : {data}</h1>

// //       <button onClick={()=>setCount(count+1)}>Update Count</button>
// //       <button onClick={()=>setData(data+1)}>Update Data</button>
// //     </div>
  
// //   );
// // }

// // export default App;





// // // Style in React JS

// // import './App.css'
// // import './style.css'
// // import React from 'react';
// // function App() {
// //   return(
// //     <div className="App">
// //       <h1 className="primary" >Select type 1 in react</h1>
// //       <h1 style={{color:'red', backgroundColor:"black"}} >Select type 1 in react</h1>
      
// //     </div>
// //   );
// // }

// // export default App;







// // Handle array with List

// import './App.css';
// import React from 'react';

// function App() {
//   const students = [
//     { name: "Ram", email: 'ram@108.com', contact: 544554545454545455 },
//     { name: "Lakhan", email: 'Lam@108.com', contact: 1444 },
//     { name: "Bharat", email: 'bam@108.com', contact: 25854 },
//     { name: "Shatrughan", email: 'sam@108.com', contact: 39859858 }
//   ];

//   return (
//     <div className="App">
//       <h1>Handle Array with List</h1>
//       <table border="1" >
//         <tr>
//           <td>Email address</td>
//           <td>Contact}</td>
//           <td>Name</td>
//           </tr>
//           {
//             students.map((data) => 
//               <tr>
//                 <td>{data.email}</td>
//                 <td>{data.contact}</td>
//                 <td>{data.contact}</td>
                
//               </tr>
//             )
//           }
      
//       </table>
//     </div>
//   );
// }

// export default App;








// COMPONENT IN REACT

// // import logo from './logo.svg';
// // import './App.css';
// // function App() {
// // let data="Tanmay Mishra";
// // function apple()
// // {
// // data = "peter";
// // alert(data);
// // }
// // return (
// // <div className ="App">
// // <h1> {data}</h1>
// // <button onClick={apple}>Click Me</button>
// // </div>

// // );
// // }
// // export default App;








// // FUCTIONAL COMPONENT

// import React, { Component } from 'react';
// import logo from './logo.svg'
// import './App.css';
// class App extends Component {

// constructor()
// {
//   super();
//   this.state={
//     data:1
//   }
// }
// apple()
// {
//   this.setState({data:this.state.data+1})
// }
// render()
// {
// return (
// <div className="App">
// <h1>{this.state.data}</h1>
// <button onClick={()=>this.apple()}>Update Data</button> 
// </div>
// );
// }
// }

// export default App;






// // // STATE IN FUNCTIONAL COMPONNENT:---
// import React, { useState } from 'react'; // Import useState from React
// import logo from './logo.svg';
// import './App.css';

// function App() {
// const [data, setData] = useState('Tanmay'); // Initialize state with useState

// // Correct function name to match what is used in the onClick
// function updateData() {
// setData('Mishra'); // Update the state
// }

// return (
// <div className="App">
// <h1>{data}</h1>
// <button onClick={updateData}>Update Data</button>
// </div>
// );
// }

// export default App;








// // JSX with React

// import logo from './logo.svg';
// import './App.css';
// import User from './User'
// function App() {
//   return(
//     <div className="App">
//       <h1>JSX !</h1>
//       <User />
//     </div>
//   )
// }
// export default App;








// // Props with Functional Component

// import React, { useState } from 'react';
// import './App.css';
// import Student from './Student';

// function App() {
//   const [name, setName] = useState("Tanmay");

//   return (
//     <div className='App'>
//       <h1>Props in React :)</h1>
//       <Student name={name} />
//       <button onClick={() => { setName("Ram") }}>Update Name</button>

//       {/* Examples of passing multiple props to the Student component */}
//       {/* 
//       <Student name={"Tanmay"} email="tanmay@great.com" other={{ address: 'Bangalore', mobile: "000" }} />
//       <Student name={"Ram"} email="ram@great.com" other={{ address: 'Ayodhya', mobile: "000" }} />
//       <Student name={"Hanuman"} email="hanuman@great.com" other={{ address: 'Banaras', mobile: "000" }} />
//       */}
//     </div>
//   );
// }

// export default App;




// // Props in Class

// import logo from './logo.svg';
// import './App.css';
// import Student from './Student';
// import React from 'react'


// class App extends React.Component {
//   constructor()
//   {
//     super();
//     this.state={
//       name:"Tanmay"
//     }
//   }
// render()
// {
//   return (
//     <div className="App">
//       <h1>Props !</h1>
//       <Student name={this.state.name} email="tommy@123.com"></Student>
//       <button onClick={()=>this.setState({name:"Ram"})}>Update Name</button>
//     </div>
//   );
// }
// }

// export default App;





// //  Hide show and Togle in React

// import logo from './logo.svg'
// import './App.css';
// import React from 'react';

// function App() {
//   const [status, setStatus]=React.useState(true)
//   return (
//     <div className='App'>
//       {
//         status? <h1>Hey Ram !</h1>:null
//       }
//       {/* <button onClick={()=>setStatus(false)}>Hide</button>
//       <button onClick={()=>setStatus(true)}>Show</button> */}
//       <button onClick={()=>setStatus(!status)}>Toggle</button>
//     </div>
//   );
// }

// export default App;





// // Handle form in react.js

// import './App.css'
// import React, { useState } from 'react';


// function App() {
//   const [name,setName]=useState("");
//   const [tnc,setTnc]=useState(false);
//   const [interest,setinterest]=useState("");
//   function getFormData(e)
//   {
//     console.log(name,tnc,interest)
//     e.preventDefault()
//   }
//   return (
//     <div className='App'>
//       <h1>Hadle the form in React </h1>
//       <form onSubmit={getFormData}>
//         <input type="text" placeholder='enter name' onChange={(e)=>setName(e.target.value)}/> <br /> <br />
//         <select onChange={(e)=>setinterest(e.target.value)}>
//           <option> Select options </option>
//           <option>Marvel </option>
//           <option>DC</option>
//         </select  >   <br /> <br />
//         <input type="checkbox" onChange={(e)=>setTnc(e.target.checked)}/><span> Accept term and conditions</span>
//         <br /> <br />
//         <button type="submit">submit</button>
//         {/* <button type="submit">clear</button> */}
//       </form>
//     </div>
//   )
// }

// export default App;




// //  Conditional Rendering ---IF Condition - from Profile.js


// import './App.css'
// import logo from './logo.svg';
// import Profile from './Profile'

// function App() {
//   return (
//     <div className='App'>
//     <Profile />
//   </div>
//   );
// }

// export default App;



// // Basic Form Validation

// import './App.css'
// import logo from './logo.svg';
// import Profile from './Profile'
// import Login from './Validation'

// function App() {
//   const data = true;
//   return (
//     <div className='App'>
//     < />
//   </div>
//   );
// }

// export default App;








// // CONSTRUCTOR

// import logo from './logo.svg'
// import './App.css'
// import React from 'react'

// class App extends React.Component{
//   constructor()
//   {
//     super();
//     this.state={
//       data:"Anil"
//     }
//   }
//   render()
//   {
//     return(
//       <h1>Hello world {this.state.data}</h1>
//     )
//   }

// }

// export default App;









// // Component Did Mount Life cycle Method:---

// import './App.css';
// import React from 'react'
// class App extends React.Component {
//   constructor()
//   {
//     super();
//     this.state={
//       name:"Tanmay"
//     }
//   }
//   componentDidMount()
//     {
//       console.log("ComponentDidmount")
//     }
//     render()
//     {
//       console.log("render")
      
//       return (
//       <div className='App'>
//         <h1>Component Did mount {this.state.name}</h1>
//         <button onClick={()=>{this.setState({name:"Ram"})}}>Update Name</button>
//         </div>
//         );
//       }
//     }
//     export default App;






// // Component Did Update Life cycle Method:---v


// import './App.css';
// import React from 'react';

// class App extends React.Component {
//   constructor() {
//     super();
//     console.log("constructor");
//     this.state = {
//       count: 0
//     };
//   }

//   componentDidUpdate(prevProps, prevState, snapshot) {
//     console.log("componentDidUpdate", prevState.count, this.state.count);
//     if (prevState.count === this.state.count) {
//       alert("data is already the same");
//     }
//   }

//   render() {
//     // console.log("render")
//     return (
//       <div className="App">
//         <h1>Component Did Update {this.state.count} </h1>
//         <button onClick={() => { this.setState({ count: 1 }) }}>Update Count</button>
//       </div>
//     );
//   }
// }

// export default App;




// // // Component ShouldComponentUpdate Life cycle Method:---v


// import './App.css';
// import React from 'react';

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       count: 0 // Correct state initialization
//     };
//   }
//   shouldComponentUpdate()
//   {
//     console.log("shouldComponentUpdate", this.state.count);
//     return true;
//     // if(this.state.count>5 && this.state.count<10)
//     // {
//     //   return true;
//     // }
//   }

//   render() {
//     return (
//       <div className="App">
//         <h1>Should Component Update {this.state.count}</h1>
//         <button onClick={() => this.setState({ count: this.state.count + 1 })}>
//           Update Counter
//         </button>
//       </div>
//     );
//   }
// }
// export default App;






// // ComponentWillUnmont Life cycle Method:---v -----.>>>>>>>I student.js 

// import './App.css';
// import React from 'react';
// import Student from './Student';

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       show: true
//     };
//   }

//   render() {
//     return (
//       <div className='App'>
//         {
//           this.state.show ? <Student /> : <h1>Child component Removed</h1>
//         }
//         <button onClick={() => this.setState({ show: !this.state.show })}>
//           Toggle Child Component
//         </button>
//       </div>
//     );
//   }
// }

// export default App;



// // HooKS in React 


// import './App.css'
// import React, {useEffect,useState} from 'react';

// function App() {
//   const [count, setCount]=useState(0)
//   useEffect(() => {
//     console.log("useEffect")

//   })
//   return (
//     <div className='App'>
//       <h1>useEffect in React {count}</h1>
//       <button onClick={()=>setCount(count+1)} >Update Counter</button>
//     </div>

//   )
// }

// export default App;







// // UseEffect wit specific State and Props

// import './App.css';
// import React, {useEffect, useState} from 'react'


// function App() {
//   const [data,setData]=useState(10);
//   const [count,setCount]=useState(9);
//   useEffect(() => {
//     console.log("called with data state");
//   }, [data])
//   return (
//     <div className="App">
//       <h1>Count : {count}</h1>
//       <h1>Data : {data}</h1>

//       <button onClick={()=>setCount(count+1)}>Update Count</button>
//       <button onClick={()=>setData(data+1)}>Update Data</button>
//     </div>
  
//   );
// }

// export default App;





// // Style in React JS

// import './App.css'
// import './style.css'
// import React from 'react';
// function App() {
//   return(
//     <div className="App">
//       <h1 className="primary" >Select type 1 in react</h1>
//       <h1 style={{color:'red', backgroundColor:"black"}} >Select type 1 in react</h1>
      
//     </div>
//   );
// }

// export default App;







// // Handle List with Bootstrap Table

// import './App.css';
// import React from 'react';
// import {Table} from 'react-bootstrap'

// function App() {
//   const users = [
//     { name: "Ram", email: 'ram@108.com', contact: 55455 },
//     { name: "Lakhan", email: 'Lam@108.com', contact: 1444 },
//     { name: "Bharat", email: 'bam@108.com', contact: 25854 },
//     { name: "Shatrughan", email: 'sam@108.com', contact: 39859858 }
//   ];

//   return (
//     <div className="App">
//       <h1>List with Bootstrap Table</h1>
//       <Table>
//       <tr>
//         <td>Name</td>
//         <td>Email</td>
//         <td>Contact</td>
//       </tr>
//       {
//       users.map((item, i) =>
//       <tr key={i}>
//         <td>{item.name}</td>
//         <td>{item.email}</td>
//         <td>{item.contact}</td>
//         </tr>)
//         }
//         </Table>
//         </div>
//         );
//       }
//       export default App;







// // nested List

// import './App.css';
// import React from 'react';
// import {Table} from 'react-bootstrap'

// function App() {
//   const users = [
//     { name: "Ram", email: 'ram@108.com', contact: 55455, address:[
//       {Hn:"10",city:'Kashi', country:'India'},
//       {Hn:"34",city:'Jaunpr', country:'India'},
//       {Hn:"43",city:'Cigaco', country:'India'},
//       {Hn:"90",city:'Texas', country:'India'},
//     ] 
//   },
  
//     { name: "Lakhan", email: 'ram@108.com', contact: 55455, address:[
//       {Hn:"10",city:'Kashi', country:'India'},
//       {Hn:"34",city:'Jaunpr', country:'India'},
//       {Hn:"43",city:'Cigaco', country:'India'},
//       {Hn:"90",city:'Texas', country:'India'},
//   ]
// },
    
//       { name: "Bharat", email: 'ram@108.com', contact: 55455, address:[
//         {Hn:"10",city:'Kashi', country:'India'},
//         {Hn:"34",city:'Jaunpr', country:'India'},
//         {Hn:"43",city:'Cigaco', country:'India'},
//         {Hn:"90",city:'Texas', country:'India'},
//   ]
// },
//       { name: "Shatrughan", email: 'ram@108.com', contact: 55455, address:[
//         {Hn:"10",city:'Kashi', country:'India'},
//         {Hn:"34",city:'Jaunpr', country:'India'},
//         {Hn:"43",city:'Cigaco', country:'India'},
//         {Hn:"90",city:'Texas', country:'India'},
//   ]
// },
// return (
//     <div className="App">
//       <h1>List with Nested Array</h1>
//       <Table variant="dark" striped>
//         <tbody>
//           <tr>
//           <td>Name</td>
//           <td>Email</td>
//           <td>Address</td>
//           </tr>
//         </tbody>
//         {
//           users.map((item)=>
//           <tr>
//             <td>{item.name}</td>
//             <td>{item.email}</td>
//             <td>{
//               <Table variant="dark" striped>
//               <tr>
//                 <td>{data.Hn}</td>
//                 <td>{data.city}</td>
//                 <td>{data.country}</td>
//               </tr>
//               )
//             }</td>
//             </tr>
//           )
//         </Table>
//     </div>
//   );
// }
// export default App;



// //  Reuse Component ---

// import './App.css'
// import React from 'react'
// import User from './User'
// function App() {
//     const users = [
//         {
//             name: "Ram", email: 'ram@108.com', contact: 55455
//         },
//         {
//             name: "Bruce", email: 'bruce@108.com', contact: 46857
//         },
//         {
//             name: "Peter", email: 'peter@108.com', contact: 89494
//         },
//         {
//             name: "Tanmay", email: 'tanmay@108.com', contact: 32323
//         },
//     ]
//     return(
//     <div className="App" >
//     <h1> Reuse Component with List </h1>
//     {
//         users.map((item,i) =>
//         <User data={item} />
//         )
//     }
//     </div>
//     );
// }
// export default App;





// // React Fragment

// import './App.css';
// import React from 'react'
// import Cols from './Cols';

// function App() {
//     return (
//         <div>
//             <h1>React Fragment</h1>
//             <table>
//                 <tbody>
//                     <tr>
//                         <Cols />
//                     </tr>
//                 </tbody>
//             </table>
//         </div>
//     );
// }

// export default App;



// Send Data Child to Parent Component

import React from "react";
import './App.css';
import User from './User';
function App() {
    let data="SeetaRaam"
    return (
        <div className="App">
            <h1>Lifting State Up</h1>
            <User name={data } />
        </div>
    );
}

export default App;
