import { ThemeProvider } from '@emotion/react';
import { createTheme, MenuItem, TextField } from '@mui/material'
import React from 'react'
import "./Header.css"
import categories from '../../data/category';

const Header = ({category, setCategory, word,setWord}) => {

    const darkTheme = createTheme({
        palette: {
            primary:{
                main:"#ffffff"
            },
          type: 'dark',
        },
      });

      const handleChange = (Language)=>{
           setCategory(Language);
           setWord("");
      };
    
  return (
    <div className='header'>
        <span className='title'>{word ? word : "Word Hunt"}</span>
        <div className='input'>
            <ThemeProvider theme={darkTheme}>

            <TextField className='search' label="Search a Word"
            value={word} onChange={(e)=>setWord(e.target.value)}></TextField>
            <TextField className='select'
            select
         label="Select"
          value={category}
          onChange={(e)=> handleChange(e.target.value)}
          helperText="Please select your Language"
        > 
               {
                categories.map((options)=>{
                return ( <MenuItem key={options.label} value={options.label}> 
            {options.value}
            </MenuItem> )

                })
               }
          
        </TextField>

            </ThemeProvider>
        </div>
    </div>
  )
}

export default Header