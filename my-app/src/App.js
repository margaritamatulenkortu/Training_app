import React, {Component, useState} from 'react';
import './App.css';

class App extends Component{
    render() {
        return(
            <div className="App">
                <div className="container">
                    <div className="py-5 text-center">
                        <img className="d-block mx-auto mb-4"
                             src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Feature_parking.svg/600px-Feature_parking.svg.png"
                             alt="" width="72" height="72"/>
                            <h2>Parking system&#8203;</h2>
                            <p className="lead">Register your car or change number fast and easy</p>
                    </div>

                    <div className="row">
                        <div className="col-md-4 order-md-2 mb-4">
                            <h4 className="d-flex justify-content-between align-items-center mb-3">
                                <span className="text-muted">Your parking history</span>
                                <span className="badge badge-secondary badge-pill" id="counter">0</span>
                            </h4>
                            <ul className="list-group mb-3">
                                <li className="list-group-item d-flex justify-content-between lh-condensed">
                                    <div>
                                        <h6 className="my-0">Mukusalas BC zone 1</h6>
                                        <small className="text-muted">21.06.2020.</small>
                                    </div>
                                    <span className="text-muted">FG3456</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between lh-condensed">
                                    <div>
                                        <h6 className="my-0">Mukusalas BC zone 2</h6>
                                        <small className="text-muted">26.06.2020.</small>
                                    </div>
                                    <span className="text-muted">HD3457</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between lh-condensed">
                                    <div>
                                        <h6 className="my-0">Mukusalas BC zone 1</h6>
                                        <small className="text-muted">27.06.2020.</small>
                                    </div>
                                    <span className="text-muted">FG3456</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between bg-light">
                                    <div className="text-success">
                                        <h6 className="my-0">Mukusalas BC zone X</h6>
                                        <small>15.07.2020.</small>
                                    </div>
                                    <span id="tasks" className="text-success"></span>
                                </li>


                            </ul>


                            <div className="input-group">
                                <form className="input-group" id="new-task">
                                    <input id="task" autoComplete="off" autoFocus placeholder="XX1111" type="text"
                                            className="form-control"/>
                                        <div className="input-group-append">
                                            <button id="submit" type="submit" className="btn btn-secondary">Add</button>
                                        </div>
                                </form>
                            </div>

                        </div>
                        <div className="col-md-8 order-md-1">
                            <h4 className="mb-3">Add new car for period</h4>
                            <form className="needs-validation" noValidate="">
                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="firstName">From:</label>
                                        <input type="text" className="form-control" id="firstName"/>
                                            <div className="invalid-feedback">
                                                Valid first name is required.
                                            </div>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="lastName">Till:</label>
                                        <input type="text" className="form-control" id="lastName"/>
                                            <div className="invalid-feedback">
                                                Valid last name is required.
                                            </div>
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="username">Car number</label>
                                    <div className="input-group">

                                        <input type="text" className="form-control" id="username" placeholder=""
                                               required=""/>
                                            <div className="invalid-feedback" style={{width: "100%"}}>
                                                Your username is required.
                                            </div>
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="email">Employee ID<span className="text-muted"></span></label>
                                    <input type="email" className="form-control" id="email" placeholder=""/>
                                        <div className="invalid-feedback">
                                            Please enter a valid email address for shipping updates.
                                        </div>
                                </div>


                                <hr className="mb-4"/>
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="save-info"/>
                                            <label className="custom-control-label" htmlFor="save-info">Agree with terms
                                                and conditions</label>
                                    </div>
                                    <hr className="mb-4"/>

                                        <h4 className="mb-3">Edit Cars</h4>

                                        <div className="d-block my-3">
                                            <div className="custom-control custom-radio">
                                                <input id="debit" name="paymentMethod" type="radio"
                                                       className="custom-control-input" required=""/>
                                                    <label className="custom-control-label" htmlFor="debit">Remove
                                                        car</label>
                                            </div>
                                            <div className="custom-control custom-radio">
                                                <input id="paypal" name="paymentMethod" type="radio"
                                                       className="custom-control-input" required=""/>
                                                    <label className="custom-control-label" htmlFor="paypal">Check
                                                        car</label>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6 mb-3">
                                                <label htmlFor="cc-name">Employees ID</label>
                                                <input type="text" className="form-control" id="cc-name" placeholder=""
                                                       required=""/>
                                                    <small className="text-muted">Only for Cognizant employees</small>
                                                    <div className="invalid-feedback">
                                                        Name on card is required
                                                    </div>
                                            </div>

                                        </div>
                                        <div className="row">
                                            <div className="col-md-3 mb-3">
                                                <label htmlFor="cc-expiration">Car number</label>
                                                <input type="text" className="form-control" id="cc-expiration"
                                                       placeholder="" required=""/>
                                                    <div className="invalid-feedback">
                                                        Expiration date required
                                                    </div>
                                            </div>

                                        </div>
                                        <hr className="mb-4"/>
                                            <button className="btn btn-primary btn-lg btn-lg" type="submit">Submit</button>
                            </form>
                        </div>
                    </div>

                    <footer className="my-5 pt-5 text-muted text-center text-small">
                        <p className="mb-1">© 2020 AppZilla</p>
                        <ul className="list-inline">
                            <li className="list-inline-item"><a href="#">Privacy</a></li>
                            <li className="list-inline-item"><a href="#">Terms</a></li>
                            <li className="list-inline-item"><a href="#">Support</a></li>
                        </ul>
                    </footer>
                </div>

            </div>


        );

    }
}


export default App;


