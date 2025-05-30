import React from "react";
import { Link } from "react-router-dom";
import { useTranslation, Trans } from "react-i18next";
import "./BlogPosts.scss";

const blogPosts = [
  {
    id: 1,
    image: "/img/post1.jpg",
    title: "Como comecei com front-end",
    summary: "Uma reflexão sobre os erros e acertos do início da carreira.",
    date: "21 de maio de 2025",
    tags: ["#front-end", "#carreira", "#iniciante"],
    link: "/blog/como-comecei",
  },
];

function BlogPosts() {
  const { t } = useTranslation();
  return (
    <section className="blogposts main container">
      <h2 className="title">Últimos Posts</h2>
      <p>Algumas reflexões sobre carreira e desenvolvimento pessoal</p>
      <div className="blogposts__grid ">
        {blogPosts.map((post) => (
          <div className="blogposts__card" key={post.id}>
            <img
              src={post.image}
              alt={post.title}
              className="blogposts__image"
            />
            <div className="blogpost__content">
              <h3>{post.title}</h3>
              <p className="blogpost__summary">{post.summary}</p>
              <p className="blogpost__data">{post.date}</p>
              <div className="blogpost__tags">
                {post.tags.map((tag, i) => (
                  <span key={i}>{tag}</span>
                ))}
              </div>
              <Link to={post.link} className="blogpost__link">
                Ler post completo
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default BlogPosts;
