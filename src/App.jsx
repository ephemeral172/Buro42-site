import './App.css'
import Pages from "@/pages/index.jsx"
import I18nHead from "@/components/I18nHead.jsx"
import { Toaster } from "@/components/ui/toaster"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/react"

function App() {
  return (
    <>
      <I18nHead />
      <Pages />
      <Toaster />
      <Analytics />
      <SpeedInsights />
    </>
  )
}

export default App 