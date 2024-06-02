import { CustomNavbar } from "./CustomNavbar";

import { CustomSidebar } from "./CustomSidebar";

export function DashboardLayout({ children , heading}) {
  return (
    <div>
      
      <CustomNavbar />
      <CustomSidebar />
      
      <div className="p-10 ml-60">
      <h1 className="text-black font-bold text-4xl">{heading}</h1>
        <div className="px-12 py-4 bg-gray-50 rounded-lg relative mt-4">
          
          {children}
        </div>
      </div>
    </div>
  );
}
