import "./Description.css";

export const Description = ({ description, classNameDescription }) => {
  return (
    <div className={classNameDescription}>
      <p>{description}</p>
    </div>
  );
};
