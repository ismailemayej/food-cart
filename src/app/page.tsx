import { Button } from "@/components/ui/button";
import CategoryList from "./_component/CategoryList";

export default function Home() {
  return (
    <div className="text-5xl">
      This is page
      <Button>THis is button</Button>
      <CategoryList />
    </div>
  );
}
