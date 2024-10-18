import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Posts from "./Posts";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <h1>
          {"{"} JSON {"}"} Placeholder & React Query
        </h1>
        <Posts />
      </div>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
