import Link from "next/link";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../common/shadcn/HoverCard";
import Button from "./Button";

export default function ActionButtons() {
  return (
    <>
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
                Follow the instructions to add the extension to your browser to
                start blocking posts
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
          <Link href="/check" className="-lg:ml-0 ml-10">
            <Button bg="bg-green-400" text={"Check your Posts >"} />
          </Link>
        </HoverCardTrigger>
        <HoverCardContent className="w-80">
          <div className="flex justify-between space-x-4">
            <div className="space-y-1">
              <h4 className="text-sm font-semibold">Check your posts</h4>
              <p className="text-sm">
                Check to see if your posts contain naughty stuff that will be
                blocked by our extension before you post it
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
    </>
  );
}
