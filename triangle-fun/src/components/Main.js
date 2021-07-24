import React from 'react'
import { Link } from 'react-router-dom'

export default function Main() {
    return (
        <div>
            <div className="main">
                <div className="sub-box">
                    <h5>
                        < Link to="triangle-area">
                            Area Of Triangle
                        </Link>
                    </h5>
                </div>
                <div className="sub-box">
                    <h5>
                        < Link to="triangle-hypo">
                            Get Hypotane...
                        </Link>
                    </h5>
                </div>
                <div className="sub-box">
                    <h5>
                        < Link to="triangle-angle">
                            Get Angle
                        </Link>
                    </h5>
                </div>
                <div className="sub-box">
                    <h5>
                        < Link to="triangle-quiz">
                            Take A Quiz
                        </Link>
                    </h5>
                </div>
            </div>

        </div>
    )
}
