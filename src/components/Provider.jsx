import { ThemeProvider } from "../context/ThemeContext";
import { UserProvider } from "../context/UserContext";

function Provider({ children }) {
  return (
    <UserProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </UserProvider>
  );
}

export default Provider;
