import { JournalTop } from "./pages/JournalTop/JournalTop";
import { Pop } from "./pages/Pop/Pop";

// 簡易ルーティング
export default function App() {
  const path = window.location.pathname.replace(/\/$/, "");

  if (path === "/pop") return <Pop />;
  return <JournalTop />;
}