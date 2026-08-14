import HomeHeader from "@/shared/common/home/home-header";
import HomeFooter from "@/shared/common/home/home-footer";
import { FlickeringGrid } from "@/components/ui/flickering-grid";

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-background">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[25vh] overflow-hidden rounded-b-3xl">
        <FlickeringGrid
          className="h-full w-full"
          squareSize={2}
          gridGap={2}
          color="#6366f1"
          maxOpacity={0.4}
          flickerChance={0.1}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background" />
      </div>

      {/* Nội dung chính, nằm trên background */}
      <div className="relative z-10 flex min-h-screen flex-col">
        <HomeHeader />
        <main className="flex flex-1">
          <div className="w-full flex-1 px-4 py-8 sm:px-6 sm:py-10 md:py-12">
            {children}
          </div>
        </main>
        <HomeFooter />
      </div>
    </div>
  );
}