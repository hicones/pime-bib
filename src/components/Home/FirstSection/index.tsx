interface props {
  children?: React.ReactNode;
}

export const FirstSection = ({ children }: props) => {
  return (
    <section className="w-full h-[55vh] bg-[url('/bg_home.png')] bg-no-repeat bg-cover bg-center">
      {children}
    </section>
  );
};
