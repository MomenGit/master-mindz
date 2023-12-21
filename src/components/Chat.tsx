import { Box, Container } from '@mui/material';

export function ChatTopBar() {
  return <Box></Box>;
}
export function ChatBottomBar() {
  return <Box></Box>;
}
export default function Chat() {
  return (
    <Container>
      <Box>
        <ChatTopBar />
        <Box></Box>
        <ChatBottomBar />
      </Box>
    </Container>
  );
}
