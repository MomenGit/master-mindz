import { Box, Stack } from '@mui/material';
import Image from 'next/image';

export function MessageContent(props: { content: string }) {
  return <Box>{props?.content}</Box>;
}
export function ChatMessage(props: { imgSrc: string; content: string }) {
  return (
    <Stack>
      <Image src={props?.imgSrc} alt="" />
      <MessageContent content={props?.content} />
    </Stack>
  );
}
