import "react-native-gesture-handler";

import RootStack from "./src/navigation";

import { Home } from "~/screens/Home";
import { SignIn } from "~/screens/autentication/SignIn";
import { SignUp } from "~/screens/autentication/SignUp";

export default function App() {
  return <Home />;
}
