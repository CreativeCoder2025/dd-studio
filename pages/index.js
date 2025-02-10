import Link from "next/Link";

export default function Home() {
  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <h1>Welcome to DD Studio</h1>
      <p>Create custom pixel art scenes featuring your very own Doginal Dog!</p>
      <Link href="/generate">
        <button
          style={{
            padding: "1rem 2rem",
            fontSize: "1.2rem",
            cursor: "pointer",
          }}
        >
          Get Started
        </button>
      </Link>
    </div>
  );
}
