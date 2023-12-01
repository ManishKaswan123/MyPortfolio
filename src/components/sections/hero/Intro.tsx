import List from '@/components/ui/List';
import { Eye, History, ThumbsUp } from 'lucide-react';
import { FC } from 'react';
import './Intro.css';

interface IntroProps {}

const Intro: FC<IntroProps> = ({}) => {
    return (
        <div className="class">
            {/* <div className="flex flex-1">
                <iframe
                    className="w-full aspect-video rounded-lg"
                    src="https://www.youtube.com/embed/BB2ETUKFV_k?rel=0"
                ></iframe>
            </div> */}
            <div className="class1">
                <div className="class2">
                I'm Manish, a dedicated dual-degree student at NIT Hamirpur, specializing in Electronics and Communication. Possessing a strong foundation in web development and expertise in Data Structures and Algorithms, I am known for my love of challenges and innovative thinking.
                </div>
                
            </div>
        </div>
    );
};

export default Intro;
