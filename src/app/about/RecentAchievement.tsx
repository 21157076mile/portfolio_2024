import Link from "next/link";

export default function RecentAchievement() {
  return (
    <div className="mx-auto max-w-[768px] font-light">
      <p>
        I am so happy to have completed the online course{" "}
        <Link
          href="https://www.mexoxo.com/e-cornell"
          rel="nofollow noreferrer"
          className="text-sky-700 hover:text-sky-600 dark:text-sky-400 dark:hover:text-sky-300"
          target="_blank"
        >
          <strong>Take the Lead</strong>
        </Link>{" "}
        of Mexoxo collaborates with eCornell University. By taking this online
        course, you will not only aim to be a leader but also have an
        opportunity to enhance your career path and explore yourself. From my
        own experience, I would advise you to take the course as well. It&apos;s
        still available now.
      </p>
    </div>
  );
}
