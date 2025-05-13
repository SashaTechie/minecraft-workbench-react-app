import "../../App.css";
import "./RecipesBook.css";
import resources from "../helpers/InventoryImages.js";

function RecipesBook() {
    return (
        <div className="container">
            <h2 className="header">Книга рецептов</h2>
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

export default RecipesBook;