/* eslint-disable @next/next/no-img-element */

interface FooterProps {
  color?: string;
}

export const Footer = ({ color }: FooterProps) => {
  return (
    <footer
      style={color ? { background: color } : { background: "#2BA5EA" }}
      className={`flex items-center justify-center p-8 mt-48 relative`}
    >
      <img src="/paulistinho.svg" alt="paulistinho" className="paulistinho" />
      <a
        href="https://instagram.com/opaulistinho"
        target="_blank"
        className="text-center lg:text-2xl text-xl font-bold text-white uppercase hover:text-fontcolor-100 transition duration-300"
      >
        @opaulistinho
      </a>
    </footer>
  );
};
