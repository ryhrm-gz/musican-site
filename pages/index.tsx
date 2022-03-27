import { Box, Button, Center, Group, Text } from "@mantine/core";
import { DownloadIcon } from "@radix-ui/react-icons";
import type { NextPage } from "next";
import { Layout } from "../components/Layout";

const Home: NextPage = () => {
  return (
    <Layout>
      <Group direction="column" position="center" mt="xl" spacing="xl">
        <Box>
          <Text
            component="h1"
            size="xl"
            weight={700}
            variant="gradient"
            gradient={{ from: "teal", to: "green", deg: 45 }}
          >
            ミュージシャンのための楽曲管理アプリ
          </Text>
        </Box>
        <Text size="sm" color="dimmed">
          Alpha version
        </Text>
        <Group position="center" spacing="xl">
          <Button<"a">
            component="a"
            href="https://github.com/ryhrm-gz/musican/releases/download/0.1.0-alpha.1/musican-0.1.0-alpha.1-arm64.dmg"
            leftIcon={<DownloadIcon />}
            size="sm"
          >
            Mac - Arm64 - Download
          </Button>
          <Button<"a">
            component="a"
            href="https://github.com/ryhrm-gz/musican/releases/download/0.1.0-alpha.1/musican-0.1.0-alpha.1-x64.dmg"
            leftIcon={<DownloadIcon />}
            size="sm"
          >
            Mac - Intel64 - Download
          </Button>
        </Group>
      </Group>
    </Layout>
  );
};

export default Home;
