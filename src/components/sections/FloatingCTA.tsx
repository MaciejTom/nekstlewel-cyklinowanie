import { Phone } from "lucide-react";

export function FloatingCTA() {
  return (
    <a
      href="tel:511692325"
      title="Zadzwoń teraz"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-midnight shadow-[0_0_20px_rgba(212,165,116,0.4)] transition-transform hover:scale-110 active:scale-95 animate-pulse hover:animate-none"
    >
      <Phone className="h-6 w-6" />
    </a>
  );
}
