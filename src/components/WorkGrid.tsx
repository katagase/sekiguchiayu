import { Work } from "@/data/works";
import WorkCard from "./WorkCard";

export default function WorkGrid({ works }: { works: Work[] }) {
  return (
    <div className="grid grid-cols-1 gap-x-7 gap-y-9 sm:grid-cols-2 lg:grid-cols-3">
      {works.map((work) => (
        <WorkCard key={work.slug} work={work} />
      ))}
    </div>
  );
}
