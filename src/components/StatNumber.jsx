import { useInView } from '../hooks/useInView';
import { useCounter } from '../hooks/useCounter';

export default function StatNumber({ target, suffix = '+', fontSize }) {
  const [ref, inView] = useInView({ threshold: 0.5 });
  const value = useCounter(target, inView);

  return (
    <div ref={ref} className="stat__number" style={fontSize ? { fontSize } : undefined}>
      <span>{value}</span>
      <span className="stat__suffix">{suffix}</span>
    </div>
  );
}
