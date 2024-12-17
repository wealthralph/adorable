import { Burger, Button, Center, Container,  Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import classes from "./Header.module.css";



export function HeaderMenu() {
  const [opened, { toggle }] = useDisclosure(false);



  return (
    <header className={classes.header}>
      <Container size="lg">
        <div className={classes.inner}>
        <Text>Adorable Foundation</Text>
      
          <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
        <Button color="red">Donate Now</Button>
        </div>
      </Container>
    </header>
  );
}
