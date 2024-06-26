import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';



  
  const cards = [1, 2, 3];
  
  // TODO remove, this demo shouldn't need to reset the theme.
  const defaultTheme = createTheme();
  
  export default function Album() {
    return (
      <ThemeProvider theme={defaultTheme}>
        <CssBaseline />
        
        <main>
          {/* Hero unit */}
          <Box
            sx={{
              bgcolor: 'background.paper',
              pt: 8,
              pb: 6,
            }}
          >
            <Container maxWidth="sm">
              <Typography
                component="h1"
                variant="h2"
                align="center"
                color="text.primary"
                gutterBottom
              >
                Connected Healthcare
              </Typography>
              <Typography variant="h5" align="center" color="text.secondary" paragraph>
              Introducing our cutting-edge IoT-based Real Time Vital Monitoring System – a revolutionary solution designed to empower individuals
               with real-time health insights. 
              </Typography>
              {/* <Stack
                sx={{ pt: 4 }}
                direction="row"
                spacing={2}
                justifyContent="center"
              >
                <Button variant="contained">Login</Button>
                <Button variant="outlined">Signup</Button>
              </Stack> */}
            </Container>
          </Box>
        </main>
        {/* Footer */}
        <Box sx={{ bgcolor: 'background.paper', p: 5 }} component="footer">
          
          <Typography
            variant="subtitle1"
            align="center"
            color="text.secondary"
            component="p"
          >
            Made with ❤️
          </Typography>
         
        </Box>
        {/* End footer */}
      </ThemeProvider>
    );
  }