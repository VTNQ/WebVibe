module.exports = {
	darkMode: ["class"],
	content: [
		"./src/**/*.{js,jsx,ts,tsx}", // quét tất cả file React
	],
	theme: {
		extend: {
			keyframes: {
				
				shine:{
					'0%':{left:'-100%'},
					'100%':{left:'100%'}
				},
				'video-play-button-animate': {
					'0%': {
					  width: '10px',
					  height: '10px',
					  opacity: '0.8',
					},
					'100%': {
					  width: '160px',
					  height: '160px',
					  opacity: '0',
					},
				  },
				marquee: {
				  '0%': { transform: 'translateX(0%)' },
				  '100%': { transform: 'translateX(-50%)' },
				},
				spin: {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' },
				  },
			  },
			  animation: {
				marquee: 'marquee 20s linear infinite',
				slowspin: 'spin 2s linear infinite',
				'video-play': 'video-play-button-animate 1.2s ease-in-out infinite forwards',
				shine:'shine 1s forwards'
			  },
			lineHeight:{
				tighter:'1.2'
			},
			fontFamily: {
				basier: [
					'Basier Square',
					'sans-serif'
				],
				roboto: [
					'Roboto',
					'sans-serif'
				],
				manrope: ['Manrope', 'sans-serif'],
			},
			backgroundImage: {
				'web4s-hover': 'linear-gradient(90deg, #0D5DD6 0%, #9747FF 100%)',
			},
			colors: {
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				redProduct: '#F44336',
				blueProduct: '#002F75',
				greenProduct: '#228B22',
				orangeProduct: '#F76C06',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			}
		}
	},
	extend: {
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        marquee: 'marquee 20s linear infinite',
      },
    },
	plugins: [
		require('tailwind-scrollbar'),
		require("tailwindcss-animate"),
		function ({ addUtilities }) {
			addUtilities({
			  '.rotate-y-180': {
				transform: 'rotateY(180deg)',
			  },
			  '.-rotate-y-180': {
				transform: 'rotateY(-180deg)',
			  },
			});
		  },
	],
}
