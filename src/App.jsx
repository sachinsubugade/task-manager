import NewProject from "./components/NewProject";
import NoPrejectSelected from "./components/NoProjectSelected";
import ProjectSidebar from "./components/ProjectSidebar";
function App() {
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSidebar />
      <NoPrejectSelected />
    </main>
  );
}

export default App;
