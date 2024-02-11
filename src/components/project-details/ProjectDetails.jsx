import "./ProjectDetails.css";
import "../button/Button.css";
import { IoIosArrowBack } from "react-icons/io";
import { useLocation, useNavigate } from "react-router-dom";

const ProjectDetails = () => {
  const { state: data } = useLocation();
  const navigate = useNavigate();

  // const icons = {
  //   linkedin: <FaLinkedin />,
  //   website: <FaGlobe />,
  //   email: <BiLogoGmail />,
  //   twitter: <FaTwitter />,
  // };

  return (
    <section className="ProjectDetails__container">
      <button
        className="invert back"
        onClick={() => navigate(-1)}
      >
        <IoIosArrowBack />
      </button>
      <h2>{data.projectName}</h2>
      <div className="ProjectDetails__action">
        <a
          href={data.view.live.href}
          className="buttonStyle"
        >
          Go to Site
        </a>
        <a
          href={data.view.repo.href}
          className="buttonStyle invert"
        >
          GitHub Repo
        </a>
      </div>
      <div className="ProjectDetails__wrapper">
        <div className="ProjectDetails__items-others">
          <div className="ProjectDetails__items">
            <h3>Year of Release</h3>
            <p>{data.yearOfRelease}</p>
          </div>
          <div className="ProjectDetails__items">
            <h3>Collaborators</h3>
            <p>
              {data.collaborators.length > 0
                ? data.collaborators.join(", ")
                : "None"}
            </p>
          </div>

          <div className="ProjectDetails__items">
            <h3>Platform</h3>
            <p>{data.platform}</p>
          </div>
          <div className="ProjectDetails__items">
            <h3>Role Played</h3>
            <p>{data.rolePlayed}</p>
          </div>
        </div>
        <div className="ProjectDetails__items">
          <h3>Technologies Used</h3>
          <div className="cont-tools">
            {data?.tools?.length > 0 &&
              data.tools.map((tool, index) => <span key={index}>{tool}</span>)}
          </div>
        </div>

        <div className="ProjectDetails__items">
          <h3>Overview</h3>
          <div>
            {data.overview.split("\n\n").map((text, index) => (
              <p key={index}>{text}</p>
            ))}
          </div>
        </div>
        <div className="ProjectDetails__items">
          <h3>Challenges</h3>
          <p>{data.challengesFaced}</p>
        </div>
        <div className="ProjectDetails__items">
          <h3>Solution</h3>
          <p>{data.solution}</p>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;
