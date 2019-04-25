import React, {Component} from 'react';

export class SearchForm extends Component {

    state = {
        inputMovie: ''
    }

    handleChange = e => {
        this.setState({ inputMovie: e.target.value })
    }

    handleSubmit = e => {
        e.preventDefault();
        alert(this.state.inputMovie)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit.bind(this)}>
                <div className="field has-addons">
                    <div className="controls">
                    <input 
                        className="input" 
                        onChange={this.handleChange.bind(this)}
                        type='text' 
                        placeholder='Movie to search'/>
                    </div>
                    <div className="control">
                        <button className="button is-info">Search</button>
                    </div>
                </div>
            </form>

        )
    }
}