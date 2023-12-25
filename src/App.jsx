import "./App.css";
import WelcomePanel from "./components/WelcomePanel";
import ToggleTheme from "./components/ToggleTheme";
import Provider from "./components/Provider";

export default function MyApp() {
  return (
    <Provider>
      <WelcomePanel />
      <ToggleTheme />
    </Provider>
  );
}
