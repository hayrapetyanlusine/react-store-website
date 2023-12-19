import React, {FC} from 'react';

interface FooterLinkItemProps {
    title: string,
    pagesNames: string[]
}

export const FooterLinkItem: FC<FooterLinkItemProps> = ({title, pagesNames}) => {
    return (
       <div className="content-item">
            <h2>{title}</h2>
           {
               pagesNames.map(name => <p key={name}>{name}</p>)
           }
       </div>
    )
}