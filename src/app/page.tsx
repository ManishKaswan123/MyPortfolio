import Cover from '@/components/Cover';
import CardSection from '@/components/sections/CardSection';
import MoreProjects from '@/components/sections/MoreProjects';
import Intro from '@/components/sections/hero/Intro';
import ProjectCardSection from '@/components/sections/ProjectCardSection';
import {
  moreProjects,
  otherCards,
  projectCard,
} from '@/components/utils/Data';
import './page.css';

export default function Home() {
  return (
    <div>
      <Cover />
      <div className="flex flex-col gap-10 lg:px-10">
        <Intro />
        <ProjectCardSection title="Projects" data={projectCard} />
        <MoreProjects title="More projects" data={moreProjects} />
        <CardSection title="Others" data={otherCards} />
        <div className='footer'>
          <h4 className='class3' >Mail:- manishkaswan88@gmail.com </h4>
          <h4 className='class3' >Contact No:- 6377090489 </h4>
        </div>
      </div>
    </div>
  );
}
