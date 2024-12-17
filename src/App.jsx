import { HeaderMenu } from "./components/header/Header";
import styles from "./App.module.css";
import {
  BackgroundImage,
  Box,
  Button,
  Card,
  Container,
  Image,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { img1, img2 } from "./assets";
import Footer from "./components/footer/Footer";

const HeroSection = () => {
  return (
    <section className={styles.hero_wrapper}>
      <BackgroundImage h={"100%"} src={img1}>
        <Container size={"xl"} h={"100%"}>
          <Stack w={"100%"} h={"100%"} justify="start" pt={70}>
            <Stack maw={700} className={styles.hero_title_cont}>
              <Title fz={60} c={"white"}>
                The Adorable Foundation Christmas Charity Foundation
              </Title>
              <Text size="xl" c={"white"}>
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

const MissionSection = () => {
  const data = [
    {
      id: 1,
      title: "Christmas Outreach",
      desc: "Annual distribution of essential items and gifts to less privileged children, spreading joy during the festive season",
      Image: "",
    },
    {
      id: 2,
      title: "Medical Outreach",
      desc: "Organizing periodic medical camps, providing free healthcare services, and distributing medical equipment to underserved communities.",
      Image: "",
    },
    {
      id: 3,
      title: "Welfare Support",
      desc: "Offering targeted welfare assistance to the less privileged, addressing their immediate and long-term needs. Core Values Compassion, Inclusion, Integrity, and Sustainability",
    },
  ];

  return (
    <Container size={"xl"} my={100}>
      <Stack justify={"center"} align="center">
        <Title order={3} fw={"lighter"}>
          Our{" "}
          <Text c={"red"} fw={"bold"} inherit span>
            Mission
          </Text>{" "}
        </Title>
        <Title fw={500}>Empowering the underpriviledge</Title>
        <Text ta={"center"} maw={600}>
          To empower underprivileged individuals and communities across Nigeria
          by addressing critical needs in welfare, healthcare, and social
          support.
        </Text>
      </Stack>
      <SimpleGrid cols={{ base: 1, xs: 1, sm: 2, md: 3, lg: 3 }} my={50}>
        {data.map((item) => {
          return (
            <Box key={item.id} className={styles.mission_card}>
              <Image h={"100%"} src={img2} />

              <Box className={styles.mission_card_content}>
                <Title c={'white'} order={3}>{item.title}</Title>
                <Text c={'white'} className={styles.mission_card_content_text}>
                  {item.desc}
                </Text>
              </Box>
            </Box>
          );
        })}
      </SimpleGrid>
    </Container>
  );
};

const App = () => {
  return (
    <main>
      <HeaderMenu />
      <HeroSection />
      <MissionSection />
      <Footer />
    </main>
  );
};

export default App;
