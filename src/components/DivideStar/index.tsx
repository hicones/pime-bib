interface StarProps {
  color?: string;
}

export const DivideStar = ({ color }: StarProps) => {
  return (
    <svg width="50" height="50" viewBox="0 0 50 50">
      <path
        d="M14.3381 0.796749L25.142 17.8026L35.9907 0.825206L29.4311 19.875L49.4686 17.7716L30.485 24.5206L44.6227 38.875L27.5101 28.241L25.102 48.2441L22.7465 28.2347L5.60604 38.8238L19.7814 24.5065L0.815624 17.7077L20.8475 19.8638L14.3381 0.796749Z"
        fill={color ? color : "#FFFEFB"}
      />
    </svg>
  );
};
