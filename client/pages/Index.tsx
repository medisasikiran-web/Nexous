import { useMemo, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  ArrowRight,
  Bell,
  BookOpen,
  Bot,
  CalendarDays,
  Check,
  ChevronRight,
  CircleHelp,
  Clock3,
  FileText,
  GraduationCap,
  LayoutDashboard,
  Map,
  Menu,
  MessageCircle,
  Mic,
  MoreHorizontal,
  Paperclip,
  Plus,
  Search,
  Send,
  Sparkles,
  Target,
  TrendingUp,
  UserRound,
  Users,
  X,
  Zap,
} from "lucide-react";

const navItems = [
  { label: "Dashboard", icon: LayoutDashboard },
  { label: "AI Assistant", icon: Bot },
  { label: "Timetable", icon: CalendarDays },
  { label: "Attendance", icon: TrendingUp },
  { label: "Assignments", icon: FileText },
  { label: "Exams", icon: BookOpen },
  { label: "Events", icon: Sparkles },
  { label: "Study Planner", icon: Target },
  { label: "Campus Map", icon: Map },
  { label: "Placements", icon: GraduationCap },
];

const attendance = [
  { name: "Data Structures", value: 85, color: "bg-blue-500" },
  { name: "DBMS", value: 78, color: "bg-violet-500" },
  { name: "Java Programming", value: 92, color: "bg-emerald-500" },
  { name: "Mathematics", value: 88, color: "bg-amber-500" },
];

const classes = [
  { time: "09:00 AM", subject: "Data Structures", faculty: "Dr. Ananya Rao", room: "B-204", current: false },
  { time: "11:00 AM", subject: "Database Management", faculty: "Prof. Karthik S", room: "C-102", current: true },
  { time: "02:00 PM", subject: "Java Programming", faculty: "Ms. Priya Menon", room: "Lab 3", current: false },
];

const assignments = [
  { title: "Binary Search Tree", subject: "Data Structures", due: "Today, 11:59 PM", priority: "High", tone: "rose" },
  { title: "ER Diagram & Normalization", subject: "DBMS", due: "Tomorrow, 5:00 PM", priority: "Medium", tone: "amber" },
  { title: "Java Collections Lab", subject: "Java Programming", due: "May 28, 2024", priority: "Low", tone: "blue" },
];

function Brand({ light = false }: { light?: boolean }) {
  return (
    <div className={`flex items-center gap-2.5 ${light ? "text-white" : "text-slate-950"}`}>
      <div className="grid size-9 place-items-center rounded-xl bg-gradient-to-br from-blue-500 to-violet-600 shadow-lg shadow-blue-500/20">
        <Sparkles className="size-[18px] text-white" />
      </div>
      <span className="text-[15px] font-bold tracking-[-0.02em]">smart<span className="text-blue-500">campus</span></span>
    </div>
  );
}

