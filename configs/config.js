const { resolve } = require("path");
const spawn = require("cross-spawn");

const items = [
    {
        label: "Riot Games",
        icon: resolve(__dirname, "..", "assets", "iconRiotGames.png"),
        submenu: [
            {
                label: "League of Legends",
                icon: resolve(__dirname, "..", "assets", "iconLeagueOfLegends.png"),
                click: () =>
                    spawn.sync(
                        '"C:\\Riot Games\\Riot Client\\RiotClientServices.exe" --launch-product=league_of_legends --launch-patchline=live'
                    ),
            }
        ]
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
        label: 'Fortnite',
        icon: resolve(__dirname, "..", "assets", "iconFortnite.jpg"),
        click: () => {
            spawn('C:\\Games\\Epic Games\\Fortnite\\FortniteGame\\Binaries\\Win64\\FortniteClient-Win64-Shipping.exe');
        }
    },
    {
        label: "Abrir Steam",
        icon: resolve(__dirname, "..", "assets", "iconSteam.png"),
        click: () => {
            spawn('C:\\Program Files (x86)\\Steam\\Steam.exe');
        }
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