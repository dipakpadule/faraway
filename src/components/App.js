function App() {
  return (
    <div className="App">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}

export default App;

function Logo() {
  return <h1>🌴Far Away💼</h1>;
}

function Form() {
  return (
    <div className="add-form">
      <h3>what do you need for your trip?</h3>
    </div>
  );
}

function PackingList() {
  <div className="list">list</div>;
}

function Stats() {
  return (
    <footer>
      <em>You have x items on list, you have packed x items(x%)</em>
    </footer>
  );
}
