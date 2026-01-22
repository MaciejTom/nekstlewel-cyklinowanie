import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Check, ShieldCheck, Star } from "lucide-react";

export function HeroVariation10() {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-gray-200 min-h-[85vh] py-20 px-4 overflow-hidden relative">
      {/* Abstract Shapes */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#d4a574]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#8b5a2b]/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3" />

      <div className="container mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* Text Content */}
        <div className="space-y-8 animate-in slide-in-from-left duration-700">
          <div className="flex items-center gap-2 text-[#8b5a2b] font-bold uppercase tracking-wider text-sm">
            <ShieldCheck className="w-5 h-5" />
            Gwarancja Satysfakcji
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-extrabold text-gray-900 tracking-tight leading-[1.1]">
            Nowoczesne <br/>
            <span className="relative inline-block">
                Cyklinowanie
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-[#d4a574]" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
                </svg>
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
            Łączymy tradycyjne rzemiosło z technologią XXI wieku. 
            Bezpyłowe maszyny Lagler, ekologiczne lakiery Berger-Seidle.
          </p>

          <div className="grid grid-cols-2 gap-4">
             {["Maszyny bezpyłowe", "Schnięcie w 2h", "Bez zapachu", "5 lat gwarancji"].map((feat, i) => (
                 <div key={i} className="flex items-center gap-2 text-gray-700 font-medium bg-white/50 p-2 rounded-lg">
                    <div className="bg-green-100 text-green-600 rounded-full p-1"><Check size={14} /></div>
                    {feat}
                 </div>
             ))}
          </div>

          <div className="pt-4">
             <Button className="bg-gray-900 text-white hover:bg-black shadow-xl shadow-gray-900/20 px-8 py-6 rounded-xl text-lg transition-transform hover:-translate-y-1">
                Zarezerwuj termin 2026
             </Button>
          </div>
        </div>

        {/* 3D Floating Cards Effect */}
        <div className="relative h-[600px] w-full hidden lg:block perspective-1000">
            {/* Main Card */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-96 bg-white p-2 rounded-2xl shadow-2xl rotate-y-12 rotate-z-6 hover:rotate-0 transition-transform duration-500 ease-out z-20">
                <div className="relative w-full h-full rounded-xl overflow-hidden">
                    <Image src="/images/6.jpg" alt="Work" fill className="object-cover" />
                </div>
            </div>

            {/* Back Card 1 */}
             <div className="absolute top-1/2 left-1/2 -translate-x-2/3 -translate-y-2/3 w-72 h-80 bg-white p-2 rounded-2xl shadow-xl -rotate-12 -z-10 opacity-90 hover:-translate-x-[70%] transition-transform duration-500">
                <div className="relative w-full h-full rounded-xl overflow-hidden">
                    <Image src="/images/7.jpg" alt="Work" fill className="object-cover" />
                </div>
            </div>

             {/* Back Card 2 */}
             <div className="absolute top-1/2 left-1/2 translate-x-10 translate-y-10 w-64 h-72 bg-[#1c1410] p-6 rounded-2xl shadow-xl rotate-6 z-30 text-white flex flex-col justify-between hover:translate-x-14 transition-transform duration-500">
                <div>
                    <p className="text-4xl font-bold text-[#d4a574]">4.9</p>
                    <div className="flex text-[#d4a574] my-2">
                        <Star size={16} fill="currentColor" />
                        <Star size={16} fill="currentColor" />
                        <Star size={16} fill="currentColor" />
                        <Star size={16} fill="currentColor" />
                        <Star size={16} fill="currentColor" />
                    </div>
                    <p className="text-sm text-gray-400">Średnia ocena klientów</p>
                </div>
                <div className="text-xs text-gray-500 border-t border-gray-700 pt-4">
                    Na podstawie 50+ recenzji w Google
                </div>
            </div>
        </div>

      </div>
    </section>
  );
}
