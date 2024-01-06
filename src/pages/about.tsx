import Link from "next/link";
import Button from "~/components/common/Button";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Spinner from "~/components/common/spinner/Spinner";
import Title from "~/components/SEO/Title";
import Header from "~/components/common/HeaderSessionAuto";
import ActionButtons from "~/components/common/ActionButtons";

export default function About() {
  return (
    <>
      <Header />
      <Title title="PlayDate | Chatting with Kali" />
      <main className="bg-primaryBase flex min-h-screen flex-col p-4 pt-12">
        {/* <div className="text-textPrimary m-auto w-full max-w-6xl">
          <div className="-lg:pt-8 flex h-full w-full items-end justify-between px-2 pt-16 font-semibold">
            <div className="flex items-end">
              <div className="mr-4">
                <img
                  src="/_protected/profile.png"
                  alt="profile"
                  className="border-textPrimary h-20 w-20 rounded-full border-2"
                />
              </div>
              <h2 className="text-5xl">Kali</h2>
            </div>
            <Link href="/">
              <button
                title="Back"
                className="button-animation border-textPrimary text-textPrimary rounded-full border-2 bg-red-500 px-10 py-3 text-2xl no-underline transition-all"
              >
                Back
              </button>
            </Link>
          </div>
        </div> */}

        <div className="border-textPrimary text-textPrimary relative m-auto my-0 w-full max-w-6xl snap-y snap-end overflow-auto rounded-xl pb-12 pr-[15vw] pt-24 text-justify text-2xl">
          <h1 className="-lg:text-6xl pb-12 text-7xl font-bold">About</h1>
          <p className="pb-12 text-2xl">
            In a world full of misinformation, hate speech, and harmful content,
            it overwhelms and negatively effects people. With our extension, we
            can hide hateful content <b>automagically</b>! You can also check if
            your post will be flagged by our system by checking your post on
            this website by hitting the button below!{" "}
          </p>
          <ActionButtons />
        </div>
      </main>
    </>
  );
}
