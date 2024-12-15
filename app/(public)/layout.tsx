import NavBar from "@/components/shared/nav-bar";

interface PublicLayoutProps {
  children: React.ReactNode;
}

const PublicLayout = ({ children }: PublicLayoutProps) => {
  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-col">
        <NavBar />
        <main className="w-full flex">{children}</main>
      </div>
    </div>
  );
};

export default PublicLayout;
