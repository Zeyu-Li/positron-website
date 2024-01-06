import Link from "next/link";

const LinkIcon: React.FC<{
  href: string;
  title: string;
  children: React.ReactNode;
}> = ({ href, title, children }) => {
  return (
    <Link
      href={href}
      title={title}
      target="_blank"
      className="hover:text-secondary mx-2"
    >
      {children}
    </Link>
  );
};

const Footer: React.FC = () => {
  return (
    <footer
      id="footer"
      className="bg-textPrimary text-textSecondary -lg:px-8 -sm:text-xl w-full text-center text-3xl"
    >
      <div className="m-auto flex h-full w-full max-w-6xl flex-row justify-between py-8">
        <p>
          {/* copyright */}
          <span className="text-2xl">© Positron</span>
        </p>
        <Link
          href="/login"
          className="text-textSecondary hover:text-textSecondaryHover text-2xl font-bold transition-all"
        >
          Try It
        </Link>
      </div>
    </footer>
  );
};
export default Footer;
