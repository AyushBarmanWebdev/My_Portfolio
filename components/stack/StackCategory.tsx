import StackItem from "./StackItem";
import { StackCategory as StackCategoryType } from "./StackData";

interface StackCategoryProps {
  category: StackCategoryType;
  className?: string;
}

export default function StackCategory({
  category,
  className = "",
}: StackCategoryProps) {
  return (
    <div className={`border border-zinc-900 bg-zinc-950/40 p-6 rounded-custom ${className}`}>
      {/* Top Bar Decoration & Status Indicator */}
      <div className="flex items-center justify-between border-b border-zinc-900 pb-3 mb-4 text-[9px] font-mono text-zinc-500">
        <span>{category.code}</span>
        <span
          className={`w-1.5 h-1.5 rounded-full ${
            category.isActive ? "bg-emerald-400" : "bg-zinc-700"
          }`}
        />
      </div>

      {/* Category Heading */}
      <h3 className="font-mono text-xs font-bold text-white uppercase tracking-wider mb-4">
        {category.title}
      </h3>

      {/* Tech Stack Item List */}
      <ul className="space-y-2 font-mono text-[10px] text-zinc-400">
        {category.items.map((item, index) => (
          <StackItem key={index} name={item} />
        ))}
      </ul>
    </div>
  );
}
