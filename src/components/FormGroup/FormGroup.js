import React from 'react';
import './FormGroup.css';
import { useFormContext } from 'react-hook-form';

const FormGroup = ({ i }) => {

  const { register } = useFormContext();

  const onBatchingChange = () => {

  }

  return (
    <div className="form__group">
      <div className="form__group-input-wrapper">
        <label className="form__group-label" htmlFor={i}>Group {i}</label>
        <input className="form__group-input" id={i} type="text" {...register(`groups.${i}.name`)}/>
      </div>


      <div className="form__group-radio">
        <input id={`groups.${i}.action.s`} type="radio" {...register(`groups.${i}.action`)} name={`groups.${i}.action`} value='smoothing' defaultChecked/>
        <label htmlFor={`groups.${i}.action.s`} className="form__group-radio-label">Smoothing</label>
      </div>

      <div className="form__group-radio">
        <input id={`groups.${i}.action.b`} type="radio" {...register(`groups.${i}.action`)} name={`groups.${i}.action`} value='batching'/>
        <label htmlFor={`groups.${i}.action.b`} className="form__group-radio-label">Batching</label>
      </div>
    </div>
  );
};

export default FormGroup;
