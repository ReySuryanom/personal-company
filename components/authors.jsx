import Image from 'next/image';
import { AiOutlineInstagram, AiOutlineLinkedin } from 'react-icons/ai';
import { authorsList } from '../utils/constant';

function Authors() {
  return (
    <section className="px-[105px] py-32" id="team">
      <h2 className="mb-10 text-3xl font-semibold text-center">Our Teams</h2>
      <div className="grid grid-cols-3 gap-x-5">
        {authorsList.map((list) => (
          <div key={list.name} className="space-y-1 text-center">
            <div className="relative mx-auto mb-10 rounded-full w-44 h-44">
              <Image
                className={'rounded-full'}
                src={list.img}
                alt={list.name}
                layout="fill"
                objectFit="cover"
                objectPosition={list.style}
              />
            </div>
            <h3 className="font-bold text-primary">{list.name}</h3>
            <h4 className="text-sm font-medium">{list.role}</h4>
            <div className="flex items-center justify-center mx-auto space-x-3">
              <AiOutlineLinkedin
                className="text-2xl text-gray-500 duration-300 ease-in-out cursor-pointer hover:text-dark"
                onClick={list?.contact?.linkedln}
              />

              <AiOutlineInstagram
                className="text-2xl text-gray-500 duration-300 ease-in-out cursor-pointer hover:text-dark"
                onClick={list?.contact?.instagram}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Authors;
