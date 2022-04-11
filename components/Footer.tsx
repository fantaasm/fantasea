type Props = {
  children?: React.ReactNode;
};

const Footer = ({ children }: Props): JSX.Element => {
  return (
    <footer className={"container max-w-5xl px-2 mb-4"}>
      {children}
      <div className={"mt-12 text-center"}>
        <span className={"text-slate-400"}>
          Fantasea - {new Date().getFullYear()}. All rights reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
