const { resolve } = require("path");
const spawn = require("cross-spawn");
const fs = require('fs');

const items = [
    {
        label: "League of Legends",
        icon: resolve(__dirname, "..", "assets", "iconLeagueOfLegends.png"),
        click: () =>
            spawn(
                '"D:\\Games\\Riot Games\\Riot Client\\RiotClientServices.exe" --launch-product=league_of_legends --launch-patchline=live'
            ),
    },
    // {
    //     label: "Dead by Daylight",
    //     icon: resolve(__dirname, "..", "assets", "iconDeadByDaylight.jpg"),
    //     click: () => {
    //         spawn('start', ['steam://rungameid/381210'], { shell: true });
    //     }
    // },
    // {
    //     label: 'Rubinum',
    //     icon: resolve(__dirname, '..', 'assets', 'iconRubinum.png'),
    //     submenu: [
    //         {
    //             label: 'Abrir Patcher',
    //             icon: resolve(__dirname, '..', 'assets', 'iconRubinum.png'),
    //             click: () => {
    //                 spawn('"D:\\Games\\Metins\\Rubinum\\RubinumLauncher.exe"')
    //             }
    //         },
    //         {
    //             label: "Alterar Resolução",
    //             icon: resolve(__dirname, "..", "assets", "iconResolution.png"),
    //             submenu: [
    //                 {
    //                     label: '2560 x 1440',
    //                     icon: resolve(__dirname, '..', 'assets', 'iconResolution.png'),
    //                     click: () => {
    //                         spawn('copy', ['/Y D:\\Games\\Metins\\Rubinum\\SystemSettings-2560x1440.ini D:\\Games\\Metins\\Rubinum\\SystemSettings.ini'], { shell: true });
    //                         spawn('C:\\QRes\\QRes.exe', ['/x:2560 /y:1440 /r:155'], { shell: true });
    //                     }
    //                 },
    //                 {
    //                     label: '2560 x 1440 (Divided)',
    //                     icon: resolve(__dirname, '..', 'assets', 'iconResolution.png'),
    //                     click: () => {
    //                         spawn('copy', ['/Y D:\\Games\\Metins\\Rubinum\\SystemSettings-2560x1440-Divided.ini D:\\Games\\Metins\\Rubinum\\SystemSettings.ini'], { shell: true });
    //                         spawn('C:\\QRes\\QRes.exe', ['/x:2560 /y:1440 /r:155'], { shell: true });
    //                     }
    //                 }
    //             ]
    //         }
    //     ]
    // },
    {
        label: 'Origins2',
        icon: resolve(__dirname, '..', 'assets', 'iconOrigins2.png'),
        submenu: [
            {
                label: 'Abrir Patcher',
                icon: resolve(__dirname, '..', 'assets', 'iconOrigins2.png'),
                click: () => {
                    spawn('"D:\\Games\\Metins\\Origins2\\Origins Patcher.exe"')
                }
            },
            {
                label: "Alterar Resolução",
                icon: resolve(__dirname, "..", "assets", "iconResolution.png"),
                submenu: [
                    {
                        label: '2560 x 1440',
                        icon: resolve(__dirname, '..', 'assets', 'iconResolution.png'),
                        click: () => {
                            fs.copyFile('D:\\Games\\Metins\\Origins2\\metin2-2560x1440.cfg', 'D:\\Games\\Metins\\Origins2\\metin2.cfg', (err) => {
                                if (err) throw err;
                            });

                            spawn('C:\\QRes\\QRes.exe', ['/x:2560 /y:1440 /r:155'], { shell: true });
                        }
                    },
                    {
                        label: '2560 x 1440 (Divided)',
                        icon: resolve(__dirname, '..', 'assets', 'iconResolution.png'),
                        click: () => {
                            fs.copyFile('D:\\Games\\Metins\\Origins2\\metin2-2560x1440-divided.cfg', 'D:\\Games\\Metins\\Origins2\\metin2.cfg', (err) => {
                                if (err) throw err;
                            });

                            spawn('C:\\QRes\\QRes.exe', ['/x:2560 /y:1440 /r:155'], { shell: false });
                        }
                    }
                ]
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
                label: "2560 x 1440",
                icon: resolve(__dirname, "..", "assets", "iconResolution.png"),
                click: () => {
                    spawn('C:\\QRes\\QRes.exe', ['/x:2560 /y:1440 /r:155'], { shell: true });
                }
            },
            {
                label: "1920 x 1080",
                icon: resolve(__dirname, "..", "assets", "iconResolution.png"),
                click: () => {
                    spawn('C:\\QRes\\QRes.exe', ['/x:1920 /y:1080 /r:155'], { shell: true });
                }
            },
            {
                label: "1600 x 900",
                icon: resolve(__dirname, "..", "assets", "iconResolution.png"),
                click: () => {
                    spawn('C:\\QRes\\QRes.exe', ['/x:1600 /y:900 /r:155'], { shell: true });
                }
            },
            {
                label: "1440 x 1080",
                icon: resolve(__dirname, "..", "assets", "iconResolution.png"),
                click: () => {
                    spawn('C:\\QRes\\QRes.exe', ['/x:1440 /y:1080 /r:155'], { shell: true });
                }
            },
            {
                label: "1280 x 960",
                icon: resolve(__dirname, "..", "assets", "iconResolution.png"),
                click: () => {
                    spawn('C:\\QRes\\QRes.exe', ['/x:1280 /y:960 /r:155'], { shell: true });
                }
            }
        ]
    }
]

module.exports = items;