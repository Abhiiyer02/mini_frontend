import React from 'react'
import AuthContext from '../context/AuthContext';
import { useContext } from 'react';
import { Paper,Box } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import TextField from '@mui/material/TextField';

const style = {
  main:{
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'url(../../assets/images/background.png)',
    backgroundSize: 'cover',
    minWidth: '100%',
    minHeight: '100%',
  },

  container: {
    padding: '1rem',
  },

  top: {
    textAlign: 'center',
    margin: '0',
  },
}

function LoginPage() {
  let {login} = useContext(AuthContext)

  return (
    <div style={style.main}>
      <Paper elevation = {12} sx={{borderRadius: "1rem"}}>
        <div style = {style.container}>
          <h2 className = 'top'>SJCE</h2>
          <h4 className = 'top'>Open Elective Portal</h4>
          
          <form onSubmit={(e) => login(e)}>
            <TextField
              className = 'text email'
              name = 'email'
              type = 'email'
              label='email'
              placeholder = 'eg: useremail@gmail.com'
              required
            />
            <TextField
                className = 'text'
                name = 'password'
                type = 'password'
                label='password'
                placeholder = 'enter your password here'
                required
            />
            <h6 className='forgot-password'>Forgot your password?</h6>
            <Box textAlign='center'>
              <LoadingButton
              type = 'submit'
              variant='contained'
              className = 'sign-in'
              >Sign In</LoadingButton>
            </Box>
          </form>
        </div>
        </Paper>
    </div>
  )
}

export default LoginPage