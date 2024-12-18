import { HeaderMenu } from "./components/header/Header";
import styles from "./App.module.css";
import {
  BackgroundImage,
  Box,
  Button,
  Container,
  Group,
  Image,
  Paper,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { director, img1, img2, img3 } from "./assets";
import Footer from "./components/footer/Footer";

const HeroSection = () => {
  return (
    <section className={styles.hero_wrapper}>
      <BackgroundImage h={"100%"} src={img1}>
        <Container size={"xl"} h={"100%"}>
          <Stack w={"100%"} h={"100%"} justify="center" py={70}>
            <Stack maw={700} className={styles.hero_title_cont}>
              <Title
                fz={{ base: "h1", xs: "h1", sm: 45, md: 50, lg: 60 }}
                c={"white"}
              >
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

const FounderSection = () => {
  return (
    <Container size={"xl"} my={100}>
      <SimpleGrid spacing={100} cols={{ base: 1, xs: 1, sm: 2, md: 2 }}>
        <Box pos={"relative"}>
          <Box className={styles.founder_image_card}>
            <Image src={director} />
          </Box>
          <Box className={styles.founder_comment_box}></Box>
        </Box>
        <Stack h={"100%"} justify="center">
          <Stack gap={"xl"}>
            <Title order={3} fw={"lighter"}>
              Driven By
              <Text c={"red"} fw={"bold"} inherit span>
                {" "}
                Passion
              </Text>{" "}
            </Title>
            <Title fw={500}>Built on Passion</Title>
            <Text>
              Adorable Christmas Charity Foundation was initiated in 2014 by
              Dame Adaora Umeorji, the current Group Managing Director (GMD) of
              Zenith Bank Plc. Motivated by her passion for uplifting the less
              privileged in society, Dame Adaora established the foundation with
              a core group known as Team 20. This group embraced her vision of
              caring for less privileged children, orphans, widows, and the
              downtrodden.
            </Text>
            <Text>
              Since its inception, the foundation has remained steadfast in its
              mission, carrying out various impactful interventions,
              particularly in Abuja and Anambra states. Over the years, the
              foundation has grown to become a beacon of hope, spreading care,
              joy, and happiness among underserved communities.
            </Text>
          </Stack>
        </Stack>
      </SimpleGrid>
    </Container>
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
                <Title c={"white"} order={3}>
                  {item.title}
                </Title>
                <Text c={"white"} className={styles.mission_card_content_text}>
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

const StatsSection = () => {
  const stats = [
    {
      value: "5k",
      label: (
        <Text lh={1.4}>
          Children <br /> Catered for
        </Text>
      ),
    },
    { value: "60", label: "Volunteers" },
    { value: "250", label: "Projects" },
  ];

  return (
    <Container size={"xl"} w={"100%"} style={{ zIndex: 4 }} mb={-50}>
      <Paper shadow="md" h={150} py={"md"} px={'xl'} radius={'lg'} style={{ zIndex: 3 }}>
        <Group justify="space-between" h={"100%"}>
          {stats.map((i) => (
            <Group key={i.value}>
              <Title c={"red"} fz={45}>
                {i.value}
              </Title>
              <Text>{i.label}</Text>
            </Group>
          ))}
        </Group>
      </Paper>
    </Container>
  );
};


const ImpactSection = () => {
  return (
    <Container fluid w={"100%"} p={0} mb={100}>
      <SimpleGrid cols={{ base: 1, xs: 1, sm: 2, md: 2 }} spacing={0}>
        <Image src={img3} className={styles.impact_img} />
        <Box className={styles.impact_box}>
          <Stack h={"100%"} justify="center" maw={700} mx={"auto"}>
            <Title order={3} fw={"lighter"}>
              Our{" "}
              <Text c={"red"} fw={"bold"} inherit span>
                Impact
              </Text>{" "}
            </Title>
            <Title fw={500}>Becoming a beacon of hope</Title>
            <Text>
              Adorable Christmas Charity Foundation has successfully organized
              medical outreaches that provided free healthcare services,
              including prescription medications, essential drugs, and optical
              glasses for individuals in need. These programs have positively
              impacted thousands of lives, offering critical support to
              underserved populations. Welfare Interventions:
            </Text>
            <Text>
              The foundation has consistently supported orphans, widows, and
              marginalized individuals by providing essential items, financial
              assistance, and targeted interventions to meet immediate and
              long-term welfare needs.
            </Text>
          </Stack>
        </Box>
      </SimpleGrid>
    </Container>
  );
}

const App = () => {
  return (
    <>
      <HeaderMenu />
      <HeroSection />
      <FounderSection />
      <MissionSection />
      <Stack w={'100%'} >
      <StatsSection />
      <ImpactSection/>
      </Stack>
      <Footer />
    </>
  );
};

export default App;
