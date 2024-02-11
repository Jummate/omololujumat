import "./Project.css";
import { BigHeading, ProjectItem, FilterField } from "../../components";
import { projects } from "../../utils/project-data";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef, useState, useEffect } from "react";
import ReactPaginate from "react-paginate";

export const Project = () => {
  const [filterParam, setFilterParam] = useState("");

  const [itemOffset, setItemOffset] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const [currentItems, setCurrentItems] = useState([]);
  const itemsPerPage = 3;

  const data = filterParam
    ? projects.filter((project) => project.category === filterParam)
    : projects;

  gsap.registerPlugin(ScrollTrigger);
  let projectRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const anim = gsap.fromTo(
        projectRef.current,
        { autoAlpha: 0, y: 50 },
        { duration: 1, autoAlpha: 1, y: 0 }
      );
      ScrollTrigger.create({
        trigger: projectRef.current,
        animation: anim,
        toggleActions: "play none none none",
        once: true,
      });
    });
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(data?.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(data?.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, filterParam]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    setItemOffset(newOffset);
  };

  return (
    <section
      className="Project__container"
      id="projects"
      ref={projectRef}
    >
      <BigHeading text="My Works" />

      <FilterField setFilterParam={setFilterParam} />

      {/* {currentItems.length > 0 ? (
        <ReactPaginate
          breakLabel="..."
          nextLabel="Next>"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          pageCount={pageCount}
          previousLabel="<Prev"
          renderOnZeroPageCount={null}
          containerClassName="containerClassName"
          activeClassName="activeClassName"
          previousClassName="nav-btn"
          nextClassName="nav-btn"
          pageClassName="pageClassName"
        />
      ) : null} */}

      {currentItems.map((project) => (
        <ProjectItem
          key={project._id}
          project={project}
        />
      ))}

      {currentItems.length > 0 ? (
        <ReactPaginate
          breakLabel="..."
          nextLabel="Next>"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          pageCount={pageCount}
          previousLabel="<Prev"
          renderOnZeroPageCount={null}
          containerClassName="containerClassName"
          activeClassName="activeClassName"
          previousClassName="nav-btn"
          nextClassName="nav-btn"
          pageClassName="pageClassName"
          onClick={() => projectRef.current.scrollIntoView()}
        />
      ) : null}
    </section>
  );
};
