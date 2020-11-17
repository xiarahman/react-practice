import React, { Component } from 'react'
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';

import {Button, Form, FormGroup, Input, Label,
    Dropdown, DropdownToggle, DropdownMenu, DropdownItem,
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
            thisDate:'',
            date:''

        }
    }


    toggle = event => {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
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
    handleDropDown = event => {
        this.setState({
            dropDownValue: event.currentTarget.textContent
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

    toggleModal = event => {
        this.setState({
            thisDate: this.state.date,
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
                    <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                        <DropdownToggle caret>
                            { this.state.dropDownValue }
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem header>Please stat your mind!</DropdownItem>
                            <DropdownItem onClick={this.handleDropDown}>Are you happy?</DropdownItem>
                            <DropdownItem onClick={this.handleDropDown} text>Are you sure?</DropdownItem>
                            <DropdownItem onClick={this.handleDropDown} disabled>Do you want some candy? (disabled)</DropdownItem>
                            <DropdownItem onClick={this.handleDropDown} divider />
                            <DropdownItem onClick={this.handleDropDown}>Suit yourself</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
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
                </FormGroup>
                <FormGroup>
                    <SingleDatePicker
                        date={this.state.date} // momentPropTypes.momentObj or null
                        onDateChange={date => this.setState({ date })} // PropTypes.func.isRequired
                        focused={this.state.focused} // PropTypes.bool
                        onFocusChange={({ focused }) => this.setState({ focused })} // PropTypes.func.isRequired
                        id="your_unique_id" // PropTypes.string.isRequired,
                    />
                </FormGroup>
                <FormGroup>
                    <Button
                        onClick={this.toggleModal.bind(this)}
                        className="btn-lg btn-dark btn-block">Submit</Button>
                </FormGroup>
                <div className="text-center pt-3">
                    I hope you are proud of yourself. :-|
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
                        Date: { this.date }

                    </ModalBody>
                    <ModalFooter>Good day!</ModalFooter>
                </Modal>

            </Form>

        )
    }
}


export default Greet