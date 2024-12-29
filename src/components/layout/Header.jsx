const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold">Task Manager</h1>
          </div>
          
          <div className="flex items-center">
            <button className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white">
              New Task
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 