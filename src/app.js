require('./app.sass')
import React, {PropTypes, Component} from 'react'
import ReactDOM from 'react-dom'
import NavigationBar from './navigationbar'

class App extends Component {
	static propTypes = {
		children: PropTypes.any
		, location: PropTypes.any
	}

	constructor(props){
		super(props);
		this.state={
			rightButtons:[],
			leftButtons:[]
		};
	}

	render() {
		let navigationBarOps={
			renderRightButton:()=>{
				if(this.state.rightButtons.length>0) {
					let flex=1/this.state.rightButtons.length;
					return this.state.rightButtons.map((item, index)=> {
						return <button key={index} style={{flex}}>button{index}</button>
					});
				}
				return null;
			}
		};
		if(this.state.leftButtons.length>0){
			navigationBarOps.renderLeftButton(()=>{

			});
		}
		return (
			<div id="app">
				<NavigationBar title='Navigation' {...navigationBarOps}/>
				<button className="default" onClick={event=>{
					let state=Object.assign({},this.state);
					state.rightButtons.push(1);
					this.setState(state);
				}}>push right button</button>
				<button className="default" onClick={event=>{
					let state=Object.assign({},this.state);
					state.rightButtons.pop();
					this.setState(state);
				}}>pop right button</button>
				<button className="default" onClick={event=>{
					let state=Object.assign({},this.state);
					state.rightButtons=[];
					this.setState(state);
				}}>clear right button</button>
			</div>
		);
	}
}

ReactDOM.render(
	<App></App>
	, document.getElementById("view"));