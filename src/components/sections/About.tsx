import { Section } from "../primitives";

export function About() {
  return (
    <Section id="about" title="Building changed the way I think about software.">
      <div className="about-grid">
        <div className="about-copy">
          <p>I learn by building, but building is only the beginning.</p>
          <p>
            Working on real products pushed me beyond asking "Can I build this?"
            toward questions like: Why are we building it? What happens when it
            fails? How will people actually use it? And is the complexity we're
            adding worth it?
          </p>
          <p>
            That same curiosity gradually took me beyond application code into
            testing, infrastructure, deployment, monitoring, recovery, and the
            systems that make software safer to operate and change.
          </p>
          <p>
            A three-month DevOps program at the Saudi Digital Academy
            strengthened that foundation, but applying those ideas to real
            products is what changed how I work.
          </p>
          <p>
            I still like moving quickly and learning through execution. I've
            just learned that knowing when to move fast and when to slow down
            and design deliberately matters just as much.
          </p>
        </div>
        <div className="photo-slot" data-mascot-about-anchor aria-label="Mascot showcase area">
          <span aria-hidden="true" />
        </div>
      </div>
    </Section>
  );
}
