import { useEffect, useState } from "react";

import {
  createBrowserDirector,
  RuntimeErrorBoundary,
  RuntimeStage,
} from "./stage";

export function App() {
  const [director] = useState(createBrowserDirector);

  useEffect(() => () => director.dispose(), [director]);

  return (
    <RuntimeErrorBoundary>
      <RuntimeStage
        director={director}
        debug={new URLSearchParams(window.location.search).has("debug")}
      />
    </RuntimeErrorBoundary>
  );
}
