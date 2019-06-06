import React, { useEffect } from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {
    useEffect(
        () => {
            console.log('[Cockpit.js] useEffect');
            // HTTP request...
            setTimeout(() => {
                alert('saved data to cloud!');
            }, 1000);
            return () => {
              console.log('[Cockpit.js cleanup work in useEffect');
            };
        }, []
    );

    useEffect(() => {
      console.log('[Cockpit.js] 2nd useEffect');
      return () => {
        console.log('[Cockpit.js] cleanup work in 2nd useEffect');
      }
    })
    const aclasses = [];
    let btnClass = '';

    if (props.showPersons) {
        btnClass = classes.Red;
    }

    if (props.personsLength <= 2) {
      aclasses.push(classes.red);
    }
    if (props.personsLength <= 1) {
      aclasses.push(classes.bold); 
    }
    return (          
    <div className={classes.Cockpit}>
    <h1>{props.title}</h1>
    <p className={aclasses.join(' ')}>This is really working!</p>
    <button
      className={btnClass}
      onClick={props.clicked}>Toggle Persons</button>
    </div>
      );
};

export default React.memo(cockpit);