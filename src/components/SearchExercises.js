import React, { useEffect, useState } from 'react'
import { Box, Button, Stack, TextField, Typography } from '@mui/material';

const SearchExercises = () => {
  const [text, setText] = useState("")
  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography fontWeight={700} sx={{
        fontSize: {
          lg: '44px',
          xs: '30px'
        },
        textAlign: 'center'
      }}>
        Awesome Exercise You <br /> Should Know
      </Typography>
      <Box position="relative" mb="72px" sx={{
        flexDirection: 'row',
        display: 'flex',
        alignItems: 'center',
        gap: '20px'
      }}>
        <TextField
          height="76px"
          value={text}
          onChange={(e) => { setText(e.target.value) }}
          placeholder="Search Exercises"
          type="text"
          inputProps={{ style: { textAlign: 'center' } }}
          sx={{
            input: {
              fontWeight: '700',
              border: 'none',
              borderRadius: '4px'
            },
            width: {
              lg: '1000px',
              xs: '350px'
            },
            backgroundColor: '#fff',
            borderRadius: '40px'
          }}
        />
        <Button className="search-btn" sx={{
          bgcolor: '#FF2625',
          color: '#fff',
          textTransform: 'none',
          width: {
            lg: '175px',
            xs: '80px'
          },
          fontSize: { lg: '20px', xs: '14px' },
          height: '56px'
        }}>
          Search
        </Button>
      </Box>
    </Stack>
  )
}

export default SearchExercises