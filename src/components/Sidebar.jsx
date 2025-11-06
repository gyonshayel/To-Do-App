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
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
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
      className="hidden sm:block top-[71px] h-[calc(100vh-71px)]"
      variant="inset"
      collapsible="icon"
    >
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {listsArray.map((list) => {
                const Icon = iconMap[list.title] || iconMap.Custom;
                return (
                  <SidebarMenuItem key={list.id}>
                    <SidebarMenuButton asChild>
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
          <form onSubmit={(event) => handleNewList(event)}>
            <input
              id="new-list"
              type="text"
              placeholder="New List"
              value={newList}
              onChange={(e) => setNewList(e.target.value)}
              className="border border-red-500"
            />
            <Button
              type="submit"
              variant="outline"
              size="icon"
              className="rounded-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
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
