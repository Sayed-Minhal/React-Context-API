import React from 'react'
import ResourceContext from '../contexts/resourceContext'

class ResourceContextConsumer extends React.Component {
	static contextType = ResourceContext;
	state={}
	
	updateName(e,fn){
		this.state.setName(e,fn)
		this.setState({name:fn})
	}
	
	changeName(){
		this.setState({name:'Minhal Sayed'})
	}
	
	componentWillMount(){
		this.setState(this.context);
	}
	
	render(){
		return (
		<ResourceContext.Consumer>{
			(context)=>
			<div>
				<div>{context.name}</div>
					<button onClick={(e)=>this.updateName(e,'Sayed Minhal Husain')
				}>Update</button>
					<button onClick={(e)=>this.changeName()}>Change</button>
				{this.state.name}
			</div>
			
			}</ResourceContext.Consumer>);
		
	}
}

export default ResourceContextConsumer;