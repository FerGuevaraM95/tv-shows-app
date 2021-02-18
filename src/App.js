import { GlobalStyles } from "./GlobalStyles";
import { AppRouter } from "./router/AppRouter";
import { Provider } from "react-redux";

import store from "./store";

function App() {
  return (
    <div>
      <Provider store={store}>
        <GlobalStyles />
        <AppRouter />
      </Provider>
    </div>
  );
}

export default App;
