import ChatListItem from '@/components/ChatListItem';
import {
  CheckCircleRounded,
  GroupRounded,
  HomeRounded,
  Message,
} from '@mui/icons-material';
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';

export default function Layout({ children }: { children: React.ReactNode }) {
  const chats = [
    {
      name: 'App',
      latestMsg: '/app',
      imgUrl: <HomeRounded />,
      timeStamp: '10:00 PM',
    },
    {
      name: 'Group',
      latestMsg: '/app/groups',
      imgUrl: <GroupRounded />,
      timeStamp: '10:00 PM',
    },
    {
      name: 'TODOs',
      latestMsg: '/app/todos',
      imgUrl: <CheckCircleRounded />,
      timeStamp: '10:00 PM',
    },
    {
      name: 'Messages',
      latestMsg: '/app/messages',
      imgUrl: <Message />,
      timeStamp: '10:00 PM',
    },
  ];
  return (
    <Box sx={{ display: 'flex' }}>
      <List>
        {chats.map((chat) => (
          <ChatListItem
            key={chat?.name}
            name={chat?.name}
            src="/logo.png"
            latestMsg={chat?.latestMsg}
            timeStamp={chat?.timeStamp}
          />
        ))}
      </List>
      <Box component="main" sx={{ flexGrow: 1 }}>
        {children}
      </Box>
    </Box>
  );
}
