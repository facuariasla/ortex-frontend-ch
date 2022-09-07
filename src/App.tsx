import Header from "./components/Header";
import Layout from "./components/Layout";
import LogForm from "./components/LogForm";
import WSSTrading from "./components/WSSTrading";

function App() {
  return (
    <Layout>
      <Header />
      <LogForm />
      <WSSTrading />
    </Layout>
  );
}

export default App;
