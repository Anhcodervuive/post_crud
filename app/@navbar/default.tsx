"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/posts", label: "Posts" },
    { href: "/image-demo", label: "Image Demo" },
];

export default function NavbarSlot() {
    const pathname = usePathname();

    return (
        <nav
            style={{
                display: "flex",
                gap: 16,
                padding: 16,
                borderBottom: "1px solid #e5e7eb",
            }}
        >
            {links.map((link) => {
                /**
                 * Active rule:
                 * - "/" chỉ active khi đúng "/"
                 * - các route khác active khi pathname bắt đầu bằng href
                 */
                const isActive =
                    link.href === "/"
                        ? pathname === "/"
                        : pathname.startsWith(link.href);

                return (
                    <Link
                        key={link.href}
                        href={link.href}
                        style={{
                            fontWeight: isActive ? "600" : "400",
                            color: isActive ? "#2563eb" : "white",
                            textDecoration: "none",
                        }}
                    >
                        {link.label}
                    </Link>
                );
            })}
        </nav>
    );
}
