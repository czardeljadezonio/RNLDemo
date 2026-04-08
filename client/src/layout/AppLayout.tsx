import AppSideBar from "./AppSidebar"
import AppHeader from "./AppHeader"
import { Outlet } from "react-router-dom"
import { SidebarProvider, useSidebar } from "../context/SidebarContext"
import { HeaderProvider } from "../context/HeaderContext"

const LayoutContent = () => {
    const { isOpen } = useSidebar();
    return (
        <div className="flex flex-col min-h-screen bg-neutral-primary-soft">
            <AppHeader />
            <div className="flex flex-1 pt-16">
                <AppSideBar />
                <main className={`flex-1 transition-all duration-300 p-8 ${isOpen ? 'sm:ml-64' : 'sm:ml-0'}`}>
                    <Outlet />
                </main>
            </div>
        </div>
    )
}

const AppLayout = () => {
  return (
    <>
    <HeaderProvider>
        <SidebarProvider>
            <LayoutContent /> 
        </SidebarProvider>        
    </HeaderProvider>

    </>
  )
}

export default AppLayout