import Link from "next/link";

const Showcase: React.FC = () => {
  return (
    <div id="showcase" className="text-textPrimary w-full bg-white text-center">
      <div className="-lg:px-8 m-auto flex h-full w-full max-w-6xl flex-col items-center justify-center py-16">
        <h2 className="text-4xl font-semibold">How the Extension Works</h2>
        {/* screenshot img */}
        <div>
          <img
            src="/landing/img/screenshotCropped.png"
            alt="screenshot of app"
            className="image-mask border-textPrimary -lg:w-full m-auto mt-16 w-4/5 rounded-3xl rounded-b-none border-2"
          />
          <p className="pt-16 text-2xl">
            The extension scans for posts and checks to see if they contain
            anything harmful
          </p>
        </div>
      </div>
    </div>
  );
};
export default Showcase;
