"use client";

import { useRouter } from "next/navigation";

import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/shadcn/menubar";

export function MenuNavBar() {
  const router = useRouter();
  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger onClick={() => router.push("/")}>Home</MenubarTrigger>
        <MenubarTrigger onClick={() => router.push("/blog")}>Blog</MenubarTrigger>
      </MenubarMenu>
    </Menubar>
  );
}
