import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, makeStyles } from "@mui/material";
import "./index.scss"
import React from 'react';
import styled from "@emotion/styled";


const columns = [
  { id: 'dat', label: 'Date', width: 100 },
  { id: 'employeeName', label: 'Employee Name', width: 150 },
  { id: 'designation', label: 'Designation', width: 120 },
  { id: 'rateHover', label: 'Rate/Hover', width: 100 },
  { id: 'workingHours', label: 'Working Hours', width: 120 },
  { id: 'total', label: 'Total', width: 80 },
  { id: 'overtime', label: 'Over-Time', width: 100 },
  { id: 'overtimeCollections', label: 'Overtime Collections', width: 150 },
  { id: 'drivingTraveling', label: 'Driving/Traveling', width: 130 },
  { id: 'sickness', label: 'Sickness', width: 80 },
  { id: 'otherAllowances', label: 'Other Allowances', width: 150 },
  { id: 'grandTotal', label: 'Grand Total', width: 100 },
  { id: 'description', label: 'Description', width: 150 },
  { id: 'edit', label: 'Edit', width: 50 },
];

const useStyles = styled({
    root: {
      width: '100%',
    },
    container: {
      maxHeight: 440,
    },
  });

  const rows = [
    {
      dat: '2023-09-16',
      employeeName: 'John Doe',
      designation: 'Manager',
      rateHover: '$25',
      workingHours: '40',
      total: '$1000',
      overtime: '5',
      overtimeCollections: '$125',
      drivingTraveling: '$50',
      sickness: '2',
      otherAllowances: '$75',
      grandTotal: '$1252',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    // Add more rows as needed
  ];

  const StyledTableCell = styled(TableCell)({
    borderLeft: '1px solid rgba(0, 0, 0, 0.1)',
  });


const Daily = () => {
    const classes = useStyles();


    return (
        <>
            <h1 className="tu">Daily Reposrt</h1>

            <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align="center"
                  style={{ width: column.width }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, rowIndex) => (
              <TableRow key={rowIndex}>
                {columns.map((column) => (
                  <TableCell key={column.id} align="center">
                    {row[column.id]}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
        </>
    )
}

export default Daily;