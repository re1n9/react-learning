import ListGroup from "./components/listGroup";
function App() {
  let items = [
    "An item",
    "A second item",
    "A third item",
    "A fourth item",
    "And a fifth one",
  ];
  const handelSelectItem = (item: string) => console.log(item);
  return (
    <div>
      <ListGroup
        items={items}
        heading="List Group"
        onSelectItem={handelSelectItem}
      />
    </div>
  );
}

export default App;
