// function User()
// {
//     return(
//         <div>
//             <h1>User Component</h1>
//         </div>
        
//     )
// }
// export default User;


// // JSX with React
// function User() 
// {
//     return(
//         <div>Hello</div>
//     )
// }
// export default User;




// Props with Functional Component





// //  Reuse Component ---

// function User(props)
// {
//     return(
//         <div>
//             <span>User {props.data.name}</span>
//             <span>User {props.data.email}</span>
//             <span>User {props.data.contact}</span>
//         </div>
//     )
// }
// export default User;




// // Send Data Child to Parent Component
// function User(props)
// {
//     return(
//         <div>
//             <h2>User Name: {props.name}</h2>
//             <button>Click Me</button>
//         </div>
//     )
// }

// export default User;







// //  Pure component in Recat

// import './App.css';
// import React, { PureComponent } from 'react';
// class User extends React.Component {
// render()
//  {
//         console.log("user component check-re-rendering");
//         return (
//             <div className='App'>
//                 <h1>User Component {this.props.count} </h1>
                
//             </div>
//         );
//     }
// }

// export default User;



// //  Forward Ref

// import React, {forwardRef} from 'react'
// function User(props, ref)
// {
//     return(
//         <div>
//             <input type="text" ref={ref} />
//         </div>
//     )
// }

// export default forwardRef(User);