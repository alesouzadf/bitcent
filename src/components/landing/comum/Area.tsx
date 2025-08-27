export interface AreaProps {
  id?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: any;
  className?: string;
}

export default function Area(props: AreaProps) {
  return (
    <div
      id={props.id ?? ""}
      className={` 
            flex justify-center w-full
            ${props.className ?? ""}
        `}
    >
      <div
        className={`
            px-7 xl:px-0
            w-full xl:w-[1200px]
        `}
      >
        {props.children}
      </div>
    </div>
  );
}
