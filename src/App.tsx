
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Index from "./pages/Index";
import Faculty from "./pages/Faculty";
import Hostels from "./pages/Hostels";
import Campus from "./pages/Campus";
import Fests from "./pages/Fests";
import Clubs from "./pages/Clubs";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <Index />
              </Layout>
            }
          />
          <Route
            path="/faculty"
            element={
              <Layout>
                <Faculty />
              </Layout>
            }
          />
          <Route
            path="/hostels"
            element={
              <Layout>
                <Hostels />
              </Layout>
            }
          />
          <Route
            path="/campus"
            element={
              <Layout>
                <Campus />
              </Layout>
            }
          />
          <Route
            path="/fests"
            element={
              <Layout>
                <Fests />
              </Layout>
            }
          />
          <Route
            path="/clubs"
            element={
              <Layout>
                <Clubs />
              </Layout>
            }
          />
          <Route
            path="/login"
            element={
              <Layout>
                <Login />
              </Layout>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
