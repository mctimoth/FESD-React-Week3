import React from 'react';
import EditEmployeeForm from './editEmployeeForm';

export default class EmployeeForm extends React.Component {
    // constructor(props) {
    //     super(props);

    //     this.updateEmployee = this.updateEmployee.bind(this);
    // }

    // updateEmployee(employee) {
    //     this.props.updateEmployee(employee);
    // }

    render() {
        return (
            <div className="App">
                <div>
                    <EditEmployeeForm {...this.props} />
                </div>
            </div>
        );
    }
}