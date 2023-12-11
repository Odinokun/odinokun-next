import { FC } from 'react';
import styled from './map.module.scss';

interface IProps {
}

export const Map: FC<IProps> = () => {
  return <div id={'map'} className={styled.map}></div>;
};