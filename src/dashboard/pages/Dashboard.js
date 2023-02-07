import React, { Component } from 'react';
// import { ProgressBar } from 'react-bootstrap';
// import {Bar, Doughnut} from 'react-chartjs-2';
// import DatePicker from "react-datepicker";

// import "react-datepicker/dist/react-datepicker.css";

export class Dashboard extends Component {
	// handleChange = date => {
	//   this.setState({
	//     startDate: date
	//   });
	// };
	// constructor(props){
	//   super(props)
	//   this.state = {
	//     startDate: new Date(),
	//     visitSaleData: {},
	//     visitSaleOptions: {
	//       scales: {
	//         yAxes: [{
	//           ticks: {
	//             beginAtZero: true,
	//             display:false,
	//             min: 0,
	//             stepSize: 20,
	//             max: 80
	//           },
	//           gridLines: {
	//             drawBorder: false,
	//             color: 'rgba(235,237,242,1)',
	//             zeroLineColor: 'rgba(235,237,242,1)'
	//           }
	//         }],
	//         xAxes: [{
	//           gridLines: {
	//             display:false,
	//             drawBorder: false,
	//             color: 'rgba(0,0,0,1)',
	//             zeroLineColor: 'rgba(235,237,242,1)'
	//           },
	//           ticks: {
	//             padding: 20,
	//             fontColor: "#9c9fa6",
	//             autoSkip: true,
	//           },
	//           categoryPercentage: 0.5,
	//           barPercentage: 0.5
	//       }]
	//       },
	//       legend: {
	//         display: false,
	//       },
	//       elements: {
	//         point: {
	//           radius: 0
	//         }
	//       }
	//     },
	//     trafficData: {},
	//     trafficOptions: {
	//       responsive: true,
	//       animation: {
	//         animateScale: true,
	//         animateRotate: true
	//       },
	//       legend: false,
	//     },
	//     todos: [
	//       {
	//           id: 1,
	//           task: 'Pick up kids from school',
	//           isCompleted: false
	//       },
	//       {
	//           id: 2,
	//           task: 'Prepare for presentation',
	//           isCompleted: true
	//       },
	//       {
	//           id: 3,
	//           task: 'Print Statements',
	//           isCompleted: false
	//       },
	//       {
	//           id: 4,
	//           task: 'Create invoice',
	//           isCompleted: false
	//       },
	//       {
	//           id: 5,
	//           task: 'Call John',
	//           isCompleted: true
	//       },
	//       {
	//           id: 6,
	//           task: 'Meeting with Alisa',
	//           isCompleted: false
	//       }
	//     ],
	//     inputValue: '',
	//   }
	//   this.statusChangedHandler = this.statusChangedHandler.bind(this);
	//   this.addTodo = this.addTodo.bind(this);
	//   this.removeTodo = this.removeTodo.bind(this);
	//   this.inputChangeHandler = this.inputChangeHandler.bind(this);
	// }
	// statusChangedHandler(event, id) {

	//   //const todoIndex = this.state.todos.findIndex( t => t.id === id );
	//   const todo = {...this.state.todos[id]};
	//   todo.isCompleted = event.target.checked;

	//   const todos = [...this.state.todos];
	//   todos[id] = todo;

	//   this.setState({
	//       todos: todos
	//   })
	// }

	// addTodo (event) {
	//     event.preventDefault();

	//     const todos = [...this.state.todos];
	//     todos.unshift({
	//         id: todos.length ? todos[todos.length - 1].id + 1 : 1,
	//         task: this.state.inputValue,
	//         isCompleted: false

	//     })

	//     this.setState({
	//         todos: todos,
	//         inputValue: ''
	//     })
	// }

	// removeTodo (index) {
	//     const todos = [...this.state.todos];
	//     todos.splice(index, 1);

	//     this.setState({
	//         todos: todos
	//     })
	// }

	// inputChangeHandler(event) {
	//     this.setState({
	//         inputValue: event.target.value
	//     });
	// }

	// componentDidMount(){
	//   //your code
	//   var ctx = document.getElementById('visitSaleChart').getContext("2d")
	//   var gradientBar1 = ctx.createLinearGradient(0, 0, 0, 181)
	//   gradientBar1.addColorStop(0, 'rgba(218, 140, 255, 1)')
	//   gradientBar1.addColorStop(1, 'rgba(154, 85, 255, 1)')

