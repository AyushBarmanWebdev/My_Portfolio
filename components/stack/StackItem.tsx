interface StackItemProps {
  name: string;
}

export default function StackItem({ name }: StackItemProps) {
  return (
    <li className="font-mono text-[10px] text-zinc-400">
      {name}
    </li>
  );
}
