import "./globals.css";

// import { Inter } from 'next/font/google'
// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
	title: "Zoi Head Hunter",
	description: "Zoi Head Hunter",
};

export default function RootLayout({ children }) {
	return (
		<html lang="es">
			<body>{children}</body>
		</html>
	);
}
