import { toolkit } from "../../content/toolkit";
import { ToolkitIcon } from "../ToolkitIcon";
import { Section } from "../primitives";

export function Toolkit() {
  return (
    <Section id="toolkit" title="Engineering Toolkit" className="toolkit-section">
      <div className="toolkit-tier toolkit-tier-core">
        <header className="toolkit-tier-heading">
          <h3>{toolkit.core.title}</h3>
          <p>{toolkit.core.description}</p>
        </header>
        <div className="toolkit-grid">
          {toolkit.core.groups.map((group, index) => (
            <article className="toolkit-group" data-accent={index % 6} key={group.category}>
              <h4>{group.category}</h4>
              <ul>
                {group.items.map((item) => (
                  <li key={item.name}><ToolkitIcon iconKey={item.iconKey} /><span>{item.name}</span></li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>

      <div className="toolkit-tier toolkit-tier-explored">
        <header className="toolkit-tier-heading">
          <h3>{toolkit.explored.title}</h3>
          <p>{toolkit.explored.description}</p>
        </header>
        <div className="toolkit-explored-grid">
          {toolkit.explored.groups.map((group) => (
            <article className="toolkit-compact-group" key={group.category}>
              <h4>{group.category}</h4>
              <ul>
                {group.items.map((item) => (
                  <li key={item.name}><ToolkitIcon iconKey={item.iconKey} /><span>{item.name}</span></li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}
