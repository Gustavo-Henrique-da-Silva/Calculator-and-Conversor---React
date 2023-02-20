import React, { useState, useReducer } from 'react';
import { reducer } from './reducer';

const defaultState = {
  result: 0,
};

const Measurament = () => {
  const [number, setNumber] = useState(0);

  const [state, dispatch] = useReducer(reducer, defaultState);
  const handleSubmit = (e) => {
    if (number) {
      dispatch({ type: e.target.name, payload: number });
      setNumber(0);
    }
  };

  return (
    <>
      <h1>Conversor for Measurament</h1>
      <div className="mb-3">
        <input
          type="number"
          className="form-control"
          step="any"
          value={number}
          onChange={(e) => {
            setNumber(e.target.value) || 0;
          }}
        />
      </div>

      <div className="container">
        <button
          className="btn btn-success"
          name="CM_TO_METERS"
          onClick={(e) => handleSubmit(e)}
        >
          cm to meters
        </button>
        <button
          className="btn btn-success"
          name="METERS_TO_CM"
          onClick={(e) => handleSubmit(e)}
        >
          meters to cm
        </button>
        <button
          className="btn btn-success"
          name="METERS_TO_KM"
          onClick={(e) => handleSubmit(e)}
        >
          meters to kilometers
        </button>
        <button
          className="btn btn-success"
          name="KM_TO_METERS"
          onClick={(e) => handleSubmit(e)}
        >
          kilometers to meters
        </button>
        <button
          className="btn btn-success"
          name="METERS_TO_INCHES"
          onClick={(e) => handleSubmit(e)}
        >
          meters to inches
        </button>
        <button
          className="btn btn-success"
          name="INCHES_TO_METERS"
          onClick={(e) => handleSubmit(e)}
        >
          inches to meters
        </button>
        <button
          className="btn btn-success"
          name="INCHES_TO_CM"
          onClick={(e) => handleSubmit(e)}
        >
          inches to cm
        </button>
        <button
          className="btn btn-success"
          name="CM_TO_INCHES"
          onClick={(e) => handleSubmit(e)}
        >
          cm to inches
        </button>
        <button
          className="btn btn-danger"
          name="INCHES_TO_METERS"
          onClick={(e) => handleSubmit(e)}
        >
          inches to meters
        </button>
        <button
          className="btn btn-danger"
          name="INCHES_TO_FOOT"
          onClick={(e) => handleSubmit(e)}
        >
          inches to foot
        </button>
        <button
          className="btn btn-danger"
          name="FOOT_TO_INCHES"
          onClick={(e) => handleSubmit(e)}
        >
          foot to inches
        </button>
        <button
          className="btn btn-danger"
          name="METERS_TO_FOOT"
          onClick={(e) => handleSubmit(e)}
        >
          meters to foot
        </button>
        <button
          className="btn btn-danger"
          name="FOOT_TO_CM"
          onClick={(e) => handleSubmit(e)}
        >
          foot to cm
        </button>
        <button
          className="btn btn-danger"
          name="FOOT_TO_METERS"
          onClick={(e) => handleSubmit(e)}
        >
          foot to meters
        </button>
        <button
          className="btn btn-danger"
          name="CM_TO_YARDS"
          onClick={(e) => handleSubmit(e)}
        >
          cm to yards
        </button>
        <button
          className="btn btn-danger"
          name="YARDS_TO_CM"
          onClick={(e) => handleSubmit(e)}
        >
          yards to cm
        </button>
        <button
          className="btn btn-danger"
          name="METERS_TO_YARDS"
          onClick={(e) => handleSubmit(e)}
        >
          meters to yards
        </button>
        <button
          className="btn btn-dark"
          name="YARDS_TO_METERS"
          onClick={(e) => handleSubmit(e)}
        >
          yards to meters
        </button>
        <button
          className="btn btn-dark"
          name="YARDS_TO_KM"
          onClick={(e) => handleSubmit(e)}
        >
          yards to kilometers
        </button>
        <button
          className="btn btn-dark"
          name="KM_TO_YARDS"
          onClick={(e) => handleSubmit(e)}
        >
          kilometers to yards
        </button>
        <button
          className="btn btn-dark"
          name="METERS_TO_MILES"
          onClick={(e) => handleSubmit(e)}
        >
          meters to miles
        </button>
        <button
          className="btn btn-dark"
          name="MILES_TO_METERS"
          onClick={(e) => handleSubmit(e)}
        >
          miles to meters
        </button>
        <button
          className="btn btn-dark"
          name="CM_TO_MILES"
          onClick={(e) => handleSubmit(e)}
        >
          cm to miles
        </button>
        <button
          className="btn btn-dark"
          name="MILES_TO_CM"
          onClick={(e) => handleSubmit(e)}
        >
          miles to cm
        </button>
        <button
          className="btn btn-dark"
          name="MILES_TO_KM"
          onClick={(e) => handleSubmit(e)}
        >
          miles to kilometers
        </button>
        <button
          className="btn btn-secondary"
          name="KM_TO_MILES"
          onClick={(e) => handleSubmit(e)}
        >
          kilometers to miles
        </button>
        <button
          className="btn btn-secondary"
          name="YARDS_TO_MILES"
          onClick={(e) => handleSubmit(e)}
        >
          yards to miles
        </button>
        <button
          className="btn btn-secondary"
          name="MILES_TO_YARDS"
          onClick={(e) => handleSubmit(e)}
        >
          miles to yards
        </button>

        <p>The result is: {state.result} </p>
      </div>
    </>
  );
};

export default Measurament;
