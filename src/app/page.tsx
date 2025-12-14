"use client";

import DarkVeil from "@/components/ui/DarkVeil";
import {
  Navbar,
  NavBody,
  NavItems,
  NavbarLogo,
  NavbarButton,
  MobileNav,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";

export default function Home() {
  const navItems = [
    { name: "Home", link: "/" },
    { name: "Sobre", link: "/sobre" },
    { name: "Serviços", link: "/servicos" },
    { name: "Cases", link: "/cases" },
    { name: "Contato", link: "/contato" },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <main className="relative min-h-screen bg-black text-white">
      {/* NAVBAR */}
      <Navbar className="!fixed !top-0 !left-0 !right-0 !inset-x-0 !z-[9999]">
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />

          <div className="hidden md:flex items-center gap-3">
            <NavbarButton href="/contato">Entre em contato ↗</NavbarButton>
          </div>

          <MobileNav>
            <MobileNavHeader>
              <NavbarLogo />
              <MobileNavToggle
                isOpen={isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen((v) => !v)}
              />
            </MobileNavHeader>

            <MobileNavMenu
              isOpen={isMobileMenuOpen}
              onClose={() => setIsMobileMenuOpen(false)}
            >
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.link}
                  className="block py-2 text-base text-white/80 hover:text-white"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}

              <div className="mt-4">
                <NavbarButton href="/contato">Entre em contato ↗</NavbarButton>
              </div>
            </MobileNavMenu>
          </MobileNav>
        </NavBody>
      </Navbar>

      {/* HERO (1 tela) */}
      <section className="relative h-screen w-screen overflow-hidden">
        <div className="absolute inset-0">
          <DarkVeil
            speed={2.2}
            noiseIntensity={0.12}
            scanlineIntensity={0.1}
            scanlineFrequency={5.0}
            warpAmount={3.5}
            resolutionScale={1}
          />
        </div>

        <div className="absolute inset-0 bg-black/40" />

        {/* só um marcador pra você ver o scroll começar */}
        <div className="relative z-10 flex h-full items-end justify-center pb-10 text-white/70 text-sm">
          role pra baixo ↓
        </div>
      </section>

      {/* CONTEÚDO EXTRA (pra gerar scroll e testar o resize) */}
      <section className="mx-auto w-full max-w-6xl px-6 py-24">
        <h2 className="text-3xl font-semibold">Seção de teste</h2>
        <p className="mt-4 text-white/70 max-w-2xl">
          Essa seção é só pra criar altura e permitir scroll. Se a navbar for
          resizable, ela deve mudar conforme você desce a página.
        </p>

        {/* blocão alto pra garantir scroll */}
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {Array.from({ length: 9 }).map((_, i) => (
            <div
              key={i}
              className="h-44 rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6"
            >
              <div className="text-white/80 font-medium">Card {i + 1}</div>
              <div className="mt-2 text-white/60 text-sm">
                Conteúdo fake pra empurrar a página pra baixo.
              </div>
            </div>
          ))}
        </div>

        {/* mais altura ainda */}
        <div className="mt-16 h-[120vh] rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent" />
      </section>
    </main>
  );
}
