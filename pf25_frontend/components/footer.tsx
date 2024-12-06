export function Footer() {
  return (
    <div className="flex flex-col md:flex-row justify-between border-t w-full">
      <div className="flex flex-col m-4 md:m-16">
        <h1 className="text-md md:text-xl font-semibold text-neutral-500 dark:text-neutral-500 mb-2">
          jasonedman.dev
        </h1>
        <p className="text-xs md:text-sm text-neutral-800 dark:text-neutral-200 mb-1">
          Designed and developed by Jason Edman
        </p>
        <p className="text-xs md:text-sm text-neutral-800 dark:text-neutral-200">
          <span>Source code available on </span>
          <a
            href="https://github.com/jpe0824/pf_25"
            target="_blank"
            className="underline"
          >
            Github
          </a>
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 m-4 md:m-16">
        <div className="flex flex-col">
          <h1 className="text-sm md:text-md font-semibold mb-2 text-neutral-600 dark:text-neutral-400">
            Contact & Social
          </h1>
          <a
            className="text-sm mb-1 text-neutral-800 dark:text-neutral-200"
            href="https://github.com/jpe0824"
            target="_blank"
          >
            Github
          </a>
          <a
            className="text-sm mb-1 text-neutral-800 dark:text-neutral-200"
            href="https://discordapp.com/users/691278886666895382"
            target="_blank"
          >
            Discord
          </a>
          <a
            className="text-sm mb-1 text-neutral-800 dark:text-neutral-200"
            href="https://www.linkedin.com/in/jason-edman-140724241/"
            target="_blank"
          >
            LinkedIn
          </a>
          <a
            className="text-sm mb-1 text-neutral-800 dark:text-neutral-200"
            href={`mailto:${"jason.e24@gmail.com"}`}
            target="_blank"
          >
            Email
          </a>
        </div>
        <div className="flex flex-col ">
          <h1 className="text-sm md:text-md font-semibold mb-2 text-neutral-600 dark:text-neutral-400">
            Technology Used
          </h1>
          <a
            className="text-sm mb-1 text-neutral-800 dark:text-neutral-200"
            href="https://nextjs.org/"
            target="_blank"
          >
            Next.js
          </a>
          <a
            className="text-sm mb-1 text-neutral-800 dark:text-neutral-200"
            href="https://react.dev/"
            target="_blank"
          >
            React
          </a>
          <a
            className="text-sm mb-1 text-neutral-800 dark:text-neutral-200"
            href="https://ui.shadcn.com/"
            target="_blank"
          >
            Shadcn
          </a>
          <a
            className="text-sm mb-1 text-neutral-800 dark:text-neutral-200"
            href="https://ui.aceternity.com/"
            target="_blank"
          >
            AceternityUI
          </a>
          <a
            className="text-sm mb-1 text-neutral-800 dark:text-neutral-200"
            href="https://tailwindcss.com/"
            target="_blank"
          >
            Tailwind
          </a>
        </div>
        <div className="flex flex-col ">
          <h1 className="text-sm md:text-md font-semibold mb-2 text-neutral-600 dark:text-neutral-400">
            Referenced Experience
          </h1>
          <a
            className="text-sm mb-1 text-neutral-800 dark:text-neutral-200"
            href="https://www.uamps.com/"
            target="_blank"
          >
            UAMPS
          </a>
          <a
            className="text-sm mb-1 text-neutral-800 dark:text-neutral-200"
            href="https://www.opentext.com/"
            target="_blank"
          >
            OpenText
          </a>
        </div>
        <div className="flex flex-col ">
          <h1 className="text-sm md:text-md font-semibold mb-2 text-neutral-600 dark:text-neutral-400">
            Referenced Education
          </h1>
          <a
            className="text-sm mb-1 text-neutral-800 dark:text-neutral-200"
            href="https://www.uvu.edu/cs/computer-science/"
            target="_blank"
          >
            Utah Valley University
          </a>
        </div>
      </div>
    </div>
  );
}
