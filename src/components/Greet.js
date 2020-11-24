import React, { Component } from 'react'
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import moment from "moment";

import { DateRangePicker } from 'react-dates';

import {Button, Form, FormGroup, Input, Label,
    Modal, ModalHeader, ModalBody, ModalFooter}
    from "reactstrap";

class Greet extends Component{
    constructor(props) {
        super(props)
        this.state = {
            name:'',
            email:'',
            modelIsOpen: false,
            dropdownOpen: false,
            setDropdownOpen: false,
            dropDownValue:'',
            selectValue:'',
            multiValue:'',
            startDate: null,
            endDate: null,
            dateIs:'',
        }
    }




    handleNameChange = event => {
        this.setState({
            name: event.target.value
        })
    }
    handleEmailChange = event => {
        this.setState({
            email: event.target.value
        })
    }
    handleSelect = event => {
        this.setState({
            selectValue:event.target.value
        })
    }
    handleMulti = event => {
        this.setState({
            multiValue:[].slice.call(event.target.selectedOptions).map(o => {
                return o.value;
            })
        })
    }

    alertStartDate = (e) => {
        alert(this.state.startDate)
        this.setState({dateIs:this.state.startDate})
        e.preventDefault()
    };
    alertEndDate = () => {alert(this.state.endDate)};


    toggleModal = event => {
        this.setState({
            modalIsOpen: ! this.state.modalIsOpen,
        })
        event.preventDefault()
    }

    render(){
        return (
            <Form className="login-form">
                <h1 className="text-center">
                    <span className="font-weight-bold">Hello</span> NOOB
                </h1>
                <h2 className="text-center">Welcome</h2>
                <FormGroup>
                    <Label>Name</Label>
                    <Input
                        type="text"
                        value={this.state.name}
                        onChange = {this.handleNameChange}
                        placeholder="Name"/>
                </FormGroup>
                <FormGroup>
                    <Label>Email</Label>
                    <Input
                        type="email"
                        value = {this.state.email}
                        onChange = {this.handleEmailChange}
                        placeholder="Email"/>
                </FormGroup>
                <FormGroup>
                    <Label for="exampleSelect">Select</Label>
                    <Input type="select" name="select" id="exampleSelect" onChange={this.handleSelect.bind(this)}>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label for="exampleSelectMulti">Select Multiple</Label>
                    <Input type="select" name="selectMulti" id="exampleSelectMulti" multiple onChange={this.handleMulti}>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </Input>
                </FormGroup>
                <FormGroup>
                    <DateRangePicker
                        startDate={this.state.startDate}
                        startDateId="your_unique_start_date_id"
                        endDate={this.state.endDate}
                        endDateId="your_unique_end_date_id"
                        onDatesChange={({ startDate, endDate }) => this.setState({  startDate, endDate })}
                        focusedInput={this.state.focusedInput}
                        onFocusChange={focusedInput => this.setState({ focusedInput })}
                    />
                    <button onClick={this.alertStartDate}>Click me for start date</button>
                    <button onClick={this.alertEndDate}>Click me for end date</button>
                </FormGroup>
                <FormGroup>
                    <Button
                        onClick={this.toggleModal.bind(this)}
                        className="btn-lg btn-dark btn-block">Submit</Button>
                </FormGroup>
                <div className="text-center pt-3">
                    I hope you are proud of yourself. :-| { this.state.dateIs }
                </div>

                <Modal isOpen={this.state.modalIsOpen}>
                    <ModalHeader toggle={this.toggleModal.bind(this)}>This is your form data!</ModalHeader>
                    <ModalBody>
                        Thank you for entering useless info to my form. <br/>
                        Mr. <span className="text-body">{ this.state.name }</span> <br/>
                        Email: { this.state.email } <br/>
                        Dropdown: { this.state.dropDownValue } <br/>
                        Select Value: { this.state.selectValue } <br/>
                        Multi Select: { this.state.multiValue } <br/>
                        Date: { this.state.startDate }

                    </ModalBody>
                    <ModalFooter>Good day!</ModalFooter>
                </Modal>

            </Form>

        )
    }
}


export default Greet