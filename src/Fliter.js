import * as React from 'react';

import Button from '@mui/material/Button';
import {useState ,useEffect} from 'react'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import {supabase} from './supabase'

import {useFilter, useSelect  } from 'react-supabase'

import './App.css';

import DeleteIcon from '@mui/icons-material/Delete';

function Filter() {

  const [status , setStatus] = useState('damith')

  const [ selectID , getSelectID] = useState(0)


  const handleDelete = async(deatis_id) => {
    await supabase
    .from('details')
    .delete()
    .eq('id', deatis_id)
  }



  const [username, setUsername] = useState('damith');
  const filter = useFilter(
    (query) => query.eq('name', username),
  )

  const [results, reexecute] = useSelect('details', {
    filter
  })

  const { data, fetching, error } = results 

  useEffect(() => {
    
  }, [])
  

  return (
    <>
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
                </TableCell>
              </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default Filter;