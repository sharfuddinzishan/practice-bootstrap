import React from 'react';

const Collapse = () => {
    return (
        <div>
                    <a className="btn btn-info me-2" 
                    href="#collapse1" 
                    data-bs-toggle="collapse">Anchor Collapse Horizontal
                    </a>

                    <button className="btn btn-primary me-2" 
                    data-bs-target="#collapse2" 
                    data-bs-toggle="collapse">Button Collapse Horizontal
                    </button>

                    <button className="btn btn-warning" 
                    data-bs-target=".collapseAll" 
                    data-bs-toggle="collapse">All Collapse Horizontal
                    </button>
            <div className="row">
                <div className="col">
                    <div className="collapse collapse-horizontal collapseAll" id="collapse1">
                        <div className="card card-body" style={{width:'250px'}}>
                            <p>
                                Anchor Zishan Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo dignissimos consequuntur accusantium adipisci voluptate molestias.
                                </p>
                        </div>
                    </div>     
                </div>
                <div className="col">
                    <div className="collapse collapse-horizontal collapseAll" id="collapse2">
                        <div className="card card-body" style={{width:'250px'}}>
                            <p>
                                Button Zishan Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo dignissimos consequuntur accusantium adipisci voluptate molestias.
                                </p>
                        </div>
                    </div>     
                </div>
            </div>                        

        </div>
    );
};

export default Collapse;