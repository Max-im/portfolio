import React from 'react';
import store from '../../store/store';

export default function PageAside ({component:Component, className, ...rest}) {
    // const {common} = store.getState();
    // const limit = 180;
    // const mt = common.scroll > limit ? common.scroll - limit : 25

    // style={{ marginTop: mt }}
    return (
      <aside className={"pageAside "+className} >
        <Component {...rest} />
      </aside>
    );
}