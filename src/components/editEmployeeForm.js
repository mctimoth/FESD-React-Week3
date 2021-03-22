import React from 'react';

var updateStyle = {
    backgroundColor: 'green',
    color: 'white'
}

var deleteStyle = {
    backgroundColor: 'red',
    color: 'white'
}

export default class EditEmployeeForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.name,
            age: props.age,
            country: props.country,
            position: props.position,
            wage: props.wage,
            _id: props._id
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleUpdateClick = this.handleUpdateClick.bind(this);
        this.handleDeleteClick = this.handleDeleteClick.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    // handleUpdateClick() {
    //     this.props.updateEmployee(this.state);      
    // }

    handleUpdateClick() {
        if (this.props.updateEmployee(this.state)) {
            setTimeout(() => {
                alert('Update Completed!');
            }, 2000);
        };
    }

    handleDeleteClick() {
        this.props.deleteEmployee(this.props._id);       
    }

    render() {
        return (
            <div className='data'>
                <input
                    className='employeeData100'
                    name="name"
                    value={this.state.name}
                    type="text"
                    onChange={this.handleChange}
                />
                <input
                    className='employeeData100'
                    name="age"
                    value={this.state.age}
                    type="text"
                    onChange={this.handleChange}
                />
                <input
                    className='employeeData100'
                    name="position"
                    value={this.state.position}
                    type="text"
                    onChange={this.handleChange}
                />
                <input
                    className='employeeData100'
                    name="country"
                    value={this.state.country}
                    type="text"
                    onChange={this.handleChange}
                />
                <input
                    className='employeeData100'
                    name="wage"
                    value={this.state.wage}
                    type="text"
                    onChange={this.handleChange}
                />
                <button
                    className='employeeData150'
                    style={updateStyle}
                    type="submit"
                    id={this.state._id + 'Button'}
                    onClick={this.handleUpdateClick}
                >
                    Update Employee
                </button>
                <button
                    className='employeeData150'
                    style={deleteStyle}
                    type="submit"
                    onClick={this.handleDeleteClick}
                >
                    Delete Employee
                </button>
                <label
                    className='employeeData200'
                    name="id"
                    type="text"
                >
                    {this.state._id}
                </label>
            </div>
        );
    }
}