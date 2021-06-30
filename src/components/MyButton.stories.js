// Button.stories.js | Button.stories.ts

import React, { useState } from 'react';

import { MyButton } from './MyButton';

/*
* Example Button story with React Hooks.
* See note below related to this example.
*/
export const Primary = ({ label }) => {
  // Sets the hooks for both the label and primary props
  const [isPrimary, setIsPrimary] = useState(true);

  // Sets a click handler to change the label's value
  const handleOnChange = () => {
    if (!isPrimary) {
      setIsPrimary(true);
    } else {
      setIsPrimary(false);
    }
  };
  return <MyButton variant="contained" color={isPrimary ? 'primary' : 'default'} onClick={handleOnChange} >{label}</MyButton>;
};
Primary.args = {
  label: 'MyButton',
};

export const Secondary = ({ label }) => {
  // Sets the hooks for bo  th the label and primary props
  const [isPrimary, setIsPrimary] = useState(true);

  // Sets a click handler to change the label's value
  const handleOnChange = () => {
    if (!isPrimary) {
      setIsPrimary(true);
    } else {
      setIsPrimary(false);
    }
  };
  return <MyButton variant="contained" color={isPrimary ? 'secondary' : 'default'} onClick={handleOnChange} >{label}</MyButton>;
};


Secondary.args = {
  label: 'MyButton',
};

export default {
  component: MyButton,
  title: 'components/MyButton',
  argTypes: {
    label: { control: "text" },

  }
}