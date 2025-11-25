import { useState } from "react";
import { Link } from "react-router";
import { useLists } from "../context/ListsContext";
import {
  Today,
  Scheduled,
  All,
  Important,
  Completed,
  Custom,
} from "./ui/sidebar-icons";
import { useSidebar } from "./ui/sidebar";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
  SidebarTrigger,
} from "./ui/sidebar";
import { Button } from "./ui/button";

const iconMap = {
  Today,
  Scheduled,
  All,
  Important,
  Completed,
  Custom,
};

export function AppSidebar() {
  const [newList, setNewList] = useState("");
  const { listsArray, addList } = useLists();
  const { isMobile } = useSidebar();
  const handleNewList = (event) => {
    event.preventDefault();
    if (!newList.trim()) return;

    const uniqueId = crypto.randomUUID();
    const listObj = {
      id: uniqueId,
      title: newList,
      url: `/custom/${encodeURIComponent(uniqueId)}`,
    };

    addList(listObj);
    setNewList("");
  };

  return (
    <Sidebar
      className="top-[71px] h-[calc(100vh-71px)] border-r border-r-border"
      variant="inset"
      collapsible="icon"
      side={isMobile ? "right" : "left"}
    >
      <SidebarTrigger className="rounded-full mx-2.5 mt-6 sm:mt-0" />
      <SidebarContent className="overflow-hidden">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {listsArray.map((list) => {
                const Icon = iconMap[list.title] || iconMap.Custom;
                return (
                  <SidebarMenuItem key={list.id}>
                    <SidebarMenuButton asChild className="text-base">
                      <Link to={list.url}>
                        <Icon />
                        <span>{list.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarSeparator />
        <SidebarGroup className="group-data-[collapsible=icon]:hidden">
          <form
            className="flex content-center bg-background rounded-full border border-accent"
            onSubmit={(event) => handleNewList(event)}
          >
            <input
              className="w-full pl-2 outline-0"
              id="new-list"
              type="text"
              placeholder="New List"
              autoFocus={false}
              value={newList}
              onChange={(e) => setNewList(e.target.value)}
            />
            <Button
              type="submit"
              variant="ghost"
              size="icon"
              className="rounded-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5 text-blue-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </Button>
          </form>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
