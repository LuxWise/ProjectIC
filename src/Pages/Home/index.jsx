import { useContext } from "react";
import Navbar from "../../Components/Navbar";
import { ProjectItem } from "../../Components/ProjectItem";
import { ProjectContext } from "../../context";
import menu from "../../assets/menu.png";

const Home = () => {
  const { logProjects } = useContext(ProjectContext);

  return (
    <div className="flex w-full h-full pt-16">
      <Navbar />
      <section className="flex flex-col gap-8 items-center w-4/12 h-full pt-10 pb-16 bg-project-register border-r-2 border-login">
        {logProjects.map(project => (
          <ProjectItem
            key={project.title}
            title={project.title}
            status={project.status}
          />
        ))}
      </section>
      <section className="flex gap-7 items-center pt-16 w-full h-full bg-background">
        <img className="h-full -mt-24 ml-32" src={menu} />
      </section>
    </div>
  );
};

export { Home };
