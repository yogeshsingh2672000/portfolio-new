import Link from "next/link";
import React from "react";

function AwardAndAchievements() {
  return (
    <section
      id="achievements"
      aria-label="Awards and Achievements of Yogesh Kumar"
      className="p-4 md:p-8 lg:p-12"
    >
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
        Awards and Achievements
      </h2>

      <ul className="list-disc list-inside">
        <li className="mt-2">536 Global Rank in CodeChef Long Challenge</li>
        <li className="mt-2">
          Completed Crash Course in{" "}
          <Link
            href="https://coursera.org/share/c9502e74a993ddc761678f8437f93f4f"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Python
          </Link>
        </li>
        <li className="mt-2">
          <Link
            href="https://coursera.org/share/c98d10f653096c0cc91845e3c409bd4c"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            AWS
          </Link>{" "}
          Cloud Technical Essentials Certification
        </li>
        <li className="mt-2">
          5-Star Rating in Python Proficiency on HackerRank
        </li>
      </ul>
    </section>
  );
}

export default AwardAndAchievements;
