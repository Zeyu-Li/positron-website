import Link from "next/link";
import Button from "../common/Button";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

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
            <br /> harmful content using an extension
          </h2>
          <div>
            {/* call to action button of try now styled like mailchimp */}
            {/* TODO: Download the extension link */}
            <HoverCard>
              <HoverCardTrigger asChild>
                <Link href="/#">
                  <Button bg="bg-sky-400" text={"Install Now >"} />
                </Link>
              </HoverCardTrigger>
              <HoverCardContent className="w-80">
                <div className="flex justify-between space-x-4">
                  <div className="space-y-1">
                    <h4 className="text-sm font-semibold">@nextjs</h4>
                    <p className="text-sm">
                      The React Framework – created and maintained by @vercel.
                    </p>
                    <div className="flex items-center pt-2">
                      <span className="text-muted-foreground text-xs">
                        Joined December 2021
                      </span>
                    </div>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
            <Link href="/check" className="ml-10">
              <Button text={"Check your Posts >"} />
            </Link>
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
