import { SkeletonLoaderComponent } from '@/components'

const DetailSqueletonComponent = () => {
  return (
    <SkeletonLoaderComponent className="flex max-sm:flex-col px-4 py-10 justify-between h-full">
      <div className="w-2/5 max-sm:w-full max-sm:h-auto mb-12 flex justify-center">
        <div className="w-72 h-96 rounded bg-gray-200 flex-shrink-0"></div>
      </div>
      <div className="flex flex-col px-8 w-3/5 max-sm:w-full">
        <div className="flex justify-between w-5/6 items-start h-20">
          <div className="h-7 w-64 bg-gray-200 border rounded flex-shrink-0 mr-2"></div>
          <div className="h-6 w-24 bg-gray-200 border rounded flex-shrink-0"></div>
        </div>
        <div className="flex flex-col w-full gap-6">
          <div className="h-6 w-40 bg-gray-200 border rounded flex-shrink-0"></div>
          <div className="flex flex-col gap-7">
            {Array(6)
              .fill(0)
              .map((_, index) => (
                <div
                  className="max-lg:flex-col flex justify-between w-5/6 gap-1"
                  key={index}
                >
                  <div className="h-4 w-36 bg-gray-200 border rounded flex-shrink-0"></div>
                  <div className="h-3 w-72 bg-gray-200 border rounded flex-shrink-0"></div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </SkeletonLoaderComponent>
  )
}

export default DetailSqueletonComponent
