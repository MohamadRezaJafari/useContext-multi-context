import Panel from "./Panel";
import Greeting from "./Greeting";
import LoginForm from "./LoginForm";
import { useUser } from "../context/UserContext";

export default function WelcomePanel() {
  const { user } = useUser();
  return (
    <Panel title="Welcome">
      {user !== null ? (
        <Greeting />
      ) : (
        <LoginForm/>
      )}
    </Panel>
  );
}
