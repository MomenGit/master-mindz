import { Box, Button, Container, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import { Fira_Code } from 'next/font/google';
import Copyright from './Copyright';

const firaCode = Fira_Code({ subsets: ['latin'], weight: '700' });

export function LandingPage() {
  return (
    <>
      <Header />
      <Box component="main">
        <HeroSection />
        <FeatureSection
          title="Be In Total Control of What You Do"
          body="Lorem ipsum dolor sit amet consectetur. Consectetur amet venenatis arcu nisi egestas. Hendrerit volutpat risus viverra accumsan et sagittis."
          image="/Saly-19.svg"
          direction="row-reverse"
          align="center"
          width={360}
          height={512}
        />
        <FeatureSection
          title="Customized To Your Interests"
          body="Lorem ipsum dolor sit amet consectetur. Consectetur amet venenatis arcu nisi egestas. Hendrerit volutpat risus viverra accumsan et sagittis."
          image="/Saly-12.svg"
          direction="row"
          align="center"
          width={360}
          height={512}
        />
        <FeatureSection
          title="Communicate With Whom You Share Your Goals"
          body="Lorem ipsum dolor sit amet consectetur. Consectetur amet venenatis arcu nisi egestas. Hendrerit volutpat risus viverra accumsan et sagittis."
          image="/Saly-14.svg"
          direction="row-reverse"
          align="center"
          width={288}
          height={512}
        />
        <FeatureSection
          title="Track Your Progress"
          body="Lorem ipsum dolor sit amet consectetur. Consectetur amet venenatis arcu nisi egestas. Hendrerit volutpat risus viverra accumsan et sagittis."
          image="/Saly-26.svg"
          direction="row"
          align="center"
          width={256}
          height={512}
        />
      </Box>
      <Footer />
    </>
  );
}
export function Header() {
  return (
    <Box component="header" sx={{ bgcolor: 'primary.main' }}>
      <Container maxWidth="md">
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          flexWrap="wrap"
        >
          <Logo />
          <Box component="nav">
            <Button href="/" sx={{ color: 'white' }}>
              Home
            </Button>
            <Button href="#" sx={{ color: 'white' }}>
              Features
            </Button>
            <Button href="#" sx={{ color: 'white' }}>
              About
            </Button>
          </Box>
          <Stack direction="row" alignItems="center">
            <Button href="/sign-in" sx={{ color: 'white' }}>
              Login
            </Button>
            <Button
              href="/sign-up"
              color="secondary"
              variant="contained"
              sx={{ color: 'white' }}
            >
              Register
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
export function HeroSection() {
  return (
    <Box component="section" bgcolor="primary.main">
      <Container maxWidth="md">
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
        >
          <Box color="white">
            <Stack spacing={2} marginBottom={4}>
              <Typography variant="h2">Achieve Your Goals Together</Typography>
              <Typography variant="h4" color="secondary.main">
                Together We Can
              </Typography>
              <Typography>
                where you can belong to a school club, a gaming group, or a
                worldwide art community. Where just you and a handful of friends
                can spend time together. A place that makes it easy to achieve
                your goals, talk every day and hang out more often.
              </Typography>
            </Stack>
            <Button variant="contained" sx={{ bgcolor: 'secondary.main' }}>
              Start Now
            </Button>
          </Box>
          <Box>
            <Image src="/Saly-15.svg" alt="" height="692" width="389" />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
export function Logo() {
  return (
    <Stack direction="row" justifyContent="center" alignItems="center">
      <Image src="/logo.svg" alt="" width={48} height={48} />
      <Typography
        fontFamily={firaCode.style.fontFamily}
        sx={{ color: 'white' }}
      >
        MasterMindz
      </Typography>
    </Stack>
  );
}
export function Footer() {
  return (
    <Box component="footer" padding={8} sx={{ bgcolor: '#625B71A0' }}>
      <Copyright />
    </Box>
  );
}
export function FeatureSection(props: {
  title: string;
  body: string;
  image: string;
  direction: 'row' | 'row-reverse' | 'column' | 'column-reverse' | undefined;
  align: string;
  width: number;
  height: number;
}) {
  return (
    <Box component="section">
      <Container maxWidth="md">
        <Stack
          direction={props?.direction}
          justifyContent="center"
          alignItems="center"
        >
          <Stack spacing={2}>
            <Typography variant="h3" color="primary.dark">
              {props.title}
            </Typography>
            <Typography variant="body1">{props.body}</Typography>
          </Stack>
          <Image
            src={props.image}
            alt=""
            width={props?.width}
            height={props?.height}
          />
        </Stack>
      </Container>
    </Box>
  );
}
