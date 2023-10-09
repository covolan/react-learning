const app = document.querySelector(".app");

const names = [
  "Devin Carr",
  "Ella Norton",
  "Ina Arnold",
  "Don Medina",
  "Peter Ruiz",
];

function Header() {
  return <h1>Hello React</h1>;
}

function MyList() {
  const [likes, setLikes] = React.useState(0);

  function handleClick() {
    setLikes(likes + 1);
  }

  return (
    <>
      <p>This is a list of names:</p>
      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
      <p>Did you like the names?</p>
      <button onClick={handleClick}>Like({likes})</button>
    </>
  );
}

function Main() {
  return (
    <>
      <Header />
      <p>This a part of the main function!</p>
      <MyList />
    </>
  );
}

ReactDOM.render(<Main />, app);
