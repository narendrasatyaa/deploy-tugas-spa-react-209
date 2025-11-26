import React from "react";

const Project = ({ data }) => {
    return (
        <section>
            <div>
                <h2 className="text-xl font-bold mb-4">Projects</h2>
                {data.projects.map((project, index) => (
                    <div key={index} className="mb-4">
                        <h3 className="text-lg font-semibold">{project.name}</h3>             
                        <hr></hr>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Project;