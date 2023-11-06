interface props {
  children?: React.ReactNode;
}

export const FirstSection = ({ children }: props) => {
  return (
    <section className="w-full h-[65vh] bg-[url('/bg_home.jpg')] backgroundHome">
      {children}
    </section>
  );
};
