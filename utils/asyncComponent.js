import asyncComponent from './AsyncComponentFn'


export const AsyncComponent = (path) => {
  return (
    asyncComponent(() => import('../Router/' + path))
  )
};