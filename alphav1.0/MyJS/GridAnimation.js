// A feature I've been wanting to test out since the first time I looked through Anime.js docs

class App extends React.Component {
  state = {
    columns: 0,
    rows: 0,
    total: 1
  };

  handleStagger = (i) => {
    const { columns, rows } = this.state;
    const el = i.target.id;
    anime({
      targets: ".grid-item",
      backgroundColor: randomColor(),
      delay: anime.stagger(50, { grid: [columns, rows], from: el })
    });
  };

  getGridSize = () => {
    const columns = Math.floor(document.body.clientWidth / 50);
    const rows = Math.floor(document.body.clientHeight / 50);

    this.setState({ columns, rows, total: rows * columns });
    anime({
      targets: ".grid-item",
      backgroundColor: "#fff",
      duration: 0,
      easing: "linear"
    });
  };

  componentDidMount() {
    this.getGridSize();
    window.addEventListener("resize", this.getGridSize);
  }
  render() {
    const { total, columns, rows } = this.state;
    console.log([columns, rows], total);
    return (
      <div id="grid">
        {[...Array(total)].map((x, i) => (
          <div
            className="grid-item"
            id={i}
            onClick={(i) => this.handleStagger(i)}
          />
        ))}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
