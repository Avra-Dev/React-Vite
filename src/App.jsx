import Layout from './components/layout/Layout'

function App() {
  return (
    <Layout>
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Welcome to Task Manager</h2>
        <p>This is where your tasks will appear.</p>
      </div>
    </Layout>
  )
}

export default App
