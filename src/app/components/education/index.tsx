import React from "react";

function Education() {
  return (
    <section
      id="education"
      aria-label="Education of Yogesh Kumar"
      className="p-4 md:p-8 lg:p-12"
    >
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
        Education
      </h2>

      <div className="education-item mb-6">
        <h3 className="text-xl md:text-2xl font-semibold">
          Maharshi Dayanand University
        </h3>
        <h4 className="text-lg md:text-xl font-medium">
          B.Tech in Computer Science Engineering
        </h4>
        <p className="text-base md:text-lg mt-2">
          September 2022 | Haryana, India
        </p>
        <p className="text-base md:text-lg">
          <strong>CGPA:</strong> 7.5
        </p>
      </div>
    </section>
  );
}

export default Education;
