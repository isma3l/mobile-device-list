const SkeletonLoaderComponent = ({ children, className }) => {
  return (
    <div className={['animate-pulse', className].join(' ')}>{children}</div>
  )
}

export default SkeletonLoaderComponent
