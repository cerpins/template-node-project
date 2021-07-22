import style from "./index.module.sass";

import { Foo } from "../Foo";

function App() {
  return (
    <div className={style.root}>
      Hello, World!
      <Foo statusMessage="Foo status" />
    </div>
  );
}

export default App;
