import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchAllTopics } from "../api";
const Topics = () => {
  const [topics, setTopics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetchAllTopics().then((arrayOfTopics) => {
      setTopics(arrayOfTopics);
      setIsLoading(false);
    });
  }, []);
  if (isLoading) {
    return <h3>Loading...</h3>;
  }
  return (
    <section>
      {topics.map((topic) => {
        return (
          <section key={topic.slug}>
            <h3>
              <Link to={`/articles?topic=${topic.slug}`}>{topic.slug}</Link>
            </h3>
            <p>{topic.description}</p>
          </section>
        );
      })}
    </section>
  );
};

export default Topics;
