import './style/App.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: "#126D27",
      light: "#9FF79F", 
      dark: "#002105",
      contrastText: "#FFFFFF"
    },
    secondary: {
      main: "#BCEBF1",
      light: "#39656B", 
      dark: "#001F23",
      contrastText: "#FFFFFF"
    },

    background:{
      paper: "#FCFDF7",
      default: "#FCFDF7",
      surface2: "#E9F1E6",
      surface5: "#DBE9DA"
    }
  },
});

function App() {
  return (
    <Box className="App" sx={{backgroundColor: theme.palette.background.default}}>
      <ThemeProvider theme={theme}>
        <Box className="navigation" sx={{backgroundColor: theme.palette.background.surface2}}>
          <div className='header'>
            {/*Logo*/}
            <img className = "logo" src={require('./images/Logo.png')} />
            {/*Titolo*/}
            <Typography className = "title" variant="h5" color={theme.palette.primary.main}>Nome Azienda</Typography>
          </div>
        </Box>
        <Box className="body" sx={{backgroundColor: theme.palette.background.surface5}}>
          {/*Info boxes */}
          <Box className="infobox" sx={{backgroundColor: theme.palette.background.default}}>
            <Typography className = "left_title" variant="h5" color={theme.palette.primary.main}>Introduzione</Typography>
            <Typography className="left_paragraph" paragraph={true}>
              Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.<br/>Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex</Typography>
            <img className='right_image' src="http://architecturaldigest.jppadmin.com/wp-content/uploads/sites/8/2022/02/AdobeStock_332401066_70-scaled.jpeg"></img>
          </Box>
          <Box className="infobox" sx={{backgroundColor: theme.palette.background.default}}>
            <Typography className = "left_title" variant="h5" color={theme.palette.primary.main}>Paragrafo 1</Typography>
            <Typography className="left_paragraph" paragraph={true}>
              Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.<br/>Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex</Typography>
            <img className='right_image' src="http://architecturaldigest.jppadmin.com/wp-content/uploads/sites/8/2022/02/AdobeStock_332401066_70-scaled.jpeg"></img>
          </Box>
          <Box className="infobox" sx={{backgroundColor: theme.palette.background.default}}>
            <Typography className = "left_title" variant="h5" color={theme.palette.primary.main}>Paragrafo 2</Typography>
            <Typography className="left_paragraph" paragraph={true}>
              Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.<br/>Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex</Typography>
            <img className='right_image' src="http://architecturaldigest.jppadmin.com/wp-content/uploads/sites/8/2022/02/AdobeStock_332401066_70-scaled.jpeg"></img>
          </Box>
          <Box className="infobox" sx={{backgroundColor: theme.palette.background.default}}>
            <Typography className = "left_title" variant="h5" color={theme.palette.primary.main}>Paragrafo 3</Typography>
            <Typography className="left_paragraph" paragraph={true}>
              Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.<br/>Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex</Typography>
            <img className='right_image' src="http://architecturaldigest.jppadmin.com/wp-content/uploads/sites/8/2022/02/AdobeStock_332401066_70-scaled.jpeg"></img>
          </Box>

          <Box className="infobox" sx={{backgroundColor: theme.palette.background.default}}>
            <Typography className = "left_title" variant="h5" color={theme.palette.primary.main}>Conclusione</Typography>
            <Typography className="left_paragraph" paragraph={true}>
              Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.<br/>Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex</Typography>
            <img className='right_image' src="http://architecturaldigest.jppadmin.com/wp-content/uploads/sites/8/2022/02/AdobeStock_332401066_70-scaled.jpeg"></img>
          </Box>
        </Box>
      </ThemeProvider>
    </Box>
  );
}

export default App;
