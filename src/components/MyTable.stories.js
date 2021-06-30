

// Button.stories.js | Button.stories.ts

import React, { useState } from 'react';

import { MyButton } from './MyButton';
import MyTable from './MyTable';

/*
* Example Button story with React Hooks.
* See note below related to this example.
*/

export function ExampleTable() {
  return (<MyTable data={[
    {
      "id": 1,
      "title": "Json",
      "author": "javascript"
    },
    {
      "id": 2,
      "title": "Lukas je nej",
      "author": "Karel"
    },
    {
      "id": 3,
      "title": "React je sracka",
      "author": "Ten kdo ho neumi..."
    },
    {
      "id": 4,
      "title": "Random row",
      "author": "random"
    }
  ]} />)
}

export default {
  component: MyTable,
  title: 'components/MyTable',
}