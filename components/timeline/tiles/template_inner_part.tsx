const TEMPLATE_INNER_PART: (props: {
  title: string;
  content: string;
  date?: string;
}) => JSX.Element = (props: {
  title: string;
  content: string;
  date?: string;
}): JSX.Element => {
  return (
    <div className="whitespace-pre-wrap">
      <div className="flex justify-between">
        <h2 className="text-3xl border-b border-b-card_yellow text-left">
          {props.title}
        </h2>
        {props.date && <div className="text-right">{props.date}</div>}
      </div>

      <div className="text-lg pt-2">{props.content}</div>
    </div>
  );
};

export default TEMPLATE_INNER_PART;
