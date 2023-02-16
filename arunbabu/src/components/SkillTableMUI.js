import React from 'react'
import { descriptions } from '../setup'
import MaterialTable from 'material-table'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


export default function SkillTableMUI(props){


    const experienceList = ["skill", "experience","version","last_used"]
    const {data, title} = props
    const tempCols = experienceList.map( (key) => {
        return ( { title: descriptions[key].name, field: key } ) } )       
    
    const newData = data.map( d => {
        const {skill,experience_years, experience_months,version, last_used} = d
        return {skill,experience: `${experience_years} years ${experience_months} months`,version, last_used}
    })


  return (
    <TableContainer >
      <Table sx={{ maxWidth: 800 }} aria-label="Skill table">
        <TableHead>
          <TableRow>
            <TableCell>Skill</TableCell>
            <TableCell align="right">Experience</TableCell>
            <TableCell align="right">Version</TableCell>
            <TableCell align="right">Last Used</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {newData.map((row) => (
            <TableRow
              key={row.skill}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.skill}
              </TableCell>
              <TableCell align="right">{row.experience}</TableCell>
              <TableCell align="right">{row.version}</TableCell>
              <TableCell align="right">{row.last_used}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
