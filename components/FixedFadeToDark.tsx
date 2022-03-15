const FixedFadeToDark = (): JSX.Element => {
  return (
    <div className="h-8 pointer-events-none fixed bottom-0 w-full bg-gradient-to-t from-dark" />
    // <div className="h-8 pointer-events-none fixed bottom-0 w-full bg-gradient-to-t from-gray-800" />
  );
};

export default FixedFadeToDark;
