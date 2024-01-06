import Link from "next/link";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../common/shadcn/Card";

const Services: React.FC = () => {
  return (
    <div
      id="showcase"
      className="text-textSecondary bg-secondaryBase w-full text-center"
    >
      <div className="-lg:px-8 m-auto flex h-full w-full max-w-6xl flex-col items-center justify-center py-16">
        <h2 className="text-4xl font-semibold">How the Extension Works</h2>
        {/* screenshot img */}
        <div className="flex flex-row space-x-4 pt-16">
          <Card className="w-[20vw]">
            <CardHeader>
              <CardTitle>YouTube</CardTitle>
              <CardDescription>Block YouTube comments</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Card Content</p>
            </CardContent>
          </Card>
          <Card className="w-[20vw]">
            <CardHeader>
              <CardTitle>Twitter</CardTitle>
              <CardDescription>Block nasty tweets</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Card Content</p>
            </CardContent>
          </Card>
        </div>
        <p className="pt-16 text-2xl">
          The extension scans for posts and checks to see if they contain
          anything harmful
        </p>
      </div>
    </div>
  );
};
export default Services;
