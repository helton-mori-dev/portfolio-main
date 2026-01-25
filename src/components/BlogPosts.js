import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation, Trans } from "react-i18next";
import "./BlogPosts.scss";

const API_URL = process.env.REACT_APP_API_URL;

function BlogPosts() {
  const { t } = useTranslation();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_URL}/wp/v2/posts?_embed`)
      .then((res) => res.json())
      .then((data) => {
        const posts = data.map((post) => {
          const media = post._embedded?.["wp:featuredmedia"]?.[0];

          const imagemUrl =
            media?.media_details?.sizes?.medium_large?.source_url ||
            media?.media_details?.sizes?.large?.source_url ||
            media?.source_url ||
            null;

          return {
            id: post.id,
            title: post.title.rendered,
            excerpt: post.excerpt.rendered,
            content: post.content.rendered,
            slug: post.slug,
            date: post.date,
            link: post.link,
            imagem: imagemUrl,
            tags: post._embedded?.["wp:term"]?.[1] || [],
            categories: post._embedded?.["wp:term"]?.[0] || [],
          };
        });

        setPosts(posts);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Erro ao carregar posts:", err);
        setLoading(false);
      });
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  };

  if (loading) {
    return <div className="blogposts main container">Carregando posts...</div>;
  }

  return (
    <section className="blogposts main container">
      <h2 className="titulo">{t("blogTitle")}</h2>
      <p className="subtitulo">{t("blogSubititle")}</p>
      <div className="blogposts__grid">
        {posts.map((post) => (
          <div className="blogposts__card" key={post.id}>
            {post.imagem && (
              <img
                src={post.imagem}
                alt={post.title}
                className="blogposts__image"
                onError={(e) => {
                  console.error("Erro ao carregar imagem:", post.imagem);
                  e.target.style.display = "none";
                }}
              />
            )}
            <div className="blogpost__content">
              <h3>{post.title}</h3>
              <div
                className="blogpost__summary"
                dangerouslySetInnerHTML={{ __html: post.excerpt }}
              />
              <p className="blogpost__data">{formatDate(post.date)}</p>

              {post.tags.length > 0 && (
                <div className="blogpost__tags">
                  {post.tags.map((tag) => (
                    <span key={tag.id}>{tag.name}</span>
                  ))}
                </div>
              )}

              <Link to={`/blog/${post.slug}`} className="blogpost__link">
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
