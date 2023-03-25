export interface SpellProps {
  name: string;
  description: string;
  target: string;
  configurability: string;
  effect: string;
  cooldown: string;
}

export const Spell = (props: SpellProps) => {
  const { name, description, target, configurability, effect, cooldown } = props;
  return (
    <div>
      <h3>{name}</h3>
      <p>
        <strong>Function:</strong> {description}
        <br />
        <strong>Target:</strong> {target}
        <br />
        <strong>Configurability:</strong> {configurability}
        <br />
        <strong>Effect:</strong> {effect}
        <br />
        <strong>Default Cooldown:</strong> {cooldown}
        <br />
      </p>
    </div>
  );
};
