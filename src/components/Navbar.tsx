import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-slate-900 text-white px-8 py-4 flex justify-between items-center shadow-lg">
      <h1 className="text-3xl font-bold text-teal-400">
        ClubSync
      </h1>

      <div className="flex gap-8 text-lg">
        <Link href="/">Home</Link>
        <Link href="/create-task">Create Task</Link>
        <Link href="/dashboard">Dashboard</Link>
      </div>
    </nav>
  );
};

export default Navbar;