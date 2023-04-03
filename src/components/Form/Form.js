import React, { useRef, useState } from 'react';
import './Form.css';
import FormGroup from '../FormGroup/FormGroup';
import { useForm, FormProvider } from 'react-hook-form';
import Papa from 'papaparse';
import Spinner from '../Spinner/Spinner';
import Button from '../Button/Button';

const Form = () => {

  const fileInput = useRef(null);

  const handleUpload = () => {
    fileInput.current.click();
  };

  const [file, setFile] = useState(undefined);
  const [fileName, setFileName] = useState(undefined);

  const onFileChange = (e) => {
    const file = e.target.files[0];

    Papa.parse(file, {
      complete: function (results) {
        setFile(results.data);
        setFileName(file.name);
      }
    });
  };

  // -------------------------------------------------------------------------------------------------------------------

  const [loading, setLoading] = useState(false);

  const form = useForm();
  const { handleSubmit } = form;

  const onSubmit = (data) => {
    setLoading(true);

    const OPTIONS_SMOOTHED = [];
    const OPTIONS_BATCHED = {};

    data.groups
      .filter((group) => group.name !== '')
      .forEach((group) => {
        if (group.action === 'smoothing') {
          OPTIONS_SMOOTHED.push(group.name);
        } else if (group.action === 'batching') {
          OPTIONS_BATCHED[group.name] = 12;
        } else {
          OPTIONS_SMOOTHED.push(group.name);
        }
      });

    const ORDERS = file.reduce((acc, row) => {
      acc += row.join(',') + '\n';
      return acc;
    }, "");

    const body = {
      "PLAN_REQUEST": {
        "MDL3": {
          "PLAN_PRIORITY": 1,
          "OPTIONS_SMOOTHED": OPTIONS_SMOOTHED,
          "OPTIONS_BATCHED": OPTIONS_BATCHED
        }
      },
      "ORDERS": ORDERS
    };

    fetch('https://u4zujhizp6.execute-api.us-east-1.amazonaws.com/prod/', {
      method: 'POST',
      body: JSON.stringify(body)
    })
      .then((res) => res.json())
      .then((res) => {
        const data = res.body.replace(/"/g, "").replace(/\\n/g, '\n');

        const blob = new Blob([data], { type: 'text/csv' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.setAttribute('href', url);
        a.setAttribute('download', 'download.csv');
        a.click();

        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      })
  };

  const formInputs = [1, 2, 3, 4, 5].map((i) => {
    return <FormGroup key={ i } i={ i }/>;
  });

  return (
    <FormProvider { ...form }>
      <form className="form" onSubmit={ handleSubmit(onSubmit) }>

        <div className="form__group file-group">
          <input key={fileName} hidden type="file" onChange={ onFileChange } ref={ fileInput }/>
          <Button type="button" onClick={ handleUpload }> Upload</Button>
          {fileName}
        </div>

        { formInputs }

        <footer className="form__footer">
          <Button type="submit"> Submit</Button>
          { loading && (
            <div className="form__footer-spinner">
              <Spinner/>
            </div>
          )}
        </footer>

      </form>
    </FormProvider>
  );
};

export default Form;
