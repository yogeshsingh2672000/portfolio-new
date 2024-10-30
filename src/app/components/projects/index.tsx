import React from "react";
import Link from "next/link";

function Projects() {
  return (
    <section
      id="projects"
      aria-label="Recent Projects by Yogesh Kumar"
      className="p-4 md:p-8 lg:p-12"
    >
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
        Recent Projects
      </h2>

      <div className="project-item mb-6">
        <h3 className="text-xl md:text-2xl font-semibold">
          Ecommerce Marketplace
        </h3>
        <p className="text-base md:text-lg mt-2">
          A comprehensive marketplace for everything.
        </p>
        <ul className="list-disc list-inside mt-2">
          <li>Created CRUD APIs for product management.</li>
          <li>Utilized ORM for seamless database interactions.</li>
          <li>Implemented JWT for secure user authentication.</li>
          <li>
            <strong>Tech Stack:</strong> React, ES6, Express, Sequelize,
            PostgreSQL, REST API, Git
          </li>
          <li>
            <Link
              href="https://github.com/yogeshsingh2672000/ecommerce-frontend/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Source Code - Frontend
            </Link>{" "}
            |
            <Link
              href="https://github.com/yogeshsingh2672000/ecommerce-backend"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              {" "}
              Backend
            </Link>
          </li>
        </ul>
      </div>

      <div className="project-item mb-6">
        <h3 className="text-xl md:text-2xl font-semibold">Twitter Bot</h3>
        <p className="text-base md:text-lg mt-2">
          A Twitter bot designed to post daily on software and tech topics.
        </p>
        <ul className="list-disc list-inside mt-2">
          <li>Built a bot to automate daily posts on relevant topics.</li>
          <li>
            Integrated a no-repeat mechanism to ensure fresh, non-repetitive
            content each day.
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Projects;
