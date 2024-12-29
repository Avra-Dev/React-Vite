const Sidebar = () => {
  return (
    <aside className="bg-gray-800 text-white w-64 min-h-screen p-4">
      <nav className="space-y-2">
        <a href="#" className="block px-4 py-2 rounded-md hover:bg-gray-700">
          Dashboard
        </a>
        <a href="#" className="block px-4 py-2 rounded-md hover:bg-gray-700">
          Tasks
        </a>
        <a href="#" className="block px-4 py-2 rounded-md hover:bg-gray-700">
          Projects
        </a>
      </nav>
    </aside>
  );
};

export default Sidebar; 