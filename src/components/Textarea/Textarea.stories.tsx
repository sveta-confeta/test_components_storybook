import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {Textarea} from './Textarea';
import {action} from "@storybook/addon-actions";



export default {
    title: 'Textarea stories',
    component: Textarea,
};
const callback = action("Textarea mode change");//не работает

export const chengeValue = () => <Textarea textValue={'menu'} />



