import Hello from "../components/hello";

// part of a route group
export default function Home() {
  // Hot Module Replacement, Saves and changes are seen instantly

  console.log("Server or client") // Renders on the Server
  return (
    <>
   <h1 className="text-3xl" > Welcome to Next Js</h1>
   <Hello/>
   </>
  );
}
