import { HeaderMenu } from "./components/header/Header";
import styles from "./App.module.css";
import { BackgroundImage, Box, Button, Container, Stack, Text, Title } from "@mantine/core";
import { img1 } from "./assets";
import Footer from "./components/footer/Footer";

const HeroSection = () => {
  return (
    <section className={styles.hero_wrapper}>
      <BackgroundImage h={"100%"} src={img1}>
        <Container  size={"xl"} h={"100%"}>
          <Stack w={"100%"} h={"100%"} justify="start" pt={70} >
            <Stack maw={700} className={styles.hero_title_cont}>
              <Title fz={60} c={"white"}>
                The Adorable Foundation Christmas Charity Foundation
              </Title>
              <Text size="xl" c={'white'}>
                Bringing hope, health, and happiness to the less privileged in
                society
              </Text>
              <Box>

              <Button color="red">Learn More</Button>
              </Box>
            </Stack>
          </Stack>
        </Container>
      </BackgroundImage>
    </section>
  );
};

const App = () => {
  return (
    <main>
      <HeaderMenu />
      <HeroSection />
      <Footer/>
    </main>
  );
};

export default App;
