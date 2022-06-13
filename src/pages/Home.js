import React, { useState } from 'react'
import { Box } from '@mui/material';
import HeroBanner from '../components/HeroBanner';
import SearchExercises from '../components/SearchExercises'
import Exercises from '../components/Exercises'

const Home = () => {
  const [bodyPart, setBodyPart] = useState('back')
  const [exercise, setExercise] = useState([])
  return (
    <Box>
      <HeroBanner />
      <SearchExercises
        setExercise={setExercise}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart} />
      <Exercises
        setExercise bodypart setBodyPart
      />
    </Box>
  )
}

export default Home