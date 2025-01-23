import ListGroup from "./components/ListGroup";

function App() {
  const items = ["new york", "los angeles", "chicago", "houston", "phoenix"];
  function onSelectItemHandler() {
    console.log("Item selected");
  }
  return (
    <ListGroup
      heading="Cities"
      items={items}
      onSelectItem={onSelectItemHandler}
    />
  );
}

export default App;
