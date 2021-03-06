const { resolve } = require("path");
const spawn = require("cross-spawn");

const items = [
    {
        label: "League of Legends",
        icon: resolve(__dirname, "..", "assets", "iconLeagueOfLegends.png"),
        click: () =>
            spawn.sync(
                '"C:\\Riot Games\\Riot Client\\RiotClientServices.exe" --launch-product=league_of_legends --launch-patchline=live'
            ),
    },
    {
        label: 'Fortnite',
        icon: resolve(__dirname, "..", "assets", "iconFortnite.jpg"),
        click: () => {
            spawn('C:\\Games\\Epic Games\\Fortnite\\FortniteGame\\Binaries\\Win64\\FortniteClient-Win64-Shipping.exe');
        }
    },
    {
        label: "Brawlhalla",
        icon: resolve(__dirname, "..", "assets", "iconBrawlhalla.png"),
        click: () => {
            spawn('"C:\\Program Files (x86)\\Steam\\Steam.exe"', ['-applaunch', '291550'], { shell: true });
        }
    },
    {
        label: "Farm Together",
        icon: resolve(__dirname, "..", "assets", "iconFarmTogether.png"),
        click: () => {
            spawn('"D:\\Games\\Farm Together\\FarmTogether.exe"');
        }
    },
    {
        type: "separator",
    },
	{
		label: 'Ferramentas de Desenvolvimento',
		icon: resolve(__dirname, '..', 'assets', 'iconIntellij.png'),
		submenu: [
			{
				label: 'IntelliJ',
                icon: resolve(__dirname, "..", "assets", "iconIntellij.png"),
                click: () => {
                    spawn('C:\\Program Files\\JetBrains\\IntelliJ IDEA Community Edition 2020.2.3-2\\bin\\idea64.exe');
                }
			}
		]
	},
    {
        label: 'Bibliotecas de Jogos',
        icon: resolve(__dirname, '..', 'assets', 'iconLibrary.png'),
        submenu: [
            {
                label: 'Steam',
                icon: resolve(__dirname, "..", "assets", "iconSteam.png"),
                click: () => {
                    spawn('C:\\Program Files (x86)\\Steam\\Steam.exe');
                }
            },
            {
                label: 'Epic Games',
                icon: resolve(__dirname, '..', 'assets', 'iconEpicGames.png'),
                click: () => {
                    spawn('C:\\Program Files (x86)\\Epic Games\\Launcher\\Portal\\Binaries\\Win32\\EpicGamesLauncher.exe');
                }
            }
        ]
    },
    {
        label: "Alterar Resolu????o",
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
            }
        ]
    }
]

module.exports = items;