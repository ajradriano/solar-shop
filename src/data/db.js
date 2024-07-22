const products = [
    {
        descricao: "Paineis",
        itens: [
            {
                descricao: "Painel Solar Ja Solar 550w Bifacial",
                valor: " R$ 472,32 "
            }
        ]
    },
    {
        descricao: "Inversores",
        itens: [
            {
                descricao: "Inversor Fronius Primo 3kw Monof. 220v",
                valor: " R$ 1.490,40 ",
                valorIndividual: " R$ 1.905,59 "
            },
            {
                descricao: "Inversor Fronius Primo 4kw Monof. 220v",
                valor: " R$ 2.172,47 ",
                valorIndividual: " R$ 2.777,66 "
            },
            {
                descricao: "Inversor Fronius Primo 5kw Monof. 220v",
                valor: " R$ 2.399,95 ",
                valorIndividual: " R$ 3.068,51 "
            },
            {
                descricao: "Inversor Fronius Primo 6kw Monof. 220v",
                valor: " R$ 2.680,66 ",
                valorIndividual: " R$ 3.427,43 "
            },
            {
                descricao: "Inversor Fronius Primo 8,2kw Monof. 220v",
                valor: " R$ 3.525,18 ",
                valorIndividual: " R$ 4.507,21 "
            },
            {
                descricao: "Inversor Fronius Symo Br 10kw Trif. 220v",
                valor: " R$ 13.828,69 ",
                valorIndividual: " R$ 17.681,02 "
            },
            {
                descricao: "Inversor Fronius Symo Br 12kw Trif. 220v",
                valor: " R$ 15.444,26 ",
                valorIndividual: " R$ 19.746,66 "
            },
            {
                descricao: "Inversor Fronius Symo Br 15kw Trif. 220v",
                valor: " R$ 14.466,15 ",
                valorIndividual: " R$ 18.496,07 "
            },
            {
                descricao: "Inversor Fronius Symo 12,5kw Trif. 380v",
                valor: " R$ 7.927,72 ",
                valorIndividual: " R$ 10.136,19 "
            },
            {
                descricao: "Inversor Fronius Symo 15kw Trif. 380v",
                valor: " R$ 8.817,65 ",
                valorIndividual: " R$ 11.274,04 "
            },
            {
                descricao: "Inversor Fronius Symo 17,5kw Trif. 380v",
                valor: " R$ 9.302,01 ",
                valorIndividual: " R$ 11.893,33 "
            },
            {
                descricao: "Inversor Fronius Symo 20kw Trif. 380v",
                valor: " R$ 9.870,32 ",
                valorIndividual: " R$ 12.619,95 "
            },
            {
                descricao: "Inversor Fronius Eco 25kw Trif. 380v",
                valor: " R$ 10.962,76 ",
                valorIndividual: " R$ 14.016,72 "
            },
            {
                descricao: "Inversor Fronius Eco Light 25kw Trif. 380v",
                valor: " R$ 10.678,59 ",
                valorIndividual: " R$ 13.653,38 "
            },
            {
                descricao: "Inversor Fronius Eco 27kw Trif. 380v",
                valor: " R$ 12.025,74 ",
                valorIndividual: " R$ 15.375,81 "
            },
            {
                descricao: "Inversor Fronius Eco Light 27kw Trif. 380v",
                valor: " R$ 11.690,70 ",
                valorIndividual: " R$ 14.947,44 "
            },
            {
                descricao: "Inversor Fronius Kit Eco 75kw (eco 25 + 2 Eco 25 Light)",
                valor: " R$ 32.319,93 ",
                valorIndividual: " R$ 41.323,48 "
            },
            {
                descricao: "Inversor Fronius Tauro Eco 50-3-D Trif 380v",
                valor: " R$ 30.929,10 ",
                valorIndividual: " R$ 39.545,19 "
            },
            {
                descricao: "Inversor Fronius Tauro Eco 50-3-P Trif 380v",
                valor: " R$ 28.792,75 ",
                valorIndividual: " R$ 36.813,70 "
            },
            {
                descricao: "Inversor Fronius Tauro Eco 100-3-D Trif 380v",
                valor: " R$ 42.476,75 ",
                valorIndividual: " R$ 54.309,73 "
            },
            {
                descricao: "Inversor Fronius Tauro Eco 100-3-P Trif 380v",
                valor: " R$ 38.502,26 ",
                valorIndividual: " R$ 49.228,05 "
            },
            {
                descricao: "Inversor Fronius Primo Gen24 3.0 Plus Monf. 220v",
                valor: " R$ 10.334,17 ",
                valorIndividual: " R$ 13.213,02 "
            },
            {
                descricao: "Inversor Fronius Primo Gen24 4.0 Plus Monf. 220v",
                valor: " R$ 11.111,24 ",
                valorIndividual: " R$ 14.206,57 "
            },
            {
                descricao: "Inversor Fronius Primo Gen24 5.0 Plus Monf. 220v",
                valor: " R$ 12.549,98 ",
                valorIndividual: " R$ 16.046,10 "
            },
            {
                descricao: "Inversor Fronius Primo Gen24 6.0 Plus Monf. 220v",
                valor: " R$ 13.931,44 ",
                valorIndividual: " R$ 17.812,40 "
            },
            {
                descricao: "Carregador Veicular Fronius Wattpilot Home 11 J 2,0",
                valor: " R$ 5.780,92 ",
                valorIndividual: " R$ 7.391,34 "
            },
            {
                descricao: "Cabo De Carregado Veicular Fronius Tipo 2 2,5m",
                valor: " R$ 2.035,76 ",
                valorIndividual: " R$ 2.602,88 "
            },
            {
                descricao: "Cabo De Carregado Veicular Fronius Tipo 2 5m",
                valor: " R$ 1.813,60 ",
                valorIndividual: " R$ 2.318,82 "
            },
            {
                descricao: "Cabo De Carregado Veicular Fronius  Tipo 2 7,5m",
                valor: " R$ 2.651,26 ",
                valorIndividual: " R$ 3.389,83 "
            },
            {
                descricao: "Suporte Cabo De Carregado Veicular Fronius (type 2 Wall Bracket)",
                valor: " R$ 465,02 ",
                valorIndividual: " R$ 594,56 "
            },
            {
                descricao: "Tagns Rfid",
                valor: " R$ 203,29 ",
                valorIndividual: " R$ 259,92 "
            },
            {
                descricao: "Mount Place Go 2,0",
                valor: " R$ 213,27 ",
                valorIndividual: " R$ 272,68 "
            },
            {
                descricao: "Smart Meter Fronius 65a",
                valor: " R$ 1.526,37 ",
                valorIndividual: " R$ 1.951,59 "
            },
            {
                descricao: "Smart Meter Fronius 5ka",
                valor: " R$ 1.526,37 ",
                valorIndividual: " R$ 1.951,59 "
            },
            {
                descricao: "Inversor Sunways Monof. 220v Sts-3ktl-3",
                valor: " R$ 2.514,52 ",
                valorIndividual: " R$ 3.215,00 "
            },
            {
                descricao: "Inversor Sunways Monof. 220v Sts-5ktl-P",
                valor: " R$ 3.944,79 ",
                valorIndividual: " R$ 5.043,71 "
            },
            {
                descricao: "Inversor Sunways Monof. 220v Sts-8ktl",
                valor: " R$ 5.421,20 ",
                valorIndividual: " R$ 6.931,42 "
            },
            {
                descricao: "Inversor Sunways Monof. 220v Sts-10ktl",
                valor: " R$ 5.767,24 ",
                valorIndividual: " R$ 7.373,85 "
            },
            {
                descricao: "Inversor Sunways Trif. 380v Stt-15ktl-P",
                valor: " R$ 9.112,23 ",
                valorIndividual: " R$ 11.650,68 "
            },
            {
                descricao: "Inversor Sunways Trif. 380v Stt-20ktl-P",
                valor: " R$ 10.611,72 ",
                valorIndividual: " R$ 13.567,88 "
            },
            {
                descricao: "Inversor Sunways Trif. 380v Stt-25ktl-P",
                valor: " R$ 10.957,75 ",
                valorIndividual: " R$ 14.010,31 "
            },
            {
                descricao: "Inversor Sunways Trif. 380v Stt-33ktl",
                valor: " R$ 16.148,26 ",
                valorIndividual: " R$ 20.646,77 "
            },
            {
                descricao: "Inversor Sunways Trif. 380v Stt-50ktl-M",
                valor: " R$ 18.455,16 ",
                valorIndividual: " R$ 23.596,31 "
            },
            {
                descricao: "Inversor Sunways Trif. 380v Stt-100ktl",
                valor: " R$ 31.719,80 ",
                valorIndividual: " R$ 40.556,16 "
            },
            {
                descricao: "Inversor Sunways Trif. 380v Stt-125ktl-Hv",
                valor: " R$ 34.026,70 ",
                valorIndividual: " R$ 43.505,70 "
            },
            {
                descricao: "Inversor Refusol Trif 380v 20kw / Trif.220v 11kw",
                valor: " R$ 10.106,40 ",
                valorIndividual: " R$ 12.921,79 "
            },
            {
                descricao: "Inversor Refusol Trif 380v 25kw / Trif. 220v 13kv",
                valor: " R$ 10.435,95 ",
                valorIndividual: " R$ 13.343,15 "
            },
            {
                descricao: "Inversor Refusol Trif 380v 33kw / Trif. 220v 17,1kw",
                valor: " R$ 15.379,30 ",
                valorIndividual: " R$ 19.663,59 "
            },
            {
                descricao: "Inversor Refusol Trif 380v 50kw / Trif. 220v 26kw",
                valor: " R$ 17.576,34 ",
                valorIndividual: " R$ 22.472,68 "
            }
        ]
    },
    {
        descricao: "Estruturas",
        itens: [
            {
                descricao: "Estrutura Romagnole  4 Placas Pratic Lite Telha Ondulada",
                valor: " R$ 191,33 "
            },
            {
                descricao: "Estrutura Romagnole  4 Placas Pratic Lite Telha Colonial",
                valor: " R$ 284,93 "
            },
            {
                descricao: "Estrutura Romagnole  4 Placas Pratic Lite Perfil 2,4 (2pares)",
                valor: " R$ 228,49 "
            },
            {
                descricao: "Estrutura Romagnole  4 Placas Pratic Lite Telha Metalica (perfil 55cm)",
                valor: " R$ 192,71 "
            },
            {
                descricao: "Estrutura Romagnole  4 Placas Pratic Lite Lage",
                valor: " R$ 663,46 "
            }
        ]
    },
    {
        descricao: "Elétricos",
        itens: [
            {
                descricao: "Cabo Solar",
                itens: [
                    {
                        descricao: "Cabo Solar Cobrecon 4mm",
                        valor: " R$ 5,83 "
                    },
                    {
                        descricao: "Cabo Solar Cobrecom 6mm",
                        valor: " R$ 6,32 "
                    }
                ]
            },
            {
                descricao: "Conector Mc4",
                itens: [
                    {
                        descricao: "Conector Mc-4 (par)",
                        valor: "R$ 7,29 "
                    }
                ]
            },
            {
                descricao: "Fusível (usar Para Fronius Eco E Symo Br15)",
                itens: [
                    {
                        descricao: "Pv Fuse 15a 1000vdc",
                        valor: "R$ 14,12 "
                    },
                    {
                        descricao: "Pv Fuse 20a 1000vdc",
                        valor: "R$ 17,00 "
                    },
                    {
                        descricao: "Pv Fuse 30a 1000vdc",
                        valor: "R$ 28,91 "
                    }
                ]
            },
            {
                descricao: "String Box",
                itens: [
                    {
                        descricao: "String Box Clamper 1e/1s",
                        valor: "R$ 453,40 "
                    },
                    {
                        descricao: "String Box Clamper 2e/1s",
                        valor: "R$ 518,17 "
                    },
                    {
                        descricao: "String Box Clamper 2e/2s",
                        valor: "R$ 698,23 "
                    },
                    {
                        descricao: "String Box Clamper 3e/1s",
                        valor: "R$ 712,48 "
                    },
                    {
                        descricao: "String Box Clamper 3e/3s",
                        valor: "R$ 1.198,27 "
                    },
                    {
                        descricao: "String Box Clamper 4e/2s",
                        valor: "R$ 770,78 "
                    },
                    {
                        descricao: "String Box Proauto 4e/4s",
                        valor: "R$ 1.573,94 "
                    },
                    {
                        descricao: "String Box Clamper 6e/2s",
                        valor: "R$ 1.781,21 "
                    },
                    {
                        descricao: "String Box Proauto 6/6s",
                        valor: "R$ 1.434,53 "
                    },
                    {
                        descricao: "String Box Proauto 8e/2s 2x50a 1005vdc (para Tauro)",
                        valor: "R$ 1.973,97 "
                    },
                    {
                        descricao: "String Box Proauto 10e/10s",
                        valor: "R$ 2.160,74 "
                    },
                    {
                        descricao: "String Box Proauto 14e/1-2s 400a 1010vdc (para Tauro)",
                        valor: "R$ 6.136,07 "
                    },
                    {
                        descricao: "String Box Proauto 20e/20s 10mppt 20a 1040vdc P/ Sunways 100 E 125",
                        valor: "R$ 4.032,75 "
                    },
                    {
                        descricao: "String Box Proauto 8-4e/8-4s 4mppt 20a P/ Sunways 33 E 50",
                        valor: "R$ 2.096,35 "
                    }
                ]
            },
            {
                descricao: "Transformador",
                itens: [
                    {
                        descricao: "Auto Transformador Polux 10 Kva Ip23",
                        valor: " R$ 3.147,15 "
                    },
                    {
                        descricao: "Auto Transformador Polux 15 Kva Ip23",
                        valor: " R$ 3.498,44 "
                    },
                    {
                        descricao: "Auto Transformador Polux 20 Kva Ip23",
                        valor: " R$ 4.556,95 "
                    },
                    {
                        descricao: "Auto Transformador Polux 25 Kva Ip23",
                        valor: " R$ 5.251,80 "
                    },
                    {
                        descricao: "Auto Transformador Polux 30 Kva Ip23",
                        valor: " R$ 5.513,61 "
                    },
                    {
                        descricao: "Auto Transformador Polux 35 Kva Ip23",
                        valor: " R$ 5.637,29 "
                    },
                    {
                        descricao: "Auto Transformador Polux 40 Kva Ip23",
                        valor: " R$ 6.378,77 "
                    },
                    {
                        descricao: "Auto Transformador Polux 45 Kva Ip23",
                        valor: " R$ 6.414,26 "
                    },
                    {
                        descricao: "Auto Transformador Polux 50 Kva Ip23",
                        valor: " R$ 6.622,26 "
                    },
                    {
                        descricao: "Auto Transformador Polux 55 Kva Ip23",
                        valor: " R$ 8.092,36 "
                    },
                    {
                        descricao: "Auto Transformador Polux 60 Kva Ip23",
                        valor: " R$ 8.354,19 "
                    },
                    {
                        descricao: "Auto Transformador Polux 65 Kva Ip23",
                        valor: " R$ 8.908,53 "
                    },
                    {
                        descricao: "Auto Transformador Polux 70 Kva Ip23",
                        valor: " R$ 8.879,90 "
                    },
                    {
                        descricao: "Auto Transformador Polux 75 Kva Ip23",
                        valor: " R$ 9.574,76 "
                    },
                    {
                        descricao: "Auto Transformador Polux 80 Kva Ip23",
                        valor: " R$ 9.606,68 "
                    },
                    {
                        descricao: "Auto Transformador Polux 85 Kva Ip23",
                        valor: " R$ 10.166,12 "
                    },
                    {
                        descricao: "Auto Transformador Polux 90 Kva Ip23",
                        valor: " R$ 10.617,79 "
                    },
                    {
                        descricao: "Auto Transformador Polux 95 Kva Ip23",
                        valor: " R$ 11.137,61 "
                    },
                    {
                        descricao: "Auto Transformador Polux 100 Kva Ip23",
                        valor: " R$ 12.387,38 "
                    },
                    {
                        descricao: "Auto Transformador Polux 110 Kva Ip23",
                        valor: " R$ 12.733,53 "
                    },
                    {
                        descricao: "Auto Transformador Polux 112,5kva Ip23",
                        valor: " R$ 12.891,85 "
                    },
                    {
                        descricao: "Auto Transformador Polux 120 Kva Ip23",
                        valor: " R$ 13.206,82 "
                    },
                    {
                        descricao: "Auto Transformador Polux 130 Kva Ip23",
                        valor: " R$ 14.494,51 "
                    },
                    {
                        descricao: "Auto Transformador Polux 140 Kva Ip23",
                        valor: " R$ 15.707,69 "
                    },
                    {
                        descricao: "Auto Transformador Polux 150 Kva Ip23",
                        valor: " R$ 16.359,86 "
                    },
                    {
                        descricao: "Auto Transformador Polux 200 Kva Ip23",
                        valor: " R$ 19.803,37 "
                    },
                    {
                        descricao: "Auto Transformador Polux 300 Kva Ip23",
                        valor: " R$ 28.317,84 "
                    },
                    {
                        descricao: "Auto Transformador Polux 10 Kva Ip55",
                        valor: " R$ 4.006,87 "
                    },
                    {
                        descricao: "Auto Transformador Polux 15 Kva Ip55",
                        valor: " R$ 4.595,13 "
                    },
                    {
                        descricao: "Auto Transformador Polux 20 Kva Ip55",
                        valor: " R$ 5.490,84 "
                    },
                    {
                        descricao: "Auto Transformador Polux 25 Kva Ip55",
                        valor: " R$ 5.822,13 "
                    },
                    {
                        descricao: "Auto Transformador Polux 30 Kva Ip55",
                        valor: " R$ 6.257,27 "
                    },
                    {
                        descricao: "Auto Transformador Polux 35 Kva Ip55",
                        valor: " R$ 8.632,66 "
                    },
                    {
                        descricao: "Auto Transformador Polux 40 Kva Ip55",
                        valor: " R$ 10.343,41 "
                    },
                    {
                        descricao: "Auto Transformador Polux 45 Kva Ip55",
                        valor: " R$ 10.817,57 "
                    },
                    {
                        descricao: "Auto Transformador Polux 50 Kva Ip55",
                        valor: " R$ 11.197,64 "
                    },
                    {
                        descricao: "Auto Transformador Polux 55 Kva Ip55",
                        valor: " R$ 11.523,68 "
                    },
                    {
                        descricao: "Auto Transformador Polux 60 Kva Ip55",
                        valor: " R$ 11.486,20 "
                    },
                    {
                        descricao: "Auto Transformador Polux 65 Kva Ip55",
                        valor: " R$ 12.234,45 "
                    },
                    {
                        descricao: "Auto Transformador Polux 70 Kva Ip55",
                        valor: " R$ 13.020,69 "
                    },
                    {
                        descricao: "Auto Transformador Polux 75 Kva Ip55",
                        valor: " R$ 12.949,65 "
                    },
                    {
                        descricao: "Auto Transformador Polux 80 Kva Ip55",
                        valor: " R$ 13.725,21 "
                    },
                    {
                        descricao: "Auto Transformador Polux 85 Kva Ip55",
                        valor: " R$ 14.149,23 "
                    },
                    {
                        descricao: "Auto Transformador Polux 90 Kva Ip55",
                        valor: " R$ 14.372,65 "
                    },
                    {
                        descricao: "Auto Transformador Polux 95 Kva Ip55",
                        valor: " R$ 17.191,08 "
                    },
                    {
                        descricao: "Auto Transformador Polux 100 Kva Ip55",
                        valor: " R$ 20.686,70 "
                    },
                    {
                        descricao: "Auto Transformador Polux 110 Kva Ip55",
                        valor: " R$ 20.977,51 "
                    },
                    {
                        descricao: "Auto Transformador Polux 112,5kva Ip55",
                        valor: " R$ 21.135,57 "
                    },
                    {
                        descricao: "Auto Transformador Polux 120 Kva Ip55",
                        valor: " R$ 21.403,46 "
                    },
                    {
                        descricao: "Auto Transformador Polux 130 Kva Ip55",
                        valor: " R$ 21.688,58 "
                    },
                    {
                        descricao: "Auto Transformador Polux 140 Kva Ip55",
                        valor: " R$ 21.989,52 "
                    },
                    {
                        descricao: "Auto Transformador Polux 150 Kva Ip55",
                        valor: " R$ 22.290,39 "
                    },
                    {
                        descricao: "Auto Transformador Polux 200 Kva Ip55",
                        valor: " R$ 27.254,43 "
                    },
                    {
                        descricao: "Auto Transformador Polux 300 Kva Ip55",
                        valor: " R$ 45.418,88 "
                    }
                ]
            }
        ]
    }
]