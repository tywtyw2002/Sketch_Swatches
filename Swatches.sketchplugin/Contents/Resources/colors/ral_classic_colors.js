var init_ral_classic_colors = function(title) {
    var colors = [
        ["RAL 1000 Green beige", "BEBD7F"],
        ["RAL 1001 Beige", "C2B078"],
        ["RAL 1002 Sand yellow", "C6A664"],
        ["RAL 1003 Signal yellow", "E5BE01"],
        ["RAL 1004 Golden yellow", "CDA434"],
        ["RAL 1005 Honey yellow", "A98307"],
        ["RAL 1006 Maize yellow", "E4A010"],
        ["RAL 1007 Daffodil yellow", "DC9D00"],
        ["RAL 1011 Brown beige", "8A6642"],
        ["RAL 1012 Lemon yellow", "C7B446"],
        ["RAL 1013 Oyster white", "EAE6CA"],
        ["RAL 1014 Ivory", "E1CC4F"],
        ["RAL 1015 Light ivory", "E6D690"],
        ["RAL 1016 Sulfur yellow", "EDFF21"],
        ["RAL 1017 Saffron yellow", "F5D033"],
        ["RAL 1018 Zinc yellow", "F8F32B"],
        ["RAL 1019 Grey beige", "9E9764"],
        ["RAL 1020 Olive yellow", "999950"],
        ["RAL 1021 Rape yellow", "F3DA0B"],
        ["RAL 1023 Traffic yellow", "FAD201"],
        ["RAL 1024 Ochre yello", "AEA04B"],
        ["RAL 1026 Luminous yellow", "FFFF00"],
        ["RAL 1027 Curry", "9D9101"],
        ["RAL 1028 Melon yellow", "F4A900"],
        ["RAL 1032 Broom yellow", "D6AE01"],
        ["RAL 1033 Dahlia yellow", "F3A505"],
        ["RAL 1034 Pastel yellow", "EFA94A"],
        ["RAL 1035 Pearl beige", "6A5D4D"],
        ["RAL 1036 Pearl gold", "705335"],
        ["RAL 1037 Sun yellow", "F39F18"],
        ["RAL 2000 Yellow orange", "ED760E"],
        ["RAL 2001 Red orange", "C93C20"],
        ["RAL 2002 Vermilion", "CB2821"],
        ["RAL 2003 Pastel orange", "FF7514"],
        ["RAL 2004 Pure orange", "F44611"],
        ["RAL 2005 Luminous orange", "FF2301"],
        ["RAL 2007 Luminous bright orange", "FFA420"],
        ["RAL 2008 Bright red orange", "F75E25"],
        ["RAL 2009 Traffic orange", "F54021"],
        ["RAL 2010 Signal orange", "D84B20"],
        ["RAL 2011 Deep orange", "EC7C26"],
        ["RAL 2012 Salmon range", "E55137"],
        ["RAL 2013 Pearl orange", "C35831"],
        ["RAL 3000 Flame red", "AF2B1E"],
        ["RAL 3001 Signal red", "A52019"],
        ["RAL 3002 Carmine red", "A2231D"],
        ["RAL 3003 Ruby red", "9B111E"],
        ["RAL 3004 Purple red", "75151E"],
        ["RAL 3005 Wine red", "5E2129"],
        ["RAL 3007 Black red", "412227"],
        ["RAL 3009 Oxide red", "642424"],
        ["RAL 3011 Brown red", "781F19"],
        ["RAL 3012 Beige red", "C1876B"],
        ["RAL 3013 Tomato red", "A12312"],
        ["RAL 3014 Antique pink", "D36E70"],
        ["RAL 3015 Light pink", "EA899A"],
        ["RAL 3016 Coral red", "B32821"],
        ["RAL 3017 Rose", "E63244"],
        ["RAL 3018 Strawberry red", "D53032"],
        ["RAL 3020 Traffic red", "CC0605"],
        ["RAL 3022 Salmon pink", "D95030"],
        ["RAL 3024 Luminous red", "F80000"],
        ["RAL 3026 Luminous", "FE0000"],
        ["RAL 3027 Raspberry red", "C51D34"],
        ["RAL 3028 Pure red", "CB3234"],
        ["RAL 3031 Orient red,", "B32428"],
        ["RAL 3032 Pearl ruby red", "721422"],
        ["RAL 3033 Pearl pink", "B44C43"],
        ["RAL 4001 Red lilac", "6D3F5B"],
        ["RAL 4002 Red violet", "922B3E"],
        ["RAL 4003 Heather violet", "DE4C8A"],
        ["RAL 4004 Claret violet", "641C34"],
        ["RAL 4005 Blue lilac", "6C4675"],
        ["RAL 4006 Traffic purple", "A03472"],
        ["RAL 4007 Purple violet", "4A192C"],
        ["RAL 4008 Signal violet", "924E7D"],
        ["RAL 4009 Pastel violet", "A18594"],
        ["RAL 4010 Telemagenta", "CF3476"],
        ["RAL 4011 Pearl violet", "8673A1"],
        ["RAL 4012 Pearl black berry", "6C6874"],
        ["RAL 5000 Violet blue", "354D73"],
        ["RAL 5001 Green blue", "1F3438"],
        ["RAL 5002 Ultramarine blue", "20214F"],
        ["RAL 5003 Saphire blue", "1D1E33"],
        ["RAL 5004 Black blue", "18171C"],
        ["RAL 5005 Signal blue", "1E2460"],
        ["RAL 5007 Brillant blue", "3E5F8A"],
        ["RAL 5008 Grey blue", "26252D"],
        ["RAL 5009 Azure blue", "025669"],
        ["RAL 5010 Gentian blue", "0E294B"],
        ["RAL 5011 Steel blue", "231A24"],
        ["RAL 5012 Light blue", "3B83BD"],
        ["RAL 5013 Cobalt blue", "1E213D"],
        ["RAL 5014 Pigeon blue", "606E8C"],
        ["RAL 5015 Sky blue", "2271B3"],
        ["RAL 5017 Traffic blue", "063971"],
        ["RAL 5018 Turquoise blue", "3F888F"],
        ["RAL 5019 Capri blue", "1B5583"],
        ["RAL 5020 Ocean blue", "1D334A"],
        ["RAL 5021 Water blue", "256D7B"],
        ["RAL 5022 Night blue", "252850"],
        ["RAL 5023 Distant blue", "49678D"],
        ["RAL 5024 Pastel blue", "5D9B9B"],
        ["RAL 5025 Pearl gentian blue", "2A6478"],
        ["RAL 5026 Pearl night blue", "102C54"],
        ["RAL 6000 Patina green", "316650"],
        ["RAL 6001 Emerald green", "287233"],
        ["RAL 6002 Leaf green", "2D572C"],
        ["RAL 6003 Olive green", "424632"],
        ["RAL 6004 Blue green", "1F3A3D"],
        ["RAL 6005 Moss green", "2F4538"],
        ["RAL 6006 Grey olive", "3E3B32"],
        ["RAL 6007 Bottle green", "343B29"],
        ["RAL 6008 Brown green", "39352A"],
        ["RAL 6009 Fir green", "31372B"],
        ["RAL 6010 Grass green", "35682D"],
        ["RAL 6011 Reseda green", "587246"],
        ["RAL 6012 Black green", "343E40"],
        ["RAL 6013 Reed green", "6C7156"],
        ["RAL 6014 Yellow olive", "47402E"],
        ["RAL 6015 Black olive", "3B3C36"],
        ["RAL 6016 Turquoise green", "1E5945"],
        ["RAL 6017 May green", "4C9141"],
        ["RAL 6018 Yellow green", "57A639"],
        ["RAL 6019 Pastel green", "BDECB6"],
        ["RAL 6020 Chrome green", "2E3A23"],
        ["RAL 6021 Pale green", "89AC76"],
        ["RAL 6022 Olive drab", "25221B"],
        ["RAL 6024 Traffic green", "308446"],
        ["RAL 6025 Fern green", "3D642D"],
        ["RAL 6026 Opal green", "015D52"],
        ["RAL 6027 Light green", "84C3BE"],
        ["RAL 6028 Pine green", "2C5545"],
        ["RAL 6029 Mint green", "20603D"],
        ["RAL 6032 Signal green", "317F43"],
        ["RAL 6033 Mint turquoise", "497E76"],
        ["RAL 6034 Pastel turquoise", "7FB5B5"],
        ["RAL 6035 Pearl green", "1C542D"],
        ["RAL 6036 Pearl opal green", "193737"],
        ["RAL 6037 Pure green", "008F39"],
        ["RAL 6038 Luminous green", "00BB2D"],
        ["RAL 7000 Squirrel grey", "78858B"],
        ["RAL 7001 Silver grey", "8A9597"],
        ["RAL 7002 Olive grey", "7E7B52"],
        ["RAL 7003 Moss grey", "6C7059"],
        ["RAL 7004 Signal grey", "969992"],
        ["RAL 7005 Mouse grey", "646B63"],
        ["RAL 7006 Beige grey", "6D6552"],
        ["RAL 7008 Khaki grey", "6A5F31"],
        ["RAL 7009 Green grey", "4D5645"],
        ["RAL 7010 Tarpaulin grey", "4C514A"],
        ["RAL 7011 Iron grey", "434B4D"],
        ["RAL 7012 Basalt grey", "4E5754"],
        ["RAL 7013 Brown grey", "464531"],
        ["RAL 7015 Slate grey", "434750"],
        ["RAL 7016 Anthracite grey", "293133"],
        ["RAL 7021 Black grey", "23282B"],
        ["RAL 7022 Umbra grey", "332F2C"],
        ["RAL 7023 Concrete grey", "686C5E"],
        ["RAL 7024 Graphite grey", "474A51"],
        ["RAL 7026 Granite grey", "2F353B"],
        ["RAL 7030 Stone grey", "8B8C7A"],
        ["RAL 7031 Blue grey", "474B4E"],
        ["RAL 7032 Pebble grey", "B8B799"],
        ["RAL 7033 Cement grey", "7D8471"],
        ["RAL 7034 Yellow grey", "8F8B66"],
        ["RAL 7035 Light grey", "D7D7D7"],
        ["RAL 7036 Platinum grey", "7F7679"],
        ["RAL 7037 Dusty grey", "7D7F7D"],
        ["RAL 7038 Agate grey", "B5B8B1"],
        ["RAL 7039 Quartz grey", "6C6960"],
        ["RAL 7040 Window grey", "9DA1AA"],
        ["RAL 7042 Traffic grey A", "8D948D"],
        ["RAL 7043 Traffic grey B", "4E5452"],
        ["RAL 7044 Silk grey", "CAC4B0"],
        ["RAL 7045 Telegrey 1", "909090"],
        ["RAL 7046 Telegrey 2", "82898F"],
        ["RAL 7047 Telegrey 4", "D0D0D0"],
        ["RAL 7048 Pearl mouse grey", "898176"],
        ["RAL 8000 Green brown", "826C34"],
        ["RAL 8001 Ochre brown", "955F20"],
        ["RAL 8002 Signal brown", "6C3B2A"],
        ["RAL 8003 Clay brown", "734222"],
        ["RAL 8004 Copper brown", "8E402A"],
        ["RAL 8007 Fawn brown", "59351F"],
        ["RAL 8008 Olive brown", "6F4F28"],
        ["RAL 8011 Nut brown", "5B3A29"],
        ["RAL 8012 Red brown", "592321"],
        ["RAL 8014 Sepia brown", "382C1E"],
        ["RAL 8015 Chestnut brown", "633A34"],
        ["RAL 8016 Mahogany brown", "4C2F27"],
        ["RAL 8017 Chocolate brown", "45322E"],
        ["RAL 8019 Grey brown", "403A3A"],
        ["RAL 8022 Black brown", "212121"],
        ["RAL 8023 Orange brown", "A65E2E"],
        ["RAL 8024 Beige brown", "79553D"],
        ["RAL 8025 Pale brown", "755C48"],
        ["RAL 8028 Terra brown", "4E3B31"],
        ["RAL 8029 Pearl copper", "763C28"],
        ["RAL 9001 Cream", "FDF4E3"],
        ["RAL 9002 Grey white", "E7EBDA"],
        ["RAL 9003 Signal white", "F4F4F4"],
        ["RAL 9004 Signal black", "282828"],
        ["RAL 9005 Jet black", "0A0A0A"],
        ["RAL 9006 White aluminium", "A5A5A5"],
        ["RAL 9007 Grey aluminium", "8F8F8F"],
        ["RAL 9010 Pure white", "FFFFFF"],
        ["RAL 9011 Graphite black", "1C1C1C"],
        ["RAL 9016 Traffic white", "F6F6F6"],
        ["RAL 9017 Traffic black", "1E1E1E"],
        ["RAL 9018 Papyrus white", "D7D7D7"],
        ["RAL 9022 Pearl light grey", "9C9C9C"],
        ["RAL 9023 Pearl dark grey", "828282"]
    ];

    $(document).ready(function(){

        removeSwatches();

        for (var i = 0; i < colors.length; i ++) {
            var hex = colors[i][1];
            var name = colors[i][0];
            $("#swatches").append(
                '<li><button class="palette name" onclick="window.location.hash=\'' + hex + '\'" title="' + name + '" style="background:#' + hex + ';">' + hex + '</button></li>'
            );
        }

        initSwatches(title);


    });
};
