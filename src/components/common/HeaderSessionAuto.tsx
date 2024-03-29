import Link from "next/link";

const Header: React.FC = () => {
  const sessionData = false;

  return (
    <header className="bg-primaryBase fixed top-0 z-30 flex w-full items-center justify-between">
      <div className="border-textPrimary text-textPrimary mx-auto flex w-full max-w-6xl items-center justify-between border-b-[1px] p-4">
        {/* logo image */}
        <Link href={sessionData ? "/home" : "/"}>
          <img
            src="/logo.svg"
            alt="Positron"
            className="h-16 w-16 cursor-pointer"
          />
        </Link>

        {/* login */}
        <Link
          href="https://github.com/Julia-Dantas/Positron-Google-Chrome-Extension"
          title="Download the extension"
          target="_blank"
          className="text-textPrimary hover:text-textPrimaryHover text-2xl font-bold transition-all"
        >
          Download It
        </Link>
      </div>
    </header>
  );
};

export default Header;
