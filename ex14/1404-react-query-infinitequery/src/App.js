import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import InfinitePeople from "./people/InfinitePeople";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <InfinitePeople />
      </div>
    </QueryClientProvider>
  );
}

export default App;
