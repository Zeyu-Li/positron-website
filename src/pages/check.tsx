/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/consistent-indexed-object-style */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-redundant-type-constituents */

import Link from "next/link";
import { useState } from "react";
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

interface messageType {
  id: string;
  sender: string;
  text: string;
}

interface rationaleValueStore {
  [key: string]: React.ReactNode | boolean;
}
async function moderateContent(prompt: string) {
  const apiKey =
    "c2stN0Y4b3FrZ2s3ckR0RzFvZkZsd1NUM0JsYmtGSjJ3SnBSU1BZeTV6NjRta0VmTUps";
  const url = "https://api.openai.com/v1/moderations";

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${atob(apiKey)}`,
      },
      body: JSON.stringify({ input: prompt }),
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error while calling OpenAI Moderation API:", error);
  }
}
const rationale: rationaleValueStore = {
  hate: (
    <span>
      This is hate speech, learn more at{" "}
      <a
        target="_blank"
        className="text-secondaryBase"
        href="https://www.un.org/en/hate-speech/understanding-hate-speech/what-is-hate-speech#:~:text=In%20common%20language%2C%20%E2%80%9Chate%20speech,that%20may%20threaten%20social%20peace."
      >
        UN website
      </a>
    </span>
  ),
  fine: <span>You will probably be fine with posting this message</span>,
  harassment: (
    <span>
      You are inciting harassment with this post, learn more at{" "}
      <a
        target="_blank"
        className="text-secondaryBase"
        href="https://www.chrc-ccdp.gc.ca/en/about-human-rights/what-harassment"
      >
        Canada Human Rights Commission
      </a>
    </span>
  ),
  "self-harm": (
    <span>
      This content promotes self-harm, which is harmful. If you or someone you
      know is struggling with self-harm, seek help from{" "}
      <a
        target="_blank"
        className="text-secondaryBase"
        href="https://www.mentalhealth.gov/get-help/immediate-help"
      >
        mental health professionals
      </a>
      .
    </span>
  ),
  "sexual/minors": (
    <span>
      This content involves sexual content with minors, which is illegal and
      harmful. Report such content to the appropriate authorities. Learn more
      about online child exploitation{" "}
      <a
        target="_blank"
        className="text-secondaryBase"
        href="https://www.cybertip.ca/app/en/"
      >
        here
      </a>
      .
    </span>
  ),
  "hate/threatening": (
    <span>
      This message contains hate speech with threatening language, violating
      community guidelines. Avoid posting such content. Learn more about
      combating online hate speech{" "}
      <a
        target="_blank"
        className="text-secondaryBase"
        href="https://www.adl.org/"
      >
        here
      </a>
      .
    </span>
  ),
  "violence/graphic": (
    <span>
      This post depicts graphic violence, which is against community standards.
      Refrain from sharing violent content. Learn more about online safety and
      reporting violent content{" "}
      <a
        target="_blank"
        className="text-secondaryBase"
        href="https://en.wikipedia.org/wiki/Online_gender-based_violence"
      >
        here
      </a>
      .
    </span>
  ),
  "self-harm/intent": (
    <span>
      This content indicates an intention to self-harm. Reach out to a mental
      health professional or a trusted person for support. Learn more about
      recognizing and helping someone with suicidal thoughts{" "}
      <a
        className="text-secondaryBase"
        target="_blank"
        href="https://www.iasp.info/resources/Helping_Someone/"
      >
        here
      </a>
      .
    </span>
  ),
  "self-harm/instructions": (
    <span>
      This message provides instructions for self-harm, which is dangerous. Seek
      immediate help from a mental health professional. Learn more about
      preventing self-harm{" "}
      <a
        target="_blank"
        className="text-secondaryBase"
        href="https://suicidepreventionlifeline.org/how-we-can-all-prevent-suicide/"
      >
        here
      </a>
      .
    </span>
  ),
  "harassment/threatening": (
    <span>
      This post involves harassment with threatening language. Refrain from
      engaging in or promoting threatening behavior. Learn more about
      recognizing and addressing online harassment{" "}
      <a
        target="_blank"
        className="text-secondaryBase"
        href="https://www.bullyingcanada.ca/"
      >
        here
      </a>
      .
    </span>
  ),
  violence: (
    <span>
      The content includes violent elements that violate community guidelines.
      Avoid sharing content that promotes violence. Learn more about the impact
      of violent content on individuals{" "}
      <a
        target="_blank"
        className="text-secondaryBase"
        href="https://www.end-violence.org/safe-online-2021-open-call"
      >
        here
      </a>
      .
    </span>
  ),
  sexual: (
    <span>
      This content involves explicit sexual material, which may violate
      community standards. Use discretion when sharing sexual content. Learn
      more about responsible online behavior{" "}
      <a
        target="_blank"
        className="text-secondaryBase"
        href="https://www.internetmatters.org/issues/inappropriate-content/learn-about-it/#:~:text=This%20could%20include%20content%20such,them%20open%20to%20this%20content."
      >
        here
      </a>
      .
    </span>
  ),
};

const shorthand: rationaleValueStore = {
  sexual: "You think you are a funny guy?",
  hate: "This is hate speech",
  harassment: "We detecting harassment",
  "self-harm": "This post contains self-harm content.",
  "sexual/minors":
    "This post contains inappropriate content related to minors.",
  "hate/threatening": "This post contains threatening hate speech.",
  "violence/graphic": "This post contains graphic violence.",
  "self-harm/intent": "This post shows intent of self-harm.",
  "self-harm/instructions": "This post contains instructions for self-harm.",
  "harassment/threatening": "This post contains threatening harassment.",
  violence: "This contains violence or suggestions of violence",
  fine: "This is fine",
};

export default function Check() {
  const [currentMessage, setCurrentMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setChatMessages] = useState<messageType[]>([
    {
      id: "test1",
      sender: "/user",
      text: "Just type a message below and the AI bot will check for you. As you can see, this message is fine to post!",
    },
    {
      id: "test2",
      sender: "bot",
      text: "fine",
    },
  ]);

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
    ]);
    setCurrentMessage("");
    setIsTyping(true);

    // sent request here
    try {
      const res = await moderateContent(currentMessage);

      console.log(res);
      // what is the text result:
      let text = "fine";
      if (res.results[0].flagged) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        Object.entries(res.results[0].categories).forEach(([key, value]) => {
          if (value) {
            text = key;
          }
        });
      }
      setChatMessages([
        ...messages,
        {
          id: currentMessage,
          sender: "/user",
          text: currentMessage,
        },
        {
          id: res.id,
          sender: "bot",
          text: text,
        },
      ]);
      setIsTyping(false);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <Header />
      <Title title="Positron | Check" />
      <main className="flex min-h-screen flex-col bg-primaryBase p-4 pt-12">
        <div className="m-auto w-full max-w-6xl text-textPrimary">
          <div className="flex h-full w-full items-end justify-between px-2 pt-16 font-semibold -lg:flex-col -lg:pt-8">
            {/* profile image */}
            <div className="flex items-end">
              {/* <div className="mr-4">
                <img
                  src="/_protected/profile.png"
                  alt="profile"
                  className="border-textPrimary h-20 w-20 rounded-full border-2"
                />
              </div> */}
              <h2 className="text-5xl">Validate your messages</h2>
            </div>
            <Link href="/" className="-lg:hidden">
              <button
                title="Back"
                className="button-animation rounded-full border-2 border-textPrimary bg-red-500 px-10 py-3 text-2xl text-textPrimary no-underline transition-all"
              >
                Back
              </button>
            </Link>
          </div>
        </div>

        <div className="bg-girl-default relative m-auto my-0 h-[60vh] w-full max-w-6xl snap-y snap-end overflow-auto rounded-xl border-2 border-textPrimary text-2xl text-textPrimary">
          <div className="pb-12">
            {/* text messages */}
            {messages?.map((message: messageType) => {
              console.log(message);
              if (message.sender === "/user") {
                return (
                  <span key={`user-${message.id}`}>
                    <span className="float-right m-4 ml-[40%] block break-words rounded-[8px] rounded-br-none border-2 border-textPrimary bg-green-400 px-4 py-2 -lg:max-w-full">
                      {message.text}
                    </span>
                    <br />
                    <br />
                  </span>
                );
              } else {
                console.warn(shorthand, message.text, shorthand[message.text]);
                return (
                  <span key={`other-${message.id}`}>
                    <span className="float-left m-4 mr-[40%] block break-words rounded-lg rounded-bl-none border-2 border-textPrimary px-4 py-2 text-justify -lg:max-w-full">
                      <span className="inline-block">
                        {shorthand[message.text]}{" "}
                      </span>
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
                              <DrawerTitle className="capitalize">
                                {message.text}
                              </DrawerTitle>
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
              <span className="absolute left-0 m-4 animate-pulse px-4 py-2 text-textPrimary">
                <video
                  className="h-16 w-16"
                  autoPlay
                  loop
                  src="typing.webm"
                  muted
                />
              </span>
            )}
          </div>
        </div>
        {/* <form> */}
        <div className="m-auto flex w-full max-w-6xl justify-between rounded-xl border-2 border-textPrimary text-textPrimary">
          {/* input message box */}
          <input
            type="text"
            className="h-16 w-full rounded-xl border-0 bg-primary px-4 text-2xl text-textPrimary outline-none placeholder:text-textPrimary/70 focus:outline-none"
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
            className={`h-[68px] w-[72px] rounded-[9px] border-0 border-l-2 border-textPrimary text-2xl text-textPrimary outline-none transition-all focus:outline-none ${
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
