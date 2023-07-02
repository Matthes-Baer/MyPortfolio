const TEMPLATE_INNER_PART: (props: {
  title: string;
  content: string;
}) => JSX.Element = (props: {
  title: string;
  content: string;
}): JSX.Element => {
  return (
    <div>
      <h2>{props.title}</h2>
      <div>{props.content}</div>
    </div>
  );
};

export default TEMPLATE_INNER_PART;
