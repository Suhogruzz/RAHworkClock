import { useState } from 'react'
import './App.css';
import Form from './components/Form/Form';
import Clock from './components/Clock/Clock';
import { nanoid } from 'nanoid';

const INITIAL_TIMES = [{
  id: nanoid(),
  name: "США",
  timezone: "-5",
}, {
  id: nanoid(),
  name: "Москва",
  timezone: "3",
}, {
  id: nanoid(),
  name: "Берлин",
  timezone: "2",
}];

export default function App() {
  const [times, setTimes] = useState(INITIAL_TIMES);

  const handleAddTimes = (newTime) => {
    setTimes((prevTimes) => [...prevTimes, newTime]);
  };

  const removeTime = (id) => {
    setTimes((prevTimes) => prevTimes.filter((time) => time.id !== id));
  };


  return (
    <div className="App">
      <Form onSubmit={handleAddTimes} />
      {times.map((time) =>
        <Clock times={times} key={time.id} offset={time.timezone} title={time.name} id={time.id}  removeTime={() => removeTime(time.id)} />
      )}
    </div>
  );
}