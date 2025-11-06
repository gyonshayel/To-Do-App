import { BrowserRouter as Router, Routes, Route } from "react-router";
import { Header } from "./components/Header";
import {
  SidebarProvider,
  SidebarTrigger,
  SidebarInset,
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
          <SidebarInset>
            <SidebarTrigger className="hidden sm:block" />
            <main>
              <Routes>
                <Route path="/" element={<Today />} />
                <Route path="/scheduled" element={<Scheduled />} />
                <Route path="/all" element={<All />} />
                <Route path="/important" element={<Important />} />
                <Route path="/completed" element={<Completed />} />
                <Route path="/custom/:id" element={<Custom />} />
                <Route path="/search/:query" element={<SearchResults />} />
              </Routes>
            </main>
          </SidebarInset>
        </SidebarProvider>
      </Router>
    </>
  );
}

export default App;