function Landing() {
  const navigate = useNavigate();
  return (
    <main className="min-h-screen overflow-hidden bg-[#f8faff] text-slate-900">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-10">
        <Brand />
        <div className="hidden items-center gap-8 text-sm font-medium text-slate-500 md:flex">
          {[['Features', 'features'], ['How it works', 'how-it-works'], ['Solutions', 'solutions']].map(([label, id]) => <button key={id} onClick={() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })} className="transition hover:text-slate-900">{label}</button>)}
        </div>
        <div className="flex items-center gap-3">
          <button onClick={() => navigate("/dashboard")} className="hidden text-sm font-semibold text-slate-600 hover:text-slate-900 sm:block">Sign in</button>
          <button onClick={() => navigate("/dashboard")} className="rounded-xl bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white shadow-xl shadow-slate-900/10 transition hover:-translate-y-0.5 hover:bg-blue-600">Get started <ArrowRight className="ml-1 inline size-4" /></button>
        </div>
      </nav>

      <section className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 pb-20 pt-14 sm:px-8 lg:grid-cols-[1fr_1.05fr] lg:px-10 lg:pb-28 lg:pt-24">
        <div className="relative z-10 max-w-xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-3 py-1.5 text-xs font-semibold text-blue-600 shadow-sm"><span className="size-1.5 animate-pulse rounded-full bg-emerald-400" /> Built for the campus of tomorrow</div>
          <h1 className="text-[clamp(3.2rem,7vw,5.7rem)] font-extrabold leading-[.96] tracking-[-0.07em] text-slate-950">Your smart college, <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">one assistant.</span></h1>
          <p className="mt-7 max-w-lg text-lg leading-8 text-slate-500">One calm, intelligent place for your classes, assignments, attendance, campus life, and everything in between.</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row"><button onClick={() => navigate("/dashboard")} className="group rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-bold text-white shadow-xl shadow-blue-600/25 transition hover:-translate-y-1 hover:bg-blue-700">Explore your campus <ArrowRight className="ml-2 inline size-4 transition group-hover:translate-x-1" /></button><button onClick={() => navigate("/dashboard")} className="rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-bold text-slate-700 transition hover:border-blue-200 hover:text-blue-600">Watch how it works <span className="ml-1 text-slate-300">01:24</span></button></div>
          <div className="mt-10 flex items-center gap-3"><div className="flex -space-x-2">{["AK", "RM", "PS", "JD"].map((x, i) => <div key={x} className={`grid size-8 place-items-center rounded-full border-2 border-[#f8faff] text-[10px] font-bold text-white ${["bg-blue-500", "bg-violet-500", "bg-emerald-500", "bg-amber-500"][i]}`}>{x}</div>)}</div><p className="text-xs text-slate-500"><span className="font-bold text-slate-800">12,000+ students</span> already learning smarter</p></div>
        </div>
        <div className="relative min-h-[430px] lg:min-h-[550px]">
          <div className="absolute -right-20 -top-20 size-96 rounded-full bg-blue-200/30 blur-3xl" /><div className="absolute bottom-0 left-0 size-80 rounded-full bg-violet-200/30 blur-3xl" />
          <div className="relative mx-auto mt-4 max-w-[570px] rotate-[2deg] rounded-[26px] border border-white/80 bg-white p-3 shadow-[0_30px_80px_-25px_rgba(45,71,140,.35)] lg:mt-12"><div className="rounded-[20px] bg-[#f7f9fd] p-4 sm:p-6"><div className="mb-7 flex items-center justify-between"><div><div className="mb-2 h-2 w-16 rounded-full bg-slate-200" /><div className="h-4 w-32 rounded-full bg-slate-800" /></div><div className="flex gap-2"><div className="size-8 rounded-full bg-white" /><div className="size-8 rounded-full bg-blue-100" /></div></div><div className="mb-4 grid grid-cols-3 gap-3"><div className="rounded-2xl bg-blue-600 p-4 text-white"><Clock3 className="mb-5 size-5 opacity-70" /><div className="text-2xl font-bold">4</div><div className="mt-1 text-[10px] opacity-70">Classes today</div></div><div className="rounded-2xl bg-white p-4"><TrendingUp className="mb-5 size-5 text-emerald-500" /><div className="text-2xl font-bold text-slate-800">86%</div><div className="mt-1 text-[10px] text-slate-400">Attendance</div></div><div className="rounded-2xl bg-white p-4"><Target className="mb-5 size-5 text-violet-500" /><div className="text-2xl font-bold text-slate-800">03</div><div className="mt-1 text-[10px] text-slate-400">Due this week</div></div></div><div className="grid gap-3 sm:grid-cols-[1.15fr_.85fr]"><div className="rounded-2xl bg-white p-4"><div className="mb-4 flex items-center justify-between"><div className="h-3 w-24 rounded-full bg-slate-800" /><div className="h-2 w-12 rounded-full bg-blue-100" /></div>{["09:00  Data Structures", "11:00  Database Systems", "02:00  Java Programming"].map((t, i) => <div key={t} className={`mb-2 flex rounded-xl p-3 text-[10px] ${i === 1 ? "bg-blue-50 text-blue-700" : "bg-slate-50 text-slate-400"}`}><span className="mr-3 font-semibold">{t.slice(0, 5)}</span>{t.slice(7)}</div>)}</div><div className="rounded-2xl bg-gradient-to-br from-indigo-600 to-violet-600 p-4 text-white"><Bot className="mb-8 size-6" /><div className="text-[10px] opacity-70">CampusAI says</div><div className="mt-2 text-sm font-semibold leading-5">You have a DBMS class in 42 minutes.</div><div className="mt-5 flex items-center gap-1 text-[10px] opacity-70">Ask anything <ArrowRight className="size-3" /></div></div></div></div></div>
          <div className="absolute -bottom-2 -left-2 flex items-center gap-3 rounded-2xl border border-slate-100 bg-white p-3 shadow-xl shadow-slate-900/10 sm:-left-10"><div className="grid size-9 place-items-center rounded-xl bg-emerald-50 text-emerald-500"><Check className="size-5" /></div><div><div className="text-xs font-bold text-slate-800">Assignment submitted</div><div className="text-[10px] text-slate-400">Just now · Data Structures</div></div></div>
        </div>
      </section>

      <section id="features" className="border-y border-slate-100 bg-white px-5 py-20 sm:px-8 lg:px-10"><div className="mx-auto max-w-7xl"><div className="max-w-xl"><p className="text-xs font-bold uppercase tracking-[.18em] text-blue-600">Everything in sync</p><h2 className="mt-3 text-4xl font-extrabold tracking-[-.05em] text-slate-950">Less admin. More <span className="text-violet-600">momentum.</span></h2></div><div className="mt-12 grid gap-4 md:grid-cols-3">{[{ icon: Bot, title: "Your AI campus co-pilot", body: "Ask CampusAI anything about your college and get an answer in seconds.", color: "bg-blue-50 text-blue-600" }, { icon: CalendarDays, title: "A clearer day, every day", body: "Classes, deadlines, and events organized around what matters to you.", color: "bg-violet-50 text-violet-600" }, { icon: Users, title: "Built for your whole campus", body: "A shared, connected experience for students, faculty, and admins.", color: "bg-emerald-50 text-emerald-600" }].map(({ icon: Icon, title, body, color }) => <div key={title} className="rounded-3xl border border-slate-100 bg-[#fbfcff] p-6 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/5"><div className={`mb-10 grid size-11 place-items-center rounded-2xl ${color}`}><Icon className="size-5" /></div><h3 className="text-lg font-bold text-slate-900">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-500">{body}</p><ChevronRight className="mt-5 size-4 text-slate-300" /></div>)}</div></div></section>
      <section id="how-it-works" className="mx-auto max-w-7xl px-5 py-20 text-center sm:px-8 lg:px-10"><p className="text-xs font-bold uppercase tracking-[.18em] text-violet-600">One campus. One assistant.</p><h2 className="mx-auto mt-3 max-w-2xl text-4xl font-extrabold tracking-[-.05em] text-slate-950">Smarter student life starts here.</h2><p className="mx-auto mt-4 max-w-lg text-slate-500">Connect your campus, personalize your experience, and let smartcampus take care of the details.</p><button onClick={() => navigate("/dashboard")} className="mt-8 rounded-xl bg-slate-950 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-blue-600">Enter the demo <ArrowRight className="ml-2 inline size-4" /></button></section>
      <footer className="border-t border-slate-100 px-5 py-7 sm:px-8 lg:px-10"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 text-xs text-slate-400 sm:flex-row"><Brand /><span>© 2024 smartcampus · One Campus. One Assistant.</span></div></footer>
    </main>
  );
}

