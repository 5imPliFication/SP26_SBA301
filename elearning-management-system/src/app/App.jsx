import routes from "./routers/routes";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter router={routes}>
      {/* <AppRounter>
      </AppRounter> */}
    </BrowserRouter>
  );
}

export default App;
