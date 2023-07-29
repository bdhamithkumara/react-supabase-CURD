import * as React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {useState} from 'react'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import {supabase} from './supabase'

import { useRealtime , useFilter, useSelect  } from 'react-supabase'

import './App.css';

import DeleteIcon from '@mui/icons-material/Delete';

import ModeEditOutlinedIcon from '@mui/icons-material/ModeEditOutlined';
import Filter from './Fliter';
import Curd from './Curd';


function App() {

  return (
    <>
      <Curd/>
      <h1>Filter section By using name damith</h1>
      <Filter/>
    </>
  );
}

export default App;