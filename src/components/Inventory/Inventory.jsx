import "../../App.css";
import "./Inventory.css";

import resources from "../helpers/InventoryImages.js";

function Inventory() {

    return (
        <div className="container">
            <h2 className="header">Инвентарь</h2>
            <div className="inventory">
                <div className="inventory-grid">
                    {resources.map((item, index) => (
                        <div className="inventory-cell" key={index}>
                            <img className="resource-image" src={item.value} alt={item.alt} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Inventory;
