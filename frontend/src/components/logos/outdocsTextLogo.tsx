import React from "react";

function outdocsTextLogo({ className, fill }: { className: string; fill: string }) {
	return (
		<svg viewBox="0 0 182.55 20.01" className={className}>
			<path
				d="M13.48 20C5.51 20 0 16.12 0 10S5.54 0 13.48 0 27 3.86 27 10s-5.58 10-13.52 10zM52 12.5c0 4.75-4.12 7.5-11.63 7.5s-11.66-2.75-11.66-7.5V.43h8.09v11.91c0 1.5.89 2.49 3.57 2.49s3.58-1 3.58-2.49V.43H52zM75.63 5.63h-7.04v13.89H60.5V5.63h-7.04V.43h22.17v5.2zM89.5 19.53H77.6V.43h12c8.3 0 12.48 3.22 12.48 9.55s-4.21 9.55-12.58 9.55zM116.93 20c-8 0-13.48-3.86-13.48-10S109 0 116.93 0s13.48 3.86 13.48 10-5.54 10-13.48 10zM145.36 14.86c2.18 0 4-.75 4.58-2.58h8.26c-1 4.48-6.15 7.73-13.24 7.73-7.76 0-13.19-3.92-13.19-10.06S137 0 145.43 0c7.47 0 11.66 3.08 12.8 7.75h-8.33c-.61-1.77-2.32-2.6-4.65-2.6-3.18 0-5.11 1.47-5.11 4.8s2.07 4.91 5.22 4.91zM170.92 20c-7.79 0-11.47-2.73-11.72-6.73h8c.18 1.77 1.64 2.2 3.9 2.2s3.32-.43 3.32-1.32-.85-1.26-3.61-1.55l-3.07-.32c-4.62-.49-7.91-2.36-7.91-6 0-3 2.11-6.25 10.84-6.25 6.65 0 10.73 1.88 11.19 6.3h-7.47c-.18-1.15-1-1.82-3.44-1.82-2.21 0-3.07.48-3.07 1.23s.86 1.13 2.4 1.29l3.07.32c6.37.67 9.23 2.5 9.23 5.9-.03 4.08-4 6.75-11.66 6.75z"
				fill={fill}
			/>
		</svg>
	);
}

outdocsTextLogo.defaultProps = {
	className: undefined,
	fill: "#000",
};

export default outdocsTextLogo;