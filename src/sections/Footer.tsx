import ArrowRightUp from '@/assets/icons/arrow-up-right.svg';
const links = [
  {
    title: 'Youtube',
    href: '',
  },
  {
    title: 'Github',
    href: '',
  },
  {
    title: 'Twitter',
    href: '',
  },
  {
    title: 'LinkedIn',
    href: '',
  },
]

export const Footer = () => {
  return <footer className='relative overflow-x-clip z-0'>
    <div className="absolute h-[400px] w-[1600px] -z-10 bottom-0 left-1/2 
    -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] "></div>
    <div className="container">
      <div className='border-t border-white/15 py-6 flex flex-col md:flex-row 
      md:justify-between items-center text-sm gap-8'>
        <div className='text-white/40'>&copy; 2024. All rights reserved</div>
        <nav className='flex flex-col md:flex-row gap-8'>
          {links.map(link => (
            <a href="" key={link.title} className='inline-flex items-center gap-1.5'>
              <span className='font-semibold'>{link.title}</span>
              <ArrowRightUp className="size-4" />
            </a>
          ))}
        </nav>
      </div>
    </div>
  </footer>;
};
