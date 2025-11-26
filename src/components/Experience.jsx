import React from "react";

const Experience = ({ data }) => {
    return (
        <section>
            <div>
                <h2 className="text-xl font-bold mb-4">Experience</h2>
                {data.experiences.map((experience, index) => (
                    <div key={index} className="mb-4">
                        <h3 className="text-lg font-semibold">{experience.title} at {experience.company}</h3>
                        <p className="text-gray-600">{experience.year}</p>
                        <p className="text-gray-700">{experience.description}</p>
                        <p className="text-gray-600">{experience.tags.join(", ")}</p>
                        <hr></hr>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Experience;