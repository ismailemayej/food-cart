import { Button } from "@/components/ui/button";
import { SignIn } from "@clerk/nextjs";
export default function Home() {
  return (
    <div className="text-5xl">
      This is page
      <Button>THis is button</Button>
      <SignIn />
    </div>
  );
}
