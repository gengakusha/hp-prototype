import { JournalTop } from "./pages/JournalTop/JournalTop";
import { Pop } from "./pages/Pop/Pop";

// 簡易ルーティング: URL のパスで表示するページを切り替える。
// ページ数が増えたら react-router などに置き換える。
function App() {
  const path = window.location.pathname.replace(/\/$/, "");

  if (path === "/pop") return <Pop />;
  return <JournalTop />;
}

export default App;
