import React from "react";

function HeroSection() {
  return (
    <section
      id="hero"
      className="p-4 md:p-8 lg:p-12"
      aria-label="Introduction of Yogesh Kumar"
    >
      <p className="text-base md:text-lg lg:text-xl">Hello,</p>
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mt-2">
        I&apos;m Yogesh Kumar
      </h1>
      <h2 className="text-lg md:text-xl lg:text-2xl mt-1">
        Software Engineer Specializing in Modern Web Technologies
      </h2>
      <p className="mt-4">
        I have expertise in various tech stacks, including:
      </p>
      <ul className="list-disc list-inside mt-2">
        <li>
          <strong>Languages:</strong> JavaScript, TypeScript, Python, SQL
        </li>
      </ul>
      <p className="mt-4">I specialize in frontend development with:</p>
      <ul className="list-disc list-inside mt-2">
        <li>Next.js</li>
        <li>React.js</li>
        <li>Tailwind CSS</li>
        <li>Material UI</li>
      </ul>
      <p className="mt-4">For backend development, I am proficient in:</p>
      <ul className="list-disc list-inside mt-2">
        <li>Node.js</li>
        <li>Python</li>
      </ul>
      <p className="mt-4">In terms of deployment, I utilize:</p>
      <ul className="list-disc list-inside mt-2">
        <li>AWS</li>
        <li>Serverless Architecture</li>
        <li>AWS Lambda</li>
        <li>Vercel</li>
      </ul>
      <p className="mt-4">My database skills include:</p>
      <ul className="list-disc list-inside mt-2">
        <li>MySQL</li>
        <li>PostgreSQL</li>
      </ul>
      <p className="mt-4">
        I also have experience with various tools and methodologies:
      </p>
      <ul className="list-disc list-inside mt-2">
        <li>Jest (Testing)</li>
        <li>Git (Version Control)</li>
        <li>Trello (Project Management)</li>
      </ul>
      <p className="mt-4">
        With a solid foundation in these technologies and practices, I am
        equipped to tackle complex software engineering challenges.
      </p>
    </section>
  );
}

export default HeroSection;
