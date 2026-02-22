export default function App() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>I'm Sorry 🥺</h1>
      <img
        src="https://media.giphy.com/media/3oriO0OEd9QIDdllqo/giphy.gif"
        alt="cute sorry gif"
        style={styles.image}
      />

      <p style={styles.text}>
        Bella,
        <br />
        <br />
        I know I messed up, but you mean the world to me.
        <br />
        Maafin pacar kamu yaaaa.
        <br />
      </p>

      <p style={styles.signature}>– Leo 💖</p>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    background: "linear-gradient(to bottom right, #ffe6f0, #fff5f9)",
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center" as const,
    fontFamily: "sans-serif",
    padding: "20px",
  },
  title: {
    fontSize: "3rem",
    color: "#ff4d88",
  },
  image: {
    width: "250px",
    margin: "20px 0",
    borderRadius: "12px",
  },
  text: {
    fontSize: "1.2rem",
    maxWidth: "400px",
  },
  signature: {
    marginTop: "20px",
    fontWeight: "bold",
    color: "#cc0066",
  },
};