import "./App.css";

import Workbench from "./components/Workbench/Workbench.jsx";
import Inventory from "./components/Inventory/Inventory.jsx";
import RecipesBook from "./components/RecipesBook/RecipesBook.jsx";


function App() {
    return (
        <div>
            <div className="crafting">
                <div className="RecipesBook">
                    <RecipesBook />
                </div>
                <div className="Workbench">
                    <Workbench />
                </div>
            </div>
            <Inventory />
        </div>
    );
}

export default App;
