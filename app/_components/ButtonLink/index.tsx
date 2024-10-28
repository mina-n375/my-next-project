import style from "./index.module.css";

type Props = {
  href: string;
  children: React.ReactNode;
};

export default function ButtonLink({ href, children }: Props) {
  return (
    <a href={href} className={style.button}>
      {children}
    </a>
  );
}
