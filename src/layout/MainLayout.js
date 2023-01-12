import Header from "./header/header";
import Footer from "./footer/footer";

export default function MainLayout(props) {
  return (
    <div className="flex flex-col h-screen bg-gradient-to-t from-indigo-500 via-purple-500 to-pink-300">
      <Header />
      <main className="mb-auto text-white">{props.children}</main>
      <Footer />
    </div>
  );
}
