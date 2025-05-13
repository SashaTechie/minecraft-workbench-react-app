import "./Workbench.css";

import pointerImage from "../../media/images/pointer.svg";

function Workbench() {
    const grid = Array(9).fill(null);

    return (
        <div className="container">
            <h2 className="header">Верстак</h2>
            <div className="workbench">
                <div className="workbench-grid">
                    {grid.map((item, index) => (
                        <div key={index} className="workbench-cell">{item}</div>
                    ))}
                </div>
                <img className="arrow" src={pointerImage} alt="→" />
                <div className="result-cell"></div>
            </div>
        </div>
    );
}

export default Workbench;
