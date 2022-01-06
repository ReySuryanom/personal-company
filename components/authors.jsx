import Image from 'next/image';
import { AiOutlineInstagram, AiOutlineLinkedin } from 'react-icons/ai';
import { authorsList } from '../utils/constant';

function Authors() {
  return (
    <section className="px-[105px] py-32">
      <h2 className="mb-10 text-3xl font-semibold text-center">Our Teams</h2>
      <div className="grid grid-cols-3 gap-x-5">
        {authorsList.map((list) => (
          <div key={list.name} className="space-y-1 text-center">
            <div className="relative mx-auto mb-10 w-44 h-44">
              <Image src={list.img} alt={list.name} layout="fill" />
            </div>
            <h3 className="text-primary">{list.name}</h3>
            <h4 className="text-sm font-medium">{list.role}</h4>
            <p className="w-11/12 text-sm leading-7">{list.text}</p>
            <div className="flex items-center justify-center mx-auto space-x-3">
              <AiOutlineLinkedin className="text-2xl text-gray-500" />
              <AiOutlineInstagram className="text-2xl text-gray-500" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Authors;
