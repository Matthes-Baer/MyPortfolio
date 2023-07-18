import { notFound } from "next/navigation";

const NOT_FOUND_CATCH_ALL: () => null = (): null => {
  notFound();
  return null;
};

export default NOT_FOUND_CATCH_ALL;
