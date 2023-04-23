import { SkeletonLoaderComponent } from '@/components'

const HomeSqueletonComponent = () => {
  return (
    <SkeletonLoaderComponent className="flex flex-col gap-2 my-2 w-full">
      <div className="flex w-full justify-end items-center pr-4">
        <div className="h-7 w-12 rounded-full bg-gray-200 flex-shrink-0"></div>
        <div className="w-72 h-10 bg-gray-200 rounded-md ml-6"></div>
      </div>
      <div className="mt-10 grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-32 justify-items-center">
        {Array(12)
          .fill(0)
          .map((_item, index) => (
            <div className="w-64 h-72 px-8" key={index}>
              <div className="flex justify-center pt-4 pb-3">
                <div className="h-56 w-44 rounded-md bg-gray-200 flex-shrink-0" />
              </div>
              <div className="flex align-middle justify-center flex-col ml-2  h-16 gap-2">
                <div className="h-4 w-28 bg-gray-200 border rounded flex-shrink-0"></div>
                <div className="h-3 w-20 bg-gray-200 border rounded flex-shrink-0"></div>
              </div>
            </div>
          ))}
      </div>
    </SkeletonLoaderComponent>
  )
}

export default HomeSqueletonComponent
