import { Button } from "@/components/ui/button";

import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <div className="w-full h-full min-h-screen flex items-center justify-center">
      <Button className="w-12" onClick={() => setCount((count) => count + 1)}>
        {count}
      </Button>
    </div>
  );
}
