import React from 'react';

type ExtendedFC = { className?: string; style?: React.CSSProperties };

// eslint-disable-next-line @typescript-eslint/ban-types
export type IFC<D = {}> = React.FC<ExtendedFC & D>;
