import { createTheme } from '@mui/material'
import { grey } from '@mui/material/colors'

export const theme = createTheme({
  palette: {
    grey: { main: grey[300] },
    primary: {
      light: '#a4e1ff',
      main: '#6eaffb',
      dark: '#3280c8',
      contrastText: '#fff',
    },
    secondary: {
      light: '#6eff88',
      main: '#00ff55',
      dark: '#00ca1b',
      contrastText: '#000',
    },
  },
})
