import * as React from 'react'
import { Box, Stack, Container } from '@mui/material'
import Sidebar from './Sidebar'
import Content from './Content'
import { Navigate } from 'react-router-dom';

import AuthServices from '../../../Services/Auth.services';


export default function UserProfile() {

    const currentUser = AuthServices.getCurrentUser();

    if(!currentUser.acces_token){
        return <Navigate replace to="/connexion"/>;
    }

    return (
        <Box>
            <Container
              maxWidth="xl"
              sx={{
                height: '100vh',
                backgroundColor: '#F9F9F9',
              }}
            >
                <Stack direction="row" spacing={8}>
                    <Box sx={{ width: '300px' }}>
                        <Sidebar></Sidebar>
                    </Box>
                    <Content></Content>
                </Stack>
            </Container>
        </Box>
    )
}

