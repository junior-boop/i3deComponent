import React from 'react';

export function BlogNew({ titre, publier, id }) {
  const newTitre = titre.length > 50 ? `${titre.slice(0, 49)}...` : titre;

  return (
    <div className="blogNew">
      <div
        className="blogImgTop"
        style={{
          backgroundImage:
            'url(https://sellam.cm/image/cache/catalog/MAM/TV%20Stand/MAM%20(20)-228x228.jpg)',
        }}
      >
        <div className="nouveaute">Nouveauté</div>
      </div>
      <div className="descBlog">
        <div className=" titre">{newTitre}</div>
        <div className="publication">Publier le : {publier}</div>
      </div>
    </div>
  );
}
