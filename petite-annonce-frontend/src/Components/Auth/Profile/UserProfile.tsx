import * as React from 'react'
import { Box, Stack, Container } from '@mui/material'
import Sidebar from './Sidebar'
import Content from './Content'

export default function UserProfile() {
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

