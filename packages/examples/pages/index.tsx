import React from 'react';
import { numberAdd } from '@bizjs/biz-utils';

export default function HomePage() {
  const num = numberAdd(0.1, 0.2);

  return (
    <div>
      <h2>Yay! 0.1 + 0.2= {num}!</h2>
      <p>
        <img src={require('../assets/yay.jpg')} width="388" />
      </p>
      <p>
        To get started, edit <code>pages/index.tsx</code> and save to reload.
      </p>
    </div>
  );
}
