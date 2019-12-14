import React from 'react';
import './App.css';

class QueryForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {model:'bm25', query: ''};

        this.handleQueryChange = this.handleQueryChange.bind(this);
        this.handleModelChange = this.handleModelChange.bind(this);
    }

    handleQueryChange(event) {
        this.setState({query: event.target.value});
    }

    handleModelChange(event) {
        this.setState({model: event.target.value});
    }

    render() {
        return (
            <form className="Form" onSubmit={(e) => this.props.handleSubmit(e, this.state)}>
                <div>
                    <input type="text" className="searchQuery" value={this.state.query}
                           onChange={this.handleQueryChange} />
                </div>
                <div className="resultSelection">
                    <p className="resultTypeLabel"><u>Result Type:</u></p>
                    <input type="radio" className="resultTypeLabel" value="bm25" checked={this.state.model === 'bm25'} onChange={this.handleModelChange}/> BM25
                    <input type="radio" className="resultTypeLabel" value="query_likelihood" checked={this.state.model === 'query_likelihood'} onChange={this.handleModelChange}/> Query Likelihood
                </div>
                <input type="submit" className="submitButton" value="Search" />
            </form>
        );
    }
}

export default QueryForm;