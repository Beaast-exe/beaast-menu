const { resolve } = require("path");
const spawn = require("cross-spawn");

const items = [
    {
        label: "League of Legends",
        icon: resolve(__dirname, "..", "assets", "iconLeagueOfLegends.png"),
        click: () =>
            spawn(
                '"D:\\Riot Games\\Riot Client\\RiotClientServices.exe" --launch-product=league_of_legends --launch-patchline=live'
            ),
    },
    {
        label: "Dead by Daylight",
        icon: resolve(__dirname, "..", "assets", "iconDeadByDaylight.jpg"),
        click: () => {
            spawn('start', ['steam://rungameid/381210'], { shell: true });
        }
    },
    // {
    //     label: 'Rubinum',
    //     icon: resolve(__dirname, "..", "assets", "iconRubinum.png"),
    //     submenu: [
    //         {
    //             label: 'Abrir Patcher',
    //             icon: resolve(__dirname, "..", "assets", "iconRubinum.png"),
    //             click: () => {
    //                 spawn('"D:\\Games\\Metins\\Rubinum\\RubinumLauncher.exe"');
    //             }
    //         },
    //         {
    //             label: "Alterar Resolução",
    //             icon: resolve(__dirname, "..", "assets", "iconResolution.png"),
    //             submenu: [
    //                 {
    //                     label: "1366 x 768",
    //                     icon: resolve(__dirname, "..", "assets", "iconResolution.png"),
    //                     click: () => {
    //                         spawn('copy', ['/Y D:\\Games\\Metins\\Rubinum\\SystemSettings-1366x768.ini D:\\Games\\Metins\\Rubinum\\SystemSettings.ini'], { shell: true });
    //                         spawn('C:\\QRes\\QRes.exe', ['/x:1366 /y:768'], { shell: true });
    //                     }
    //                 },
    //                 {
    //                     label: "1024 x 768",
    //                     icon: resolve(__dirname, "..", "assets", "iconResolution.png"),
    //                     click: () => {
    //                         spawn('copy', ['/Y D:\\Games\\Metins\\Rubinum\\SystemSettings-1024x768.ini D:\\Games\\Metins\\Rubinum\\SystemSettings.ini'], { shell: true });
    //                         spawn('C:\\QRes\\QRes.exe', ['/x:1024 /y:768'], { shell: true });
    //                     }
    //                 }
    //             ]
    //         },
    //         {
    //             label: 'Mostrar na pasta',
    //             icon: resolve(__dirname, "..", "assets", "iconExplorer.png"),
    //             click: () => {
    //                 spawn('explorer', ['D:\\Games\\Metins\\Rubinum\\']);
    //             }
    //         }
    //     ]
    // },
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
            // {
            //     label: 'Epic Games',
            //     icon: resolve(__dirname, '..', 'assets', 'iconEpicGames.png'),
            //     click: () => {
            //         spawn('D:\\Programas\\Epic Games\\Launcher\\Portal\\Binaries\\Win32\\EpicGamesLauncher.exe');
            //     }
            // }
        ]
    },
    {
        label: "Alterar Resolução",
        icon: resolve(__dirname, "..", "assets", "iconResolution.png"),
        submenu: [
            {
                label: "2560 x 1440",
                icon: resolve(__dirname, "..", "assets", "iconResolution.png"),
                click: () => {
                    spawn('C:\\QRes\\QRes.exe', ['/x:2560 /y:1440'], { shell: true });
                }
            },
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
            }
        ]
    }
]

module.exports = items;