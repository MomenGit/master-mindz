export function LandingPage() {
  return (
    <>
      <Header />{' '}
      <FeatureSection
        title=""
        body=""
        images={['']}
        direction="row"
        align="left"
      />
    </>
  );
}
export function Header() {
  return <header></header>;
}
export function Footer() {
  return <footer></footer>;
}
export function FeatureSection(props: {
  title: string;
  body: string;
  images: [string];
  direction: string;
  align: string;
}) {
  return <section></section>;
}
