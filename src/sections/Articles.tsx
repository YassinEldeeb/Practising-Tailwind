import { Article } from '../components/Article'
import { Separator } from '../components/Separator'
import Article1 from '../assets/article1.png'
import Article2 from '../assets/article2.png'
import Article3 from '../assets/article3.png'
import { Button } from '../components/Button'
import { Dots } from '../components/Icons/Dots'
import { Blob } from '../components/Icons/Blob'

const articles = [
  {
    title: 'Disease detection, check up in the laboratory',
    description:
      'In this case, the role of the health laboratory is very important to do a disease detection...',
    imgSrc: Article1,
  },
  {
    title: 'Herbal medicines that are safe for consumption',
    description:
      'Herbal medicine is very widely used at this time because of its very good for your health...',
    imgSrc: Article2,
  },
  {
    title: 'Natural care for healthy facial skin',
    description:
      'A healthy lifestyle should start from now and also for your skin health. There are some...',
    imgSrc: Article3,
  },
]

export const Articles = () => {
  return (
    <div id='articles' className='scrollMargin-mobile lg:scrollMargin pt-5'>
      <div className='grid place-content-center'>
        <div className='flex flex-col lg:items-center justify-center mb-10 lg:mb-20'>
          <h1 className='text-3xl lg:text-4xl font-bold mb-5 lg:mb-10'>
            Check out our latest articles
          </h1>
          <div className='w-16 h-2px bg-black rounded-full' />
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl relative'>
          <div className='absolute hidden lg:block -top-12 -left-14'>
            <Dots />
          </div>
          <div className='absolute right-0 top-0 transform translate-x-1/2 scale-75 -translate-y-36 rotate-180 hidden md:block'>
            <Blob />
          </div>
          {articles.map((article) => (
            <Article {...article} />
          ))}
        </div>
      </div>
      <div className='flex justify-center mt-8 md:mt-16'>
        <Button outlined>View all</Button>
      </div>
      <Separator />
    </div>
  )
}
