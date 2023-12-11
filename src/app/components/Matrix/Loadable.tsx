/**
 * Asynchronously loads the component for NotFoundPage
 */

import { lazyLoad } from 'utils/loadable';

export const Matrix = lazyLoad(
  () => import('./index'),
  module => module.Matrix,
);
