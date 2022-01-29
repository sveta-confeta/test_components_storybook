import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {Textarea} from './Textarea';
import {action} from "@storybook/addon-actions";
import {v1} from "uuid";


export default {
    title: 'Textarea stories',
    component: Textarea,
};
const callback = action("Textarea mode change");//не работает

export const chengeValue = () => <Textarea textValue={'menu'}  id={v1()/>



export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true);
    return  <Accordeon title={'users'}  onClick={() => setValue(!value)} collapsed={value}/>
};
