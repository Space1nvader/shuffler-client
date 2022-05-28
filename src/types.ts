import React from 'react';

type ClassName = { className?: string };

// eslint-disable-next-line @typescript-eslint/ban-types
export type IFC<D = {}> = React.FC<ClassName & D>;
