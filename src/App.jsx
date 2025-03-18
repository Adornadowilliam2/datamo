import { useState } from 'react';
import './App.css';
import { Box, Button, FormControl, TextField, Typography } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';  // Import necessary MUI components

function App() {
  // State to store the input year and grade output
  const [year, setYear] = useState('');
  const [grade, setGrade] = useState('');

  // Year-to-grade mapping
  const yearGradeMapping = {
    2012: 'Grade 1',
    2013: 'Grade 2',
    2014: 'Grade 3',
    2015: 'Grade 4',
    2016: 'Grade 5',
    2017: 'Grade 6',
    2018: 'Grade 7 (Junior High)',
    2019: 'Grade 8 (Junior High)',
    2020: 'Grade 9 (Junior High)',
    2021: 'Grade 10 (Junior High)',
    2022: 'Grade 11 (Senior High)',
    2023: 'Grade 12 (Senior High)',
    2024: 'College 1st year',
    2025: 'College 2nd year',
    2026: 'College 3rd year',
    2027: 'College 4th year'
  };

  // Function to calculate grade based on year
  const calculateGrade = () => {
    // Get the corresponding grade from the yearGradeMapping object
    const calculatedGrade = yearGradeMapping[year];

    if (calculatedGrade) {
      setGrade(`Your grade for the year ${year} is: ${calculatedGrade}`);
    } else {
      setGrade('Invalid year for K-12 system');
    }
  };


  const theme = createTheme({
    typography: {
      fontFamily: 'Pixelify Sans, sans-serif',  
    },
  });

  return (
    <ThemeProvider theme={theme}>
    <Box className="text-white bg-gray-400 fixed left-0 right-0 p-2">GradeCalculator</Box>  
      <Box className="App flex h-[100vh] justify-center items-center flex-col">
        <FormControl className='bg-white ' sx={{ p: 2 }}>
          <Typography className='text-red-500 font-bold text-2xl'>
            K-12 Grade Level Calculator (Philippines) based on Year 2005
          </Typography>
          <Box>
            <TextField
              type="number"
              id="year"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              placeholder="Enter the year (e.g., 2024):"
              fullWidth
              required
            />
          </Box>
          <Button variant="contained" sx={{ mt: 2 }} onClick={calculateGrade}>Calculate Grade Level</Button>

          <Box sx={{ mt: 2 }}>
            {grade && <p>{grade}</p>}
          </Box>
        </FormControl>
      </Box>
    </ThemeProvider>
  );
}

export default App;
