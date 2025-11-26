import React from "react";

const Sidebar = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <aside className="sidebar-container">
      <nav className="sidebar-nav">
        {/* routing sidebar biar mudah menggunakan id per div di app.jsx */}
        <button onClick={() => scrollToSection("home")} className="nav-item" aria-label="Home">
          <i className="fa-solid fa-house"></i>
        </button>
        <button onClick={() => scrollToSection("skills")} className="nav-item" aria-label="Skills">
          <i className="fa-solid fa-code"></i>
        </button>
        <button onClick={() => scrollToSection("experience")} className="nav-item" aria-label="Experience">
          <i className="fa-solid fa-briefcase"></i>
        </button>
        <button onClick={() => scrollToSection("projects")} className="nav-item" aria-label="Projects">
          <i className="fa-solid fa-folder-open"></i>
        </button>
      </nav>
    </aside>
  );
};

export default Sidebar;