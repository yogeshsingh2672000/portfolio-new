import React from "react";

function Experience() {
  return (
    <section
      id="experience"
      aria-label="Professional Experience of Yogesh Kumar"
      className="p-4 md:p-8 lg:p-12"
    >
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
        Professional Experience
      </h2>

      <div className="experience-item mb-6">
        <h3 className="text-xl md:text-2xl font-semibold">Software Engineer</h3>
        <h4 className="text-lg md:text-xl font-medium">Tern Group</h4>
        <p className="text-base md:text-lg mt-2">
          December 2023 – Present | Delhi
        </p>
        <ul className="list-disc list-inside mt-2">
          <li>
            Led the development of a CV parser to transform medical resumes into
            structured profiles, enhancing data storage and retrieval.
          </li>
          <li>
            Reduced manual processing time from 45 minutes to just 5 minutes.
          </li>
          <li>
            Created a pre-interview simulation project, increasing the candidate
            pipeline by 25%.
          </li>
          <li>
            Designed end-to-end file upload features with a progress bar for
            better user experience.
          </li>
          <li>
            Enhanced system modularity by decoupling components and developing
            atomic React components for reusability.
          </li>
          <li>
            Implemented custom hooks to enhance code quality and reduce future
            development effort.
          </li>
          <li>
            <strong>Tech Stack:</strong> Next.js, React.js, Node.js, Python,
            AWS, Lambda, Serverless, PostgreSQL, Tailwind CSS, Vercel
          </li>
        </ul>
      </div>

      <div className="experience-item mb-6">
        <h3 className="text-xl md:text-2xl font-semibold">
          Software Developer Engineer
        </h3>
        <h4 className="text-lg md:text-xl font-medium">Conciselabs</h4>
        <p className="text-base md:text-lg mt-2">
          April 2023 – September 2023 | Remote
        </p>
        <ul className="list-disc list-inside mt-2">
          <li>
            Developed adaptive products using React.js, ES6, Next.js, and
            Tailwind CSS, boosting user satisfaction by 25%.
          </li>
          <li>
            Created a custom React hook that reduced search input access time by
            20% with efficient keyboard shortcuts.
          </li>
          <li>
            Designed adaptive and clean UI utilizing Next.js, ES6, Tailwind,
            Hooks, and Context APIs.
          </li>
          <li>
            Developed secure user authentication, significantly decreasing
            unauthorized access incidents.
          </li>
          <li>
            Implemented Google authentication, enhancing user convenience by
            30%.
          </li>
          <li>
            <strong>Tech Stack:</strong> React.js, Node.js, Express, PostgreSQL
          </li>
        </ul>
      </div>

      <div className="experience-item mb-6">
        <h3 className="text-xl md:text-2xl font-semibold">SDE Intern</h3>
        <h4 className="text-lg md:text-xl font-medium">
          Letsdressup Fashion Pvt. Ltd.
        </h4>
        <p className="text-base md:text-lg mt-2">
          January 2022 – June 2022 | Gurgaon, HR
        </p>
        <ul className="list-disc list-inside mt-2">
          <li>
            Implemented an admin panel for dynamic role and workflow
            adjustments, reducing task assignment time by 40%.
          </li>
          <li>
            Integrated user authentication and access controls, ensuring data
            security and reducing unauthorized access incidents by 60%.
          </li>
        </ul>
      </div>

      <div className="experience-item mb-6">
        <h3 className="text-xl md:text-2xl font-semibold">
          Python Developer Intern
        </h3>
        <h4 className="text-lg md:text-xl font-medium">Arity Technologies</h4>
        <p className="text-base md:text-lg mt-2">
          November 2020 – December 2020 | Gurgaon, HR
        </p>
        <ul className="list-disc list-inside mt-2">
          <li>
            Developed Python scripts for bulk data extraction from Excel,
            reducing manual data entry by 90%.
          </li>
          <li>
            Automated data insertion into MySQL database, improving efficiency
            by processing 500 records per minute.
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Experience;
