import Link from "next/link";
import Button from "../common/Button";
import ActionButtons from "../common/ActionButtons";

// import {
//   HoverCard,
//   HoverCardContent,
//   HoverCardTrigger,
// } from "@/components/ui/hover-card";

const Hero: React.FC = () => {
  return (
    <div className="-lg:px-8 w-full max-w-6xl flex-row">
      <div className="-lg:flex-col flex h-screen w-full flex-row items-center">
        <div className="fadeIn -lg:pt-32 ml-12 flex flex-1 flex-col" id="top">
          <h1 className="-lg:text-6xl text-7xl font-bold">
            Positify the Internet ✨
          </h1>
          <h2 className="text-textPrimary/90 py-8 text-4xl font-semibold">
            Remove all hate speech, misinformation, and
            <br /> harmful content using a{" "}
            <Link
              href="https://github.com/Julia-Dantas/Positron-Google-Chrome-Extension"
              target="_blank"
            >
              {/* from https://www.andrealves.dev/blog/how-to-make-an-animated-gradient-text-with-tailwindcss/ */}
              <b className="animate-gradient bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 bg-clip-text text-transparent">
                browser extension
              </b>
            </Link>
          </h2>
          <div>
            {/* call to action button of try now styled like mailchimp */}
            <ActionButtons />
            <Link href="/about" className="ml-10">
              <Button text={"About >"} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
