import Link from "next/link";
import Button from "~/components/common/Button";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Spinner from "~/components/common/spinner/Spinner";
import Title from "~/components/SEO/Title";
import Header from "~/components/common/HeaderSessionAuto";
import QuestionIcon from "~/components/common/QuestionIcon";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "~/components/common/shadcn/Drawer";

export default function Check() {
  const [currentMessage, setCurrentMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setChatMessages] = useState<any>([]);

  const rationale = {
    "This text is fine": (
      <p>You will probably be fine with posting this message</p>
    ),
    "Hate Speech": (
      <p>
        This is hate speech, learn more at{" "}
        <a
          className="text-secondaryBase"
          href="https://www.un.org/en/hate-speech/understanding-hate-speech/what-is-hate-speech#:~:text=In%20common%20language%2C%20%E2%80%9Chate%20speech,that%20may%20threaten%20social%20peace."
        >
          UN website
        </a>
      </p>
    ),
  };

  const sendChatMessage = async () => {
    if (currentMessage.trim() === "") {
      return;
    }
    console.log([
      ...messages,
      {
        id: btoa(currentMessage),
        sender: "/user",
        text: currentMessage,
      },
    ]);
    setChatMessages([
      ...messages,
      {
        id: currentMessage,
        sender: "/user",
        text: currentMessage,
      },
      {
        id: "s",
        sender: "bot",
        text: "This text is fine",
      },
      {
        id: "ss",
        sender: "bot",
        text: "Hate Speech",
      },
    ]);
    setCurrentMessage("");

    // TODO: sent request here

    // setChatMessages([
    //   ...messages,
    //   {
    //     id: "s",
    //     sender: "bot",
    //     text: "This text is fine",
    //   },
    // ]);
  };

  return (
    <>
      <Header />
      <Title title="PlayDate | Chatting with Kali" />
      <main className="bg-primaryBase flex min-h-screen flex-col p-4 pt-12">
        <div className="text-textPrimary m-auto w-full max-w-6xl">
          <div className="-lg:pt-8 flex h-full w-full items-end justify-between px-2 pt-16 font-semibold">
            {/* profile image */}
            {/* <div className="flex items-end">
              <div className="mr-4">
                <img
                  src="/_protected/profile.png"
                  alt="profile"
                  className="border-textPrimary h-20 w-20 rounded-full border-2"
                />
              </div>
              <h2 className="text-5xl">Kali</h2>
            </div> */}
            <Link href="/">
              <button
                title="Back"
                className="button-animation border-textPrimary text-textPrimary rounded-full border-2 bg-red-500 px-10 py-3 text-2xl no-underline transition-all"
              >
                Back
              </button>
            </Link>
          </div>
        </div>

        <div className="bg-girl-default border-textPrimary text-textPrimary relative m-auto my-0 h-[60vh] w-full max-w-6xl snap-y snap-end overflow-auto rounded-xl border-2 text-2xl">
          <div className="pb-12">
            {/* text messages */}
            {messages?.map((message: any) => {
              console.log(message);
              if (message.sender === "/user") {
                return (
                  <span key={`user-${message.id}`}>
                    <span className="border-textPrimary -lg:max-w-full float-right m-4 block max-w-[30%] break-words rounded-[8px] rounded-br-none border-2 bg-green-400 px-4 py-2">
                      {message.text}
                    </span>
                    <br />
                    <br />
                  </span>
                );
              } else {
                return (
                  <span key={`other-${message.id}`}>
                    <span className="border-textPrimary -lg:max-w-full float-left m-4 block max-w-[30%] break-words rounded-lg rounded-bl-none border-2 px-4 py-2 text-justify">
                      <span className="inline-block">{message.text} </span>
                      <Drawer>
                        <DrawerTrigger>
                          <span
                            className="inline-block pl-4 align-bottom"
                            title="See about this"
                          >
                            <QuestionIcon />
                          </span>
                        </DrawerTrigger>
                        <DrawerContent>
                          <div className="mb-20 flex w-full items-center justify-center">
                            <DrawerHeader>
                              <DrawerTitle>{message.text}</DrawerTitle>
                              <DrawerDescription>
                                {rationale[message.text]}
                              </DrawerDescription>
                            </DrawerHeader>
                            <DrawerFooter>
                              {/* <Button>Submit</Button>
                            <DrawerClose>
                              <Button variant="outline">Cancel</Button>
                            </DrawerClose> */}
                            </DrawerFooter>
                          </div>
                        </DrawerContent>
                      </Drawer>
                    </span>
                    <br />
                    <br />
                  </span>
                );
              }
            })}
            {/* if still fetching text message pulse loading */}
            {/* {isLoading && (
              <span className="text-textPrimary m-auto animate-pulse">
                <Spinner />
              </span>
            )} */}
            {/* typing indicator */}
            {isTyping && (
              <span className="text-textPrimary absolute left-0 m-4 animate-pulse px-4 py-2">
                <video
                  className="h-16 w-16"
                  autoPlay
                  loop
                  src="/common/animation/typing.webm"
                  muted
                />
              </span>
            )}
          </div>
        </div>
        {/* <form> */}
        <div className="border-textPrimary text-textPrimary m-auto flex w-full max-w-6xl justify-between rounded-xl border-2">
          {/* input message box */}
          <input
            type="text"
            className="bg-primary text-textPrimary placeholder:text-textPrimary/70 h-16 w-full rounded-xl border-0 px-4 text-2xl outline-none focus:outline-none"
            placeholder="Check your messages!"
            onSubmit={() => void sendChatMessage()}
            onChange={(e) => setCurrentMessage(e.target.value)}
            value={currentMessage}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                sendChatMessage().catch((err) => console.error(err));
              }
            }}
          />
          {/* send button */}
          <button
            className={`border-textPrimary text-textPrimary h-[68px] w-[72px] rounded-[9px] border-0 border-l-2 text-2xl outline-none transition-all focus:outline-none ${
              isTyping ? "bg-red-500" : "bg-green-400 hover:bg-green-400/60"
            }`}
            onClick={() => void sendChatMessage()}
            title="Send Message"
            disabled={isTyping}
          >
            {isTyping ? "🔒" : "➡️"}
          </button>
        </div>
        {/* </form> */}
      </main>
    </>
  );
}