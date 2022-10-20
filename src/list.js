import React, { Component } from "react";
import ROW from "./add-likes.js";
import './styles.css';
class List extends Component {
    constructor(props) {
        super(props);
        this.state = { add: false, web: null, url: null, description: null };
        this.state.list = [
            { "web": "Wikipedia", "url": "https://en.wikipedia.org/", "description": "Wikipedia is a free encyclopedia, written collaboratively by the people who use it.", "like": 0, "dislike": 0 },
            { "web": "YouTube", "url": "https://www.youtube.com/", "description": "YouTube is a free video sharing website", "like": 0, "dislike": 0 },
            { "web": "Github", "url": "https://github.com/", "description": "GitHub is a Git repository hosting service, but it adds many of its own features.", "like": 0, "dislike": 0 }
        ];
    }


    addWeb() {
        this.setState({ list: [...this.state.list, { "web": this.state.web, "url": this.state.url, "description": this.state.description, "like": 0, "dislike": 0 }] });
        this.setState({ add: false, web: null, url: null, description: null });
        console.log(this.state.list);
    }

    renderAddWeb() {
        return (
            <div>
                <form onSubmit={() => this.addWeb()}>
                    <table>
                        <tbody>
                            <tr>
                                <td>Website:</td>
                                <td>
                                    <input
                                        type="text"
                                        onChange={e => this.setState({ web: e.target.value })}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>URL:</td>
                                <td>
                                    <input
                                        type="text"
                                        onChange={e => this.setState({ url: e.target.value })}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>Description:</td>
                                <td>
                                    <input
                                        type="text"
                                        onChange={e => this.setState({ description: e.target.value })}
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div>
                        <button className="submit-button" type="submit">Add New Website</button>
                    </div>
                </form>
            </div>
        );
    }
    render() {
        const { list, add } = this.state;
        return (
            <div className="container">
                <div><h1 className="header">Most Visited Websites</h1></div>
                <div className="main">
                    <table className="table">
                        <thead className="thead">
                            <tr>
                                <th style={{ "width": "100px" }}>Likes</th>
                                <th style={{ "width": "100px" }}>Dislikes</th>
                                <th>Website URL & Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            {list.map(record => {
                                return <ROW
                                    web={record.web}
                                    url={record.url}
                                    description={record.description}
                                    like={record.like}
                                    dislike={record.dislike} />
                            })
                            }
                        </tbody>
                    </table>
                    <div className="add-container">
                        <button className="add-button" onClick={() => this.setState({ add: true })}>
                            <i className="fas fa-plus-circle"></i>
                        </button>
                        <p className="add-notes">a New Popular Website</p>
                        {add ? <div>{this.renderAddWeb()}</div> : null}
                    </div>
                </div>
            </div>
        );
    }
}

export default List;