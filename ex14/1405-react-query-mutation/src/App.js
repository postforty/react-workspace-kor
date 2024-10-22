import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Posts from "./Posts";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

// npm i @tanstack/react-query
// npm i @tanstack/react-query-devtools

const queryClient = new QueryClient();

// console.log(queryClient);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <h1>
          {"{"}JSON{"}"} Placeholder Blog
        </h1>
        <Posts />
      </div>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
