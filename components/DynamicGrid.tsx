import * as React from 'react';

type Props = {
  maxColumns: number
  children?:any
};

export function DynamicGrid(props: Props) {
  const style: any = `grid grid-cols-1 md:grid-cols-${props.maxColumns} gap-10 sm:p-8`
  return (
    <div className={style}>
      {props.children}
    </div>
  );
}