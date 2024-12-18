import { Burger, Button,  Container,  Group,  Image, } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import classes from "./Header.module.css";
import { logo } from "../../assets";



export function HeaderMenu() {
  const [opened, { toggle }] = useDisclosure(false);


  const links = [
    { link: "#", label: "Gallery" },
    { link: "#", label: "About" },
    { link: "#", label: "Contact" },
    { link: "#", label: "Become a volunteer" },
  ];

  const items = links.map((link) => {
      return (
        <a
          key={link.label}
          href={link.link}
          className={classes.link}
          onClick={(event) => event.preventDefault()}
        >
          {link.label}
        </a>
      );
  });

  return (
    <header className={classes.header}>
      <Container size="lg">
        <div className={classes.inner}>
        <Image src={logo} h={50}/>
          <Group>
            {items}
          </Group>
          <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
        <Button color="red">Donate Now</Button>
        </div>
      </Container>
    </header>
  );
}
