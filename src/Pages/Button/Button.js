import React from 'react';

const Button = () => {
    return (
        <div>
            <br />
            <button className="btn btn-primary btn-sm d-block mx-auto">Submit</button>
            <br />
            <button className="btn btn-outline-primary btn-lg">Submit</button>
            <br />
            <a className='btn btn-warning text-secondary fs-5' href="www.facebook.com" target={"_blank"}>Link</a>
            <a className='btn btn-warning text-secondary fs-5 disabled' href="www.facebook.com" target="_blank">Disabled</a>
            <hr />

            <div className="d-grid gap-2">
                <button className='btn btn-primary'>Zishan</button>
                <button className='btn btn-primary'>Sharfuddin</button>
            </div>

            <hr />

            <div className="d-grid col-6 mx-auto gap-2">
                <button className='btn btn-info'>Zishan</button>
                <button className='btn btn-info'>Sharfuddin</button>
            </div>

            <hr />
            
            <div className="d-grid gap-4 d-flex justify-content-center">
                <button className='btn btn-info'>Zishan</button>
                <button className='btn btn-info'>Sharfuddin</button>
            </div>

            <hr />

            <div className="btn-group d-flex col-6 mx-auto">
                <button className="btn btn-susccess active">Success</button>
                <button className="btn btn-danger">Danger</button>
                <button className="btn btn-outline-warning text-info">Warning</button>
            </div>

            <hr />

            <div className="btn-group d-flex mx-auto col-6">
                <input className="btn-check" type="radio" name="language" id="C" />
                <label className="btn btn-primary" htmlFor="C">C</label>
                <input className="btn-check" type="radio" name="language" id="C++" />
                <label className="btn btn-primary" htmlFor="C++">C++</label>
                <input className="btn-check" type="radio" name="language" id="Java" />
                <label className="btn btn-primary" htmlFor="Java">Java</label>
            </div>

            <hr />

            <div className="btn-group d-flex mx-auto col-6">
                <input className="btn-check" type="checkbox" id="CLang" />
                <label className="btn btn-primary" htmlFor="CLang">C</label>
                <input className="btn-check" type="checkbox" id="C++Lang" />
                <label className="btn btn-primary" htmlFor="C++Lang">C++</label>
                <input className="btn-check" type="checkbox" id="JavaLang" />
                <label className="btn btn-primary" htmlFor="JavaLang">Java</label>
            </div>

            <hr />

            <div className="btn-group-vertical">
                <button className='btn btn-primary btn-sm'>A</button>
                <button className='btn btn-primary btn-sm'>C</button>
                <div className="btn-group">
                <button 
                className="btn btn-primary btn-sm dropdown-toggle"
                data-bs-toggle="dropdown"
                >E</button>
                <ul className="dropdown-menu">
                    <li>
                        <a href="" className="dropdown-item">AA</a>
                    </li>
                    <li>
                        <a href="" className="dropdown-item">BB</a>
                    </li>
                </ul>
                </div>
                <button className="btn btn-sm btn-warning">G</button>
            </div>

            <hr />

            <div className="btn-toolbar">
                <div className="btn-group me-2">
                    <button className='btn btn-primary btn-sm'>A</button>
                    <button className='btn btn-primary btn-sm'>C</button>
                    <button className='btn btn-primary btn-sm'>E</button>
                </div>
                <div className="btn-group">
                    <button className='btn btn-primary btn-sm'>B</button>
                    <button className='btn btn-primary btn-sm'>D</button>
                    <button className='btn btn-primary btn-sm'>F</button>
                </div>
            </div>
            <hr />

        </div>
    );
};

export default Button;