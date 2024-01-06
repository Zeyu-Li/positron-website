import { type NextPage } from "next";
import Link from "next/link";
import Button from "../components/common/Button";
import Header from "../components/common/HeaderSessionAuto";
import Title from "../components/SEO/Title";

const Custom404: NextPage = () => {
  return (
    <>
      <Title title="PlayDate | Lost in Action" />
      <Header />
      <main className="bg-primaryBase flex min-h-screen flex-col items-center justify-center">
        <div className="-lg:px-8 w-full  max-w-6xl">
          <div className="-lg:flex-col flex h-screen w-full flex-row items-center">
            <div className="-lg:pt-32 flex flex-1 flex-col" id="top">
              <div>
                <h1 className="-lg:text-6xl text-6xl font-bold">
                  Looks like you{"'"}re lost
                </h1>
              </div>
              <div>
                <h2 className="text-textPrimary/90 py-8 text-4xl font-bold">
                  Come back 🥺
                </h2>
              </div>
              <div>
                {/* call to action button of try now styled like mailchimp */}
                {/* popout on hover */}
                <Link href="/">
                  <Button text={"Take me Home →"} />
                </Link>
              </div>
            </div>
            <div className="flex flex-1 justify-end">
              <img
                src="/common/image/girl.png"
                alt="PlayDate avatar"
                className="h-full"
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
export default Custom404;
