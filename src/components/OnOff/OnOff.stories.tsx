import React, {useState} from 'react';
 import { ComponentStory, ComponentMeta } from '@storybook/react';
import {OnOff,} from './OnOff'

export default {
    title: 'OnOff stories',
    component: OnOff,
};

export const onMode = () => <OnOff on={true}  onClick={x => x} />
export const offMode = () => <OnOff on={false}  onClick={x => x} />

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true);
    return <OnOff on={value} onClick={setValue}/>
};

