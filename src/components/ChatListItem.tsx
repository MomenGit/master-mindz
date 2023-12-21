import {
  Box,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  Stack,
  Typography,
} from '@mui/material';
import Image from 'next/image';

export default function ChatListItem(props: {
  src: string;
  name: string;
  latestMsg: string;
  timeStamp: string;
}) {
  return (
    <ListItem key={props?.name}>
      <ListItemButton>
        <ListItemAvatar>
          <Image src={props?.src} alt="" height={48} width={48} />
        </ListItemAvatar>
        <Stack>
          <Stack direction="row">
            <Typography>{props?.name}</Typography>
            <Typography>{props?.timeStamp}</Typography>
          </Stack>
          <Typography>{props?.latestMsg}</Typography>
        </Stack>
      </ListItemButton>
    </ListItem>
  );
}
