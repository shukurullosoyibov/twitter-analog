
import React from "react"

export default class PostStatusFilter extends React.Component {
    constructor(props){
        super(props);
        this.buttons = [
            { name: 'all', label: 'All'},
            { name: 'like', label: 'Like'},

        ]
    }
    render (){
        const buttons = this.buttons.map(({name, label}) =>{
            const active = this.props.filter === name;
            const clazz = active ? "btn-info" : "btn-outline-secondary";

            return(
                <button 
                key={name} 
                type="button" 
                className={`btn ${clazz}`}
                onClick={() => {this.props.onFilterSelect(name)
                console.log(name)
                }}
                
                >
                    {label}
                </button>
            )
        })
        return(
            <div className="btn-gruop">
                {buttons}
                
            </div>
        )
    }
}