import { BrowserRouter as Router, Routes, Route } from "react-router";
import { Header } from "./components/Header";
import {
  SidebarProvider,
  SidebarInset,
  SidebarTrigger,
} from "./components/ui/sidebar";
import { AppSidebar } from "./components/Sidebar";
import { Today } from "./pages/today/Today";
import { Scheduled } from "./pages/scheduled/Scheduled";
import { All } from "./pages/all/All";
import { Important } from "./pages/important/Important";
import { Completed } from "./pages/completed/Completed";
import { Custom } from "./pages/custom/Custom";
import { SearchResults } from "./pages/search/SearchResultsPage";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Header />
        <SidebarProvider>
          <AppSidebar />
          <SidebarInset className="inline-block px-4 py-2">
            <div>
              <SidebarTrigger className="sidebar-trigger rounded-full bg-blue-400 hover:bg-blue-100 border-blue-300 text-blue-100 hover:text-blue-400 sm:hidden" />
              <Routes>
                <Route path="/" element={<Today />} />
                <Route path="/scheduled" element={<Scheduled />} />
                <Route path="/important" element={<Important />} />
                <Route path="/all" element={<All />} />
                <Route path="/completed" element={<Completed />} />
                <Route path="/custom/:id" element={<Custom />} />
                <Route path="/search/:query" element={<SearchResults />} />
              </Routes>
            </div>
          </SidebarInset>
        </SidebarProvider>
      </Router>
    </>
  );
}

export default App;
