
interface PageTitleProps {
    title: string

}

export const PageTitle = ({
    title
}: PageTitleProps) => {
  return (
    <div className='bg-night-600 text-white px-2'>
       <div className='py-2 sm:py-4 lg:py-6 xl:py- container mx-auto '>
            <h1 className='
                text-2xl  font-bold mb-1  
                sm:text-3xl sm:mb-2
                lg:text-4xl lg:mb-3
                xl:text-5xl xl:mb-4
            '>{title}</h1>
            <p className="text-xs sm:text-sm lg:text-base">Homepage - sell car</p>
        </div>
    </div>
  )
}
