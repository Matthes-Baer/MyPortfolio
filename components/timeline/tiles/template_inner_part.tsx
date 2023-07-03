const TEMPLATE_INNER_PART: (props: {
  title: string;
  content: string;
}) => JSX.Element = (props: {
  title: string;
  content: string;
}): JSX.Element => {
  return (
    <div>
      <h2 className="text-3xl border-b border-b-card_yellow">{props.title}</h2>
      <div className="text-lg">{props.content}</div>
    </div>
  );
};

export default TEMPLATE_INNER_PART;
