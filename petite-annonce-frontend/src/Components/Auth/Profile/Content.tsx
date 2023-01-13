import * as React from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import UserSettings from './Steps/UserSettings'
import AnnouncementsList from './Steps/AnnouncementsList'
import FavouritesList from './Steps/FavouritesList'
import ReservationsList from './Steps/ReservationsList'

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

function a11yProps(index: number) {
  return {
    'id': `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  return (
    <Box
      sx={{
        width: '100%',
        transform: 'translateY(60px)',
        border: '1px solid #e9ebee',
        bgcolor: 'white',
        borderRadius: 3,
      }}
    >
      <Box pl={3} pt={2} sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Informations Personnelles" {...a11yProps(0)} />
          <Tab label="Vos annonces" {...a11yProps(1)} />
          <Tab label="Vos favoris" {...a11yProps(2)} />
          <Tab label="Vos réservations" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <UserSettings></UserSettings>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <AnnouncementsList></AnnouncementsList>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <FavouritesList></FavouritesList>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <ReservationsList></ReservationsList>
      </TabPanel>
    </Box>
  )
}
