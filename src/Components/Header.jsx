import "./Header.css";

export const Header = ({ title, classNameHeader }) => {
  return <h1 className={classNameHeader}>{title}</h1>;
};
