import React from 'react';
import { Link } from 'react-router-dom';


const Science = () => {
    return (
        <div>

            {/* Content row */}
            <div className="row">
                <div className="col-sm-6">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">SCIENCE</h5>
                            <p className="card-text">MCA ,MSC</p>
                            <Link to="/mca" className="btn btn-primary">Go </Link>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">ART</h5>
                            <p className="card-text">MBA</p>
                            <Link to="/Mba" className="btn btn-primary">Go </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Science;
