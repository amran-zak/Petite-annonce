import * as React from 'react'
import { useState, useRef } from 'react'
import { Box, List, Icon, Avatar, Badge, Button, Stack, styled, IconButton, Typography, Divider, ListItemIcon, ListItem, ListItemText } from '@mui/material'
import { PhotoCamera } from '@mui/icons-material'


import AuthServices from '../../../Services/Auth.services';

const SmallAvatar = styled(Avatar)(({ theme }) => ({
  width: 40,
  height: 40,
  border: `5px solid ${theme.palette.background.paper}`,
}))
const list = [
  {
    id: 1,
    name: "Nombre d'annonce",
    value: 10,
    icon: 'cottageicon',
  },
  {
    id: 2,
    name: "Nombre de favoris",
    value: 3,
    icon: 'favorite',
  },
  {
    id: 3,
    name: "Nombre de réservations",
    value: 1,
    icon: 'calendar_month',
  }
]
function Sidebar() {
  const [userProfile, setUserProfile] = useState('')
  const currentUser = AuthServices.getCurrentUser();

  const [data, setData] = React.useState(undefined);
  //   const { isOpen, onOpen, onClose } = useDisclosure()
  const profileImage = useRef(null)

  React.useEffect(() => {
    AuthServices.getUser(id).then(
      (response) => {
        console.log(response)
        setData(response.data)
        }).catch(
        (error) => {
          console.log(error.message);
        }
      );
  }, []);


  const changeProfileImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const ALLOWED_TYPES = ['image/png', 'image/jpeg', 'image/jpg']
    const files = event.target.files

    if (files) {
      const selected = files[0]

      if (selected && ALLOWED_TYPES.includes(selected.type)) {
        const reader = new FileReader()
        reader.onloadend = () => setUserProfile(String(reader.result))
        return reader.readAsDataURL(selected)
      }
    }
  }
  return (
      <Box
        sx={{
          transform: 'translateY(60px)',
          border: '1px solid #e9ebee',
          bgcolor: 'white',
          borderRadius: 3,
          width: '300px',
        }}
      >
        <Stack direction="column" alignItems="center" spacing={3} pt={5} pb={1}>
          <Badge
            sx={{ width: 'fit-content' }}
            overlap="circular"
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            badgeContent={
              <SmallAvatar sx={{ bgcolor: 'blue' }} alt="Remy Sharp">
                <IconButton aria-label="upload picture" component="label">
                  <input
                    ref={profileImage}
                    onChange={changeProfileImage}
                    hidden
                    accept="image/*"
                    type="file"
                  />{' '}
                  <PhotoCamera sx={{ color: 'white' }} />
                </IconButton>
              </SmallAvatar>
            }
          >
            <Avatar
              src={userProfile ? userProfile : '/img/tim-cook.jpg'}
              sx={{ width: 128, height: 128, cursor: 'pointer' }}
              alt="Travis Howard"
            ></Avatar>
          </Badge>
          <Stack direction="column" sx={{ marginTop: '16px !important' }} spacing={0}>
            <Typography variant="h6" fontSize="xl">
            {currentUser.firstname} {currentUser.lastname}
            </Typography>
            <Typography variant="caption" fontSize="sm">
              Compte actif depuis ...
            </Typography>
          </Stack>
        </Stack>

        <List sx={{ width: '100%', maxWidth: 360, mt: 5, bgcolor: 'background.paper' }}>
          <Divider light />
          {list.map((item) => (
            <ListItem key={item.name}>
              <ListItemIcon>
                <Icon>{item.icon}</Icon>
              </ListItemIcon>
              <ListItemText primary={item.name} />
              <Typography textAlign="end">{item.value}</Typography>
            </ListItem>
          ))}
        </List>
        <Divider light />
        <Stack p={5} spacing={3}>
          <Button variant="outlined" color="error"
                  sx={{ backgroundColor: 'transparent !important' }}
          >
            Supprimer votre compte
          </Button>
        </Stack>
      </Box>
  )
}

export default Sidebar
