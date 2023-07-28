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
  const [detail,setDetail] = useState({
    name : '',
  })

  const [status , setStatus] = useState('damith')

  const [ selectID , getSelectID] = useState(0)

 // const [result, reexecute] = useRealtime('details',{filter});

 // const { data, fetching, error } = result

 // if (fetching) return <p>Loading...</p>
 // if (error) return <p>Oh no... {error.message}</p>
 // if (error) console.log(error)
  
  const handleSave = async() => {
    await supabase.from('details')
    .insert(detail)
  }

  const handleUpdate = async() => {
    
  await supabase
    .from('details')
    .update(detail)
    .eq('id', selectID )
    .select()

  }

  const handleDelete = async(deatis_id) => {
    await supabase
    .from('details')
    .delete()
    .eq('id', deatis_id)
  }

  const handleFilter = () => {

  }


  const [username, setUsername] = useState('damith');
  const filter = useFilter(
    (query) => query.eq('name', username),
  )

  const [results, reexecute] = useSelect('details', {
    filter
  })

  const { data, fetching, error } = results 

  return (
    <>
      <Curd/>
      <h1>Filter section By using name damith</h1>
      <Filter/>
    </>
  );
}

export default App;