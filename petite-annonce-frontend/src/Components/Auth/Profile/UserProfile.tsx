import { Box, Stack, Container } from '@mui/material'
import Sidebar from './Sidebar'
import Content from './Content'

function UserProfile(): JSX.Element {
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

export default UserProfile
