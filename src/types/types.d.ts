import { FC, CSSProperties } from 'react';

export type ExtendedFC = { className?: string; style?: CSSProperties };

declare global {
  // eslint-disable-next-line @typescript-eslint/ban-types
  type IFC<T = {}> = FC<ExtendedFC & T>;
}
