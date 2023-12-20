import { Button, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import { Fira_Code } from 'next/font/google';

const firaCode = Fira_Code({ subsets: ['latin'], weight: '700' });

export function LandingPage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
      </main>
      <Footer />
    </>
  );
}
export function Header() {
  return (
    <header>
      <Stack
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
        sx={{ bgcolor: 'purple' }}
      >
        <Logo />
        <nav>
          <Button sx={{ color: 'white' }}>Home</Button>
          <Button sx={{ color: 'white' }}>Features</Button>
          <Button sx={{ color: 'white' }}>About</Button>
        </nav>
        <Stack direction="row" alignItems="center">
          <Button sx={{ color: 'white' }}>Login</Button>
          <Button variant="contained">Register</Button>
        </Stack>
      </Stack>
    </header>
  );
}
export function HeroSection() {
  return (
    <section>
      <Stack>
        <Stack></Stack>
        <Image src="/Saly-15.svg" alt="" height="512" width="512" />
      </Stack>
    </section>
  );
}
export function Logo() {
  return (
    <Stack direction="row" justifyContent="center" alignItems="center">
      <Image src="/logo.svg" alt="" width={64} height={64} />
      <Typography sx={{ fontFamily: `${firaCode.className}`, color: 'white' }}>
        MasterMindz
      </Typography>
    </Stack>
  );
}
export function Footer() {
  return <footer></footer>;
}
export function FeatureSection(props: {
  title: string;
  body: string;
  image: string;
  direction: string;
  align: string;
}) {
  return (
    <section>
      <div>
        <h1>{props.title}</h1>
        <div>{props.body}</div>
      </div>
      <Image src={props.image} alt="" />
    </section>
  );
}
