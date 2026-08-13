"use client";
import { useEffect, useState } from "react";

export function GlobalLoading({ children }: { children: React.ReactNode }) {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    setReady(true);
  }, []);
  if (!ready) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
        <div className="flex items-center gap-[2px] font-mono text-sm text-muted-foreground">
          <span className="ml-1">loading</span>
          <span className="flex w-4 gap-[2px]">
            <span className="h-1 w-1 animate-[blink_1.4s_ease-in-out_infinite] rounded-full bg-muted-foreground [animation-delay:0ms]" />
            <span className="h-1 w-1 animate-[blink_1.4s_ease-in-out_infinite] rounded-full bg-muted-foreground [animation-delay:200ms]" />
            <span className="h-1 w-1 animate-[blink_1.4s_ease-in-out_infinite] rounded-full bg-muted-foreground [animation-delay:400ms]" />
          </span>
          <span className="ml-1 h-4 w-[7px] animate-[caret_1s_steps(1)_infinite] bg-foreground motion-reduce:animate-none" />
        </div>

        <style>{`
          @keyframes blink {
            0%, 80%, 100% { opacity: 0.2; }
            40% { opacity: 1; }
          }
          @keyframes caret {
            0%, 49% { opacity: 1; }
            50%, 100% { opacity: 0; }
          }
        `}</style>
      </div>
    );
  }
  return <>{children}</>;
}