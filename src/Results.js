import React from 'react';
import './App.css';

class Results extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            top_ten: [],
            url: '',
            document: null,
            displayDocument: false
        };

        this.fetchData = this.fetchData.bind(this);
    }

    componentDidMount() {
        this.fetchData();
    }

    componentDidUpdate(prevProps) {
        if (this.props.data !== prevProps.data) {
            this.fetchData();
        }
    }

    fetchData() {
        fetch(`http://127.0.0.1:5000/get_results?model=${this.props.data.model}&query=${this.props.data.query}`).then(results => {
            return results.json();
        }).then(data => {
            this.setState({top_ten: data});
        });
    }

    render() {
        return(
            <div className="ResultsPage">
                <hr />
                <div className="Results">
                    <p className="resultsTitle"><u>Search Results</u></p>
                    {this.state.top_ten && this.state.top_ten.map((doc, i) => {
                        return (
                            <div key={i}>
                                <p className="resultsNumber"><b>{i+1}.</b></p>
                                <table>
                                    <tbody>
                                    <tr>
                                        <td className="field"><b>Title:</b></td>
                                        <td>{doc.title}</td>
                                    </tr>
                                    <tr>
                                        <td className="field"><b>Preview:</b></td>
                                        <td>"{doc.preview}"</td>
                                    </tr>
                                    <tr>
                                        <td className="field">
                                            <b>Link: </b>
                                        </td>
                                        <td>
                                            <a href={"0"} onClick={() => this.props.showDocument(doc.text)}>Full Document</a>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                                <hr/>
                            </div>
                        );
                    })}
                </div>
                {this.state.displayDocument && this.state.document}
            </div>
        );
    }
}

export default Results;