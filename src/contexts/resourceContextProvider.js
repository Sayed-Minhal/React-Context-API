import React from 'react'
import ResourceContext from '../contexts/resourceContext'
 
 class ResourceContextProvider extends React.Component {
	 state={name:"Sayed Minhal",setName:(e,value)=>{this.setState({name:value})}}
	render(){	 
		return(
			<ResourceContext.Provider value={this.state}>{this.props.children}</ResourceContext.Provider>
		);
	}
 };
 export default ResourceContextProvider; 