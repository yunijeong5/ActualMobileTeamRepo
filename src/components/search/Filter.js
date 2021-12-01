import React from "react";
import './styles/Filter.css';

function Filter() {
    return (
        <div className="Row">
            <form>
                <div className="Column">
                <label className="checkbox-container"> Computer Science
                    <input type="checkbox" />
                    <span className="checkmark" />
                </label>
                <label className="checkbox-container"> Business
                    <input type="checkbox" />
                    <span className="checkmark" />
                </label>
                </div>

                <div className="Column">
                <label className="checkbox-container"> Nursing
                    <input type="checkbox" />
                    <span className="checkmark" />
                </label>
                <label className="checkbox-container"> Engineering
                    <input type="checkbox" />
                    <span className="checkmark" />
                </label>
                </div>

                <div className="Column">
                <label className="checkbox-container"> Natural Science
                    <input type="checkbox" />
                    <span className="checkmark" />
                </label>
                <label className="checkbox-container"> Linguistic
                    <input type="checkbox" />
                    <span className="checkmark" />
                </label>
                </div>
            </form>
        </div>
    );
}

export default Filter;