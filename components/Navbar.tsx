type Props = {};

const Navbar = (props: Props): JSX.Element => {
  return (
    <nav className={"relative md:sticky top-0 z-20 backdrop-blur-sm"}>
      <div className={"p-4 flex gap-8"}>
        <div className={"relative group"}>
          <span className={"inline-block"}>Home</span>
          <div className={"hidden group-hover:flex absolute flex-col gap-2 w-28"}>
            <span className={"border-b border-slate-500 hover:bg-white"}>a</span>
            <span>b</span>
          </div>
        </div>
        <div>Blog</div>
        <div>Tools</div>
      </div>
    </nav>
  );
};

export default Navbar;
