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


function Curd() {
  const [detail,setDetail] = useState({
    name : '',
  })

  const [ selectID , getSelectID] = useState(0)

 const [result, reexecute] = useRealtime('details');

 const { data, fetching, error } = result

 if (fetching) return <p>Loading...</p>
 if (error) return <p>Oh no... {error.message}</p>
 if (error) console.log(error)
  
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

  return (
    <>
      <TextField
        id="outlined-basic"
        label="Name"
        variant="outlined"
        type='text'
        style={{ marginTop: "15px" }}
        onChange={(e) => setDetail({...detail, name:e.target.value})}
        value={detail.name}
      />
      <TextField 
        id="outlined-basic" 
        label="Age"
        type='number' 
        variant="outlined" 
        style={{ marginTop: "15px" }} 
        onChange={(e) => setDetail({...detail, age:e.target.value})}
        value={detail.age}
      />
      <Button variant="contained" style={{ marginTop: "55px", marginLeft: "10px" }} onClick={handleSave}>
        Save
      </Button>
      <Button variant="contained" style={{ marginTop: "55px", marginLeft: "10px" }} onClick={handleUpdate}>
        Update
      </Button>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Age</TableCell>
              <TableCell align="right">Date</TableCell>
              <TableCell align="right">Option</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
           {data && data.map((detail,i) => (
              <TableRow key={i}>
                <TableCell component="th" scope="row">{detail.id}</TableCell>
                <TableCell align="right">{detail.name}</TableCell>
                <TableCell align="right">{detail.age}</TableCell>
                <TableCell align="right">{detail.created_at}</TableCell>
                <TableCell align="right"> 
                <Button variant="outlined" startIcon={<DeleteIcon />} onClick={() => {handleDelete(detail.id)}}>
                Delete
              </Button>
              <Button variant="outlined" startIcon={<ModeEditOutlinedIcon />} onClick={() => {
                getSelectID(detail.id)
                setDetail({...detail, name:detail.name})
                setDetail({...detail, age:detail.age})
              }}>
              Edit
            </Button>
                </TableCell>
              </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default Curd;