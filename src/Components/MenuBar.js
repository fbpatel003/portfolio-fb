import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import IntegrationInstructionsTwoToneIcon from '@mui/icons-material/IntegrationInstructionsTwoTone';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: [
      'Lobster',
      'serif',
    ].join(','),
    fontSize:15,
  },});


const pages = ['Home', 'About me', 'Skills', 'Portfolio', 'Contact me'];

function MenuBar() {

  return (
    <AppBar sx={{ background: "linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)" }} position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <IntegrationInstructionsTwoToneIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Coding is Love..!!
          </Typography> 

          <ThemeProvider theme={theme}>
          <Box className='MenuNavButtons' sx={{ flexGrow: 1 , display: 'flex', justifyContent: 'flex-end', }}>
            {pages.map((page) => (
              <Button
                key={page}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>
          </ThemeProvider>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Fenil Babariya">
              <IconButton sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src={require('../Images/logoImage.jpg')} />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default MenuBar;