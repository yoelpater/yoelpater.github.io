import { useState } from 'react';


export default function Counter({
  children,
  count: initialCount,
}: {
  children: JSX.Element;
  count: number;
}) {
  const [count, setCount] = useState(initialCount);
  const add = () => setCount((i) => i + 1);
  const subtract = () => setCount((i) => i - 1);

  return (
    <>
      <div className="px-4 sm:px-6 py-8 sm:py-16 lg:py-20 mx-auto max-w-3xl">
        <button onClick={subtract} className="btn">-</button>
        <pre>{count}</pre>
        <button onClick={add} className="btn">+</button>
      </div>
      <div className="counter-message">{children}</div>
    </>
  );
}