import React from 'react'
import { Box, Stack, Typography, Button } from '@mui/material';

import HeroBannerImage from '../assets/images/banner.png'

const HeroBanner = () => {
    return (
        <Box sx={{ mt: { lg: '150px', xs: '70px' }, ml: { sm: '50px' } }} position="relative" p="20px"
        mb={30}>
            <Typography color="#FF2625"
                fontWeight="600"
                fontSize="26px"
                mb="30px"
            >
                Fitness Club
            </Typography>
            <Typography fontWeight="700"
                sx={{
                    fontSize: {
                        lg: '44px',
                        xs: '40px'
                    }
                }}
                mb="20px"
            >
                Sweat, smile <br /> And Repeat
            </Typography>
            <Typography fontSize="22px" lineHeight="35px" mb={2}>
                Check out the most effective exercises.
            </Typography>
            <Button variant='contained'
                color="error" href="#exercises"
                sx={{ backgroundColor: '#ff2625',
            padding: '15px'}}
            >
                Explore Exercises
            </Button>
            <Typography fontSize="200px" lineHeight="35px"
            fontWeight={600}
            mt={10}
            color="#EE2625"
            sx={{
                opacity: 0.1,
                display: {
                    md: 'block',
                    sm: 'none',
                    xs: 'none'
                }
            }}
            >
                Exercise
            </Typography>
            <img src={HeroBannerImage} alt="banner" className='hero-banner-img'
            />
        </Box>
    )
}

export default HeroBanner