import React from "react";
import { Link } from "react-router-dom";
// import styles from "./Header.module.css";

// TODO: Create your own header.
export default function Header() {
  return (
    <header>
      <nav>
        <button>
          <Link to="/">Home</Link>
        </button>
        <button>
          <Link to="/daily">Daily</Link>
        </button>
        <button>
          <Link to="/weekly">Weekly</Link>
        </button>
        <button>
          <Link to="/events/new">New Event</Link>
        </button>
        <button>
          <Link to="/events/:eventId">Event Detail</Link>
        </button>
      </nav>
    </header>
  );
}
