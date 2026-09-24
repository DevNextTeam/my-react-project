import CustomerNavbar from "../components/navbar/CustomerNavbar";

export default function CustomerLayout({ children }) {
  return (
    <div className="min-h-screen bg-[#f8f7f4] text-[#18201d]">
      <CustomerNavbar />

      <main>
        {children}
      </main>
    </div>
  );
}