import React from 'react';
import store from '../../store/store';

export default function PageAside ({component:Component, ...rest}) {
    const {common} = store.getState();
    const limit = 200;
    const mt = common.scroll > limit ? common.scroll - limit : 30

    return (
      <aside className="pageAside" style={{ marginTop: mt }}>
        <Component {...rest} />
      </aside>
    );
}