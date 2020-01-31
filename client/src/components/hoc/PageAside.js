import React from 'react';
import store from '../../store/store';

export default function PageAside ({component:Component, title, className, ...rest}) {
    const {common} = store.getState();
    const limit = 200;
    const top = common.scroll > limit ? common.scroll - limit : 0

    return (
      <aside className={"pageAside "+className} >
        <div className={"pageAside__wrapper"} style={{top}}>
          <>
            {title && <p className="pageAside__mainTitle">{title}</p> }
            <Component {...rest} />
          </>
        </div>
      </aside>
    );
}