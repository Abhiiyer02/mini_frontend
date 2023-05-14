import React from 'react'
import './loginPage.css'
import AuthContext from '../../context/AuthContext';
import { useContext } from 'react';
import { Paper,Box } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import TextField from '@mui/material/TextField';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

const style = {
  container: {
    padding: '0.75em 2em',
    display: 'flex',
    width: '24em',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  top: {
    textAlign: 'center',
  },
  text: {
    width: '100%',
    marginTop: '0.5em',
  }
}


function LoginPage() {
  let {login} = useContext(AuthContext)
  const [value, setValue] = React.useState('1')
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleSubmit = (e) => {
    let username, password
    e.preventDefault()
    if(value === '1') {
      username = document.getElementById('usn').value
      password = document.getElementById('stdpass').value
    }
    else {
      username = document.getElementById('username').value
      password = document.getElementById('adminpass').value
    }
    login(username, password)
  }

  return (
    <div className='main'>
      <Paper elevation = {24} sx={{borderRadius: "1rem"}}>
        <div style = {style.container}>
          <h2 style = {style.top}>SJCE, Mysore</h2>
          <h4 style = {style.top}>Open Elective Portal</h4>
          <TabContext value = {value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider', width: '100%'}}>
              <TabList onChange={handleChange} variant = "fullWidth">
                <Tab label="Student" value="1" />
                <Tab label="Admin" value="2" />
              </TabList>
            </Box>
            <TabPanel value="1" sx = {{padding: 0}}>
              <TextField
                name = 'USN'
                type = 'text'
                label='USN'
                id = 'usn'
                style = {style.text}
                placeholder = 'eg: useremail@gmail.com'
                required
                />
              <TextField
                name = 'password'
                type = 'password'
                label='password'
                id = 'stdpass'
                style = {style.text}
                placeholder = 'Enter your password here'
                required
              />
            </TabPanel>
            <TabPanel value="2" sx = {{padding: 0}}>
              <TextField
                name = 'username'
                type = 'text'
                label='Username'
                id = 'username'
                style = {style.text}
                placeholder = 'eg: useremail@gmail.com'
                required
              />
              <TextField
                name = 'password'
                type = 'password'
                label='password'
                id = 'adminpass'
                style = {style.text}
                placeholder = 'Enter your password here'
                required
              />
            </TabPanel>
          </TabContext>
          <Box textAlign='center'>
            <LoadingButton
              variant='contained'
              onClick = {handleSubmit}
              >Sign In
            </LoadingButton>
          </Box>
        </div>
      </Paper>
    </div>
  )
}

export default LoginPage