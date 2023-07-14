import {
  Box,
  Button,
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("vCPU", '1 Core', 6.0, 24, 4.0),
  createData("Memory(RAM)", '1GB', 9.0, 37, 4.3),
  createData("SSD Storage", '20 GB', 16.0, 24, 6.0),
  createData("Multi Core", '60B', 3.7, 67, 4.3),
  createData("Bandwidth", '1TB', 16.0, 49, 3.9),
  createData("Inode Limit", '✓', '✓', '✓', '✓'),
  createData("Dedicated IP", '✓', '✓', '✓', '✓'),
  createData("Full Root Access", '✓', '✓', '✓', '✓'),
  createData("", <Button variant="outlined" sx={{borderRadius:'20px'}}>Select</Button>, <Button variant="outlined"sx={{borderRadius:'20px'}}>Select</Button>, <Button variant="outlined"sx={{borderRadius:'20px'}}>Select</Button>, <Button variant="outlined"sx={{borderRadius:'20px'}}>Select</Button>),
];
export default function Package() {
  return (
    <>
      <Box sx={{ bgcolor: "background.default", pb: "3rem", color:'text.primary' }}>
        <Container maxWidth={"lg"}>
            <Box sx={{py:'2rem', textAlign:'center'}}>
            <Typography variant="h4" sx={{mb:2}}>We Have Perfect Web Hosting for You</Typography>
            <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat, quod!</span>
            </Box>
          <Box>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ border: "1px solid lightgray", bgcolor:'#001043', color:'#fff' }}>
                    Plan Feature
                    </TableCell>
                    <TableCell align="center" sx={{ border: "1px solid lightgray",bgcolor:'#164FF4', color:'#fff' }}>
                    VPS-1
                    </TableCell>
                    <TableCell align="center" sx={{ border: "1px solid lightgray",bgcolor:'#164FF4', color:'#fff' }}>
                    VPS-2
                    </TableCell>
                    <TableCell align="center" sx={{ border: "1px solid lightgray",bgcolor:'#164FF4', color:'#fff' }}>
                    VPS-3
                    </TableCell>
                    <TableCell align="center" sx={{ border: "1px solid lightgray",bgcolor:'#164FF4', color:'#fff' }}>
                    VPS-4
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow
                      key={row.name}
                    //   sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell
                        component="th"
                        scope="row"
                        sx={{ border: "1px solid lightgray" }}
                      >
                        {row.name}
                      </TableCell>
                      <TableCell align="center" sx={{ border: "1px solid lightgray" }}>
                        {row.calories}
                      </TableCell>
                      <TableCell align="center" sx={{ border: "1px solid lightgray" }}>
                        {row.fat}
                      </TableCell>
                      <TableCell align="center" sx={{ border: "1px solid lightgray" }}>
                        {row.carbs}
                      </TableCell>
                      <TableCell align="center" sx={{ border: "1px solid lightgray" }}>
                        {row.protein}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Container>
      </Box>
    </>
  );
}
