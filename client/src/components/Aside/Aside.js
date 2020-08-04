import React from 'react';
import MainMenu from './MainMenu';
import AuthMenu from './AuthMenu';
import '../../sass/aside.scss';

export default function Aside() {
  return (
    <aside className="aside">
      <MainMenu />
      <AuthMenu />
    </aside>
  );
}
