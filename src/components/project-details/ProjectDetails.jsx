import "./ProjectDetails.css";
import { useLocation } from "react-router-dom";

const ProjectDetails = () => {
  const { state: data } = useLocation();
  return (
    <section className="ProjectDetails__container">
      <div className="ProjectDetails__overlay"></div>
      <h1>{data.overview}</h1>
    </section>
  );
};

export default ProjectDetails;
