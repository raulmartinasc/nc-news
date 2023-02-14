import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <section className="nav">
      <Link to={"/articles"}>Home </Link>
      <Link to={`/topics`}> Topics </Link>
    </section>
  );
};

export default Nav;
