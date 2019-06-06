import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classes from './Person.css'
import withClass from '../../../hoc/withClass.js';
import Aux from '../../..//hoc/Aux.js';
import AuthContext from '../../../context/auth-context'

class Person extends Component {
    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();
    }

    static contextType = AuthContext;

    componentDidMount() {
        this.inputElementRef.current.focus();
        console.log(this.context.authenticated);
    }
    render() {
        console.log('[Person.js] rendering...');
        return (
                <Aux>
                {this.context.authenticated ? <p>Authenticated!</p> : 
                <p>Please log in.</p>
                }

                <p key='i1' onClick={this.props.click}>
                    I'm {this.props.name} and I am {this.props.age} years old!
                </p>
                <p key='i2'>{this.props.children}</p>
                <input 
                    key='i3'
                    ref={this.inputElementRef
                            //(inputElement) => {this.inputElement = inputElement}
                        }
                    type="text" 
                    onChange={this.props.changed} 
                    value={this.props.name}
                />
                </Aux>
        );
    }

};

Person.propTypes = {
    click: PropTypes.func,
    age: PropTypes.number,
    name: PropTypes.string,
    changed: PropTypes.func
};
export default withClass(Person, classes.Person);