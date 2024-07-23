import CardList from "./components/CardList";
import TopBar from "./Main Screen/Top Bar/TopBar";
import "./App.css";

export default function App() {
  return (
    <div className="app">
      <TopBar />
      <CardList />
    </div>
  );
}
