import { Work } from "@/data/works";
import WorkCard from "./WorkCard";

export default function WorkGrid({ works }: { works: Work[] }) {
  return (
    <div className="columns-1 gap-x-7 sm:columns-2 lg:columns-3">
      {works.map((work) => (
        <WorkCard key={work.slug} work={work} />
      ))}
    </div>
  );
}
