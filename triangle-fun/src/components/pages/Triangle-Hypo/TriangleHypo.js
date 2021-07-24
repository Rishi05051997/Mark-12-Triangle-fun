import React from 'react'
import "./TriangleHypo.css";
import triangle from "./../../../images/right-angle-triangle.svg"

export default function TriangleHypo() {
    return (
        <div className="container">
            <div className="content">
                <div className="form-header">
                    <h1> Calculate Hypoteneous Of Right Angled Triangle</h1>
                    <p>A right-angled triangle is a triangle, that has one of its interior angles 
                        equal to 90 degrees or any one angle is a right angle. Therefore, 
                        this triangle is also called the right triangle or 90-degree triangle. 
                        The right triangle plays an important role in trigonometry.
                    </p>
                    <img src={triangle} alt="" height="100px" />
                </div>
                <form>
                    
                </form>
            </div>
        </div>
    )
}
