import React, { useContext } from "react";
import { Link } from "react-router-dom"
import "./cardCategory.css";
import { ClientContext } from "../../utils/ClientContext";


function CategoryCard({ src, alt }) {
    const context = useContext(ClientContext)

    return (
        <div className="card card-anim">

            <Link to="/Shop-Category" >
                <img className="card-img-top"
                    onClick={(e) => {
                        context.changeCategory(e.target.alt)
                    }}
                    src={src}
                    alt={alt}
                />
            </Link>
        </div>
    )
}

export default CategoryCard;