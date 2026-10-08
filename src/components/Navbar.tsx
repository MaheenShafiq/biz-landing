import { useState } from "react";

export function Navbar() {
    const [open, setOpen] = useState(false);
    return (
        <header className="border-b bg-white">
            <nav
                aria-label="Main"
                className="mx-auto flex max-w-5xl flex-wrap items-center justify-between p-4"
            >
                <a href="#top" className="text-xl font-bold">
                    IronPeak Fitness
                </a>

                <button
                    type="button"
                    className="rounded border px-3 py-1 md:hidden"
                    aria-expanded={open}
                    aria-controls="mobile-menu"
                    onClick={() => setOpen((o) => !o)}
                >
                    Menu
                </button>

                <ul
                    id="mobile-menu"
                    className={`${open ? "flex" : "hidden"} w-full flex-col gap-2 pt-4 md:flex md:w-auto md:flex-row md:gap-6 md:pt-0`}
                >
                    <li><a href="#services">Services</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}