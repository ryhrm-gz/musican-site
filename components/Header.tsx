import { ActionIcon, Box, Group, Header as MantineHeader } from "@mantine/core";
import { GitHubLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
import { Logo } from "./Logo";

export const Header = () => {
  return (
    <MantineHeader height={50}>
      <Group
        position="apart"
        sx={{ width: "100%", height: "100%", maxWidth: 1000, margin: "auto" }}
        px="md"
      >
        <Logo style={{ width: "auto", height: 25 }} fill="white" />
        <Group spacing="xs" position="right">
          <ActionIcon<"a">
            component="a"
            href="https://github.com/ryhrm-gz/musican"
            target="_blank"
            size="lg"
          >
            <GitHubLogoIcon width={18} height={18} />
          </ActionIcon>
          <ActionIcon<"a">
            component="a"
            href="https://twitter.com/ryoh555"
            target="_blank"
            size="lg"
          >
            <TwitterLogoIcon width={18} height={18} />
          </ActionIcon>
        </Group>
      </Group>
    </MantineHeader>
  );
};
