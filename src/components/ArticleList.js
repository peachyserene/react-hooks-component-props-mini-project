import React from "react";
import Article from "./Article";

function ArticleList({ posts }) {
  console.log(posts);

  let listings = posts.map((entry) => {
    return (
      <Article
        key={entry.id}
        title={entry.title}
        date={entry.date}
        preview={entry.preview}
        minutes={entry.minutes}
      />
    );
  });
  return <main>{listings}</main>;
}

export default ArticleList;
