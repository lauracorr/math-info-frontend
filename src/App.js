import React from 'react';
import logo from './Logo.png';
import './App.css';
import QueryForm from "./QueryForm";
import Results from "./Results";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {view: 'form', data: null, url: 'http://127.0.0.1:5000', document: null};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.showDocument = this.showDocument.bind(this);
  }

  handleSubmit(event, values) {
    event.preventDefault();
    const data = {
      model: values.model,
      query: values.query
    };

    this.setState({
      view: 'results',
      data: data
    });
  }

  showDocument(document) {
    this.setState({
      view: 'document',
      transcript: document
    });
  }

  render() {
    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="website logo" width="200px" height="225px"/>
            <p className="title">
              Math Search'opedia
            </p>
          </header>
          <QueryForm handleSubmit={this.handleSubmit} url={this.state.url}/>
          <br/>
          {this.state.view === "results" && <Results data={this.state.data} url={this.state.url} showDocument={this.showDocument}/>}
          {this.state.view === "document" && (
              <div dangerouslySetInnerHTML={{__html: this.state.document}} />
          )}
        </div>
    );
  }
}

export default App;
