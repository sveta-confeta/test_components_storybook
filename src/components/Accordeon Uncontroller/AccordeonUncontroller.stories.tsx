import React, {useState} from 'react';
 import { ComponentStory, ComponentMeta } from '@storybook/react';
import {Accordeon} from './Accordeon';
import {action} from "@storybook/addon-actions";


export default {
    title: 'Accordeon stories',
    component: Accordeon,
};
const callback = action("accordeon mode change");//не работает

export const MenuCollapsedMode = () => <Accordeon title={'menu'}  onClick={callback}  collapsed={true} />
export const UsersllapsedMode = () => <Accordeon title={'users'}  onClick={callback} collapsed={false}/>

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true);
    return  <Accordeon title={'users'}  onClick={() => setValue(!value)} collapsed={value}/>
};

