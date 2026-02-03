import HomeHeader from "@/components/common/home-header";
import HomeFooter from "@/components/common/home-footer";

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <HomeHeader />

      <main className="flex-1">
        <div className="w-full py-8 px-4 sm:py-10 sm:px-6 md:py-12">
          {children}
        </div>
      </main>

      <HomeFooter />
    </div>
  );
}