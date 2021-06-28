import React, {
  useState,
  useEffect,
  useContext,
  useReducer,
  useRef,
} from 'react';
import Outlets from '../components/Outlets';
import { useForm } from 'react-hook-form';

function index(props) {
  const [outlets, setOutlet] = useState([
    { id: '1', name: 'outlet1' },
    { id: '2', name: 'outlet2' },
  ]);

  const { handleSubmit, register, errors } = useForm();
  const onSubmit = (values) => {
    setOutlet({ ...outlets, values });
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          name='outlet'
          ref={register({
            required: 'Required',
          })}
        />
        {errors.outlet && errors.outlet.message}

        <input
          name='username'
          ref={register({
            validate: (value) => value !== 'admin' || 'Nice try!',
          })}
        />
        {errors.username && errors.username.message}

        <button type='submit'>Submit</button>
      </form>
      {/* <Outlets data={outlets} /> */}
    </>
  );
}

export default index;
