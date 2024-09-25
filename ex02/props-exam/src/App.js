import Hello from "./Hello";
import Wrapper from "./Wrapper";

function App() {
  return (
    <Wrapper welcome='코리아IT아카데미'>
      <Hello name="오일남" age={99} color="blue" />
      {/* <Hello name="오이남" age={98} />
      <Hello name="오삼남" age={97} />
      <Hello age={97} color="red" isSpecial={true} /> */}
    </Wrapper>
  );
}

export default App;
