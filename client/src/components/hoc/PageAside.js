import React from 'react';
import store from '../../store/store';

export default function PageAside ({component:Component, className, ...rest}) {
    const {common} = store.getState();
    const limit = 200;
    const top = common.scroll > limit ? common.scroll - limit : 0

    // style={{ marginTop: mt }}
    return (
      <aside className={"pageAside "+className} >
        <div className={"pageAside__wrapper"} style={{top}}>
          <Component {...rest} />
        </div>
      </aside>
    );
}