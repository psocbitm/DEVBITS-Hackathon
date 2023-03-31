import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="-m-1.5 p-1.5">
      <div className="text-xl font-bold text-blue-600 tracking-tight font-sans">
        Investify
      </div>
    </Link>
  );
}