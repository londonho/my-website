import Polaroid from "../components/Polaroid";
import StickyNote from "../components/StickyNote";
import Sticker from "../components/Sticker";
import { asset } from "../lib/asset";
import { hobbies, languages, frameworks, database, iam, tools } from "../data/facts";
import { useTitle } from "../lib/useTitle";

export default function About() {
    useTitle("About")
    return (
        <>
        <div className="spread-grid">
            <div className="column">
                <h1 className="calligraphy">about me</h1>
                <Sticker src={asset("stickers/star.png")} size={100} rotate={-40} top={0} right={-30} />
                <Sticker src={asset("stickers/brownbutton.png")} size={100} rotate={40} top={70} right={30} />
                <h2 className="hand">
                    M.S. in Computer Science at New York University
                </h2>
                <p>
                    I'm doing my Master's in Computer Science at New York University,
                    and I also did my Bachelor's in Computer Science as well at the
                    University of Georgia. I'm a full-stack developer with an interest
                    in Human-Computer Interaction, Cybersecurity, and Information Security.
                    I am currently looking for internship opportunities for Summer 2027!
                </p>
                <div className="notes-row">
                    <StickyNote title="languages" items={languages}/>
                    <StickyNote title="frameworks" items={frameworks} color="var(--tape-pink)" tilt="2deg" 
                                dx="-20px" dy="20px" layer={2}/>
                    <StickyNote title="database" items={database} color="var(--tape-blue)" tilt="var(--tilt-c)"
                                dx="-50px" dy="-20px" layer={2}/>
                    <StickyNote title="tools" items={tools} color="var(--marker)" tilt="2deg"
                                dx="-90px" dy="40px" layer={2}/>
                    <StickyNote title="iam" items={iam} color="var(--tape-pink)" tilt="var(--tilt-c)"
                                dx="-120px" dy="70px" layer={2}/>     
                </div>
            </div>
            
            <aside className="gutter">
                <Polaroid src={asset("photos/me.jpeg")} alt="Selfie of London" caption="I am London Ho" focus="40% 50%"/>
                <Sticker src={asset("stickers/smiski.png")} size={150} rotate={-8} top={225} right={-25} />
            </aside>
        </div>
        
        <section className="spread-grid flip">
            <aside className="gutter">
                <Sticker src={asset("stickers/hairclips.png")} size={200} rotate={290} top={-180} left={430} />
                <Polaroid
                    src={asset("photos/shumai.jpeg")}
                    alt="My cat"
                    caption="This is Shumai"
                    tilt="var(--tilt-b)"
                    ratio="32/31"
                    tape="pink"
                    tapeRotate={5}
                    tapePos={{ top: -10, right: 18 }}
                    focus = "50% 30%"
                />
                <Sticker src={asset("stickers/rilakkuma.png")} size={150} rotate={5} top={160} right={-30} />
            </aside>
            <div className="column">
                <h2 className="hand">My personal life...</h2>
                <p>
                    Meet my cat, Shumai! He is a Siamese seal-point 
                    and was adopted from Athens, GA. He loves neck 
                    scratches and to play with string toys. Fun fact
                    about me is that I like to figure skate, and yes
                    I can do jumps and spins too!
                </p>
                <div className="notes-row">
                    <StickyNote title="hobbies" items={hobbies}/>
                </div>
            </div>
        </section>
        </>
    );
}