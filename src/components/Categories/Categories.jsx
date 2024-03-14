import React from 'react'
import './Categories.scss'

const Categories = () =>{
    return(
        <div className="categories">
            <div className="col">
                <div className="row">r1</div>
                <div className="row">r2</div>
            </div>
            <div className="col">r3</div>
            <div className="col col-l">
                <div className="row">
                    <div className="col">r4</div>
                    <div className="col">r5</div>
                </div>
                <div className="row">r6</div>
            </div>
        </div>
    )
}

export default Categories;