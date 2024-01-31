export default function NoAuthLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <div>
            {children}
        </div>
    )
}
