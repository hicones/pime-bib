interface StarProps {
  color?: string;
}

export const DivideStar = ({ color }: StarProps) => {
  return (
    <svg width="96" height="94" viewBox="0 0 96 94">
      <path
        d="M26.9303 0.824593L48.1467 34.22L69.4508 0.880478L56.5695 38.2898L95.9183 34.1592L58.6391 47.4126L86.4021 75.6013L52.797 54.7186L48.0681 93.9999L43.4425 54.7063L9.78266 75.5006L37.6197 47.3849L0.375428 34.0337L39.7132 38.2677L26.9303 0.824593Z"
        fill={color ? color : "#FFFEFB"}
      />
    </svg>
  );
};
