import React from "react";
import './Input.css'

const Input = props =>{
    return (
        <div className="form-group">
          <label className="label" htmlFor={props.id}>
            {props.label}
          </label>
          <input
            className="input"
            id={props.id}
            type={props.type}
            value={props.value}
            onChange={props.onChange}
          />
        </div>
      );
}

export default  Input;