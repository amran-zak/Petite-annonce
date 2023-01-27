import * as React from 'react'
import { Tabs, Tab, Typography, Box } from '@mui/material'
import CottageIcon from '@mui/icons-material/Cottage'
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import FavoriteIcon from '@mui/icons-material/Favorite';
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
      <Box px={3} pt={2} sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Informations personnelles" icon={<ManageAccountsIcon/>} {...a11yProps(0)} sx={{ backgroundColor: 'transparent !important' }}/>
          <Tab label="Vos annonces" icon={<CottageIcon/>} {...a11yProps(1)} sx={{ backgroundColor: 'transparent !important' }}/>
          <Tab label="Vos favoris" icon={<FavoriteIcon/>} {...a11yProps(2)} sx={{ backgroundColor: 'transparent !important' }}/>
          <Tab label="Vos réservations" icon={<CalendarMonthIcon/>} {...a11yProps(3)} sx={{ backgroundColor: 'transparent !important' }}/>
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <UserSettings/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <AnnouncementsList/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <FavouritesList/>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <ReservationsList/>
      </TabPanel>
    </Box>
  )
}