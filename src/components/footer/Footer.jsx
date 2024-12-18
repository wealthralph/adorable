import { IconBrandInstagram, IconBrandTwitter, IconBrandYoutube } from '@tabler/icons-react';
import { ActionIcon, Container, Group, Image, Text } from '@mantine/core';
import classes from './Footer.module.css';
import { logo } from '../../assets';

const data = [
  {
    title: 'About',
    links: [
      { label: 'Mission & Vision', link: '#' },
      { label: 'Partners', link: '#' },
      { label: 'Upcoming Events', link: '#' },
      { label: 'Become a Volunteer', link: '#' },
    ],
  },
  {
    title: 'Project',
    links: [
      { label: 'Christmas Outreach', link: '#' },
      { label: 'Medical Outreach', link: '#' },
      { label: 'Welfare Support', link: '#' },
    ],
  },
//   {
//     title: 'Community',
//     links: [
//       { label: 'Join Discord', link: '#' },
//       { label: 'Follow on Twitter', link: '#' },
//       { label: 'Email newsletter', link: '#' },
//       { label: 'GitHub discussions', link: '#' },
//     ],
//   },
];

 function Footer() {


  const groups = data.map((group) => {
    const links = group.links.map((link, index) => (
      <Text
        key={index}
        className={classes.link}
        component="a"
        href={link.link}
      >
        {link.label}
      </Text>
    ));

    return (
      <div className={classes.wrapper} key={group.title}>
        <Text className={classes.title}>{group.title}</Text>
        {links}
      </div>
    );
  });

  return (
    <footer className={classes.footer}>
      <Container className={classes.inner}>
        <div className={classes.logo}>
          <Image src={logo} h={80}/>
          {/* <Text size="xs" c="dimmed" className={classes.description}>
            Adorable Foundation Christmas Charity Foundation{" "}
          </Text> */}
        </div>
        <div className={classes.groups}>{groups}</div>
      </Container>
      <Container className={classes.afterFooter}>
        <Text c="dimmed" size="sm">
          © {new Date().getFullYear()} All rights reserved.
        </Text>

        <Group
          gap={0}
          className={classes.social}
          justify="flex-end"
          wrap="nowrap"
        >
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandTwitter size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandYoutube size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandInstagram size={18} stroke={1.5} />
          </ActionIcon>
        </Group>
      </Container>
    </footer>
  );
}


export default Footer