	//   var gradientBar2 = ctx.createLinearGradient(0, 0, 0, 360)
	//   gradientBar2.addColorStop(0, 'rgba(54, 215, 232, 1)')
	//   gradientBar2.addColorStop(1, 'rgba(177, 148, 250, 1)')

	//   var gradientBar3 = ctx.createLinearGradient(0, 0, 0, 300)
	//   gradientBar3.addColorStop(0, 'rgba(255, 191, 150, 1)')
	//   gradientBar3.addColorStop(1, 'rgba(254, 112, 150, 1)')

	//   var gradientdonut1 = ctx.createLinearGradient(0, 0, 0, 181)
	//   gradientdonut1.addColorStop(0, 'rgba(54, 215, 232, 1)')
	//   gradientdonut1.addColorStop(1, 'rgba(177, 148, 250, 1)')

	//   var gradientdonut2 = ctx.createLinearGradient(0, 0, 0, 50)
	//   gradientdonut2.addColorStop(0, 'rgba(6, 185, 157, 1)')
	//   gradientdonut2.addColorStop(1, 'rgba(132, 217, 210, 1)')

	//   var gradientdonut3 = ctx.createLinearGradient(0, 0, 0, 300)
	//   gradientdonut3.addColorStop(0, 'rgba(254, 124, 150, 1)')
	//   gradientdonut3.addColorStop(1, 'rgba(255, 205, 150, 1)')

	//   const newVisitSaleData = {
	//     labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG'],
	//     datasets: [
	//       {
	//         label: "CHN",
	//         borderColor: gradientBar1,
	//         backgroundColor: gradientBar1,
	//         hoverBackgroundColor: gradientBar1,
	//         legendColor: gradientBar1,
	//         pointRadius: 0,
	//         fill: false,
	//         borderWidth: 1,
	//         data: [20, 40, 15, 35, 25, 50, 30, 20]
	//       },
	//       {
	//         label: "USA",
	//         borderColor: gradientBar2,
	//         backgroundColor: gradientBar2,
	//         hoverBackgroundColor: gradientBar2,
	//         legendColor: gradientBar2,
	//         pointRadius: 0,
	//         fill: false,
	//         borderWidth: 1,
	//         data: [40, 30, 20, 10, 50, 15, 35, 40]
	//       },
	//       {
	//         label: "UK",
	//         borderColor: gradientBar3,
	//         backgroundColor: gradientBar3,
	//         hoverBackgroundColor: gradientBar3,
	//         legendColor: gradientBar3,
	//         pointRadius: 0,
	//         fill: false,
	//         borderWidth: 1,
	//         data: [70, 10, 30, 40, 25, 50, 15, 30]
	//       }
	//     ]
	//   }
	//   const newTrafficData = {
	//     datasets: [{
	//       data: [30, 30, 40],
	//         backgroundColor: [
	//           gradientdonut1,
	//           gradientdonut2,
	//           gradientdonut3
	//         ],
	//         hoverBackgroundColor: [
	//           gradientdonut1,
	//           gradientdonut2,
	//           gradientdonut3
	//         ],
	//         borderColor: [
	//           gradientdonut1,
	//           gradientdonut2,
	//           gradientdonut3
	//         ],
	//         legendColor: [
	//           gradientdonut1,
	//           gradientdonut2,
	//           gradientdonut3
	//         ]
	//     }],

	//     // These labels appear in the legend and in the tooltips when hovering different arcs
	//     labels: [
	//       'Search Engines',
	//       'Direct Click',
	//       'Bookmarks Click',
	//     ]
	//   };
	//   this.setState({visitSaleData: newVisitSaleData, trafficData:newTrafficData} )
	// }

	// toggleProBanner() {
	//   document.querySelector('.proBanner').classList.toggle("hide");
	// }

	render() {
		return <div>Dashboard</div>;
	}
}
// const ListItem = (props) => {

//   return (
//       <li className={(props.isCompleted ? 'completed' : null)}>
//           <div className="form-check">
//               <label htmlFor="" className="form-check-label">
//                   <input className="checkbox" type="checkbox"
//                       checked={props.isCompleted}
//                       onChange={props.changed}
//                       /> {props.children} <i className="input-helper"></i>
//               </label>
//           </div>
//           <i className="remove mdi mdi-close-circle-outline" onClick={props.remove}></i>
//       </li>
//   )
// };
export default Dashboard;
