export default function Loading(): JSX.Element {
  return (
    <div className="w-full h-screen max-h-full flex items-center justify-center">
      <div className="spinner w-16 h-16 border-4 border-card_yellow border-t-card_blue rounded-full animate-spin"></div>
    </div>
  );
}
