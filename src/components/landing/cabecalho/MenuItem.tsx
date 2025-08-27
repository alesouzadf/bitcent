import Link from "next/link";

export interface MenuItemProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: any;
  url?: string;
  onClick?: () => void;
  className?: string;
}

export default function MenuItem(props: MenuItemProps) {
  function renderizarBotao() {
    return (
      <div
        className={`
                flex justify-center items-center cursor-pointer
                text-zinc-300 m-2 p-4 rounded-md h-9
                ${props.className ?? ""}
            `}
        onClick={props.onClick}
      >
        {props.children}
      </div>
    );
  }

  return props.url ? (
    <Link href={props.url ?? ""}>{renderizarBotao()}</Link>
  ) : (
    renderizarBotao()
  );
}
