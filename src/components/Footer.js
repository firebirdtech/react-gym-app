import React from 'react'
import { Box, Stack, Typography } from '@mui/material';

import logo from '../assets/images/Logo-1.png'

const Footer = () => {
  return (
    <Box>
      <Stack gap="40px" alignItems="center" px="40px" pt="24px">
        <img src={logo} alt="logo" width="200px" heigth="40px" />
        <Typography variant="h5" pb="40px" mt="20px">
          Made with ❤❤️by Neel Ratan
        </Typography>
      </Stack>
    </Box>
  )
}

export default Footer