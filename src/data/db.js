const products = [
    {
        id: 1,
        descricao: "Painel Solar JA Solar 550W Bifacial",
        valor: 472.32,
        valorIndividual: null,
        tipo: 1
    },
    {
        id: 2,
        descricao: "Inversor Fronius Primo 3Kw Monof. 220V",
        valor: 1490.40,
        valorIndividual: 1905.59,
        tipo: 2
    },
    {
        id: 3,
        descricao: "Inversor Fronius Primo 4Kw Monof. 220V",
        valor: 2172.47,
        valorIndividual: 2777.66,
        tipo: 2
    },
    {
        id: 4,
        descricao: "Inversor Fronius Primo 5Kw Monof. 220V",
        valor: 2399.95,
        valorIndividual: 3068.51,
        tipo: 2
    },
    {
        id: 5,
        descricao: "Inversor Fronius Primo 6Kw Monof. 220V",
        valor: 2680.66,
        valorIndividual: 3427.43,
        tipo: 2
    },
    {
        id: 6,
        descricao: "Inversor Fronius Primo 8,2Kw Monof. 220V",
        valor: 3525.18,
        valorIndividual: 4507.21,
        tipo: 2
    },
    {
        id: 7,
        descricao: "Inversor Fronius Symo BR 10Kw Trif. 220V",
        valor: 13828.69,
        valorIndividual: 17681.02,
        tipo: 2
    },
    {
        id: 8,
        descricao: "Inversor Fronius Symo BR 12Kw Trif. 220V",
        valor: 15444.26,
        valorIndividual: 19746.66,
        tipo: 2
    },
    {
        id: 9,
        descricao: "Inversor Fronius Symo BR 15Kw Trif. 220V",
        valor: 14466.15,
        valorIndividual: 18496.07,
        tipo: 2
    },
    {
        id: 10,
        descricao: "Inversor Fronius Symo 12,5Kw Trif. 380V",
        valor: 7927.72,
        valorIndividual: 10136.19,
        tipo: 2
    },
    {
        id: 11,
        descricao: "Inversor Fronius Symo 15Kw Trif. 380V",
        valor: 8817.65,
        valorIndividual: 11274.04,
        tipo: 2
    },
    {
        id: 12,
        descricao: "Inversor Fronius Symo 17,5Kw Trif. 380V",
        valor: 9302.01,
        valorIndividual: 11893.33,
        tipo: 2
    },
    {
        id: 13,
        descricao: "Inversor Fronius Symo 20Kw Trif. 380V",
        valor: 9870.32,
        valorIndividual: 12619.95,
        tipo: 2
    },
    {
        id: 14,
        descricao: "Inversor Fronius Eco 25Kw Trif. 380V",
        valor: 10962.76,
        valorIndividual: 14016.72,
        tipo: 2
    },
    {
        id: 15,
        descricao: "Inversor Fronius Eco Light 25Kw Trif. 380V",
        valor: 10678.59,
        valorIndividual: 13653.38,
        tipo: 2
    },
    {
        id: 16,
        descricao: "Inversor Fronius Eco 27Kw Trif. 380V",
        valor: 12025.74,
        valorIndividual: 15375.81,
        tipo: 2
    },
    {
        id: 17,
        descricao: "Inversor Fronius Eco Light 27Kw Trif. 380V",
        valor: 11690.70,
        valorIndividual: 14947.44,
        tipo: 2
    },
    {
        id: 18,
        descricao: "Inversor Fronius Kit Eco 75Kw (Eco 25 + 2 Eco 25 Light)",
        valor: 32319.93,
        valorIndividual: 41323.48,
        tipo: 2
    },
    {
        id: 19,
        descricao: "Inversor Fronius Tauro ECO 50-3-D Trif 380V",
        valor: 30929.10,
        valorIndividual: 39545.19,
        tipo: 2
    },
    {
        id: 20,
        descricao: "Inversor Fronius Tauro ECO 50-3-P Trif 380V",
        valor: 28792.75,
        valorIndividual: 36813.70,
        tipo: 2
    },
    {
        id: 21,
        descricao: "Inversor Fronius Tauro ECO 100-3-D Trif 380V",
        valor: 42476.75,
        valorIndividual: 54309.73,
        tipo: 2
    },
    {
        id: 22,
        descricao: "Inversor Fronius Tauro ECO 100-3-P Trif 380V",
        valor: 38502.26,
        valorIndividual: 49228.05,
        tipo: 2
    },
    {
        id: 23,
        descricao: "Inversor Fronius Primo GEN24 3.0 Plus Monf. 220V",
        valor: 10334.17,
        valorIndividual: 13213.02,
        tipo: 2
    },
    {
        id: 24,
        descricao: "Inversor Fronius Primo GEN24 4.0 Plus Monf. 220V",
        valor: 11111.24,
        valorIndividual: 14206.57,
        tipo: 2
    },
    {
        id: 25,
        descricao: "Inversor Fronius Primo GEN24 5.0 Plus Monf. 220V",
        valor: 12549.98,
        valorIndividual: 16046.10,
        tipo: 2
    },
    {
        id: 26,
        descricao: "Inversor Fronius Primo GEN24 6.0 Plus Monf. 220V",
        valor: 13931.44,
        valorIndividual: 17812.40,
        tipo: 2
    },
    {
        id: 27,
        descricao: "Carregador Veicular Fronius Wattpilot Home 11 J 2,0",
        valor: 5780.92,
        valorIndividual: 7391.34,
        tipo: 4
    },
    {
        id: 28,
        descricao: "Cabo de carregado veicular Fronius Tipo 2 2,5m",
        valor: 2035.76,
        valorIndividual: 2602.88,
        tipo: 4
    },
    {
        id: 29,
        descricao: "Cabo de carregado veicular Fronius Tipo 2 5m",
        valor: 1813.60,
        valorIndividual: 2318.82,
        tipo: 4
    },
    {
        id: 30,
        descricao: "Cabo de carregado veicular Fronius  Tipo 2 7,5m",
        valor: 2651.26,
        valorIndividual: 3389.83,
        tipo: 4
    },
    {
        id: 31,
        descricao: "Suporte cabo de carregado veicular Fronius (Type 2 wall bracket)",
        valor: 465.02,
        valorIndividual: 594.56,
        tipo: 4
    },
    {
        id: 32,
        descricao: "Tagns RFID",
        valor: 203.29,
        valorIndividual: 259.92,
        tipo: 4
    },
    {
        id: 33,
        descricao: "Mount Place Go 2,0",
        valor: 213.27,
        valorIndividual: 272.68,
        tipo: 4
    },
    {
        id: 34,
        descricao: "Smart Meter Fronius 65A",
        valor: 1526.37,
        valorIndividual: 1951.59,
        tipo: 4
    },
    {
        id: 35,
        descricao: "Smart Meter Fronius 5kA",
        valor: 1526.37,
        valorIndividual: 1951.59,
        tipo: 4
    },
    {
        id: 36,
        descricao: "Inversor Sunways Monof. 220V STS-3KTL-3",
        valor: 2514.52,
        valorIndividual: 3215.00,
        tipo: 2
    },
    {
        id: 37,
        descricao: "Inversor Sunways Monof. 220V STS-5KTL-P",
        valor: 3944.79,
        valorIndividual: 5043.71,
        tipo: 2
    },
    {
        id: 38,
        descricao: "Inversor Sunways Monof. 220V STS-8KTL",
        valor: 5421.20,
        valorIndividual: 6931.42,
        tipo: 2
    },
    {
        id: 39,
        descricao: "Inversor Sunways Monof. 220V STS-10KTL",
        valor: 5767.24,
        valorIndividual: 7373.85,
        tipo: 2
    },
    {
        id: 40,
        descricao: "Inversor Sunways Trif. 380V STT-15KTL-P",
        valor: 9112.23,
        valorIndividual: 11650.68,
        tipo: 2
    },
    {
        id: 41,
        descricao: "Inversor Sunways Trif. 380V STT-20KTL-P",
        valor: 10611.72,
        valorIndividual: 13567.88,
        tipo: 2
    },
    {
        id: 42,
        descricao: "Inversor Sunways Trif. 380V STT-25KTL-P",
        valor: 10957.75,
        valorIndividual: 14010.31,
        tipo: 2
    },
    {
        id: 43,
        descricao: "Inversor Sunways Trif. 380V STT-33KTL",
        valor: 16148.26,
        valorIndividual: 20646.77,
        tipo: 2
    },
    {
        id: 44,
        descricao: "Inversor Sunways Trif. 380V STT-50KTL-M",
        valor: 18455.16,
        valorIndividual: 23596.31,
        tipo: 2
    },
    {
        id: 45,
        descricao: "Inversor Sunways Trif. 380V STT-100KTL",
        valor: 31719.80,
        valorIndividual: 40556.16,
        tipo: 2
    },
    {
        id: 46,
        descricao: "Inversor Sunways Trif. 380V STT-125KTL-HV",
        valor: 34026.70,
        valorIndividual: 43505.70,
        tipo: 2
    },
    {
        id: 47,
        descricao: "Inversor Refusol Trif 380V 20Kw / Trif.220V 11kw",
        valor: 10106.40,
        valorIndividual: 12921.79,
        tipo: 2
    },
    {
        id: 48,
        descricao: "Inversor Refusol Trif 380V 25Kw / Trif. 220V 13kv",
        valor: 10435.95,
        valorIndividual: 13343.15,
        tipo: 2
    },
    {
        id: 49,
        descricao: "Inversor Refusol Trif 380V 33Kw / Trif. 220V 17,1Kw",
        valor: 15379.30,
        valorIndividual: 19663.59,
        tipo: 2
    },
    {
        id: 50,
        descricao: "Inversor Refusol Trif 380V 50Kw / Trif. 220V 26KW",
        valor: 17576.34,
        valorIndividual: 22472.68,
        tipo: 2
    },
    {
        id: 51,
        descricao: "Estrutura Romagnole  4 placas Pratic Lite Telha Ondulada",
        valor: 191.33,
        valorIndividual: null,
        tipo: 3
    },
    {
        id: 52,
        descricao: "Estrutura Romagnole  4 placas Pratic Lite Telha Colonial",
        valor: 284.93,
        valorIndividual: null,
        tipo: 3
    },
    {
        id: 53,
        descricao: "Estrutura Romagnole  4 placas Pratic Lite Perfil 2,4 (2pares)",
        valor: 228.49,
        valorIndividual: null,
        tipo: 3
    },
    {
        id: 54,
        descricao: "Estrutura Romagnole  4 placas Pratic Lite Telha Metalica (perfil 55cm)",
        valor: 192.71,
        valorIndividual: null,
        tipo: 3
    },
    {
        id: 55,
        descricao: "Estrutura Romagnole  4 placas Pratic Lite Lage",
        valor: 663.46,
        valorIndividual: null,
        tipo: 3
    },
    {
        id: 56,
        descricao: "Cabo solar Cobrecon 4MM",
        valor: 5.83,
        valorIndividual: null,
        tipo: 4
    },
    {
        id: 57,
        descricao: "Cabo solar Cobrecom 6MM",
        valor: 6.32,
        valorIndividual: null,
        tipo: 4
    },
    {
        id: 58,
        descricao: "Conector MC-4 (Par)",
        valor: 7.29,
        valorIndividual: null,
        tipo: 4
    },
    {
        id: 59,
        descricao: "PV Fuse 15A 1000VDC",
        valor: 14.12,
        valorIndividual: null,
        tipo: 4
    },
    {
        id: 60,
        descricao: "PV Fuse 20A 1000VDC",
        valor: 17.00,
        valorIndividual: null,
        tipo: 4
    },
    {
        id: 61,
        descricao: "PV Fuse 30A 1000VDC",
        valor: 28.91,
        valorIndividual: null,
        tipo: 4
    },
    {
        id: 62,
        descricao: "String Box Clamper 1E/1S",
        valor: 453.40,
        valorIndividual: null,
        tipo: 4
    },
    {
        id: 63,
        descricao: "String Box Clamper 2E/1S",
        valor: 518.17,
        valorIndividual: null,
        tipo: 4
    },
    {
        id: 64,
        descricao: "String Box Clamper 2E/2S",
        valor: 698.23,
        valorIndividual: null,
        tipo: 4
    },
    {
        id: 65,
        descricao: "String Box Clamper 3E/1S",
        valor: 712.48,
        valorIndividual: null,
        tipo: 4
    },
    {
        id: 66,
        descricao: "String Box Clamper 3E/3S",
        valor: 1198.27,
        valorIndividual: null,
        tipo: 4
    },
    {
        id: 67,
        descricao: "String Box Clamper 4E/2S",
        valor: 770.78,
        valorIndividual: null,
        tipo: 4
    },
    {
        id: 68,
        descricao: "String Box Proauto 4E/4S",
        valor: 1573.94,
        valorIndividual: null,
        tipo: 4
    },
    {
        id: 69,
        descricao: "String Box Clamper 6E/2S",
        valor: 1781.21,
        valorIndividual: null,
        tipo: 4
    },
    {
        id: 70,
        descricao: "String Box Proauto 6/6S",
        valor: 1434.53,
        valorIndividual: null,
        tipo: 4
    },
    {
        id: 71,
        descricao: "String Box Proauto 8E/2S 2X50A 1005Vdc (para Tauro)",
        valor: 1973.97,
        valorIndividual: null,
        tipo: 4
    },
    {
        id: 72,
        descricao: "String Box Proauto 10E/10S",
        valor: 2160.74,
        valorIndividual: null,
        tipo: 4
    },
    {
        id: 73,
        descricao: "String Box Proauto 14E/1-2S 400A 1010Vdc (para Tauro)",
        valor: 6136.07,
        valorIndividual: null,
        tipo: 4
    },
    {
        id: 74,
        descricao: "String Box Proauto 20E/20S 10mppt 20A 1040VDC p/ Sunways 100 e 125",
        valor: 4032.75,
        valorIndividual: null,
        tipo: 4
    },
    {
        id: 75,
        descricao: "String Box Proauto 8-4E/8-4S 4mppt 20A p/ sunways 33 e 50",
        valor: 2096.35,
        valorIndividual: null,
        tipo: 4
    },
    {
        id: 76,
        descricao: "Auto Transformador POLUX 10 kVA IP23",
        valor: 3147.15,
        valorIndividual: null,
        tipo: 4
    },
    {
        id: 77,
        descricao: "Auto Transformador POLUX 15 kVA IP23",
        valor: 3498.44,
        valorIndividual: null,
        tipo: 4
    },
    {
        id: 78,
        descricao: "Auto Transformador POLUX 20 kVA IP23",
        valor: 4556.95,
        valorIndividual: null,
        tipo: 4
    },
    {
        id: 79,
        descricao: "Auto Transformador POLUX 25 kVA IP23",
        valor: 5251.80,
        valorIndividual: null,
        tipo: 4
    },
    {
        id: 80,
        descricao: "Auto Transformador POLUX 30 kVA IP23",
        valor: 5513.61,
        valorIndividual: null,
        tipo: 4
    },
    {
        id: 81,
        descricao: "Auto Transformador POLUX 35 kVA IP23",
        valor: 5637.29,
        valorIndividual: null,
        tipo: 4
    },
    {
        id: 82,
        descricao: "Auto Transformador POLUX 40 kVA IP23",
        valor: 6378.77,
        valorIndividual: null,
        tipo: 4
    },
    {
        id: 83,
        descricao: "Auto Transformador POLUX 45 kVA IP23",
        valor: 6414.26,
        valorIndividual: null,
        tipo: 4
    },
    {
        id: 84,
        descricao: "Auto Transformador POLUX 50 kVA IP23",
        valor: 6622.26,
        valorIndividual: null,
        tipo: 4
    },
    {
        id: 85,
        descricao: "Auto Transformador POLUX 55 kVA IP23",
        valor: 8092.36,
        valorIndividual: null,
        tipo: 4
    },
    {
        id: 86,
        descricao: "Auto Transformador POLUX 60 kVA IP23",
        valor: 8354.19,
        valorIndividual: null,
        tipo: 4
    },
    {
        id: 87,
        descricao: "Auto Transformador POLUX 65 kVA IP23",
        valor: 8908.53,
        valorIndividual: null,
        tipo: 4
    },
    {
        id: 88,
        descricao: "Auto Transformador POLUX 70 kVA IP23",
        valor: 8879.90,
        valorIndividual: null,
        tipo: 4
    },
    {
        id: 89,
        descricao: "Auto Transformador POLUX 75 kVA IP23",
        valor: 9574.76,
        valorIndividual: null,
        tipo: 4
    },
    {
        id: 90,
        descricao: "Auto Transformador POLUX 80 kVA IP23",
        valor: 9606.68,
        valorIndividual: null,
        tipo: 4
    },
    {
        id: 91,
        descricao: "Auto Transformador POLUX 85 kVA IP23",
        valor: 10166.12,
        valorIndividual: null,
        tipo: 4
    },
    {
        id: 92,
        descricao: "Auto Transformador POLUX 90 kVA IP23",
        valor: 10617.79,
        valorIndividual: null,
        tipo: 4
    },
    {
        id: 93,
        descricao: "Auto Transformador POLUX 95 kVA IP23",
        valor: 11137.61,
        valorIndividual: null,
        tipo: 4
    },
    {
        id: 94,
        descricao: "Auto Transformador POLUX 100 kVA IP23",
        valor: 12387.38,
        valorIndividual: null,
        tipo: 4
    },
    {
        id: 95,
        descricao: "Auto Transformador POLUX 110 kVA IP23",
        valor: 12733.53,
        valorIndividual: null,
        tipo: 4
    },
    {
        id: 96,
        descricao: "Auto Transformador POLUX 112,5kVA IP23",
        valor: 12891.85,
        valorIndividual: null,
        tipo: 4
    },
    {
        id: 97,
        descricao: "Auto Transformador POLUX 120 kVA IP23",
        valor: 13206.82,
        valorIndividual: null,
        tipo: 4
    },
    {
        id: 98,
        descricao: "Auto Transformador POLUX 130 kVA IP23",
        valor: 14494.51,
        valorIndividual: null,
        tipo: 4
    },
    {
        id: 99,
        descricao: "Auto Transformador POLUX 140 kVA IP23",
        valor: 15707.69,
        valorIndividual: null,
        tipo: 4
    },
    {
        id: 100,
        descricao: "Auto Transformador POLUX 150 kVA IP23",
        valor: 16359.86,
        valorIndividual: null,
        tipo: 4
    },
    {
        id: 101,
        descricao: "Auto Transformador POLUX 200 kVA IP23",
        valor: 19803.37,
        valorIndividual: null,
        tipo: 4
    },
    {
        id: 102,
        descricao: "Auto Transformador POLUX 300 kVA IP23",
        valor: 28317.84,
        valorIndividual: null,
        tipo: 4
    },
    {
        id: 103,
        descricao: "Auto Transformador POLUX 10 kVA IP55",
        valor: 4006.87,
        valorIndividual: null,
        tipo: 4
    },
    {
        id: 104,
        descricao: "Auto Transformador POLUX 15 kVA IP55",
        valor: 4595.13,
        valorIndividual: null,
        tipo: 4
    },
    {
        id: 105,
        descricao: "Auto Transformador POLUX 20 kVA IP55",
        valor: 5490.84,
        valorIndividual: null,
        tipo: 4
    },
    {
        id: 106,
        descricao: "Auto Transformador POLUX 25 kVA IP55",
        valor: 5822.13,
        valorIndividual: null,
        tipo: 4
    },
    {
        id: 107,
        descricao: "Auto Transformador POLUX 30 kVA IP55",
        valor: 6257.27,
        valorIndividual: null,
        tipo: 4
    },
    {
        id: 108,
        descricao: "Auto Transformador POLUX 35 kVA IP55",
        valor: 8632.66,
        valorIndividual: null,
        tipo: 4
    },
    {
        id: 109,
        descricao: "Auto Transformador POLUX 40 kVA IP55",
        valor: 10343.41,
        valorIndividual: null,
        tipo: 4
    },
    {
        id: 110,
        descricao: "Auto Transformador POLUX 45 kVA IP55",
        valor: 10817.57,
        valorIndividual: null,
        tipo: 4
    },
    {
        id: 111,
        descricao: "Auto Transformador POLUX 50 kVA IP55",
        valor: 11197.64,
        valorIndividual: null,
        tipo: 4
    },
    {
        id: 112,
        descricao: "Auto Transformador POLUX 55 kVA IP55",
        valor: 11523.68,
        valorIndividual: null,
        tipo: 4
    },
    {
        id: 113,
        descricao: "Auto Transformador POLUX 60 kVA IP55",
        valor: 11486.20,
        valorIndividual: null,
        tipo: 4
    },
    {
        id: 114,
        descricao: "Auto Transformador POLUX 65 kVA IP55",
        valor: 12234.45,
        valorIndividual: null,
        tipo: 4
    },
    {
        id: 115,
        descricao: "Auto Transformador POLUX 70 kVA IP55",
        valor: 13020.69,
        valorIndividual: null,
        tipo: 4
    },
    {
        id: 116,
        descricao: "Auto Transformador POLUX 75 kVA IP55",
        valor: 12949.65,
        valorIndividual: null,
        tipo: 4
    },
    {
        id: 117,
        descricao: "Auto Transformador POLUX 80 kVA IP55",
        valor: 13725.21,
        valorIndividual: null,
        tipo: 4
    },
    {
        id: 118,
        descricao: "Auto Transformador POLUX 85 kVA IP55",
        valor: 14149.23,
        valorIndividual: null,
        tipo: 4
    },
    {
        id: 119,
        descricao: "Auto Transformador POLUX 90 kVA IP55",
        valor: 14372.65,
        valorIndividual: null,
        tipo: 4
    },
    {
        id: 120,
        descricao: "Auto Transformador POLUX 95 kVA IP55",
        valor: 17191.08,
        valorIndividual: null,
        tipo: 4
    },
    {
        id: 121,
        descricao: "Auto Transformador POLUX 100 kVA IP55",
        valor: 20686.70,
        valorIndividual: null,
        tipo: 4
    },
    {
        id: 122,
        descricao: "Auto Transformador POLUX 110 kVA IP55",
        valor: 20977.51,
        valorIndividual: null,
        tipo: 4
    },
    {
        id: 123,
        descricao: "Auto Transformador POLUX 112,5kVA IP55",
        valor: 21135.57,
        valorIndividual: null,
        tipo: 4
    },
    {
        id: 124,
        descricao: "Auto Transformador POLUX 120 kVA IP55",
        valor: 21403.46,
        valorIndividual: null,
        tipo: 4
    },
    {
        id: 125,
        descricao: "Auto Transformador POLUX 130 kVA IP55",
        valor: 21688.58,
        valorIndividual: null,
        tipo: 4
    },
    {
        id: 126,
        descricao: "Auto Transformador POLUX 140 kVA IP55",
        valor: 21989.52,
        valorIndividual: null,
        tipo: 4
    },
    {
        id: 127,
        descricao: "Auto Transformador POLUX 150 kVA IP55",
        valor: 22290.39,
        valorIndividual: null,
        tipo: 4
    },
    {
        id: 128,
        descricao: "Auto Transformador POLUX 200 kVA IP55",
        valor: 27254.43,
        valorIndividual: null,
        tipo: 4
    },
    {
        id: 129,
        descricao: "Auto Transformador POLUX 300 kVA IP55",
        valor: 45418.88,
        valorIndividual: null,
        tipo: 4
    }
]
module.exports = products