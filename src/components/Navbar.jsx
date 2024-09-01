import { Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom'; 
import React from 'react'
import {logo} from './utils/constants';
import SearchBar from './SearchBar';

const Navbar = () => {
  return (
    <Stack direction='row' alignItems='center' p={2} sx={{position:'sticky',background:'#000',justifyContent:'space-between'}}>
      <Link to='/' style={{display:'flex',alignItems:'center'}}>
        <img src={logo} alt="logo" height={45}/>
      </Link>
      <SearchBar />
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Link to="/login" style={{ color: 'red', textDecoration: 'none', onMouseOver: { textDecoration: 'underline red' }, marginRight: '10px' }}>
          Login
        </Link>
        <Link to="/settings" style={{ color: 'red', textDecoration: 'none', onMouseOver: { textDecoration: 'underline red' } }}>
          Settings
        </Link>
      </Stack>
    </Stack>
    
  )
}

export default Navbar