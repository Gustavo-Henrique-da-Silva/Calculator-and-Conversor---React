import React, { useState, useReducer } from 'react';
import { reducer } from './reducer';

const defaultState = {
  result: 0,
};

const Data = () => {
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
      <h1>Conversor for Data</h1>
      <div className="mb-3">
        <input
          type="number"
          step="any"
          className="form-control"
          value={number}
          onChange={(e) => {
            setNumber(e.target.value) || 0;
          }}
        />
      </div>

      <div className="container">
        <button
          className="btn btn-primary"
          name="BYTE_TO_BIT"
          onClick={(e) => handleSubmit(e)}
        >
          byte to bit
        </button>
        <button
          className="btn btn-primary"
          name="BIT_TO_BYTE"
          onClick={(e) => handleSubmit(e)}
        >
          bit to byte
        </button>
        <button
          className="btn btn-primary"
          name="BYTE_TO_KB"
          onClick={(e) => handleSubmit(e)}
        >
          byte to kilobyte
        </button>
        <button
          className="btn btn-primary"
          name="KB_TO_BYTE"
          onClick={(e) => handleSubmit(e)}
        >
          kilobyte to byte
        </button>
        <button
          className="btn btn-primary"
          name="BYTE_TO_MB"
          onClick={(e) => handleSubmit(e)}
        >
          byte to megabyte
        </button>
        <button
          className="btn btn-primary"
          name="MB_TO_BYTE"
          onClick={(e) => handleSubmit(e)}
        >
          megabyte to byte
        </button>
        <button
          className="btn btn-primary"
          name="MB_TO_KB"
          onClick={(e) => handleSubmit(e)}
        >
          megabyte to kilobyte
        </button>
        <button
          className="btn btn-warning"
          name="KB_TO_MB"
          onClick={(e) => handleSubmit(e)}
        >
          kilobyte to megabyte
        </button>
        <button
          className="btn btn-warning"
          name="MB_TO_GB"
          onClick={(e) => handleSubmit(e)}
        >
          megabyte to gigabyte
        </button>
        <button
          className="btn btn-warning"
          name="GB_TO_MB"
          onClick={(e) => handleSubmit(e)}
        >
          gigabyte to megabyte
        </button>
        <button
          className="btn btn-warning"
          name="GB_TO_KB"
          onClick={(e) => handleSubmit(e)}
        >
          gigabyte to kilobyte
        </button>
        <button
          className="btn btn-warning"
          name="KB_TO_GB"
          onClick={(e) => handleSubmit(e)}
        >
          kilobyte to gigabyte
        </button>
        <button
          className="btn btn-warning"
          name="GB_TO_MB"
          onClick={(e) => handleSubmit(e)}
        >
          gigabyte to megabyte
        </button>
        <button
          className="btn btn-info"
          name="MB_TO_GB"
          onClick={(e) => handleSubmit(e)}
        >
          megabyte to gigabyte
        </button>
        <button
          className="btn btn-info"
          name="TB_TO_MB"
          onClick={(e) => handleSubmit(e)}
        >
          terabyte to megabyte
        </button>
        <button
          className="btn btn-info"
          name="MB_TO_TB"
          onClick={(e) => handleSubmit(e)}
        >
          megabyte to terabyte
        </button>
        <button
          className="btn btn-info"
          name="TB_TO_GB"
          onClick={(e) => handleSubmit(e)}
        >
          terabyte to gigabyte
        </button>
        <button
          className="btn btn-info"
          name="GB_TO_TB"
          onClick={(e) => handleSubmit(e)}
        >
          gigabyte to terabyte
        </button>
        <button
          className="btn btn-info"
          name="GB_TO_PB"
          onClick={(e) => handleSubmit(e)}
        >
          gigabyte to petabyte
        </button>
        <button
          className="btn btn-light"
          name="PB_TO_GB"
          onClick={(e) => handleSubmit(e)}
        >
          petabyte to gigabyte
        </button>
        <button
          className="btn btn-light"
          name="TB_TO_PB"
          onClick={(e) => handleSubmit(e)}
        >
          terabyte to petabyte
        </button>
        <button
          className="btn btn-light"
          name="PB_TO_TB"
          onClick={(e) => handleSubmit(e)}
        >
          petabyte to terabyte
        </button>

        <p>The result is: {state.result} </p>
      </div>
    </>
  );
};

export default Data;
