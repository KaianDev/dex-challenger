import { LinkButton } from "./LinkButton";

type NotFoundProps = {
  message: string;
};

export const NotFound = ({ message }: NotFoundProps) => {
  return (
    <div className="my-[20%] flex h-full flex-col items-center justify-center gap-10">
      <p className="text-center text-2xl">{message}</p>
      <LinkButton to="/">Voltar</LinkButton>
    </div>
  );
};
