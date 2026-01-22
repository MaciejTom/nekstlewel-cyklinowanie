import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Calculator } from "lucide-react";

export function HeroVariation7() {
  return (
    <section className="bg-[#f5f5f0] min-h-[700px] flex items-center py-12">
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div className="space-y-6">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-[#2a2a2a] leading-tight">
            Ile kosztuje <br/>
            <span className="text-[#8b5a2b]">nowa podłoga?</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-md">
            Nie trać czasu na dzwonienie. Skorzystaj z naszego szybkiego konfiguratora i sprawdź szacunkowy koszt renowacji w 30 sekund.
          </p>
          <ul className="space-y-3 pt-4">
            {['Szybka wycena online', 'Gwarancja stałej ceny', 'Dostępne terminy od ręki'].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-sm font-medium text-gray-700">
                    <div className="w-5 h-5 rounded-full bg-[#d4a574]/20 flex items-center justify-center text-[#8b5a2b]">✓</div>
                    {item}
                </li>
            ))}
          </ul>
        </div>

        {/* Right Card / Calculator */}
        <div className="bg-white p-8 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-100 max-w-md mx-auto lg:mx-0 w-full">
            <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-[#fffbf5] rounded-xl text-[#8b5a2b]">
                    <Calculator size={24} />
                </div>
                <div>
                    <h3 className="text-xl font-bold text-gray-900">Szybka wycena</h3>
                    <p className="text-xs text-gray-500">Wypełnij formularz, oddzwonimy z ofertą.</p>
                </div>
            </div>

            <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <label className="text-xs font-bold uppercase text-gray-400">Metraż (m²)</label>
                        <Input type="number" placeholder="np. 25" className="bg-gray-50 border-gray-200 h-12" />
                    </div>
                    <div className="space-y-2">
                         <label className="text-xs font-bold uppercase text-gray-400">Miejscowość</label>
                        <Input type="text" placeholder="Kielce" className="bg-gray-50 border-gray-200 h-12" />
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-xs font-bold uppercase text-gray-400">Rodzaj usługi</label>
                    <select className="w-full h-12 rounded-md border border-gray-200 bg-gray-50 px-3 text-sm">
                        <option>Cyklinowanie + Lakierowanie</option>
                        <option>Cyklinowanie + Olejowanie</option>
                        <option>Tylko Cyklinowanie</option>
                        <option>Renowacja Schodów</option>
                    </select>
                </div>

                <div className="space-y-2">
                    <label className="text-xs font-bold uppercase text-gray-400">Telefon</label>
                    <Input type="tel" placeholder="Twój numer" className="bg-gray-50 border-gray-200 h-12" />
                </div>

                <Button size="lg" className="w-full bg-[#8b5a2b] hover:bg-[#6b4423] h-14 text-base mt-2">
                    Oblicz i zamów <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                
                <p className="text-xs text-center text-gray-400 mt-4">
                    *Wycena jest orientacyjna. Ostateczny koszt potwierdzimy podczas darmowej wizji lokalnej.
                </p>
            </div>
        </div>

      </div>
    </section>
  );
}
