import {
  Box,
  Button,
  Container,
  styled,
  Table,
  TableBody,
  TableCell,
  tableCellClasses,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    color: theme.palette.mode,
    border: 0,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    border: 0,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(name, memory, storage, bandwidth, pricing) {
  return { name, memory, storage, bandwidth, pricing };
}

const rows = [
  createData("Intel Xenon", 2, 40, 1, 5000),
  createData("Ice cream sandwich", 4, 50, 1, 6000),
  createData("Eclair", 6, 80, 2, 8000),
  createData("Cupcake", 8, 120, 2, 10000),
  createData("Gingerbread", 12, 150, 3, 12000),
];
export default function Server() {
    const theme = useTheme();
    const mode = theme?.palette?.mode;
  return (
    <>
      <Box sx={{ bgcolor: "background.default", pt: "3rem",}}>
        <Container maxWidth="lg">
          <Box sx={{ bgcolor: `${mode === 'dark' ? "dark" : "#fff"}`, px: "1.2rem", py: "2rem" }}>
            <Box>
              <Typography
                variant="h4"
                sx={{
                  color: "#1A73E8",
                  fontWeight: "bold",
                  textAlign: "center",
                  mb: "2rem",
                }}
              >
                Manage Virtual Server Solution
              </Typography>
            </Box>
            <TableContainer>
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell sx={{p:'0.5rem',fontSize:'1.3rem', fontWeight:'bold'}}>Processor</StyledTableCell>
                    <StyledTableCell align="right" sx={{p:'0.5rem',fontSize:'1.3rem', fontWeight:'bold'}}>Memory</StyledTableCell>
                    <StyledTableCell align="right" sx={{p:'0.5rem',fontSize:'1.3rem', fontWeight:'bold'}}>Storage1</StyledTableCell>
                    <StyledTableCell align="right" sx={{p:'0.5rem',fontSize:'1.3rem', fontWeight:'bold'}}>Storage2</StyledTableCell>
                    <StyledTableCell align="right" sx={{p:'0.5rem',fontSize:'1.3rem', fontWeight:'bold'}}>Bandwidth</StyledTableCell>
                    <StyledTableCell align="right" sx={{p:'0.5rem',fontSize:'1.3rem', fontWeight:'bold'}}>Pricing</StyledTableCell>
                    <StyledTableCell align="right" sx={{p:'0.5rem'}}></StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <StyledTableRow 
                      key={row.name}
                      sx={{
                        textAlign: "center",
                      }}
                    >
                      <StyledTableCell component="th" scope="row" sx={{p:'0.5rem'}}>
                        <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                          {row.name}
                        </Typography>
                        <Typography variant="body2" sx={{ color: "#ccc" }}>
                          2.4 GHz, 8 Cores, 16 Threads
                        </Typography>
                      </StyledTableCell>
                      <StyledTableCell align="right" sx={{p:'0.5rem'}}>
                        {row.memory} GB (DDR4)
                      </StyledTableCell>
                      <StyledTableCell align="right"sx={{p:'0.5rem'}}>{row.storage} GB NVme</StyledTableCell>
                      <StyledTableCell align="right"sx={{p:'0.5rem'}}>{row.storage} GB NVme</StyledTableCell>
                      <StyledTableCell align="right"sx={{p:'0.5rem'}}>
                        {row.bandwidth} TB include
                      </StyledTableCell>
                      <StyledTableCell align="right"sx={{p:'0.5rem'}}>
                        <Typography color={`${mode === 'dark' ? "#fff" : "#010E28"}`} variant="h6">
                          ৳ <span>{row.pricing}</span>
                          /mon
                        </Typography>
                      </StyledTableCell>
                      <StyledTableCell align="right"sx={{p:'0.5rem'}}>
                        <Button
                          variant="contained"
                          sx={{ bgcolor: "#010E28", color: "#fff" }}
                        >
                          Order Now
                        </Button>
                      </StyledTableCell>
                    </StyledTableRow>
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
