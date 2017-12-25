import AsyncComponentFn from './AsyncComponentFn';

export default AsyncComponent = ( path ) => {
  return (
    AsyncComponentFn(
      () => import(path)
    )
  )
}