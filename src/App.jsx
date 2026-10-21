function App() {
  const tasks = [
    { id: 1, title: 'buy me a cup of coffe', done: false },
    { id: 2, title: 'take me to schoool', done: true },
    { id: 1, title: 'play MBL with me tonight', done: false },
    { id: 1, title: 'go to gym', done: false },
    { id: 1, title: 'go to play football', done: true },
  ];

  return (
    <>
      <main>
        <h1>My tasks</h1>
        <p>Total task: {tasks.length}</p>
        {tasks.map((task) => {
          return (
            <div>
              <h2>{task.title}</h2>
              <span>{task.done ? 'Done' : 'Need to do!!'}</span>
            </div>
          );
        })}
      </main>
    </>
  );
}

export default App;
