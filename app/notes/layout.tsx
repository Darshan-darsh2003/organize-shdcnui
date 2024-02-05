import { fontSans } from "@/lib/fonts"
import { SiteHeader } from "@/components/site-header"
import { ThemeProvider } from "@/components/theme-provider"

import "@/styles/globals.css"
import MainComponent from "@/components/mainComponent"
import { Sidebar } from "@/components/sidebar"

interface RootLayoutProps {
  children: React.ReactNode
}

export default function NotesLayout({ children }: RootLayoutProps) {
  return (
    <>
      <MainComponent>
        <div className="relative flex min-h-screen flex-row ">
          <Sidebar />
          <div className="flex-1 m-5">{children}</div>
        </div>
      </MainComponent>
    </>
  )
}
