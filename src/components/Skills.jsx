import CP from './imgs/c-original.svg';
import GIT from './imgs/git-original.svg';
import JAVA from './imgs/java-original.svg';
import JAVAS from './imgs/javascript-original.svg';
import NODEJS from './imgs/nodejs-original-wordmark.svg';
import REACT from './imgs/react-original.svg';
import BS from './imgs/bootstrap-original.svg';
import NEXT from './imgs/nextjs-original.svg';


function Skills(){
    return(
        <div className="container mt-5" id='Projects'>
            <div className="row card mb-5"></div>
            <div className="row">
                <div className="col-md-6 col-sm-12 mt-5">
                    <h1 className="text-white text-center">Programming Languages</h1>
                    <div className="logos mt-5 d-flex justify-content-evenly">
                        <img src={CP} alt="C++" />
                        <img src={JAVA} alt="Java" />
                        <img src={GIT} alt="Git" />
                        <img src={JAVAS} alt="JavaScript" />
                    </div>
                </div>

                <div className="col-md-6 col-sm-12 mt-5">
                    <h1 className="text-white text-center">Libraries and Frameworks</h1>
                    <div className="logos mt-5 d-flex justify-content-evenly">
                        <img src={BS} alt="C++" />
                        <img src={NODEJS} alt="Java" />
                        <img src={REACT} alt="Git" />
                        <img src={NEXT} alt="NextJS" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;