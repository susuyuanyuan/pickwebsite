import React, { useState } from "react";
import './styles.css';

const ROW = ({ web, url, description, like, dislike }) => {
    const [likes, setLikes] = useState(like);
    const [dislikes, setDislikes] = useState(dislike);

    return (
        <tr key={web}>
            <td onClick={e => setLikes(likes + 1)}>
                <button className="small-button">
                    <i className="fas fa-plus" style={{ "color": "#ffcbcb" }}></i>&nbsp;
                    <i className="far fa-grin-hearts" style={{ "color": "#ffcbcb" }}></i>
                </button>&nbsp;{likes}
            </td>
            <td onClick={e => setDislikes(dislikes + 1)}>
                <button className="small-button">
                    <i className="fas fa-plus" style={{ "color": "#54BAB9" }}></i>&nbsp;
                    <i className="far fa-frown" style={{ "color": "#54BAB9" }}></i>
                </button>&nbsp;{dislikes}
            </td>
            <td>
                &nbsp;&nbsp;<a href={url} target="_blank">{web}</a>
                <p>&nbsp;&nbsp;{description}</p>
            </td>
        </tr>
    );
}

export default ROW;