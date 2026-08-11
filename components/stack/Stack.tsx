import StackHeader from "./StackHeader";
import StackCategory from "./StackCategory";
import { stackCategories, stackHeaderData } from "./StackData";

export default function Stack() {
  return (
    <section
      id="skills"
      className="relative z-10 max-w-7xl mx-auto px-4 md:px-0 py-24 md:py-26 border-b border-zinc-900"
    >
      <StackHeader
        sectionNumber={stackHeaderData.sectionNumber}
        label={stackHeaderData.label}
        title={stackHeaderData.title}
      />

      {/* Grid of category cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stackCategories.map((category) => (
          <StackCategory key={category.id} category={category} />
        ))}
      </div>
    </section>
  );
}
