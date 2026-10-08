export default function App() {
  return (
    <>
      <h1 className="p-8 text-3xl font-bold text-blue-600">IronPeak Fitness</h1>
      <div className="container max-w-5xl mx-auto grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="card bg-blue-600  p-4 mx-4 text-white rounded-lg shadow-lg">
          <h3>Card A</h3>
          <p> Heelo a</p>
        </div>
        <div className="card bg-blue-600  p-4 mx-4 text-white rounded-lg shadow-lg">
          <h3>Card B</h3>
          <p> Heelo b</p>
        </div>
        <div className="card bg-blue-600  p-4 mx-4 text-white rounded-lg shadow-lg">
          <h3>Card C</h3>
          <p>      Heelo c </p>
        </div>
      </div>
    </>
  );
}


