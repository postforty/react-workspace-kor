import DynamicClassExample from "./DynamicClassExample";

function App() {
  return (
    <>
      <DynamicClassExample />

      <br />
      <hr />

      {/* 1. background-color, width, height, border */}
      <div className="bg-pink-500 w-64 h-64 border-black border-4 rounded-full">
        Hello Tailwind!
      </div>

      {/* 2. padding, margin */}
      {/* <div className="bg-pink-500 w-64 h-64 p-9 m-4 m-[50px]"> */}
      {/* <div className="bg-pink-500 w-64 h-64 p-9 mx-10">Hello Tailwind!</div> */}
      <div className="bg-pink-500 w-64 h-64 p-9 my-10">Hello Tailwind!</div>

      {/* 3. text-color, text-size, font-bold, cursor */}
      <div className="bg-pink-500 w-64 h-64 text-green-500 text-2xl font-bold cursor-pointer">
        Hello Tailwind!
      </div>

      {/* 4. flex */}
      <div className="flex flex-col mt-5 items-center justify-center gap-5 bg-black w-[1000px] h-[1000px]">
        <div className="flex items-center justify-center bg-pink-500 w-64 h-64">
          Hellow world!
        </div>
        <div className="flex items-center justify-center bg-pink-800 text-white w-64 h-64">
          Hellow tailwind!
        </div>
      </div>

      {/* 5. hover, transition */}
      <div className="flex flex-col mt-5 items-center justify-center gap-5 bg-black w-[1000px] h-[1000px]">
        <div className="hover:bg-pink-800 transition flex items-center justify-center bg-pink-500 w-64 h-64">
          Hellow world!
        </div>
        <div className="hover:text-green-400 flex items-center justify-center bg-pink-800 text-white text-3xl w-64 h-64">
          Hellow tailwind!
        </div>
      </div>

      {/* 6. button */}
      <div className="text-center mt-10">
        <button className="hover:bg-blue-800 bg-blue-500 text-white px-4 py-2 rounded">
          클릭
        </button>
      </div>

      {/* 7.grid */}
      <div className="grid grid-cols-3 gap-4 p-10">
        <div className="bg-yellow-300 p-4">Item 1</div>
        <div className="bg-yellow-300 p-4">Item 2</div>
        <div className="bg-yellow-300 p-4">Item 3</div>
        <div className="bg-yellow-300 p-4">Item 1</div>
        <div className="bg-yellow-300 p-4">Item 2</div>
        <div className="bg-yellow-300 p-4">Item 3</div>
        <div className="bg-yellow-300 p-4">Item 1</div>
        <div className="bg-yellow-300 p-4">Item 2</div>
      </div>

      {/* 8.grid 반응형 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-10">
        <div className="bg-purple-300 p-4">Item 1</div>
        <div className="bg-purple-300 p-4">Item 2</div>
        <div className="bg-purple-300 p-4">Item 3</div>
        <div className="bg-purple-300 p-4">Item 1</div>
        <div className="bg-purple-300 p-4">Item 2</div>
        <div className="bg-purple-300 p-4">Item 3</div>
        <div className="bg-purple-300 p-4">Item 1</div>
        <div className="bg-purple-300 p-4">Item 2</div>
      </div>
    </>
  );
}

export default App;
