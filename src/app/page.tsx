import WorkGrid from "@/components/WorkGrid";
import { worksSorted } from "@/data/works";

export default function Home() {
  return (
    <section className="fade-up mx-auto max-w-6xl px-5 py-10 sm:px-8 sm:py-14">
      <WorkGrid works={worksSorted()} />
    </section>
  );
}
