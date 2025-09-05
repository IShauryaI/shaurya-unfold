import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Layout from "@/components/layout/Layout";
import MainPage from "./pages/MainPage";
import SakuraPetals from "@/components/SakuraPetals";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <SakuraPetals />
      <Toaster />
      <Sonner />
      <Layout>
        <MainPage />
      </Layout>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
