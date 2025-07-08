import { SidebarProvider } from "@/components/ui/sidebar";
import { DashboardSidebar } from "@/modules/dashboard-sidebar/components/dashboard-sidebar";
import React from "react";

interface Props {
  children: React.ReactNode;
}

export const layout = ({ children }: Props) => {
  return (
    <SidebarProvider>
      <DashboardSidebar />
      <main>{children}</main>
    </SidebarProvider>
  );
};
export default layout;
