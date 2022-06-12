import React from 'react'
import { Box, Stack, Typography, Button } from '@mui/material';

import HeroBannerImage from '../assets/images/banner.png'

const HeroBanner = () => {
    return (
        <Box sx={{ mt: { lg: '150px', xs: '70px' }, ml: { sm: '50px' } }} position="relative" p="20px">
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
            <Typography fontSize="200px" lineHeight="35px" mb={2}
            fontWeight={600}
            color="#EE2625"
            sx={{
                position: 'absolute',
                top: 400,
                zIndex: -10,
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
            <Button variant='contained'
                color="error" href="#exercises"
                sx={{ backgroundColor: '#ff2625',
            padding: '15px'}}
            >
                Explore Exercises
            </Button>
            <img src={HeroBannerImage} alt="banner" className='hero-banner-img' />
        </Box>
    )
}

export default HeroBanner