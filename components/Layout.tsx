import { AppShell } from "@mantine/core";
import { ReactNode } from "react";
import { Header } from "./Header";

type Props = {
  children: ReactNode;
};

export const Layout = ({ children }: Props) => {
  return <AppShell header={<Header />}>{children}</AppShell>;
};
