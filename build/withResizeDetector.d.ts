import * as React from 'react';
import { ComponentType } from 'react';
import { ComponentsProps } from './ResizeDetector';
declare function withResizeDetector<P, ElementT extends HTMLElement = HTMLElement>(ComponentInner: ComponentType<P>, options?: ComponentsProps<ElementT>): React.ForwardRefExoticComponent<React.PropsWithoutRef<P> & React.RefAttributes<HTMLElement>>;
export default withResizeDetector;
