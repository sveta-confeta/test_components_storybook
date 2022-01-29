import React, {useState} from 'react';
// import { ComponentStory, ComponentMeta } from '@storybook/react';
import {OnOff,} from './OnOff'

export default {
    title: 'OnOff stories',
    component: OnOff,
};

export const EmptyRaiting = () => <Raiting value={0} onClick={x=>x} />

export const Raiting1 = () => <Raiting value={1} onClick={x=>x} />

export const Raiting2 = () => <Raiting value={2} onClick={x=>x} />

export const Raiting3 = () => <Raiting value={3} onClick={x=>x} />

export const Raiting4 = () => <Raiting value={4} onClick={x=>x}/>

export const Raiting5 = () => <Raiting value={5} onClick={x=>x}/>

export const RaitigChange = () => {
    const [raiting, setRaiting] = useState<RaitingValueType>(5);
    return <Raiting value={raiting} onClick={setRaiting}/>
};