function Sidebar({ active, setActive, mobileOpen, setMobileOpen }: { active: string; setActive: (x: string) => void; mobileOpen: boolean; setMobileOpen: (x: boolean) => void }) {
  return <aside className={`fixed inset-y-0 left-0 z-30 flex w-[248px] flex-col border-r border-slate-100 bg-white px-4 py-5 transition-transform lg:static lg:translate-x-0 ${mobileOpen ? "translate-x-0" : "-translate-x-full"}`}><div className="flex items-center justify-between px-2"><Brand /><button className="text-slate-400 lg:hidden" onClick={() => setMobileOpen(false)}><X className="size-5" /></button></div><div className="mt-10 flex-1 space-y-1">{navItems.map(({ label, icon: Icon }, i) => <button key={label} onClick={() => { setActive(label); setMobileOpen(false); }} className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-[13px] font-semibold transition ${active === label ? "bg-blue-50 text-blue-600" : "text-slate-400 hover:bg-slate-50 hover:text-slate-700"}`}><Icon className="size-[17px]" /><span>{label}</span>{i === 1 && <span className="ml-auto rounded-full bg-violet-100 px-1.5 py-0.5 text-[9px] text-violet-600">AI</span>}</button>)}</div><div className="border-t border-slate-100 pt-4"><button className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-[13px] font-semibold text-slate-400 hover:bg-slate-50"><CircleHelp className="size-[17px]" /> Help center</button><div className="mt-4 flex items-center gap-3 rounded-2xl bg-slate-50 p-3"><div className="grid size-9 place-items-center rounded-full bg-gradient-to-br from-blue-400 to-violet-500 text-xs font-bold text-white">AS</div><div className="min-w-0"><div className="truncate text-xs font-bold text-slate-800">Aarav Sharma</div><div className="text-[10px] text-slate-400">CSE · Year 3</div></div><MoreHorizontal className="ml-auto size-4 text-slate-400" /></div></div></aside>;
}

function Dashboard() {
  const [active, setActive] = useState("Dashboard");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [registered, setRegistered] = useState(false);
  const [done, setDone] = useState<string[]>([]);
  const suggestions = ["What's my next class?", "How's my attendance?", "Due this week?"];
  const today = useMemo(() => new Intl.DateTimeFormat("en-US", { weekday: "long", month: "long", day: "numeric" }).format(new Date()), []);
  const sendMessage = (text = message) => { if (!text.trim()) return; setMessage(""); setChatOpen(true); };
  return <div className="min-h-screen bg-[#f7f9fc] text-slate-900"><div className="flex min-h-screen"><Sidebar active={active} setActive={setActive} mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} /><div className="min-w-0 flex-1"><header className="flex h-[76px] items-center justify-between border-b border-slate-100 bg-white/80 px-5 backdrop-blur sm:px-8"><div className="flex items-center gap-3"><button onClick={() => setMobileOpen(true)} className="text-slate-500 lg:hidden"><Menu className="size-5" /></button><div className="relative hidden sm:block"><Search className="absolute left-3 top-2.5 size-4 text-slate-400" /><input placeholder="Search anything..." className="h-9 w-60 rounded-xl border-0 bg-slate-50 pl-9 text-xs outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-blue-100" /></div><button className="text-slate-400 sm:hidden"><Search className="size-5" /></button></div><div className="flex items-center gap-4"><button className="relative text-slate-400 hover:text-blue-600"><Bell className="size-[19px]" /><span className="absolute -right-0.5 -top-0.5 size-1.5 rounded-full bg-rose-500 ring-2 ring-white" /></button><div className="hidden h-6 w-px bg-slate-100 sm:block" /><button className="flex items-center gap-2"><div className="grid size-8 place-items-center rounded-full bg-gradient-to-br from-blue-400 to-violet-500 text-[10px] font-bold text-white">AS</div><span className="hidden text-xs font-bold text-slate-700 sm:block">Aarav Sharma</span></button></div></header><main className="mx-auto max-w-[1460px] p-5 sm:p-8"><div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><div className="mb-3 flex items-center gap-2 text-xs font-medium text-slate-400"><span>Tuesday, May 21, 2024</span><span className="size-1 rounded-full bg-slate-300" /><span>Good morning</span></div><h1 className="text-3xl font-extrabold tracking-[-.04em] text-slate-950 sm:text-4xl">Good morning, Aarav <span className="inline-block">👋</span></h1><p className="mt-2 text-sm text-slate-500">Here’s what’s happening across your campus today.</p></div><button onClick={() => setChatOpen(true)} className="flex w-fit items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 px-4 py-3 text-xs font-bold text-white shadow-lg shadow-blue-500/20 transition hover:-translate-y-0.5"><Bot className="size-4" /> Ask CampusAI <span className="rounded bg-white/20 px-1.5 py-0.5 text-[9px]">⌘ K</span></button></div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">{[{ icon: CalendarDays, label: "Classes today", value: "04", sub: "Next at 11:00 AM", color: "blue" }, { icon: TrendingUp, label: "Overall attendance", value: "86.4%", sub: "Above required 75%", color: "emerald" }, { icon: FileText, label: "Pending assignments", value: "03", sub: "1 due today", color: "violet" }, { icon: BookOpen, label: "Next exam", value: "12 days", sub: "DBMS · June 02", color: "amber" }].map(({ icon: Icon, label, value, sub, color }) => <div key={label} className="group rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-900/5"><div className="flex items-start justify-between"><div className={`grid size-10 place-items-center rounded-xl bg-${color}-50 text-${color}-500`}><Icon className="size-[18px]" /></div><MoreHorizontal className="size-4 text-slate-300" /></div><div className="mt-5 text-2xl font-extrabold tracking-[-.04em] text-slate-900">{value}</div><div className="mt-1 text-xs font-semibold text-slate-500">{label}</div><div className={`mt-3 flex items-center gap-1 text-[10px] font-semibold text-${color}-600`}><span className={`size-1.5 rounded-full bg-${color}-500`} /> {sub}</div></div>)}</div>
          <div className="mt-5 grid gap-5 xl:grid-cols-[1.15fr_.85fr]"><section className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm"><div className="flex items-center justify-between"><div><h2 className="text-base font-bold text-slate-900">Today’s timetable</h2><p className="mt-1 text-xs text-slate-400">{today} · 4 classes</p></div><button onClick={() => setActive("Timetable")} className="text-xs font-bold text-blue-600 hover:text-blue-700">View full timetable <ArrowRight className="ml-1 inline size-3" /></button></div><div className="mt-5 space-y-2">{classes.map((item) => <div key={item.time} className={`flex items-center gap-3 rounded-xl border p-3 transition ${item.current ? "border-blue-100 bg-blue-50/70" : "border-transparent bg-slate-50/70 hover:border-slate-100"}`}><div className={`w-[60px] text-[10px] font-bold ${item.current ? "text-blue-600" : "text-slate-400"}`}>{item.time}</div><div className={`h-9 w-1 rounded-full ${item.current ? "bg-blue-500" : "bg-slate-200"}`} /><div className="min-w-0 flex-1"><div className="flex items-center gap-2"><span className="truncate text-xs font-bold text-slate-800">{item.subject}</span>{item.current && <span className="rounded-full bg-blue-600 px-2 py-0.5 text-[9px] font-bold text-white">Next up</span>}</div><div className="mt-1 text-[10px] text-slate-400">{item.faculty} · Room {item.room}</div></div><ChevronRight className="size-4 text-slate-300" /></div>)}</div></section><section className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm"><div className="flex items-center justify-between"><div><h2 className="text-base font-bold text-slate-900">Smart attendance</h2><p className="mt-1 text-xs text-slate-400">Keep your semester on track</p></div><div className="relative grid size-[66px] place-items-center rounded-full" style={{ background: "conic-gradient(#2563eb 0 86%, #e8eef9 86% 100%)" }}><div className="grid size-[54px] place-items-center rounded-full bg-white text-sm font-extrabold text-slate-800">86%</div></div></div><div className="mt-5 space-y-3">{attendance.map((item) => <div key={item.name}><div className="mb-1.5 flex justify-between text-[10px] font-semibold"><span className="text-slate-600">{item.name}</span><span className={item.value < 80 ? "text-amber-500" : "text-slate-500"}>{item.value}%</span></div><div className="h-1.5 overflow-hidden rounded-full bg-slate-100"><div className={`h-full rounded-full ${item.color}`} style={{ width: `${item.value}%` }} /></div></div>)}</div><div className="mt-5 flex items-center gap-2 rounded-xl bg-emerald-50 px-3 py-2.5 text-[10px] font-semibold text-emerald-700"><Check className="size-3.5" /> You can miss 2 more classes and stay above 75%</div></section></div>
          <div className="mt-5 grid gap-5 xl:grid-cols-[1.15fr_.85fr]"><section className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm"><div className="flex items-center justify-between"><div><h2 className="text-base font-bold">Your assignments</h2><p className="mt-1 text-xs text-slate-400">Stay ahead of your deadlines</p></div><button onClick={() => setActive("Assignments")} className="text-xs font-bold text-blue-600">See all <ArrowRight className="ml-1 inline size-3" /></button></div><div className="mt-4 divide-y divide-slate-100">{assignments.map((item) => <div key={item.title} className="flex items-center gap-3 py-3 first:pt-0"><button onClick={() => setDone((x) => x.includes(item.title) ? x.filter((y) => y !== item.title) : [...x, item.title])} className={`grid size-5 shrink-0 place-items-center rounded-md border transition ${done.includes(item.title) ? "border-emerald-500 bg-emerald-500 text-white" : "border-slate-200 text-transparent hover:border-blue-400"}`}><Check className="size-3" /></button><div className="min-w-0 flex-1"><div className={`truncate text-xs font-bold ${done.includes(item.title) ? "text-slate-400 line-through" : "text-slate-800"}`}>{item.title}</div><div className="mt-1 text-[10px] text-slate-400">{item.subject} · Due {item.due}</div></div><span className={`rounded-md px-2 py-1 text-[9px] font-bold ${item.tone === "rose" ? "bg-rose-50 text-rose-500" : item.tone === "amber" ? "bg-amber-50 text-amber-600" : "bg-blue-50 text-blue-600"}`}>{item.priority}</span></div>)}</div></section><section className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm"><div className="flex items-center justify-between"><div><h2 className="text-base font-bold">Upcoming events</h2><p className="mt-1 text-xs text-slate-400">Find your next moment</p></div><button onClick={() => setActive("Events")} className="text-xs font-bold text-blue-600">Explore <ArrowRight className="ml-1 inline size-3" /></button></div><div className="mt-4 space-y-3">{[{ date: "24", month: "MAY", title: "Build for Bharat · Hackathon", place: "Innovation Hub", color: "bg-violet-50 text-violet-600" }, { date: "29", month: "MAY", title: "Design Thinking Workshop", place: "Seminar Hall 2", color: "bg-blue-50 text-blue-600" }].map((event) => <div key={event.title} className="flex items-center gap-3 rounded-xl bg-slate-50 p-3"><div className={`grid size-10 shrink-0 place-items-center rounded-xl ${event.color}`}><div className="text-sm font-extrabold leading-3">{event.date}<span className="block text-[8px] font-bold">{event.month}</span></div></div><div className="min-w-0 flex-1"><div className="truncate text-xs font-bold text-slate-800">{event.title}</div><div className="mt-1 text-[10px] text-slate-400">{event.place} · 10:00 AM</div></div><button onClick={() => setRegistered(true)} className="shrink-0 rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-[10px] font-bold text-slate-600 hover:border-blue-300 hover:text-blue-600">{registered ? "Joined" : "Join"}</button></div>)}</div></section></div>
        </main></div></div>{chatOpen && <div className="fixed bottom-5 right-5 z-40 flex w-[min(380px,calc(100vw-2rem))] flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl shadow-slate-900/20"><div className="flex items-center justify-between bg-gradient-to-r from-blue-600 to-violet-600 p-4 text-white"><div className="flex items-center gap-3"><div className="grid size-9 place-items-center rounded-xl bg-white/20"><Bot className="size-5" /></div><div><div className="text-sm font-bold">CampusAI</div><div className="flex items-center gap-1 text-[10px] text-blue-100"><span className="size-1.5 rounded-full bg-emerald-300" /> Always here to help</div></div></div><button onClick={() => setChatOpen(false)}><X className="size-4" /></button></div><div className="space-y-3 bg-[#f8faff] p-4"><div className="max-w-[85%] rounded-2xl rounded-tl-sm bg-white p-3 text-xs leading-5 text-slate-600 shadow-sm">Hi Aarav! I’m your campus co-pilot. What can I help you with today?</div>{suggestions.map((x) => <button key={x} onClick={() => sendMessage(x)} className="mr-1 rounded-full border border-blue-100 bg-white px-3 py-1.5 text-[10px] font-semibold text-blue-600 hover:bg-blue-50">{x}</button>)}{message && <div className="ml-auto max-w-[85%] rounded-2xl rounded-tr-sm bg-blue-600 p-3 text-xs text-white">{message}</div>}</div><div className="flex items-center gap-2 border-t border-slate-100 p-3"><button className="text-slate-400"><Paperclip className="size-4" /></button><input value={message} onChange={(e) => setMessage(e.target.value)} onKeyDown={(e) => e.key === "Enter" && sendMessage()} placeholder="Ask CampusAI anything..." className="min-w-0 flex-1 text-xs outline-none" /><button className="text-slate-400"><Mic className="size-4" /></button><button onClick={() => sendMessage()} className="grid size-8 place-items-center rounded-lg bg-blue-600 text-white"><Send className="size-3.5" /></button></div></div>}</div>;
}

export default function Index() {
  const location = useLocation();
  return location.pathname === "/dashboard" ? <Dashboard /> : <Landing />;
}
