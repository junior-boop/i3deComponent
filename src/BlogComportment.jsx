import React from 'react';
import { BlogNew } from './blogComponent';

const Data = [
  {
    id: 1,
    titre: 'Je suis un titre dont je ne connais pas encore le contenu',
    publier: '12 / 12 / 2022',
  },
  {
    id: 2,
    titre: 'Je suis un titre dont je ne connais pas encore le contenu',
    publier: '12 / 12 / 2022',
  },
  {
    id: 3,
    titre: 'Je suis un titre dont je ne connais pas encore le contenu',
    publier: '12 / 12 / 2022',
  },
  {
    id: 4,
    titre: 'Je suis un titre dont je ne connais pas encore le contenu',
    publier: '12 / 12 / 2022',
  },
];

export default function BlogNewSection() {
  return (
   <div className = 'screenGrid'>
      <div className = 'contentGrid'>
        <div className="grid_left" style={{ gap: 24 }}>
        {Data.map((el) => (
          <BlogNew key={el.id} titre={el.titre} publier={el.publier} />
        ))}
      </div>
    </div>
   </div>
  );
}
