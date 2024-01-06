import Link from "next/link";
import Button from "../common/Button";

// import {
//   HoverCard,
//   HoverCardContent,
//   HoverCardTrigger,
// } from "@/components/ui/hover-card";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../common/shadcn/HoverCard";

const Hero: React.FC = () => {
  return (
    <div className="-lg:px-8 w-full max-w-6xl flex-row">
      <div className="-lg:flex-col flex h-screen w-full flex-row items-center">
        <div className="fadeIn -lg:pt-32 flex flex-1 flex-col" id="top">
          <h1 className="-lg:text-6xl text-7xl font-bold">
            Positify the Internet
          </h1>
          <h2 className="text-textPrimary/90 py-8 text-4xl font-bold">
            Remove all hate speech, misinformation, and
            <br /> harmful content using a browser extension
          </h2>
          <div>
            {/* call to action button of try now styled like mailchimp */}
            <HoverCard>
              <HoverCardTrigger asChild>
                <Link
                  href="https://github.com/Julia-Dantas/Positron-Google-Chrome-Extension"
                  target="_blank"
                >
                  <Button bg="bg-sky-400" text={"Install Now >"} />
                </Link>
              </HoverCardTrigger>
              <HoverCardContent className="w-80">
                <div className="flex justify-between space-x-4">
                  <div className="space-y-1">
                    <h4 className="text-sm font-semibold">
                      Install the Browser Extensions
                    </h4>
                    <p className="text-sm">
                      Follow the instructions to add the extension to your
                      browser to start blocking posts
                    </p>
                    <div className="flex items-center pt-2">
                      <span className="text-muted-foreground text-xs">
                        Last updated January 2024
                      </span>
                    </div>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>

            <HoverCard>
              <HoverCardTrigger asChild>
                <Link href="/check" className="ml-10">
                  <Button bg="bg-green-400" text={"Check your Posts >"} />
                </Link>
              </HoverCardTrigger>
              <HoverCardContent className="w-80">
                <div className="flex justify-between space-x-4">
                  <div className="space-y-1">
                    <h4 className="text-sm font-semibold">Check your posts</h4>
                    <p className="text-sm">
                      Check to see if your posts contain naughty stuff that will
                      be blocked by our extension before you post it
                    </p>
                    {/* <div className="flex items-center pt-2">
                      <span className="text-muted-foreground text-xs">
                        Last updated January 2024
                      </span>
                    </div> */}
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
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
