import { CustomNavbar } from "./CustomNavbar";

import { CustomSidebar } from "./CustomSidebar";

export function DashboardLayout({ children }) {
  return (
    <div>
      <CustomNavbar />
      <CustomSidebar />
      <div className="p-10">
        <div className="ml-60 px-12 py-4 bg-gray-50 rounded-lg relative">
          {children}
        </div>
      </div>
    </div>
  );
}
