import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import s from './RegisterView.module.css';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function RegisterView () {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const classes = useStyles();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);

      case 'email':
        return setEmail(value);

      case 'password':
        return setPassword(value);

      default:
        return
    }
  }

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  }

  return (
    <div className={s.container}>
      <h1 className={s.title}>Registration page</h1>
      <form onSubmit={handleSubmit} className={classes.root} autoComplete="off">
        <TextField label="Name"
                   variant="filled"
                   type='text'
                   name='name'
                   value={name}
                   onChange={handleChange} />
        <TextField  label="Email"
                    variant="filled"
                    type='email'
                    name='email'
                    value={email}
                    onChange={handleChange} />
        <TextField  label="Password"
                    variant="filled"
                    type='password'
                    name='password'
                    value={password}
                    onChange={handleChange} />
        <Button type='submit' variant="contained" color="primary"  className={classes.root}>
          Register
        </Button>
      </form>
    </div>
  )
}