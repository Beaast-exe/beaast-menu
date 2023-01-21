const { resolve } = require("path");
const spawn = require("cross-spawn");

const items = [
    {
        label: "League of Legends",
        icon: resolve(__dirname, "..", "assets", "iconLeagueOfLegends.png"),
        click: () =>
            spawn(
                '"D:\\Games\\Riot Games\\Riot Client\\RiotClientServices.exe" --launch-product=league_of_legends --launch-patchline=live'
            ),
    },
    {
        label: 'Aeldra',
        icon: resolve(__dirname, "..", "assets", "iconAeldra.png"),
		submenu: [
			{
				label: 'Abrir',
				icon: resolve(__dirname, "..", "assets", "iconAeldra.png"),
                click: () => {
					spawn('"D:\\Games\\Metins\\Aeldra\\Aeldra-Patcher.exe"');
				}
			},
			{
				label: "Alterar Resolução",
        		icon: resolve(__dirname, "..", "assets", "iconResolution.png"),
        		submenu: [
            		{
                		label: "1600 x 900",
                		icon: resolve(__dirname, "..", "assets", "iconResolution.png"),
                		click: () => {
							spawn('copy', ['/Y D:\\Games\\Metins\\Aeldra\\metin2-1600x900.cfg D:\\Games\\Metins\\Aeldra\\metin2.cfg'], { shell: true });
                    		spawn('C:\\QRes\\QRes.exe', ['/x:1600 /y:900'], { shell: true });
                		}
					},
            		{
                		label: "1366 x 768",
                		icon: resolve(__dirname, "..", "assets", "iconResolution.png"),
                		click: () => {
							spawn('copy', ['/Y D:\\Games\\Metins\\Aeldra\\metin2-1366x768.cfg D:\\Games\\Metins\\Aeldra\\metin2.cfg'], { shell: true });
                    		spawn('C:\\QRes\\QRes.exe', ['/x:1366 /y:768'], { shell: true });
                		}
					},
            		{
                		label: "1024 x 768",
                		icon: resolve(__dirname, "..", "assets", "iconResolution.png"),
                		click: () => {
							spawn('copy', ['/Y D:\\Games\\Metins\\Aeldra\\metin2-1024x768.cfg D:\\Games\\Metins\\Aeldra\\metin2.cfg'], { shell: true });
                    		spawn('C:\\QRes\\QRes.exe', ['/x:1024 /y:768'], { shell: true });
                		}
					}
				]
			},
			{
				label: 'Mostrar na pasta',
                icon: resolve(__dirname, "..", "assets", "iconExplorer.png"),
                click: () => {
                    spawn('explorer', ['D:\\Games\\Metins\\Aeldra\\']);
                }
			}
		]
    },
    {
        label: 'Rubinum',
        icon: resolve(__dirname, "..", "assets", "iconRubinum.png"),
		submenu: [
			{
				label: 'Abrir',
				icon: resolve(__dirname, "..", "assets", "iconRubinum.png"),
                click: () => {
					spawn('"D:\\Games\\Metins\\Rubinum\\Beta_Patcher.exe"');
				}
			},
			{
				label: "Alterar Resolução",
        		icon: resolve(__dirname, "..", "assets", "iconResolution.png"),
        		submenu: [
            		{
                		label: "1024 x 768",
                		icon: resolve(__dirname, "..", "assets", "iconResolution.png"),
                		click: () => {
							spawn('copy', ['/Y D:\\Games\\Metins\\Rubinum\\metin2-1024x768.cfg D:\\Games\\Metins\\Aeldra\\metin2.cfg'], { shell: true });
                    		spawn('C:\\QRes\\QRes.exe', ['/x:1024 /y:768'], { shell: true });
                		}
					}
				]
			},
			{
				label: 'Mostrar na pasta',
                icon: resolve(__dirname, "..", "assets", "iconExplorer.png"),
                click: () => {
                    spawn('explorer', ['D:\\Games\\Metins\\Rubinum\\']);
                }
			}
		]
    },
    {
        type: "separator",
    },
    {
        label: 'Bibliotecas de Jogos',
        icon: resolve(__dirname, '..', 'assets', 'iconLibrary.png'),
        submenu: [
            {
                label: 'Steam',
                icon: resolve(__dirname, "..", "assets", "iconSteam.png"),
                click: () => {
                    spawn('D:\\Games\\Steam\\Steam.exe');
                }
            },
            {
                label: 'Epic Games',
                icon: resolve(__dirname, '..', 'assets', 'iconEpicGames.png'),
                click: () => {
                    spawn('D:\\Programas\\Epic Games\\Launcher\\Portal\\Binaries\\Win32\\EpicGamesLauncher.exe');
                }
            }
        ]
    },
    {
        label: "Alterar Resolução",
        icon: resolve(__dirname, "..", "assets", "iconResolution.png"),
        submenu: [
            {
                label: "1920 x 1080",
                icon: resolve(__dirname, "..", "assets", "iconResolution.png"),
                click: () => {
                    spawn('C:\\QRes\\QRes.exe', ['/x:1920 /y:1080'], { shell: true });
                }
            },
            {
                label: "1600 x 900",
                icon: resolve(__dirname, "..", "assets", "iconResolution.png"),
                click: () => {
                    spawn('C:\\QRes\\QRes.exe', ['/x:1600 /y:900'], { shell: true });
                }
            },
            {
                label: "1280 x 720",
                icon: resolve(__dirname, "..", "assets", "iconResolution.png"),
                click: () => {
                    spawn('C:\\QRes\\QRes.exe', ['/x:1280 /y:720'], { shell: true });
                }
            },
            {
                label: "1024 x 768",
                icon: resolve(__dirname, "..", "assets", "iconResolution.png"),
                click: () => {
                    spawn('C:\\QRes\\QRes.exe', ['/x:1024 /y:768'], { shell: true });
                }
            },
            {
                label: "800 x 600",
                icon: resolve(__dirname, "..", "assets", "iconResolution.png"),
                click: () => {
                    spawn('C:\\QRes\\QRes.exe', ['/x:800 /y:600'], { shell: true });
                }
            }
        ]
    }
]

module.exports = items;