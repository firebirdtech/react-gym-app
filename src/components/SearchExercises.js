import React, { useEffect, useState } from 'react'
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import { exerciseOptions, fetchData } from '../utils/fetchData';
import HorizontalScrollbar from './HorizontalScrollbar';

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
  const [text, setText] = useState("")
  const [exercisesData, setExercisesData] = useState([])
  const [bodyParts, setBodyParts] = useState([])

  useEffect(() => {
    const fetchBodyPartData = async () => {
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions)
      setBodyParts(['all', ...bodyPartsData])
    }

    const fetchExerciseData = async () => {
      const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions)

      setExercises(exercisesData)
    }

    fetchExerciseData();
    fetchBodyPartData();
  }, [])

  const handleSearch = async () => {
    if (text) {
      const exerciseData = await fetchData(
        'https://exercisedb.p.rapidapi.com/exercises', exerciseOptions
      );

      const searchedExcercises = exerciseData.filter((exercise) => exercise.name.toLowerCase().includes(text.toLowerCase())
        || exercise.target.toLowerCase().includes(text.toLowerCase())
        || exercise.equipment.toLowerCase().includes(text.toLowerCase())
        || exercise.bodyPart.toLowerCase().includes(text.toLowerCase())
      )
      setText('')
      setExercises(searchedExcercises)
      window.scrollTo({ top: 1600, left: 100, behavior: 'smooth' })
    }
  }

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

        }}
          onClick={handleSearch}>
          Search
        </Button>
      </Box>
      <Box sx={{
        position: 'relative',
        width: '100%',
        p: '20px'
      }}>
        <HorizontalScrollbar data={bodyParts}
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
        />
      </Box>
    </Stack>
  )
}

export default SearchExercises