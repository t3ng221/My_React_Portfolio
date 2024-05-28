
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import {BsFillPersonLinesFill} from  'react-icons/bs'

const Social = () => {

    const links=[{
        id:1,
        child:(
            <>
            LinkedIn <FaLinkedin size={30}/>
            </>
        ),
        href:'https://www.linkedin.com/in/md-sazedur-rahman-438854192/',
        style:'rounded-tr-md'
    },
    {
        id:2,
        child:(
            <>
            Github <FaGithub size={30}/>
            </>
        ),
        href:'https://github.com/t3ng221',
        style:'rounded-tr-md'
    },
    {
        id:3,
        child:(
            <>
            Resume <BsFillPersonLinesFill size={30}/>
            </>
        ),
        href:'/resume.pdf',
        style:'rounded-br-md',
        download:true,
    }

];

  return (
    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
      <ul>
        {links.map(({id,child,href,style,download})=>(
            <li key={id} className={"flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:rounderd-md duration-300 hover:ml-[-10px] bg-gray-400"+""+style}><a href={href} className='flex justify-between items-center w-full text-white'download={download}target='_blank'>{child}</a></li>
        ))}
      </ul>
    </div>
  );
}

export default Social
