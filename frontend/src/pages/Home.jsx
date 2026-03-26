import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import FilterBar from "../components/FilterBar";
import EventCard from "../components/EventCard";
import RightPanel from "../components/RightPanel";
import BottomBar from "../components/BottomBar";

const events = [
  {
    id: 1,
    category: "music",
    date: "tonight · apr 12",
    time: "8:00 pm",
    title: "Bass Drop Night",
    venue: "Main Auditorium, Block C",
    avatars: ["A", "K", "R"],
    going: 127,
    price: "149",
  },
  {
    id: 2,
    category: "tech",
    date: "apr 18–20",
    time: "48 hours",
    title: "48hr Hackathon",
    venue: "CS Block, Innovation Lab",
    avatars: ["V", "S"],
    going: 84,
    price: "free",
  },
  {
    id: 3,
    category: "arts",
    date: "apr 14",
    time: "5:00 pm",
    title: "Canvas & Chai",
    venue: "Arts Faculty, Room 201",
    avatars: ["M", "P", "L"],
    going: 42,
    price: "99",
  },
  {
    id: 4,
    category: "sports",
    date: "apr 15",
    time: "6:30 am",
    title: "Dawn Run 5K",
    venue: "Campus Ground, Gate 2",
    avatars: ["R", "N"],
    going: 63,
    price: "free",
  },
  {
    id: 5,
    category: "music",
    date: "apr 16",
    time: "7:00 pm",
    title: "Open Mic Night",
    venue: "Student Center, Amphitheatre",
    avatars: ["D", "S", "K"],
    going: 95,
    price: "free",
  },
  {
    id: 6,
    category: "tech",
    date: "apr 19",
    time: "10:00 am",
    title: "AI Workshop",
    venue: "CS Block, Seminar Hall",
    avatars: ["A", "V"],
    going: 58,
    price: "199",
  },
];

function getCurrentDay() {
  const days = [
    "Sunday", "Monday", "Tuesday", "Wednesday",
    "Thursday", "Friday", "Saturday"
  ];
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const now = new Date();
  return `${days[now.getDay()]}, ${months[now.getMonth()]} ${now.getDate()}`;
}

export default function Home() {
  return (
    <div className="app-layout">
      <Navbar />
      <Sidebar />
      <main className="main-feed">
        <div className="feed-date">{getCurrentDay()}</div>
        <div className="feed-tagline">
          <h1>
            what are you<br />
            <span className="serif-italic">doing this week?</span>
          </h1>
        </div>
        <FilterBar />
        <div className="events-grid">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </main>
      <RightPanel />
      <BottomBar />
    </div>
  );
}
