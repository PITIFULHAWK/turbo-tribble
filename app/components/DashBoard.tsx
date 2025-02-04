"use client"
import Header from "../components/Header"
import Sidebar from "../components/Sidebar"
// Ensure this component exists and is correctly imported
export default function Dashboard() {
 

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
        <Sidebar/>
    </div>
  )
}
