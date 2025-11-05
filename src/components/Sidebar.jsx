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

// Menu items.
const lists = [
  {
    title: "Today",
    url: "/",
    icon: Today,
  },
  {
    title: "Scheduled",
    url: "/scheduled",
    icon: Scheduled,
  },
  {
    title: "All",
    url: "/all",
    icon: All,
  },
  {
    title: "Important",
    url: "/important",
    icon: Important,
  },
  {
    title: "Completed",
    url: "/completed",
    icon: Completed,
  },
];

export function AppSidebar() {
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
              {lists.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
