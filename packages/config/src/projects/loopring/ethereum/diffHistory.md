Generated with discovered.json: 0x31c7ff19ff5d549a13cb837b000164b65c994d53

# Diff at Mon, 14 Jul 2025 12:45:20 GMT:

- author: Mateusz Radomski (<radomski.main@protonmail.com>)
- comparing to: main@9f4300dad2f3d080cd56fa311d4a848556c74e72 block: 22865639
- current block number: 22865639

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 22865639 (main branch discovery), not current.

```diff
    contract ExchangeV3 (0x0BABA1Ad5bE3a5C0a66E7ac838a129Bf948f1eA4) {
    +++ description: None
      address:
-        "0x0BABA1Ad5bE3a5C0a66E7ac838a129Bf948f1eA4"
+        "eth:0x0BABA1Ad5bE3a5C0a66E7ac838a129Bf948f1eA4"
      values.$admin:
-        "0xDd2A08a1c1A28c1A571E098914cA10F2877D9c97"
+        "eth:0xDd2A08a1c1A28c1A571E098914cA10F2877D9c97"
      values.$implementation:
-        "0x26d8Ba776a067C5928841985bCe342f75BAE7E82"
+        "eth:0x26d8Ba776a067C5928841985bCe342f75BAE7E82"
      values.$pastUpgrades.0.2.0:
-        "0xa01d4d1FE18A34902Ac2e4045a5e8f553dDe9685"
+        "eth:0xa01d4d1FE18A34902Ac2e4045a5e8f553dDe9685"
      values.$pastUpgrades.1.2.0:
-        "0x2fefbeF4d1445F523941c56349C2414cd5e9675d"
+        "eth:0x2fefbeF4d1445F523941c56349C2414cd5e9675d"
      values.$pastUpgrades.2.2.0:
-        "0x8c63D8E608fF702a92D5908730C91457b0447Ad7"
+        "eth:0x8c63D8E608fF702a92D5908730C91457b0447Ad7"
      values.$pastUpgrades.3.2.0:
-        "0xCFba78aecfBcc0B4B748fA58c530D4675BB5D32F"
+        "eth:0xCFba78aecfBcc0B4B748fA58c530D4675BB5D32F"
      values.$pastUpgrades.4.2.0:
-        "0x4fb117dcd6D09abF1a99B502d488A99F5a17e7eC"
+        "eth:0x4fb117dcd6D09abF1a99B502d488A99F5a17e7eC"
      values.$pastUpgrades.5.2.0:
-        "0x3c294fCF74129d649325F8995afC2f9CfaFAB9dA"
+        "eth:0x3c294fCF74129d649325F8995afC2f9CfaFAB9dA"
      values.$pastUpgrades.6.2.0:
-        "0x26d8Ba776a067C5928841985bCe342f75BAE7E82"
+        "eth:0x26d8Ba776a067C5928841985bCe342f75BAE7E82"
      values.getAgentRegistry:
-        "0x39B9bf169a7e225ba037C443A40460c77438ea14"
+        "eth:0x39B9bf169a7e225ba037C443A40460c77438ea14"
      values.getDepositContract:
-        "0x674bdf20A0F284D710BC40872100128e2d66Bd3f"
+        "eth:0x674bdf20A0F284D710BC40872100128e2d66Bd3f"
      values.implementation:
-        "0x26d8Ba776a067C5928841985bCe342f75BAE7E82"
+        "eth:0x26d8Ba776a067C5928841985bCe342f75BAE7E82"
      values.loopringV3:
-        "0xe56D6ccab6551932C0356E4e8d5dAF0630920C71"
+        "eth:0xe56D6ccab6551932C0356E4e8d5dAF0630920C71"
      values.owner:
-        "0x153CdDD727e407Cb951f728F24bEB9A5FaaA8512"
+        "eth:0x153CdDD727e407Cb951f728F24bEB9A5FaaA8512"
      values.pendingOwner:
-        "0x0000000000000000000000000000000000000000"
+        "eth:0x0000000000000000000000000000000000000000"
      values.proxyOwner:
-        "0xDd2A08a1c1A28c1A571E098914cA10F2877D9c97"
+        "eth:0xDd2A08a1c1A28c1A571E098914cA10F2877D9c97"
      implementationNames.0x0BABA1Ad5bE3a5C0a66E7ac838a129Bf948f1eA4:
-        "OwnedUpgradabilityProxy"
      implementationNames.0x26d8Ba776a067C5928841985bCe342f75BAE7E82:
-        "ExchangeV3"
      implementationNames.eth:0x0BABA1Ad5bE3a5C0a66E7ac838a129Bf948f1eA4:
+        "OwnedUpgradabilityProxy"
      implementationNames.eth:0x26d8Ba776a067C5928841985bCe342f75BAE7E82:
+        "ExchangeV3"
    }
```

```diff
    EOA  (0x0F026a3efE44E0Fe34B87375EFe69b16c05D0438) {
    +++ description: None
      address:
-        "0x0F026a3efE44E0Fe34B87375EFe69b16c05D0438"
+        "eth:0x0F026a3efE44E0Fe34B87375EFe69b16c05D0438"
    }
```

```diff
    contract LoopringIOExchangeOwner (0x153CdDD727e407Cb951f728F24bEB9A5FaaA8512) {
    +++ description: None
      address:
-        "0x153CdDD727e407Cb951f728F24bEB9A5FaaA8512"
+        "eth:0x153CdDD727e407Cb951f728F24bEB9A5FaaA8512"
      values.blockSubmitters.0:
-        "0x2b263f55Bf2125159Ce8Ec2Bb575C649f822ab46"
+        "eth:0x2b263f55Bf2125159Ce8Ec2Bb575C649f822ab46"
      values.blockSubmitters.1:
-        "0x4774d954D20DB98492B0487BC9F91dc401dBA3aE"
+        "eth:0x4774d954D20DB98492B0487BC9F91dc401dBA3aE"
      values.blockSubmitters.2:
-        "0x53dD53dAf8F112BcA64332eA97398EfbC8a0E234"
+        "eth:0x53dD53dAf8F112BcA64332eA97398EfbC8a0E234"
      values.blockSubmitters.3:
-        "0x212e75BF264C4FB3133fA5ef6f47A34367020A1A"
+        "eth:0x212e75BF264C4FB3133fA5ef6f47A34367020A1A"
      values.blockSubmitters.4:
-        "0x238b649E62a0C383b54060b1625516b489183843"
+        "eth:0x238b649E62a0C383b54060b1625516b489183843"
      values.blockSubmitters.5:
-        "0x3243Ed9fdCDE2345890DDEAf6b083CA4cF0F68f2"
+        "eth:0x3243Ed9fdCDE2345890DDEAf6b083CA4cF0F68f2"
      values.blockSubmitters.6:
-        "0xbfCc986cA6E6729c1D191cC0179ef060b87a7C42"
+        "eth:0xbfCc986cA6E6729c1D191cC0179ef060b87a7C42"
      values.blockSubmitters.7:
-        "0xA921aF7e4dd279e1325399E4E3Bf13d0E57f48Fc"
+        "eth:0xA921aF7e4dd279e1325399E4E3Bf13d0E57f48Fc"
      values.blockSubmitters.8:
-        "0xeadb3d065f8d15cc05e92594523516aD36d1c834"
+        "eth:0xeadb3d065f8d15cc05e92594523516aD36d1c834"
      values.blockSubmitters.9:
-        "0xB1a6BF349c947A540a5fe6f1e89992ACDad836AB"
+        "eth:0xB1a6BF349c947A540a5fe6f1e89992ACDad836AB"
      values.blockSubmitters.10:
-        "0xeDEE915Ae45Cc4B2FDd1Ce12a2f70dCa0B2AD9e5"
+        "eth:0xeDEE915Ae45Cc4B2FDd1Ce12a2f70dCa0B2AD9e5"
      values.blockSubmitters.11:
-        "0xE6b0cf8ed864F9bfEBa1b03bac785B5aC82cf095"
+        "eth:0xE6b0cf8ed864F9bfEBa1b03bac785B5aC82cf095"
      values.blockSubmitters.12:
-        "0x487e8Be2BaD383b5B62fC5fb46005A8Fac10E341"
+        "eth:0x487e8Be2BaD383b5B62fC5fb46005A8Fac10E341"
      values.owner:
-        "0xDd2A08a1c1A28c1A571E098914cA10F2877D9c97"
+        "eth:0xDd2A08a1c1A28c1A571E098914cA10F2877D9c97"
      values.pendingOwner:
-        "0x0000000000000000000000000000000000000000"
+        "eth:0x0000000000000000000000000000000000000000"
      values.target:
-        "0x0BABA1Ad5bE3a5C0a66E7ac838a129Bf948f1eA4"
+        "eth:0x0BABA1Ad5bE3a5C0a66E7ac838a129Bf948f1eA4"
      implementationNames.0x153CdDD727e407Cb951f728F24bEB9A5FaaA8512:
-        "LoopringIOExchangeOwner"
      implementationNames.eth:0x153CdDD727e407Cb951f728F24bEB9A5FaaA8512:
+        "LoopringIOExchangeOwner"
    }
```

```diff
    EOA  (0x1F28F10176F89F4E9985873B84d14e75751BB3D1) {
    +++ description: None
      address:
-        "0x1F28F10176F89F4E9985873B84d14e75751BB3D1"
+        "eth:0x1F28F10176F89F4E9985873B84d14e75751BB3D1"
    }
```

```diff
    EOA  (0x212e75BF264C4FB3133fA5ef6f47A34367020A1A) {
    +++ description: None
      address:
-        "0x212e75BF264C4FB3133fA5ef6f47A34367020A1A"
+        "eth:0x212e75BF264C4FB3133fA5ef6f47A34367020A1A"
    }
```

```diff
    EOA  (0x238b649E62a0C383b54060b1625516b489183843) {
    +++ description: None
      address:
-        "0x238b649E62a0C383b54060b1625516b489183843"
+        "eth:0x238b649E62a0C383b54060b1625516b489183843"
    }
```

```diff
    EOA  (0x2b263f55Bf2125159Ce8Ec2Bb575C649f822ab46) {
    +++ description: None
      address:
-        "0x2b263f55Bf2125159Ce8Ec2Bb575C649f822ab46"
+        "eth:0x2b263f55Bf2125159Ce8Ec2Bb575C649f822ab46"
    }
```

```diff
    EOA  (0x2Fc617E933a52713247CE25730f6695920B3befe) {
    +++ description: None
      address:
-        "0x2Fc617E933a52713247CE25730f6695920B3befe"
+        "eth:0x2Fc617E933a52713247CE25730f6695920B3befe"
    }
```

```diff
    EOA  (0x3243Ed9fdCDE2345890DDEAf6b083CA4cF0F68f2) {
    +++ description: None
      address:
-        "0x3243Ed9fdCDE2345890DDEAf6b083CA4cF0F68f2"
+        "eth:0x3243Ed9fdCDE2345890DDEAf6b083CA4cF0F68f2"
    }
```

```diff
    contract AgentRegistry (0x39B9bf169a7e225ba037C443A40460c77438ea14) {
    +++ description: None
      address:
-        "0x39B9bf169a7e225ba037C443A40460c77438ea14"
+        "eth:0x39B9bf169a7e225ba037C443A40460c77438ea14"
      values.agents.0:
-        "0x18920d6E6Fb7EbE057a4DD9260D6D95845c95036"
+        "eth:0x18920d6E6Fb7EbE057a4DD9260D6D95845c95036"
      values.agents.1:
-        "0xA573C5d473702286f0AC84592EDA49aD799EBAA1"
+        "eth:0xA573C5d473702286f0AC84592EDA49aD799EBAA1"
      values.agents.2:
-        "0x6D537764355bc23d4eADba7829048Dac8215a73c"
+        "eth:0x6D537764355bc23d4eADba7829048Dac8215a73c"
      values.agents.3:
-        "0x605872a5A459E778959B8a49dc3A56a8c9197983"
+        "eth:0x605872a5A459E778959B8a49dc3A56a8c9197983"
      values.agents.4:
-        "0xf6cd964E6345E8f01e548063De13d0DE7d8c59De"
+        "eth:0xf6cd964E6345E8f01e548063De13d0DE7d8c59De"
      values.agents.5:
-        "0x9b7a20ae12a3f2a3d4cF9eA2d4a8518c104cc5f2"
+        "eth:0x9b7a20ae12a3f2a3d4cF9eA2d4a8518c104cc5f2"
      values.agents.6:
-        "0x6FF8A397F7A04B41c58c00AB8e70ACa7cbc0adBa"
+        "eth:0x6FF8A397F7A04B41c58c00AB8e70ACa7cbc0adBa"
      values.agents.7:
-        "0x1230F7e06c3fA96f4259F7BaD79e6afF321B8133"
+        "eth:0x1230F7e06c3fA96f4259F7BaD79e6afF321B8133"
      values.agents.8:
-        "0x2ed5d3Fff0EB1451c381DDECE244E9b796db7b8a"
+        "eth:0x2ed5d3Fff0EB1451c381DDECE244E9b796db7b8a"
      values.agents.9:
-        "0xd85f594481D3DEE61FD38464dD54CF3ccE6906b6"
+        "eth:0xd85f594481D3DEE61FD38464dD54CF3ccE6906b6"
      values.agents.10:
-        "0xF8e4aBF498235fA8fdE2f6A04c21db7877957C47"
+        "eth:0xF8e4aBF498235fA8fdE2f6A04c21db7877957C47"
      values.agents.11:
-        "0x70c8E0AedB5933Da09C9392A17389e4D6d79D638"
+        "eth:0x70c8E0AedB5933Da09C9392A17389e4D6d79D638"
      values.agents.12:
-        "0x8EFAD07720D331a49f5db2cC83946F7DC8FC6B42"
+        "eth:0x8EFAD07720D331a49f5db2cC83946F7DC8FC6B42"
      values.agents.13:
-        "0xD9D681C1ddD462ca222E90Bbe14A35273C318A09"
+        "eth:0xD9D681C1ddD462ca222E90Bbe14A35273C318A09"
      values.agents.14:
-        "0xE6CC0d45C4E4F81be340F4D176e6Ce0D63Ad5743"
+        "eth:0xE6CC0d45C4E4F81be340F4D176e6Ce0D63Ad5743"
      values.agents.15:
-        "0x746EEB6bdd9139A4d605C2c410911F37BEa9093b"
+        "eth:0x746EEB6bdd9139A4d605C2c410911F37BEa9093b"
      values.agents.16:
-        "0xa9D46DEdEff7dFe8fF3628F4D276a0e1C5007b81"
+        "eth:0xa9D46DEdEff7dFe8fF3628F4D276a0e1C5007b81"
      values.agents.17:
-        "0x502B5525e1508C51Af46719D13E5238b83A404e5"
+        "eth:0x502B5525e1508C51Af46719D13E5238b83A404e5"
      values.agents.18:
-        "0x9795f527d0Fad45F41dE27bef71F0eeD47f5256C"
+        "eth:0x9795f527d0Fad45F41dE27bef71F0eeD47f5256C"
      values.agents.19:
-        "0x1D28b287B5E19b12Ac2B3618405C57AD882A4D74"
+        "eth:0x1D28b287B5E19b12Ac2B3618405C57AD882A4D74"
      values.agents.20:
-        "0x1F78CD24Ccf73fDd5095d0339DD6eF72E30669aC"
+        "eth:0x1F78CD24Ccf73fDd5095d0339DD6eF72E30669aC"
      values.agents.21:
-        "0xF88de0CCD1E84898b4EA62c421009996bFb6156e"
+        "eth:0xF88de0CCD1E84898b4EA62c421009996bFb6156e"
      values.agents.22:
-        "0x93bB5B402F04D3053F2c3800F6A4AF54788c16d0"
+        "eth:0x93bB5B402F04D3053F2c3800F6A4AF54788c16d0"
      values.agents.23:
-        "0xec3Cc6Cf0252565b56FC7AC396017Df5b9B78a31"
+        "eth:0xec3Cc6Cf0252565b56FC7AC396017Df5b9B78a31"
      values.agents.24:
-        "0x0089081950B4eBBF362689519C1d54827e99d727"
+        "eth:0x0089081950B4eBBF362689519C1d54827e99d727"
      values.agents.25:
-        "0x8Cf6C5e7ec123583e1529d8afAeAA3D25Da2fD3D"
+        "eth:0x8Cf6C5e7ec123583e1529d8afAeAA3D25Da2fD3D"
      values.agents.26:
-        "0x583208883277896435B9821a64806d708dE17Df2"
+        "eth:0x583208883277896435B9821a64806d708dE17Df2"
      values.agents.27:
-        "0x85f2e9474d208A11ac18Ed2a4E434c4Bfc6ddBDe"
+        "eth:0x85f2e9474d208A11ac18Ed2a4E434c4Bfc6ddBDe"
      values.agents.28:
-        "0x0aA4d2Dd35418d63af13eA906ce3A088deC8D786"
+        "eth:0x0aA4d2Dd35418d63af13eA906ce3A088deC8D786"
      values.agents.29:
-        "0x567C1ad6d736755ABCB3DF8Ef794b09bB7701e66"
+        "eth:0x567C1ad6d736755ABCB3DF8Ef794b09bB7701e66"
      values.agents.30:
-        "0x1B04A25a0A7F93cfB0c4278Ca4f7Ca2483a1e94e"
+        "eth:0x1B04A25a0A7F93cfB0c4278Ca4f7Ca2483a1e94e"
      values.agents.31:
-        "0x22844C482b0626aC09B5689b4D8E81fE6710F5f4"
+        "eth:0x22844C482b0626aC09B5689b4D8E81fE6710F5f4"
      values.agents.32:
-        "0x4e585BaD734F0c6Af04a3Afb359FdB69435Fe74b"
+        "eth:0x4e585BaD734F0c6Af04a3Afb359FdB69435Fe74b"
      values.agents.33:
-        "0x9C601377fd95410Be46cfc1A786686874c6E7702"
+        "eth:0x9C601377fd95410Be46cfc1A786686874c6E7702"
      values.agents.34:
-        "0x8E89790635dBfFDCc0642055CB21abE63edc484c"
+        "eth:0x8E89790635dBfFDCc0642055CB21abE63edc484c"
      values.agents.35:
-        "0x9387e06961988726Dd0732b6930Be1C0A5343901"
+        "eth:0x9387e06961988726Dd0732b6930Be1C0A5343901"
      values.agents.36:
-        "0x73b7bC4463263194Eb9B570948FDA12244a5FFa8"
+        "eth:0x73b7bC4463263194Eb9B570948FDA12244a5FFa8"
      values.agents.37:
-        "0x43EcA2F58d8C371C5073fc382784A3a483005D6B"
+        "eth:0x43EcA2F58d8C371C5073fc382784A3a483005D6B"
      values.agents.38:
-        "0x8303f865a2A221c920e9fcbF2e84703991f16251"
+        "eth:0x8303f865a2A221c920e9fcbF2e84703991f16251"
      values.agents.39:
-        "0x37B6AAD464e8916Dc8231ae5F8aeE15Dd244C1B1"
+        "eth:0x37B6AAD464e8916Dc8231ae5F8aeE15Dd244C1B1"
      values.agents.40:
-        "0xba64cDf65aeA36Ff4a58dCF288f1a62923555795"
+        "eth:0xba64cDf65aeA36Ff4a58dCF288f1a62923555795"
      values.agents.41:
-        "0x33Df027650cD2729e0b132FC0BFF4788725cc0FA"
+        "eth:0x33Df027650cD2729e0b132FC0BFF4788725cc0FA"
      values.agents.42:
-        "0x2EAB3234ea1e4c9571c2e011F435c7316EcecdB9"
+        "eth:0x2EAB3234ea1e4c9571c2e011F435c7316EcecdB9"
      values.agents.43:
-        "0xaCed28432cd60D7D34799DE0D745871e5F10f961"
+        "eth:0xaCed28432cd60D7D34799DE0D745871e5F10f961"
      values.agents.44:
-        "0x636A3141D48402d06a907AA14F023e8F5B5d634f"
+        "eth:0x636A3141D48402d06a907AA14F023e8F5B5d634f"
      values.agents.45:
-        "0x1F94eaaA413c11Bea645eE65108b5673304753bD"
+        "eth:0x1F94eaaA413c11Bea645eE65108b5673304753bD"
      values.agents.46:
-        "0xF11702d591303D790C7B372e53fde348B82037DE"
+        "eth:0xF11702d591303D790C7B372e53fde348B82037DE"
      values.agents.47:
-        "0x78a58558Ca76Cf66b6C4d72231cF6529ed5bef29"
+        "eth:0x78a58558Ca76Cf66b6C4d72231cF6529ed5bef29"
      values.agents.48:
-        "0xA762D8422237Bd26B4F882C5D0744726eb2a86B0"
+        "eth:0xA762D8422237Bd26B4F882C5D0744726eb2a86B0"
      values.agents.49:
-        "0xfb64C2d72E1CaA0286899be8e4f88266C4d8Ab9f"
+        "eth:0xfb64C2d72E1CaA0286899be8e4f88266C4d8Ab9f"
      values.agents.50:
-        "0xE8eA36f850Db564408E4165a92bCCB4e6e5f5e20"
+        "eth:0xE8eA36f850Db564408E4165a92bCCB4e6e5f5e20"
      values.agents.51:
-        "0xA738DE0f4b1f52cC8410D6E49Ab6ED1ca3Fe1420"
+        "eth:0xA738DE0f4b1f52cC8410D6E49Ab6ED1ca3Fe1420"
      values.agents.52:
-        "0x24e4cf9B1723e5A5401841d931a301AEDEcd96Ef"
+        "eth:0x24e4cf9B1723e5A5401841d931a301AEDEcd96Ef"
      values.agents.53:
-        "0x145f20A0C129D592da261E42947A70be3B22db07"
+        "eth:0x145f20A0C129D592da261E42947A70be3B22db07"
      values.agents.54:
-        "0x41E3B439a4798f2F466D28Be7bEDC0743847DbE4"
+        "eth:0x41E3B439a4798f2F466D28Be7bEDC0743847DbE4"
      values.agents.55:
-        "0xa2AcF6B0304A808147ee3b10601e452c3f1bfde7"
+        "eth:0xa2AcF6B0304A808147ee3b10601e452c3f1bfde7"
      values.agents.56:
-        "0xA0059ad8e06c57458116AbC5E5C0bdB86c4FB4b2"
+        "eth:0xA0059ad8e06c57458116AbC5E5C0bdB86c4FB4b2"
      values.agents.57:
-        "0x8f5a6e6D18F8E3FDFfc27fE7FE5804c2378F8310"
+        "eth:0x8f5a6e6D18F8E3FDFfc27fE7FE5804c2378F8310"
      values.agents.58:
-        "0xA2F4A88553Ba746A468c21D3990FE9c503E0B19a"
+        "eth:0xA2F4A88553Ba746A468c21D3990FE9c503E0B19a"
      values.agents.59:
-        "0x69a8bdEE1af2138C58B1261373B37071850689C0"
+        "eth:0x69a8bdEE1af2138C58B1261373B37071850689C0"
      values.agents.60:
-        "0xeE6a9d6Cb11a9796f767540f435f90F11a9B1414"
+        "eth:0xeE6a9d6Cb11a9796f767540f435f90F11a9B1414"
      values.agents.61:
-        "0x8a6bA9D448Ad54579BEd1f42F587D134BF7F8582"
+        "eth:0x8a6bA9D448Ad54579BEd1f42F587D134BF7F8582"
      values.agents.62:
-        "0x8a986607603D606b1Ac5Fdcca089764671C725E1"
+        "eth:0x8a986607603D606b1Ac5Fdcca089764671C725E1"
      values.agents.63:
-        "0xf85f030865359D1843701F4f1B08c38913c3D57F"
+        "eth:0xf85f030865359D1843701F4f1B08c38913c3D57F"
      values.agents.64:
-        "0x7AB580E6Af77bD13f090619ee1f7e7C2a645afb1"
+        "eth:0x7AB580E6Af77bD13f090619ee1f7e7C2a645afb1"
      values.agents.65:
-        "0xfE88c469E27861907D05a0E97f81d84c789A1cdA"
+        "eth:0xfE88c469E27861907D05a0E97f81d84c789A1cdA"
      values.agents.66:
-        "0x447356B190c7dafbE0452C8d041725ABf1E1d41f"
+        "eth:0x447356B190c7dafbE0452C8d041725ABf1E1d41f"
      values.agents.67:
-        "0x8f871AC37FA7F575E9b8c285B38f0bf99D3C087F"
+        "eth:0x8f871AC37FA7F575E9b8c285B38f0bf99D3C087F"
      values.agents.68:
-        "0x5F6a9960318903d4205ddA6ba45796bC969461B8"
+        "eth:0x5F6a9960318903d4205ddA6ba45796bC969461B8"
      values.agents.69:
-        "0xBBCA4790398C4CE916937dB3c6b7E9a9dA6502e8"
+        "eth:0xBBCA4790398C4CE916937dB3c6b7E9a9dA6502e8"
      values.agents.70:
-        "0x093137CFD844b64FeBeb5371D85Cf83fF4F92Bbf"
+        "eth:0x093137CFD844b64FeBeb5371D85Cf83fF4F92Bbf"
      values.agents.71:
-        "0xFa6680779DC9168600bCDcaFf28b41C8fa568D98"
+        "eth:0xFa6680779DC9168600bCDcaFf28b41C8fa568D98"
      values.agents.72:
-        "0xDd2A08a1c1A28c1A571E098914cA10F2877D9c97"
+        "eth:0xDd2A08a1c1A28c1A571E098914cA10F2877D9c97"
      values.agents.73:
-        "0x1AD74cF7CaF443f77BD89860EF39F4ca16fbE810"
+        "eth:0x1AD74cF7CaF443f77BD89860EF39F4ca16fbE810"
      values.agents.74:
-        "0xe6F1C20D06B2f541e4308d752D0D58c6df07191D"
+        "eth:0xe6F1C20D06B2f541e4308d752D0D58c6df07191D"
      values.agents.75:
-        "0x7aF6e5dD61c93277B406FfcaDAd6e6089b27075b"
+        "eth:0x7aF6e5dD61c93277B406FfcaDAd6e6089b27075b"
      values.agents.76:
-        "0x759c0d0CE4191Db16EF5BCe6ED0A05dE9e99a9f5"
+        "eth:0x759c0d0CE4191Db16EF5BCe6ED0A05dE9e99a9f5"
      values.agents.77:
-        "0x994F94C853D691f5C775e5131Fc4a110ABEed4A8"
+        "eth:0x994F94C853D691f5C775e5131Fc4a110ABEed4A8"
      values.agents.78:
-        "0xE7E807631F3e807ae20d0e23919dB8789680104B"
+        "eth:0xE7E807631F3e807ae20d0e23919dB8789680104B"
      values.agents.79:
-        "0x7CD7871181D91Af440DD4552BAE70B8eBE9fBa73"
+        "eth:0x7CD7871181D91Af440DD4552BAE70B8eBE9fBa73"
      values.agents.80:
-        "0x9a94A815F56d00F52BbaD46Edc6d12d879df2635"
+        "eth:0x9a94A815F56d00F52BbaD46Edc6d12d879df2635"
      values.agents.81:
-        "0xFD997e572F03f3Ff4f117aaCCAAb9b45bFB6E01C"
+        "eth:0xFD997e572F03f3Ff4f117aaCCAAb9b45bFB6E01C"
      values.agents.82:
-        "0x5f24c3A2c9841c023d6646402fD449665b64626b"
+        "eth:0x5f24c3A2c9841c023d6646402fD449665b64626b"
      values.agents.83:
-        "0x9775449efDf24B7Eb5391E7D3758E184595E4C69"
+        "eth:0x9775449efDf24B7Eb5391E7D3758E184595E4C69"
      values.agents.84:
-        "0x4f23cA1CC6253dc1Ba69a07A892d68f3b777C407"
+        "eth:0x4f23cA1CC6253dc1Ba69a07A892d68f3b777C407"
      values.agents.85:
-        "0x5c159d164b8fD7f0599c625988Dc2db68dF14842"
+        "eth:0x5c159d164b8fD7f0599c625988Dc2db68dF14842"
      values.agents.86:
-        "0x8572B8A876F47d70128C73bfcA049cE00Eb77563"
+        "eth:0x8572B8A876F47d70128C73bfcA049cE00Eb77563"
      values.agents.87:
-        "0xBBb360538b07b59BA2Ca1c9f847C8bC760b8f0D7"
+        "eth:0xBBb360538b07b59BA2Ca1c9f847C8bC760b8f0D7"
      values.agents.88:
-        "0x34841262432975E36755AB797cb523Dd7248861A"
+        "eth:0x34841262432975E36755AB797cb523Dd7248861A"
      values.agents.89:
-        "0xc8f242B2aC6069EBdc876BA0Ef42EfBf03C5Ba4B"
+        "eth:0xc8f242B2aC6069EBdc876BA0Ef42EfBf03C5Ba4B"
      values.agents.90:
-        "0xB27B1FD0D4a7D91d07C19f9A33D3A4711a453D7C"
+        "eth:0xB27B1FD0D4a7D91d07C19f9A33D3A4711a453D7C"
      values.agents.91:
-        "0x76d8EA32C511A87ee4bfF5f00e758DD362aDf3d0"
+        "eth:0x76d8EA32C511A87ee4bfF5f00e758DD362aDf3d0"
      values.agents.92:
-        "0x6BF0060fBcf271A2Ed828E77076543076d5edbA1"
+        "eth:0x6BF0060fBcf271A2Ed828E77076543076d5edbA1"
      values.agents.93:
-        "0x554Be7B23FDE679049e52F195448Db28B624534E"
+        "eth:0x554Be7B23FDE679049e52F195448Db28B624534E"
      values.agents.94:
-        "0xa41e49fDcd0555484f70899d95593d2e1A0fCBbB"
+        "eth:0xa41e49fDcd0555484f70899d95593d2e1A0fCBbB"
      values.agents.95:
-        "0x83DF13e357C731ec92D13cbf8F5bF4765a8e1205"
+        "eth:0x83DF13e357C731ec92D13cbf8F5bF4765a8e1205"
      values.agents.96:
-        "0x4fACF65A157678E62F84389DD248D99f828403D6"
+        "eth:0x4fACF65A157678E62F84389DD248D99f828403D6"
      values.agents.97:
-        "0xC3630669CB660f9405Df0D0037f52b78c49772Ab"
+        "eth:0xC3630669CB660f9405Df0D0037f52b78c49772Ab"
      values.agents.98:
-        "0x7b854D37E502771b1647F5917efCF065ce1C0677"
+        "eth:0x7b854D37E502771b1647F5917efCF065ce1C0677"
      values.agents.99:
-        "0x52ea1971C05B0169c02a0bBeC05Fe8b5E3A24470"
+        "eth:0x52ea1971C05B0169c02a0bBeC05Fe8b5E3A24470"
      values.agents.100:
-        "0x66fAD4Ab701eE8C6F9eBef93b634a3E7401aa276"
+        "eth:0x66fAD4Ab701eE8C6F9eBef93b634a3E7401aa276"
      values.agents.101:
-        "0x18a1A6F47Fd92185b91edc322d1954349aD0b652"
+        "eth:0x18a1A6F47Fd92185b91edc322d1954349aD0b652"
      values.agents.102:
-        "0x4a7e38476b05F40B16E5ae1C761302B1A7d5afc5"
+        "eth:0x4a7e38476b05F40B16E5ae1C761302B1A7d5afc5"
      values.agents.103:
-        "0x83c11cbfbED2971032d3a1eD2f34d4Fb43FE181F"
+        "eth:0x83c11cbfbED2971032d3a1eD2f34d4Fb43FE181F"
      values.agents.104:
-        "0xC6bC133562B470A61394f9a2fF7FE8082Da698a4"
+        "eth:0xC6bC133562B470A61394f9a2fF7FE8082Da698a4"
      values.agents.105:
-        "0x3EC139B45558D1db73b889f887624Ef117D28e3b"
+        "eth:0x3EC139B45558D1db73b889f887624Ef117D28e3b"
      values.agents.106:
-        "0x1cb97A1fDcBc60F112B5a58896906BDb870BC438"
+        "eth:0x1cb97A1fDcBc60F112B5a58896906BDb870BC438"
      values.agents.107:
-        "0xA186e201225E468218d53F3f9B42012022D425F3"
+        "eth:0xA186e201225E468218d53F3f9B42012022D425F3"
      values.agents.108:
-        "0xd0406913f2F58D1696eb9c3677E6713DD528f8CD"
+        "eth:0xd0406913f2F58D1696eb9c3677E6713DD528f8CD"
      values.agents.109:
-        "0x194dB39E4c99f6C8dD81B4647465f7599f3c215A"
+        "eth:0x194dB39E4c99f6C8dD81B4647465f7599f3c215A"
      values.agents.110:
-        "0xC50138E6B5c85622E4B8aB9003Eb0bD35Dcf6f78"
+        "eth:0xC50138E6B5c85622E4B8aB9003Eb0bD35Dcf6f78"
      values.agents.111:
-        "0xB8108988406dB7C4035BcFEf2bd924A9810ae7e6"
+        "eth:0xB8108988406dB7C4035BcFEf2bd924A9810ae7e6"
      values.agents.112:
-        "0x5359f0fD5ef2A6F0205436cC19EEC1D6Fc521b5C"
+        "eth:0x5359f0fD5ef2A6F0205436cC19EEC1D6Fc521b5C"
      values.agents.113:
-        "0xbDC384dB410E56F4877A086F5b68DeBD673a7c48"
+        "eth:0xbDC384dB410E56F4877A086F5b68DeBD673a7c48"
      values.agents.114:
-        "0xBeC0c576EF02cB6341725607AB5D941e32B44437"
+        "eth:0xBeC0c576EF02cB6341725607AB5D941e32B44437"
      values.agents.115:
-        "0x8195be4E48d3a2F80692fe1dBA9b23b8050fB1f9"
+        "eth:0x8195be4E48d3a2F80692fe1dBA9b23b8050fB1f9"
      values.agents.116:
-        "0xF75B89d214512C42C474bb0Ee5D865e953C28109"
+        "eth:0xF75B89d214512C42C474bb0Ee5D865e953C28109"
      values.agents.117:
-        "0x4Cd8d47048B03294820A32Ebf58cBC6A76F7F529"
+        "eth:0x4Cd8d47048B03294820A32Ebf58cBC6A76F7F529"
      values.agents.118:
-        "0x2fAc662748F876CA1d3A1b59eF5Be45C128EcfE5"
+        "eth:0x2fAc662748F876CA1d3A1b59eF5Be45C128EcfE5"
      values.agents.119:
-        "0x0Bcd579513410c4169d13b674ab58D009a329683"
+        "eth:0x0Bcd579513410c4169d13b674ab58D009a329683"
      values.agents.120:
-        "0x0818e9a3A42EeDE47cd1482461B594f32CCBe2D5"
+        "eth:0x0818e9a3A42EeDE47cd1482461B594f32CCBe2D5"
      values.agents.121:
-        "0x06Ac0eFB3E358528Ecd1E7336342c822678DAE4d"
+        "eth:0x06Ac0eFB3E358528Ecd1E7336342c822678DAE4d"
      values.agents.122:
-        "0x97dB7F2758eC94757ba163e3052236b73DBF6c9A"
+        "eth:0x97dB7F2758eC94757ba163e3052236b73DBF6c9A"
      values.agents.123:
-        "0xD4df78bbD50C564702F0C96C8C7de536154DB07d"
+        "eth:0xD4df78bbD50C564702F0C96C8C7de536154DB07d"
      values.agents.124:
-        "0x17bAa21Bec595da6A9d88A4b4FfdD1d336186c48"
+        "eth:0x17bAa21Bec595da6A9d88A4b4FfdD1d336186c48"
      values.agents.125:
-        "0xa060931b7d91C991224C2D91827ABC4DE057324F"
+        "eth:0xa060931b7d91C991224C2D91827ABC4DE057324F"
      values.agents.126:
-        "0x69B198eDE31636Cbf8839C08625855EDad7AcEB9"
+        "eth:0x69B198eDE31636Cbf8839C08625855EDad7AcEB9"
      values.agents.127:
-        "0x03388900bF7B87E539E5aFb274C3f59BBeBab567"
+        "eth:0x03388900bF7B87E539E5aFb274C3f59BBeBab567"
      values.agents.128:
-        "0xb6F12FfF6C114778640245c2E7A0B03de4B0f315"
+        "eth:0xb6F12FfF6C114778640245c2E7A0B03de4B0f315"
      values.agents.129:
-        "0x779aFAf4D8F4e3E6e3aDCB465B7Fa7CfdD4B8a3a"
+        "eth:0x779aFAf4D8F4e3E6e3aDCB465B7Fa7CfdD4B8a3a"
      values.agents.130:
-        "0xa371Ceca6E5Ff08da04AAe28Bcf3E414f96B2Db8"
+        "eth:0xa371Ceca6E5Ff08da04AAe28Bcf3E414f96B2Db8"
      values.agents.131:
-        "0x997f5F09E45a845A9980C8F32dBE9b0824c7D0c0"
+        "eth:0x997f5F09E45a845A9980C8F32dBE9b0824c7D0c0"
      values.agents.132:
-        "0xD5aA13A2b5246BEE262215ccEbb6413b5E71bAA8"
+        "eth:0xD5aA13A2b5246BEE262215ccEbb6413b5E71bAA8"
      values.agents.133:
-        "0x4fC4d2f0a5D5E7Baa7A0a456ea3BA924f7229672"
+        "eth:0x4fC4d2f0a5D5E7Baa7A0a456ea3BA924f7229672"
      values.agents.134:
-        "0x3CF377789eF85DEe82c90d131327Fb40694D2AD0"
+        "eth:0x3CF377789eF85DEe82c90d131327Fb40694D2AD0"
      values.agents.135:
-        "0x427f20E2eD64F2B5E92a0DD467Ae49989e013e52"
+        "eth:0x427f20E2eD64F2B5E92a0DD467Ae49989e013e52"
      values.agents.136:
-        "0x1945e350291C9c7DFe9B7cEe428cA815DF31Fec2"
+        "eth:0x1945e350291C9c7DFe9B7cEe428cA815DF31Fec2"
      values.agents.137:
-        "0xB42bBCd12c14F4b2efc1C84bb971F62A943db7d5"
+        "eth:0xB42bBCd12c14F4b2efc1C84bb971F62A943db7d5"
      values.owner:
-        "0xDd2A08a1c1A28c1A571E098914cA10F2877D9c97"
+        "eth:0xDd2A08a1c1A28c1A571E098914cA10F2877D9c97"
      values.pendingOwner:
-        "0x0000000000000000000000000000000000000000"
+        "eth:0x0000000000000000000000000000000000000000"
      implementationNames.0x39B9bf169a7e225ba037C443A40460c77438ea14:
-        "AgentRegistry"
      implementationNames.eth:0x39B9bf169a7e225ba037C443A40460c77438ea14:
+        "AgentRegistry"
    }
```

```diff
    EOA  (0x3b1D1F89E0b6803174A2dE72e21A6f6f8464d5F1) {
    +++ description: None
      address:
-        "0x3b1D1F89E0b6803174A2dE72e21A6f6f8464d5F1"
+        "eth:0x3b1D1F89E0b6803174A2dE72e21A6f6f8464d5F1"
    }
```

```diff
    EOA  (0x4374D3d032B3c96785094ec9f384f07077792768) {
    +++ description: None
      address:
-        "0x4374D3d032B3c96785094ec9f384f07077792768"
+        "eth:0x4374D3d032B3c96785094ec9f384f07077792768"
    }
```

```diff
    EOA  (0x4774d954D20DB98492B0487BC9F91dc401dBA3aE) {
    +++ description: None
      address:
-        "0x4774d954D20DB98492B0487BC9F91dc401dBA3aE"
+        "eth:0x4774d954D20DB98492B0487BC9F91dc401dBA3aE"
    }
```

```diff
    EOA  (0x487e8Be2BaD383b5B62fC5fb46005A8Fac10E341) {
    +++ description: None
      address:
-        "0x487e8Be2BaD383b5B62fC5fb46005A8Fac10E341"
+        "eth:0x487e8Be2BaD383b5B62fC5fb46005A8Fac10E341"
    }
```

```diff
    contract ProtocolFeeVault (0x4b89f8996892d137c3dE1312d1dD4E4F4fFcA171) {
    +++ description: None
      address:
-        "0x4b89f8996892d137c3dE1312d1dD4E4F4fFcA171"
+        "eth:0x4b89f8996892d137c3dE1312d1dD4E4F4fFcA171"
      values.daoAddress:
-        "0xe6FcAA61d9354dBb2320d9DcAFA9C1486Cf93907"
+        "eth:0xe6FcAA61d9354dBb2320d9DcAFA9C1486Cf93907"
      values.lrcAddress:
-        "0xBBbbCA6A901c926F240b89EacB641d8Aec7AEafD"
+        "eth:0xBBbbCA6A901c926F240b89EacB641d8Aec7AEafD"
      values.owner:
-        "0x96f16FdB8Cd37C02DEeb7025C1C7618E1bB34d97"
+        "eth:0x96f16FdB8Cd37C02DEeb7025C1C7618E1bB34d97"
      values.pendingOwner:
-        "0x0000000000000000000000000000000000000000"
+        "eth:0x0000000000000000000000000000000000000000"
      values.tokenSellerAddress:
-        "0x0000000000000000000000000000000000000000"
+        "eth:0x0000000000000000000000000000000000000000"
      values.userStakingPoolAddress:
-        "0xF4662bB1C4831fD411a95b8050B3A5998d8A4A5b"
+        "eth:0xF4662bB1C4831fD411a95b8050B3A5998d8A4A5b"
      implementationNames.0x4b89f8996892d137c3dE1312d1dD4E4F4fFcA171:
-        "ProtocolFeeVault"
      implementationNames.eth:0x4b89f8996892d137c3dE1312d1dD4E4F4fFcA171:
+        "ProtocolFeeVault"
    }
```

```diff
    contract ForcedWithdrawalAgent (0x52ea1971C05B0169c02a0bBeC05Fe8b5E3A24470) {
    +++ description: Auxiliary contract able to force withdrawals from L1 on behalf of users.
      address:
-        "0x52ea1971C05B0169c02a0bBeC05Fe8b5E3A24470"
+        "eth:0x52ea1971C05B0169c02a0bBeC05Fe8b5E3A24470"
      values.managers.0:
-        "0x88f8Dbd3dC44c6E2e368258D3eee8EB9A07aF191"
+        "eth:0x88f8Dbd3dC44c6E2e368258D3eee8EB9A07aF191"
      values.managers.1:
-        "0x4374D3d032B3c96785094ec9f384f07077792768"
+        "eth:0x4374D3d032B3c96785094ec9f384f07077792768"
      values.managers.2:
-        "0xDB5C4078eC50Ad4Cdc47F4597a377528B1d7bcdB"
+        "eth:0xDB5C4078eC50Ad4Cdc47F4597a377528B1d7bcdB"
      values.managers.3:
-        "0x2Fc617E933a52713247CE25730f6695920B3befe"
+        "eth:0x2Fc617E933a52713247CE25730f6695920B3befe"
      values.managers.4:
-        "0x59F3163ab39B8B90DAF57508bC1fAECB2F2cD374"
+        "eth:0x59F3163ab39B8B90DAF57508bC1fAECB2F2cD374"
      values.owner:
-        "0xDd2A08a1c1A28c1A571E098914cA10F2877D9c97"
+        "eth:0xDd2A08a1c1A28c1A571E098914cA10F2877D9c97"
      values.pendingOwner:
-        "0x0000000000000000000000000000000000000000"
+        "eth:0x0000000000000000000000000000000000000000"
      implementationNames.0x52ea1971C05B0169c02a0bBeC05Fe8b5E3A24470:
-        "ForcedWithdrawalAgent"
      implementationNames.eth:0x52ea1971C05B0169c02a0bBeC05Fe8b5E3A24470:
+        "ForcedWithdrawalAgent"
    }
```

```diff
    EOA  (0x53dD53dAf8F112BcA64332eA97398EfbC8a0E234) {
    +++ description: None
      address:
-        "0x53dD53dAf8F112BcA64332eA97398EfbC8a0E234"
+        "eth:0x53dD53dAf8F112BcA64332eA97398EfbC8a0E234"
    }
```

```diff
    EOA  (0x576aBC47E0Dbe79c1c950190173faE9A13f8AB98) {
    +++ description: None
      address:
-        "0x576aBC47E0Dbe79c1c950190173faE9A13f8AB98"
+        "eth:0x576aBC47E0Dbe79c1c950190173faE9A13f8AB98"
    }
```

```diff
    EOA  (0x59F3163ab39B8B90DAF57508bC1fAECB2F2cD374) {
    +++ description: None
      address:
-        "0x59F3163ab39B8B90DAF57508bC1fAECB2F2cD374"
+        "eth:0x59F3163ab39B8B90DAF57508bC1fAECB2F2cD374"
    }
```

```diff
    contract BlockVerifier (0x6150343E0F43A17519c0327c41eDd9eBE88D01ef) {
    +++ description: None
      address:
-        "0x6150343E0F43A17519c0327c41eDd9eBE88D01ef"
+        "eth:0x6150343E0F43A17519c0327c41eDd9eBE88D01ef"
      values.owner:
-        "0xDd2A08a1c1A28c1A571E098914cA10F2877D9c97"
+        "eth:0xDd2A08a1c1A28c1A571E098914cA10F2877D9c97"
      values.pendingOwner:
-        "0x0000000000000000000000000000000000000000"
+        "eth:0x0000000000000000000000000000000000000000"
      implementationNames.0x6150343E0F43A17519c0327c41eDd9eBE88D01ef:
-        "BlockVerifier"
      implementationNames.eth:0x6150343E0F43A17519c0327c41eDd9eBE88D01ef:
+        "BlockVerifier"
    }
```

```diff
    contract DefaultDepositContract (0x674bdf20A0F284D710BC40872100128e2d66Bd3f) {
    +++ description: None
      address:
-        "0x674bdf20A0F284D710BC40872100128e2d66Bd3f"
+        "eth:0x674bdf20A0F284D710BC40872100128e2d66Bd3f"
      values.exchange:
-        "0x0BABA1Ad5bE3a5C0a66E7ac838a129Bf948f1eA4"
+        "eth:0x0BABA1Ad5bE3a5C0a66E7ac838a129Bf948f1eA4"
      values.owner:
-        "0x96f16FdB8Cd37C02DEeb7025C1C7618E1bB34d97"
+        "eth:0x96f16FdB8Cd37C02DEeb7025C1C7618E1bB34d97"
      values.pendingOwner:
-        "0x0000000000000000000000000000000000000000"
+        "eth:0x0000000000000000000000000000000000000000"
      implementationNames.0x674bdf20A0F284D710BC40872100128e2d66Bd3f:
-        "DefaultDepositContract"
      implementationNames.eth:0x674bdf20A0F284D710BC40872100128e2d66Bd3f:
+        "DefaultDepositContract"
    }
```

```diff
    EOA  (0x7414eA41bd1844f61e8990b209a1Dc301489baa9) {
    +++ description: None
      address:
-        "0x7414eA41bd1844f61e8990b209a1Dc301489baa9"
+        "eth:0x7414eA41bd1844f61e8990b209a1Dc301489baa9"
    }
```

```diff
    EOA  (0x88f8Dbd3dC44c6E2e368258D3eee8EB9A07aF191) {
    +++ description: None
      address:
-        "0x88f8Dbd3dC44c6E2e368258D3eee8EB9A07aF191"
+        "eth:0x88f8Dbd3dC44c6E2e368258D3eee8EB9A07aF191"
    }
```

```diff
    EOA  (0x96f16FdB8Cd37C02DEeb7025C1C7618E1bB34d97) {
    +++ description: None
      address:
-        "0x96f16FdB8Cd37C02DEeb7025C1C7618E1bB34d97"
+        "eth:0x96f16FdB8Cd37C02DEeb7025C1C7618E1bB34d97"
    }
```

```diff
    EOA  (0xA921aF7e4dd279e1325399E4E3Bf13d0E57f48Fc) {
    +++ description: None
      address:
-        "0xA921aF7e4dd279e1325399E4E3Bf13d0E57f48Fc"
+        "eth:0xA921aF7e4dd279e1325399E4E3Bf13d0E57f48Fc"
    }
```

```diff
    EOA  (0xB1a6BF349c947A540a5fe6f1e89992ACDad836AB) {
    +++ description: None
      address:
-        "0xB1a6BF349c947A540a5fe6f1e89992ACDad836AB"
+        "eth:0xB1a6BF349c947A540a5fe6f1e89992ACDad836AB"
    }
```

```diff
    contract LoopringCoin V2 Token (0xBBbbCA6A901c926F240b89EacB641d8Aec7AEafD) {
    +++ description: None
      address:
-        "0xBBbbCA6A901c926F240b89EacB641d8Aec7AEafD"
+        "eth:0xBBbbCA6A901c926F240b89EacB641d8Aec7AEafD"
      implementationNames.0xBBbbCA6A901c926F240b89EacB641d8Aec7AEafD:
-        "LRC_v2"
      implementationNames.eth:0xBBbbCA6A901c926F240b89EacB641d8Aec7AEafD:
+        "LRC_v2"
    }
```

```diff
    EOA  (0xbfCc986cA6E6729c1D191cC0179ef060b87a7C42) {
    +++ description: None
      address:
-        "0xbfCc986cA6E6729c1D191cC0179ef060b87a7C42"
+        "eth:0xbfCc986cA6E6729c1D191cC0179ef060b87a7C42"
    }
```

```diff
    EOA  (0xDB5C4078eC50Ad4Cdc47F4597a377528B1d7bcdB) {
    +++ description: None
      address:
-        "0xDB5C4078eC50Ad4Cdc47F4597a377528B1d7bcdB"
+        "eth:0xDB5C4078eC50Ad4Cdc47F4597a377528B1d7bcdB"
    }
```

```diff
    contract LoopringMultisig (0xDd2A08a1c1A28c1A571E098914cA10F2877D9c97) {
    +++ description: None
      address:
-        "0xDd2A08a1c1A28c1A571E098914cA10F2877D9c97"
+        "eth:0xDd2A08a1c1A28c1A571E098914cA10F2877D9c97"
      values.$implementation:
-        "0x41675C099F32341bf84BFc5382aF534df5C7461a"
+        "eth:0x41675C099F32341bf84BFc5382aF534df5C7461a"
      values.$members.0:
-        "0x0F026a3efE44E0Fe34B87375EFe69b16c05D0438"
+        "eth:0x0F026a3efE44E0Fe34B87375EFe69b16c05D0438"
      values.$members.1:
-        "0x576aBC47E0Dbe79c1c950190173faE9A13f8AB98"
+        "eth:0x576aBC47E0Dbe79c1c950190173faE9A13f8AB98"
      values.$members.2:
-        "0x88f8Dbd3dC44c6E2e368258D3eee8EB9A07aF191"
+        "eth:0x88f8Dbd3dC44c6E2e368258D3eee8EB9A07aF191"
      values.$members.3:
-        "0x3b1D1F89E0b6803174A2dE72e21A6f6f8464d5F1"
+        "eth:0x3b1D1F89E0b6803174A2dE72e21A6f6f8464d5F1"
      values.$members.4:
-        "0x7414eA41bd1844f61e8990b209a1Dc301489baa9"
+        "eth:0x7414eA41bd1844f61e8990b209a1Dc301489baa9"
      values.$members.5:
-        "0x1F28F10176F89F4E9985873B84d14e75751BB3D1"
+        "eth:0x1F28F10176F89F4E9985873B84d14e75751BB3D1"
      implementationNames.0xDd2A08a1c1A28c1A571E098914cA10F2877D9c97:
-        "Proxy"
      implementationNames.0x41675C099F32341bf84BFc5382aF534df5C7461a:
-        "Safe"
      implementationNames.eth:0xDd2A08a1c1A28c1A571E098914cA10F2877D9c97:
+        "Proxy"
      implementationNames.eth:0x41675C099F32341bf84BFc5382aF534df5C7461a:
+        "Safe"
    }
```

```diff
    contract LoopringV3 (0xe56D6ccab6551932C0356E4e8d5dAF0630920C71) {
    +++ description: None
      address:
-        "0xe56D6ccab6551932C0356E4e8d5dAF0630920C71"
+        "eth:0xe56D6ccab6551932C0356E4e8d5dAF0630920C71"
      values.blockVerifierAddress:
-        "0x6150343E0F43A17519c0327c41eDd9eBE88D01ef"
+        "eth:0x6150343E0F43A17519c0327c41eDd9eBE88D01ef"
      values.lrcAddress:
-        "0xBBbbCA6A901c926F240b89EacB641d8Aec7AEafD"
+        "eth:0xBBbbCA6A901c926F240b89EacB641d8Aec7AEafD"
      values.owner:
-        "0xDd2A08a1c1A28c1A571E098914cA10F2877D9c97"
+        "eth:0xDd2A08a1c1A28c1A571E098914cA10F2877D9c97"
      values.pendingOwner:
-        "0x0000000000000000000000000000000000000000"
+        "eth:0x0000000000000000000000000000000000000000"
      values.protocolFeeVault:
-        "0x4b89f8996892d137c3dE1312d1dD4E4F4fFcA171"
+        "eth:0x4b89f8996892d137c3dE1312d1dD4E4F4fFcA171"
      implementationNames.0xe56D6ccab6551932C0356E4e8d5dAF0630920C71:
-        "LoopringV3"
      implementationNames.eth:0xe56D6ccab6551932C0356E4e8d5dAF0630920C71:
+        "LoopringV3"
    }
```

```diff
    EOA  (0xE6b0cf8ed864F9bfEBa1b03bac785B5aC82cf095) {
    +++ description: None
      address:
-        "0xE6b0cf8ed864F9bfEBa1b03bac785B5aC82cf095"
+        "eth:0xE6b0cf8ed864F9bfEBa1b03bac785B5aC82cf095"
    }
```

```diff
    EOA  (0xe6FcAA61d9354dBb2320d9DcAFA9C1486Cf93907) {
    +++ description: None
      address:
-        "0xe6FcAA61d9354dBb2320d9DcAFA9C1486Cf93907"
+        "eth:0xe6FcAA61d9354dBb2320d9DcAFA9C1486Cf93907"
    }
```

```diff
    EOA  (0xeadb3d065f8d15cc05e92594523516aD36d1c834) {
    +++ description: None
      address:
-        "0xeadb3d065f8d15cc05e92594523516aD36d1c834"
+        "eth:0xeadb3d065f8d15cc05e92594523516aD36d1c834"
    }
```

```diff
    contract FastWithdrawalAgent (0xec3Cc6Cf0252565b56FC7AC396017Df5b9B78a31) {
    +++ description: None
      address:
-        "0xec3Cc6Cf0252565b56FC7AC396017Df5b9B78a31"
+        "eth:0xec3Cc6Cf0252565b56FC7AC396017Df5b9B78a31"
      implementationNames.0xec3Cc6Cf0252565b56FC7AC396017Df5b9B78a31:
-        "FastWithdrawalAgent"
      implementationNames.eth:0xec3Cc6Cf0252565b56FC7AC396017Df5b9B78a31:
+        "FastWithdrawalAgent"
    }
```

```diff
    EOA  (0xeDEE915Ae45Cc4B2FDd1Ce12a2f70dCa0B2AD9e5) {
    +++ description: None
      address:
-        "0xeDEE915Ae45Cc4B2FDd1Ce12a2f70dCa0B2AD9e5"
+        "eth:0xeDEE915Ae45Cc4B2FDd1Ce12a2f70dCa0B2AD9e5"
    }
```

```diff
    contract UserStakingPool (0xF4662bB1C4831fD411a95b8050B3A5998d8A4A5b) {
    +++ description: None
      address:
-        "0xF4662bB1C4831fD411a95b8050B3A5998d8A4A5b"
+        "eth:0xF4662bB1C4831fD411a95b8050B3A5998d8A4A5b"
      values.lrcAddress:
-        "0xBBbbCA6A901c926F240b89EacB641d8Aec7AEafD"
+        "eth:0xBBbbCA6A901c926F240b89EacB641d8Aec7AEafD"
      values.owner:
-        "0x96f16FdB8Cd37C02DEeb7025C1C7618E1bB34d97"
+        "eth:0x96f16FdB8Cd37C02DEeb7025C1C7618E1bB34d97"
      values.pendingOwner:
-        "0x0000000000000000000000000000000000000000"
+        "eth:0x0000000000000000000000000000000000000000"
      values.protocolFeeVaultAddress:
-        "0x0000000000000000000000000000000000000000"
+        "eth:0x0000000000000000000000000000000000000000"
      implementationNames.0xF4662bB1C4831fD411a95b8050B3A5998d8A4A5b:
-        "UserStakingPool"
      implementationNames.eth:0xF4662bB1C4831fD411a95b8050B3A5998d8A4A5b:
+        "UserStakingPool"
    }
```

```diff
+   Status: CREATED
    contract ExchangeV3 (0x0BABA1Ad5bE3a5C0a66E7ac838a129Bf948f1eA4)
    +++ description: None
```

```diff
+   Status: CREATED
    contract LoopringIOExchangeOwner (0x153CdDD727e407Cb951f728F24bEB9A5FaaA8512)
    +++ description: None
```

```diff
+   Status: CREATED
    contract AgentRegistry (0x39B9bf169a7e225ba037C443A40460c77438ea14)
    +++ description: None
```

```diff
+   Status: CREATED
    contract ProtocolFeeVault (0x4b89f8996892d137c3dE1312d1dD4E4F4fFcA171)
    +++ description: None
```

```diff
+   Status: CREATED
    contract ForcedWithdrawalAgent (0x52ea1971C05B0169c02a0bBeC05Fe8b5E3A24470)
    +++ description: Auxiliary contract able to force withdrawals from L1 on behalf of users.
```

```diff
+   Status: CREATED
    contract BlockVerifier (0x6150343E0F43A17519c0327c41eDd9eBE88D01ef)
    +++ description: None
```

```diff
+   Status: CREATED
    contract DefaultDepositContract (0x674bdf20A0F284D710BC40872100128e2d66Bd3f)
    +++ description: None
```

```diff
+   Status: CREATED
    contract LoopringCoin V2 Token (0xBBbbCA6A901c926F240b89EacB641d8Aec7AEafD)
    +++ description: None
```

```diff
+   Status: CREATED
    contract LoopringMultisig (0xDd2A08a1c1A28c1A571E098914cA10F2877D9c97)
    +++ description: None
```

```diff
+   Status: CREATED
    contract LoopringV3 (0xe56D6ccab6551932C0356E4e8d5dAF0630920C71)
    +++ description: None
```

```diff
+   Status: CREATED
    contract FastWithdrawalAgent (0xec3Cc6Cf0252565b56FC7AC396017Df5b9B78a31)
    +++ description: None
```

```diff
+   Status: CREATED
    contract UserStakingPool (0xF4662bB1C4831fD411a95b8050B3A5998d8A4A5b)
    +++ description: None
```

Generated with discovered.json: 0xa1d20e15b657762c15eeb4e2f5725fc855c58298

# Diff at Mon, 07 Jul 2025 06:50:43 GMT:

- author: sekuba (<29250140+sekuba@users.noreply.github.com>)
- comparing to: main@1a6f89d35120c5c65bf077ab92a9ca72da48080d block: 21973864
- current block number: 22865639

## Description

gnosis safe upgrade.

## Watched changes

```diff
    contract LoopringMultisig (0xDd2A08a1c1A28c1A571E098914cA10F2877D9c97) {
    +++ description: None
      sourceHashes.1:
-        "0xd42bbf9f7dcd3720a7fc6bdc6edfdfae8800a37d6dd4decfa0ef6ca4a2e88940"
+        "0x7d388119a66f3eae147d748f86136f073d907d6b36f7e87e9363c4c7a2899a8a"
      values.$implementation:
-        "0xd9Db270c1B5E3Bd161E8c8503c55cEABeE709552"
+        "0x41675C099F32341bf84BFc5382aF534df5C7461a"
      values.VERSION:
-        "1.3.0"
+        "1.4.1"
      implementationNames.0xd9Db270c1B5E3Bd161E8c8503c55cEABeE709552:
-        "GnosisSafe"
      implementationNames.0x41675C099F32341bf84BFc5382aF534df5C7461a:
+        "Safe"
    }
```

## Source code changes

```diff
.../LoopringMultisig/Safe.sol}                     | 685 ++++++++++++---------
 1 file changed, 410 insertions(+), 275 deletions(-)
```

Generated with discovered.json: 0x34f940d0afbee4a7b7f6af98835d1714f62e03a9

# Diff at Fri, 04 Jul 2025 12:19:08 GMT:

- author: Mateusz Radomski (<radomski.main@protonmail.com>)
- comparing to: main@1f56dc47fe915564d4555300304da4d3bcbc087f block: 21973864
- current block number: 21973864

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 21973864 (main branch discovery), not current.

```diff
    contract LoopringMultisig (0xDd2A08a1c1A28c1A571E098914cA10F2877D9c97) {
    +++ description: None
      receivedPermissions.0.from:
-        "ethereum:0x0BABA1Ad5bE3a5C0a66E7ac838a129Bf948f1eA4"
+        "eth:0x0BABA1Ad5bE3a5C0a66E7ac838a129Bf948f1eA4"
    }
```

Generated with discovered.json: 0x460878f86ed1b7a443128d3b42838f6b593c6dad

# Diff at Wed, 28 May 2025 13:56:07 GMT:

- author: Mateusz Radomski (<radomski.main@protonmail.com>)
- comparing to: main@498e4fbc23b0148c96248f03ca33a8415e632b71 block: 21973864
- current block number: 21973864

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 21973864 (main branch discovery), not current.

```diff
    contract LoopringCoin V2 Token (0xBBbbCA6A901c926F240b89EacB641d8Aec7AEafD) {
    +++ description: None
      name:
-        "LRC_v2"
+        "LoopringCoin V2 Token"
    }
```

Generated with discovered.json: 0xdfcbde749054ffb8e6aa286ef87773b08c04e6be

# Diff at Fri, 23 May 2025 09:40:59 GMT:

- author: Adrian Adamiak (<adrian@adamiak.net>)
- comparing to: main@69cd181abbc3c830a6caf2f4429b37cae72ffdb8 block: 21973864
- current block number: 21973864

## Description

Introduced .role field on each permission, defaulting to field name on which it was defined (with '.' prefix)

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 21973864 (main branch discovery), not current.

```diff
    contract LoopringMultisig (0xDd2A08a1c1A28c1A571E098914cA10F2877D9c97) {
    +++ description: None
      receivedPermissions.0.role:
+        "admin"
    }
```

Generated with discovered.json: 0xdaa173381bfd6671ad138eba9ecb48f2d788b433

# Diff at Tue, 29 Apr 2025 08:19:06 GMT:

- author: Adrian Adamiak (<adrian@adamiak.net>)
- comparing to: main@ef7477af00fe0b57a2f7cacf7e958c12494af662 block: 21973864
- current block number: 21973864

## Description

Field .issuedPermissions is removed from the output as no longer needed. Added 'permissionsConfigHash' due to refactoring of the modelling process (into a separate command).

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 21973864 (main branch discovery), not current.

```diff
    contract ExchangeV3 (0x0BABA1Ad5bE3a5C0a66E7ac838a129Bf948f1eA4) {
    +++ description: None
      issuedPermissions:
-        [{"permission":"upgrade","to":"0xDd2A08a1c1A28c1A571E098914cA10F2877D9c97","via":[]}]
    }
```

Generated with discovered.json: 0x0cffa501bbf14893b907ebb456500a4503aa81e3

# Diff at Thu, 06 Mar 2025 15:18:49 GMT:

- author: sekuba (<29250140+sekuba@users.noreply.github.com>)
- comparing to: main@64eed24a033030dd2d128180f3ee3f87c3c39f7c block: 21973864
- current block number: 21973864

## Description

config: updates timelock templates, added starknet proghashes to global config.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 21973864 (main branch discovery), not current.

```diff
    contract ExchangeV3 (0x0BABA1Ad5bE3a5C0a66E7ac838a129Bf948f1eA4) {
    +++ description: None
      sinceBlock:
+        11149814
    }
```

```diff
    contract LoopringIOExchangeOwner (0x153CdDD727e407Cb951f728F24bEB9A5FaaA8512) {
    +++ description: None
      sinceBlock:
+        12087157
    }
```

```diff
    contract AgentRegistry (0x39B9bf169a7e225ba037C443A40460c77438ea14) {
    +++ description: None
      sinceBlock:
+        11149547
    }
```

```diff
    contract ProtocolFeeVault (0x4b89f8996892d137c3dE1312d1dD4E4F4fFcA171) {
    +++ description: None
      sinceBlock:
+        9644449
    }
```

```diff
    contract ForcedWithdrawalAgent (0x52ea1971C05B0169c02a0bBeC05Fe8b5E3A24470) {
    +++ description: Auxiliary contract able to force withdrawals from L1 on behalf of users.
      sinceBlock:
+        12009173
    }
```

```diff
    contract BlockVerifier (0x6150343E0F43A17519c0327c41eDd9eBE88D01ef) {
    +++ description: None
      sinceBlock:
+        11149533
    }
```

```diff
    contract DefaultDepositContract (0x674bdf20A0F284D710BC40872100128e2d66Bd3f) {
    +++ description: None
      sinceBlock:
+        11149779
    }
```

```diff
    contract LRC_v2 (0xBBbbCA6A901c926F240b89EacB641d8Aec7AEafD) {
    +++ description: None
      sinceBlock:
+        7544036
    }
```

```diff
    contract LoopringMultisig (0xDd2A08a1c1A28c1A571E098914cA10F2877D9c97) {
    +++ description: None
      sinceBlock:
+        11326208
    }
```

```diff
    contract LoopringV3 (0xe56D6ccab6551932C0356E4e8d5dAF0630920C71) {
    +++ description: None
      sinceBlock:
+        11150215
    }
```

```diff
    contract FastWithdrawalAgent (0xec3Cc6Cf0252565b56FC7AC396017Df5b9B78a31) {
    +++ description: None
      sinceBlock:
+        11149548
    }
```

```diff
    contract UserStakingPool (0xF4662bB1C4831fD411a95b8050B3A5998d8A4A5b) {
    +++ description: None
      sinceBlock:
+        8967548
    }
```

Generated with discovered.json: 0x442cadafa802b101f34a95c00599bc3b5a7158f1

# Diff at Tue, 04 Mar 2025 13:37:00 GMT:

- author: sekuba (<29250140+sekuba@users.noreply.github.com>)
- comparing to: main@40abad0e9dad8439d751a811eb767233c5a70a2f block: 21543795
- current block number: 21973864

## Description

MS member change.

## Watched changes

```diff
-   Status: DELETED
    contract Safe (0xb47fE76aC588101BFBdA9E68F66433bA51E8029a)
    +++ description: None
```

```diff
    contract LoopringMultisig (0xDd2A08a1c1A28c1A571E098914cA10F2877D9c97) {
    +++ description: None
      values.$members.1:
-        "0xb47fE76aC588101BFBdA9E68F66433bA51E8029a"
+        "0x576aBC47E0Dbe79c1c950190173faE9A13f8AB98"
      values.$members.0:
-        "0x576aBC47E0Dbe79c1c950190173faE9A13f8AB98"
+        "0x0F026a3efE44E0Fe34B87375EFe69b16c05D0438"
    }
```

## Source code changes

```diff
.../.flat@21543795/Safe/Safe.sol => /dev/null      | 1088 --------------------
 .../Safe/SafeProxy.p.sol => /dev/null              |   37 -
 2 files changed, 1125 deletions(-)
```

Generated with discovered.json: 0xcf18a36cf3e08f6b14a8e8ee7487127783ac0b28

# Diff at Mon, 20 Jan 2025 11:09:42 GMT:

- author: Adrian Adamiak (<adrian@adamiak.net>)
- comparing to: main@2c8b4f3d9910bb6371be9b4df87b70856e7d8c64 block: 21543795
- current block number: 21543795

## Description

Rerun on the same block number. Applies fixes to permissions and via field. Renames permission's target to to/from.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 21543795 (main branch discovery), not current.

```diff
    contract ExchangeV3 (0x0BABA1Ad5bE3a5C0a66E7ac838a129Bf948f1eA4) {
    +++ description: None
      issuedPermissions.0.target:
-        "0xDd2A08a1c1A28c1A571E098914cA10F2877D9c97"
      issuedPermissions.0.to:
+        "0xDd2A08a1c1A28c1A571E098914cA10F2877D9c97"
    }
```

```diff
    contract LoopringMultisig (0xDd2A08a1c1A28c1A571E098914cA10F2877D9c97) {
    +++ description: None
      receivedPermissions.0.target:
-        "0x0BABA1Ad5bE3a5C0a66E7ac838a129Bf948f1eA4"
      receivedPermissions.0.from:
+        "0x0BABA1Ad5bE3a5C0a66E7ac838a129Bf948f1eA4"
    }
```

Generated with discovered.json: 0x1f3a6fce0aba2a861e98630fe259320f9b70fe86

# Diff at Fri, 03 Jan 2025 11:56:44 GMT:

- author: sekuba (<29250140+sekuba@users.noreply.github.com>)
- comparing to: main@f2f208ac8a91552305da5e03332108446838b892 block: 21313525
- current block number: 21543795

## Description

Loopring MS signer changes.

## Watched changes

```diff
    contract Safe (0xb47fE76aC588101BFBdA9E68F66433bA51E8029a) {
    +++ description: None
      values.$members.0:
-        "0x55d79345Afc87806B690C9f96c4D7BfE2Bca8268"
+        "0x30bc4C0Baf55A37Ccf2d626Bc592bd7715b75De2"
    }
```

```diff
    contract LoopringMultisig (0xDd2A08a1c1A28c1A571E098914cA10F2877D9c97) {
    +++ description: None
      values.$members.3:
-        "0x55d79345Afc87806B690C9f96c4D7BfE2Bca8268"
+        "0x3b1D1F89E0b6803174A2dE72e21A6f6f8464d5F1"
      values.$members.2:
-        "0x3b1D1F89E0b6803174A2dE72e21A6f6f8464d5F1"
+        "0x88f8Dbd3dC44c6E2e368258D3eee8EB9A07aF191"
      values.$members.1:
-        "0x88f8Dbd3dC44c6E2e368258D3eee8EB9A07aF191"
+        "0xb47fE76aC588101BFBdA9E68F66433bA51E8029a"
      values.$members.0:
-        "0xb47fE76aC588101BFBdA9E68F66433bA51E8029a"
+        "0x576aBC47E0Dbe79c1c950190173faE9A13f8AB98"
    }
```

Generated with discovered.json: 0x652375d3ebc7c2c20ea31124493ddbd9cdb5a9a9

# Diff at Mon, 02 Dec 2024 08:06:57 GMT:

- author: sekuba (<29250140+sekuba@users.noreply.github.com>)
- comparing to: main@0cac24376573663e0a362b2f340a124e5238a2bc block: 20059608
- current block number: 21313525

## Description

Change one Multisig signer.

## Watched changes

```diff
    contract LoopringMultisig (0xDd2A08a1c1A28c1A571E098914cA10F2877D9c97) {
    +++ description: None
      values.$members.2:
-        "0x4CBbD41a2c057cAb8db00AC60f1AB52F36870185"
+        "0x3b1D1F89E0b6803174A2dE72e21A6f6f8464d5F1"
      values.$members.1:
-        "0x3b1D1F89E0b6803174A2dE72e21A6f6f8464d5F1"
+        "0x88f8Dbd3dC44c6E2e368258D3eee8EB9A07aF191"
      values.$members.0:
-        "0x88f8Dbd3dC44c6E2e368258D3eee8EB9A07aF191"
+        "0xb47fE76aC588101BFBdA9E68F66433bA51E8029a"
    }
```

```diff
+   Status: CREATED
    contract Safe (0xb47fE76aC588101BFBdA9E68F66433bA51E8029a)
    +++ description: None
```

## Source code changes

```diff
.../loopring/ethereum/.flat/Safe/Safe.sol          | 1088 ++++++++++++++++++++
 .../loopring/ethereum/.flat/Safe/SafeProxy.p.sol   |   37 +
 2 files changed, 1125 insertions(+)
```

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 20059608 (main branch discovery), not current.

```diff
    contract LoopringMultisig (0xDd2A08a1c1A28c1A571E098914cA10F2877D9c97) {
    +++ description: None
      name:
-        "ProxyOwner"
+        "LoopringMultisig"
      fieldMeta:
-        {"getOwners":{"severity":"LOW","description":"Array of addresses that are owners, allowed to chage contract values."}}
    }
```

Generated with discovered.json: 0xdf369d3bcbc7e1fe1597b0265fab2173955de017

# Diff at Mon, 21 Oct 2024 12:45:38 GMT:

- author: Mateusz Radomski (<radomski.main@protonmail.com>)
- comparing to: main@e660599f23a07618fe949a07be1f516ce44f1914 block: 20059608
- current block number: 20059608

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 20059608 (main branch discovery), not current.

```diff
    contract ForcedWithdrawalAgent (0x52ea1971C05B0169c02a0bBeC05Fe8b5E3A24470) {
    +++ description: Auxiliary contract able to force withdrawals from L1 on behalf of users.
      descriptions:
-        ["Auxiliary contract able to force withdrawals from L1 on behalf of users."]
      description:
+        "Auxiliary contract able to force withdrawals from L1 on behalf of users."
    }
```

Generated with discovered.json: 0x7507918b819333a739f10230310aaf849c17cc74

# Diff at Mon, 21 Oct 2024 11:07:21 GMT:

- author: Mateusz Radomski (<radomski.main@protonmail.com>)
- comparing to: main@8895d33866f5665c4c710f4ddaa32bfa63cc3c78 block: 20059608
- current block number: 20059608

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 20059608 (main branch discovery), not current.

```diff
    contract ExchangeV3 (0x0BABA1Ad5bE3a5C0a66E7ac838a129Bf948f1eA4) {
    +++ description: None
      values.$pastUpgrades.6.2:
+        ["0x26d8Ba776a067C5928841985bCe342f75BAE7E82"]
      values.$pastUpgrades.6.1:
-        ["0x26d8Ba776a067C5928841985bCe342f75BAE7E82"]
+        "0x0fa3763c4bd69cf9e77636b37b5b12c29f3b260d8e822ebe215b14c4602a716d"
      values.$pastUpgrades.5.2:
+        ["0x3c294fCF74129d649325F8995afC2f9CfaFAB9dA"]
      values.$pastUpgrades.5.1:
-        ["0x3c294fCF74129d649325F8995afC2f9CfaFAB9dA"]
+        "0x2ccbfd61faf2015457ec43fab0324dca7d75091aba7423fe2990307bbfe32e22"
      values.$pastUpgrades.4.2:
+        ["0x4fb117dcd6D09abF1a99B502d488A99F5a17e7eC"]
      values.$pastUpgrades.4.1:
-        ["0x4fb117dcd6D09abF1a99B502d488A99F5a17e7eC"]
+        "0xb54c93da349065cc82e2ef150f07319b2522709e8fe7acbcb5a5edfdcf46f2d6"
      values.$pastUpgrades.3.2:
+        ["0xCFba78aecfBcc0B4B748fA58c530D4675BB5D32F"]
      values.$pastUpgrades.3.1:
-        ["0xCFba78aecfBcc0B4B748fA58c530D4675BB5D32F"]
+        "0x155d094b0d053837b4e252b69cb10c8157795274da1a9f4325519791c27bd294"
      values.$pastUpgrades.2.2:
+        ["0x8c63D8E608fF702a92D5908730C91457b0447Ad7"]
      values.$pastUpgrades.2.1:
-        ["0x8c63D8E608fF702a92D5908730C91457b0447Ad7"]
+        "0xce34e9483ec139aa6628ed29279b80f163ba9094ce1a848cbe640e438ad2eb20"
      values.$pastUpgrades.1.2:
+        ["0x2fefbeF4d1445F523941c56349C2414cd5e9675d"]
      values.$pastUpgrades.1.1:
-        ["0x2fefbeF4d1445F523941c56349C2414cd5e9675d"]
+        "0xcfbaf71a511297fd7bc1452e5b274c056ba5a3ddf271b59012eff877dd4351b9"
      values.$pastUpgrades.0.2:
+        ["0xa01d4d1FE18A34902Ac2e4045a5e8f553dDe9685"]
      values.$pastUpgrades.0.1:
-        ["0xa01d4d1FE18A34902Ac2e4045a5e8f553dDe9685"]
+        "0xed8a952216607c164559f01d5f90066a7de65fdcc72146e71956865685a8eeab"
    }
```

Generated with discovered.json: 0xf51b4b07999bb9f2a5e573a6a35edf7fafccbb26

# Diff at Mon, 14 Oct 2024 10:52:39 GMT:

- author: Mateusz Radomski (<radomski.main@protonmail.com>)
- comparing to: main@1afc77ff111ceb0970e7d09efcc7b2f376b0c281 block: 20059608
- current block number: 20059608

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 20059608 (main branch discovery), not current.

```diff
    contract ExchangeV3 (0x0BABA1Ad5bE3a5C0a66E7ac838a129Bf948f1eA4) {
    +++ description: None
      sourceHashes:
+        ["0x09274cec6469e731822a31ef5a200ae33fc319aca366cf599f707b6359f97613","0x7e59ed579f658f2c8c645a1794f79626a3d8578e8700d19bbd866122f9dd9b8e"]
    }
```

```diff
    contract LoopringIOExchangeOwner (0x153CdDD727e407Cb951f728F24bEB9A5FaaA8512) {
    +++ description: None
      sourceHashes:
+        ["0x854356c3464284cf48c4c2a41fbf7ed907ee1d2c43c5458f8600e8a002947277"]
    }
```

```diff
    contract AgentRegistry (0x39B9bf169a7e225ba037C443A40460c77438ea14) {
    +++ description: None
      sourceHashes:
+        ["0xf3a59d4207b07dcef7f7b28021c025bdf4aed5f887d551dd04964981d8fb14a6"]
    }
```

```diff
    contract ProtocolFeeVault (0x4b89f8996892d137c3dE1312d1dD4E4F4fFcA171) {
    +++ description: None
      sourceHashes:
+        ["0x1fccaeadbe094a36ba3c786c5a1a767db2b6f5a5a5c29354d11af915f72d3174"]
    }
```

```diff
    contract ForcedWithdrawalAgent (0x52ea1971C05B0169c02a0bBeC05Fe8b5E3A24470) {
    +++ description: Auxiliary contract able to force withdrawals from L1 on behalf of users.
      sourceHashes:
+        ["0xa8b1d474b6c7b4007833dea307178402243d15952eb22c992be9b107651cbc2f"]
    }
```

```diff
    contract BlockVerifier (0x6150343E0F43A17519c0327c41eDd9eBE88D01ef) {
    +++ description: None
      sourceHashes:
+        ["0x96312ffe5cf6781390d5f01454bb7545a2fc23abcb9e660842c19382a140f812"]
    }
```

```diff
    contract DefaultDepositContract (0x674bdf20A0F284D710BC40872100128e2d66Bd3f) {
    +++ description: None
      sourceHashes:
+        ["0x39433073646a8004de25a709c09d4ccff1dd95a2a125f6065c8cc6cb44c6c7b9"]
    }
```

```diff
    contract LRC_v2 (0xBBbbCA6A901c926F240b89EacB641d8Aec7AEafD) {
    +++ description: None
      sourceHashes:
+        ["0x4ffbbfe62c887a44eead8dc5c421a3021e88d97eafe47ba5e4ac69fee9b0421a"]
    }
```

```diff
    contract ProxyOwner (0xDd2A08a1c1A28c1A571E098914cA10F2877D9c97) {
    +++ description: None
      sourceHashes:
+        ["0xd5a33441170541b7df25812e0e3dff6562b2f09ab835a6b431cb9e7198a47605","0xd42bbf9f7dcd3720a7fc6bdc6edfdfae8800a37d6dd4decfa0ef6ca4a2e88940"]
    }
```

```diff
    contract LoopringV3 (0xe56D6ccab6551932C0356E4e8d5dAF0630920C71) {
    +++ description: None
      sourceHashes:
+        ["0xf4fab34f6089e2323fbf6d585fe758509ffff5bfc8f1152a393b5a170cf28929"]
    }
```

```diff
    contract FastWithdrawalAgent (0xec3Cc6Cf0252565b56FC7AC396017Df5b9B78a31) {
    +++ description: None
      sourceHashes:
+        ["0x404f9c5448f8dc0d3026c67724fad6dadb0ce98afcb11ac23be4f3159db1e40a"]
    }
```

```diff
    contract UserStakingPool (0xF4662bB1C4831fD411a95b8050B3A5998d8A4A5b) {
    +++ description: None
      sourceHashes:
+        ["0x99d65209b6a37a5338021e870cb30cc131cd3d701c0b30fa072bbe3615d2c71f"]
    }
```

Generated with discovered.json: 0xe20cbfd2d4f510ce90e334d0e76036e7d11b56c7

# Diff at Tue, 01 Oct 2024 10:52:18 GMT:

- author: Mateusz Radomski (<radomski.main@protonmail.com>)
- comparing to: main@bd754dc73c66120164006054f8d25c5fae9cd910 block: 20059608
- current block number: 20059608

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 20059608 (main branch discovery), not current.

```diff
    contract ExchangeV3 (0x0BABA1Ad5bE3a5C0a66E7ac838a129Bf948f1eA4) {
    +++ description: None
      values.$pastUpgrades:
+        [["2020-10-29T11:12:20.000Z",["0xa01d4d1FE18A34902Ac2e4045a5e8f553dDe9685"]],["2020-12-14T06:16:14.000Z",["0x2fefbeF4d1445F523941c56349C2414cd5e9675d"]],["2021-01-18T03:06:54.000Z",["0x8c63D8E608fF702a92D5908730C91457b0447Ad7"]],["2021-03-25T03:26:10.000Z",["0xCFba78aecfBcc0B4B748fA58c530D4675BB5D32F"]],["2021-03-29T03:54:19.000Z",["0x4fb117dcd6D09abF1a99B502d488A99F5a17e7eC"]],["2021-09-01T04:24:19.000Z",["0x3c294fCF74129d649325F8995afC2f9CfaFAB9dA"]],["2021-12-14T02:21:21.000Z",["0x26d8Ba776a067C5928841985bCe342f75BAE7E82"]]]
      values.$upgradeCount:
+        7
    }
```

Generated with discovered.json: 0x4e4155aec5338743e03c4ecce0129cb1560521f6

# Diff at Fri, 30 Aug 2024 07:53:31 GMT:

- author: Adrian Adamiak (<adrian@adamiak.net>)
- comparing to: main@6c1bd1f41fadf5f2cb1c1805b5a2c6138a3ed35a block: 20059608
- current block number: 20059608

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 20059608 (main branch discovery), not current.

```diff
    contract ProxyOwner (0xDd2A08a1c1A28c1A571E098914cA10F2877D9c97) {
    +++ description: None
      receivedPermissions.0.via:
-        []
    }
```

Generated with discovered.json: 0x600f889daf0df8bff72b1562b0b404ed1e81f05e

# Diff at Wed, 21 Aug 2024 10:03:50 GMT:

- author: Mateusz Radomski (<radomski.main@protonmail.com>)
- comparing to: main@2f6dde3357bf5d79196b6e94f79d853a6c4ec72b block: 20059608
- current block number: 20059608

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 20059608 (main branch discovery), not current.

```diff
    contract ExchangeV3 (0x0BABA1Ad5bE3a5C0a66E7ac838a129Bf948f1eA4) {
    +++ description: None
      issuedPermissions:
+        [{"permission":"upgrade","target":"0xDd2A08a1c1A28c1A571E098914cA10F2877D9c97","via":[]}]
    }
```

```diff
    contract ProxyOwner (0xDd2A08a1c1A28c1A571E098914cA10F2877D9c97) {
    +++ description: None
      assignedPermissions:
-        {"upgrade":["0x0BABA1Ad5bE3a5C0a66E7ac838a129Bf948f1eA4"]}
      receivedPermissions:
+        [{"permission":"upgrade","target":"0x0BABA1Ad5bE3a5C0a66E7ac838a129Bf948f1eA4","via":[]}]
    }
```

Generated with discovered.json: 0xd89818ba5dbdb17e04c4fba21cf05f3948fff9a1

# Diff at Fri, 09 Aug 2024 10:10:20 GMT:

- author: Mateusz Radomski (<radomski.main@protonmail.com>)
- comparing to: main@1f0da1d0aab7bc6b3b5e54e7e93480bd98e57035 block: 20059608
- current block number: 20059608

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 20059608 (main branch discovery), not current.

```diff
    contract ProxyOwner (0xDd2A08a1c1A28c1A571E098914cA10F2877D9c97) {
    +++ description: None
      assignedPermissions.admin:
-        ["0x0BABA1Ad5bE3a5C0a66E7ac838a129Bf948f1eA4"]
      assignedPermissions.upgrade:
+        ["0x0BABA1Ad5bE3a5C0a66E7ac838a129Bf948f1eA4"]
      values.$multisigThreshold:
-        "4 of 6 (67%)"
+++ description: Array of addresses that are owners, allowed to chage contract values.
+++ severity: LOW
      values.getOwners:
-        ["0x88f8Dbd3dC44c6E2e368258D3eee8EB9A07aF191","0x3b1D1F89E0b6803174A2dE72e21A6f6f8464d5F1","0x4CBbD41a2c057cAb8db00AC60f1AB52F36870185","0x55d79345Afc87806B690C9f96c4D7BfE2Bca8268","0x7414eA41bd1844f61e8990b209a1Dc301489baa9","0x1F28F10176F89F4E9985873B84d14e75751BB3D1"]
      values.getThreshold:
-        4
      values.$members:
+        ["0x88f8Dbd3dC44c6E2e368258D3eee8EB9A07aF191","0x3b1D1F89E0b6803174A2dE72e21A6f6f8464d5F1","0x4CBbD41a2c057cAb8db00AC60f1AB52F36870185","0x55d79345Afc87806B690C9f96c4D7BfE2Bca8268","0x7414eA41bd1844f61e8990b209a1Dc301489baa9","0x1F28F10176F89F4E9985873B84d14e75751BB3D1"]
      values.$threshold:
+        4
      values.multisigThreshold:
+        "4 of 6 (67%)"
    }
```

Generated with discovered.json: 0xabc49245ffd85c3972902ab1568f7a8c3fdde61b

# Diff at Tue, 30 Jul 2024 11:12:33 GMT:

- author: Mateusz Radomski (<radomski.main@protonmail.com>)
- comparing to: main@b2b6471ff62871f4956541f42ec025c356c08f7e block: 20059608
- current block number: 20059608

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 20059608 (main branch discovery), not current.

```diff
    contract ProxyOwner (0xDd2A08a1c1A28c1A571E098914cA10F2877D9c97) {
    +++ description: None
      fieldMeta:
+        {"getOwners":{"severity":"LOW","description":"Array of addresses that are owners, allowed to chage contract values."}}
    }
```

Generated with discovered.json: 0x1d4c7d8eb9cff7a28b9c42692183109e802eac22

# Diff at Mon, 10 Jun 2024 06:22:03 GMT:

- author: sekuba (<sekuba@users.noreply.github.com>)
- comparing to: main@023db9216bab49e9b3ffde0e43664e3e63c60fcf block: 19960423
- current block number: 20059608

## Description

A new agent is registered: A LoopringAmmPool contract for Taiko-USDC.

## Watched changes

```diff
    contract AgentRegistry (0x39B9bf169a7e225ba037C443A40460c77438ea14) {
    +++ description: None
      values.agents.137:
+        "0xB42bBCd12c14F4b2efc1C84bb971F62A943db7d5"
    }
```

Generated with discovered.json: 0x0b8b96cd701f713f7fbfe5c110e91309ee7036ae

# Diff at Mon, 27 May 2024 09:50:43 GMT:

- author: sekuba (<sekuba@users.noreply.github.com>)
- comparing to: main@e3af44de7f5996e5fc7d7b401325abe876105664 block: 19916570
- current block number: 19960423

## Description

A new manager is added to the ForcedWithdrawalAgent contract.

## Watched changes

```diff
    contract ForcedWithdrawalAgent (0x52ea1971C05B0169c02a0bBeC05Fe8b5E3A24470) {
    +++ description: Auxiliary contract able to force withdrawals from L1 on behalf of users.
      values.managers.4:
-        "0xaFF7719a5BEAFb7e9BF47d7d0b1f073433D7024E"
+        "0x59F3163ab39B8B90DAF57508bC1fAECB2F2cD374"
    }
```

Generated with discovered.json: 0x9ba584bd2266fe0463e7d6a8904f6aeefdcb0b04

# Diff at Tue, 21 May 2024 06:44:00 GMT:

- author: sekuba (<sekuba@users.noreply.github.com>)
- comparing to: main@fb4c64221d00d53ed6ec1609ef10dc99f1842087 block: 19697812
- current block number: 19916570

## Description

A LoopringWalletAgent contract is given the UniversalAgent role. The smart contract is an implementation of account abstraction.
The deployer also created a WalletFactory to deploy proxies to this new LoopringWalletAgent.
Context: Probably related to [this](https://x.com/loopringorg/status/1792517073857392821).

## Watched changes

```diff
    contract AgentRegistry (0x39B9bf169a7e225ba037C443A40460c77438ea14) {
    +++ description: None
      values.agents.136:
+        "0x1945e350291C9c7DFe9B7cEe428cA815DF31Fec2"
    }
```

Generated with discovered.json: 0x3681c995acd49dac7c89891f4a0fed0bee1021f7

# Diff at Sat, 20 Apr 2024 16:28:05 GMT:

- author: sekuba (<sekuba@users.noreply.githum.com>)
- comparing to: main@262f9e3e98ac8a85b09235e0b440b48e826f1f9f block: 19531659
- current block number: 19697812

## Description

A new block submitter is added and two are removed, summing to 13 block submitters at the moment.

## Watched changes

```diff
    contract LoopringIOExchangeOwner (0x153CdDD727e407Cb951f728F24bEB9A5FaaA8512) {
    +++ description: None
      values.blockSubmitters.13:
-        "0x7961076f6130092c1C90bd0D2C6F7f54055FA6C7"
      values.blockSubmitters.12:
-        "0xdd4b5E28fe55196B8Bf44A040f2c11f85401fdC0"
+        "0x487e8Be2BaD383b5B62fC5fb46005A8Fac10E341"
    }
```

Generated with discovered.json: 0x945c280f2e0b87de6ea1bbcf044ad7c08f6a8191

# Diff at Thu, 28 Mar 2024 09:16:53 GMT:

- author: Mateusz Radomski (<radomski.main@protonmail.com>)
- comparing to: main@867de6120241d47b66bf76f83c490408eb3595b0 block: 19375547
- current block number: 19531659

## Description

Update discovery to include the multisig threshold.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 19375547 (main branch discovery), not current.

```diff
    contract ProxyOwner (0xDd2A08a1c1A28c1A571E098914cA10F2877D9c97) {
    +++ description: None
      upgradeability.threshold:
+        "4 of 6 (67%)"
    }
```

Generated with discovered.json: 0xc0a7eb588caecb5f950493f51d0428c7a218a45d

# Diff at Wed, 06 Mar 2024 10:31:35 GMT:

- author: Mateusz Radomski (<radomski.main@protonmail.com>)
- comparing to: main@724fc93d9bd160395a856b93ce5016ca876c6436 block: 18941024
- current block number: 19375547

## Description

Removed one owner from the ProxyOwner contract.

## Watched changes

```diff
    contract ProxyOwner (0xDd2A08a1c1A28c1A571E098914cA10F2877D9c97) {
    +++ description: None
      values.getOwners[6]:
-        "0x1F28F10176F89F4E9985873B84d14e75751BB3D1"
      values.getOwners.5:
-        "0x7414eA41bd1844f61e8990b209a1Dc301489baa9"
+        "0x1F28F10176F89F4E9985873B84d14e75751BB3D1"
      values.getOwners.4:
-        "0x55d79345Afc87806B690C9f96c4D7BfE2Bca8268"
+        "0x7414eA41bd1844f61e8990b209a1Dc301489baa9"
      values.getOwners.3:
-        "0x4CBbD41a2c057cAb8db00AC60f1AB52F36870185"
+        "0x55d79345Afc87806B690C9f96c4D7BfE2Bca8268"
      values.getOwners.2:
-        "0x3b1D1F89E0b6803174A2dE72e21A6f6f8464d5F1"
+        "0x4CBbD41a2c057cAb8db00AC60f1AB52F36870185"
      values.getOwners.1:
-        "0x88f8Dbd3dC44c6E2e368258D3eee8EB9A07aF191"
+        "0x3b1D1F89E0b6803174A2dE72e21A6f6f8464d5F1"
      values.getOwners.0:
-        "0x94D3d916EBe0E34F4CcB2bBc68B893EdA2850114"
+        "0x88f8Dbd3dC44c6E2e368258D3eee8EB9A07aF191"
    }
```

Generated with discovered.json: 0xbf94d7835ddc3daaf6aa320c3e75a3a2c11cc77d

# Diff at Fri, 05 Jan 2024 12:19:14 GMT:

- author: Bartek Kiepuszewski (<bkiepuszewski@gmail.com>)
- comparing to: main@9cd2eb99d34f64eadf915ab21cf5e0819367bbc1 block: 18219921
- current block number: 18941024

## Description

Retrieved agents from Agent Registry. As most of them are LoopringAMMPools, blocked drilling down and added manually FastWithdrawalAgent and ForcedWithdrawalAgent.

## Config related changes

Following changes come from updates made to the config file,
not from differences found during discovery. Values are
for block 18219921 (main branch discovery), not current.

```diff
    contract AgentRegistry (0x39B9bf169a7e225ba037C443A40460c77438ea14) {
      values.agents:
+        ["0x18920d6E6Fb7EbE057a4DD9260D6D95845c95036","0xA573C5d473702286f0AC84592EDA49aD799EBAA1","0x6D537764355bc23d4eADba7829048Dac8215a73c","0x605872a5A459E778959B8a49dc3A56a8c9197983","0xf6cd964E6345E8f01e548063De13d0DE7d8c59De","0x9b7a20ae12a3f2a3d4cF9eA2d4a8518c104cc5f2","0x6FF8A397F7A04B41c58c00AB8e70ACa7cbc0adBa","0x1230F7e06c3fA96f4259F7BaD79e6afF321B8133","0x2ed5d3Fff0EB1451c381DDECE244E9b796db7b8a","0xd85f594481D3DEE61FD38464dD54CF3ccE6906b6","0xF8e4aBF498235fA8fdE2f6A04c21db7877957C47","0x70c8E0AedB5933Da09C9392A17389e4D6d79D638","0x8EFAD07720D331a49f5db2cC83946F7DC8FC6B42","0xD9D681C1ddD462ca222E90Bbe14A35273C318A09","0xE6CC0d45C4E4F81be340F4D176e6Ce0D63Ad5743","0x746EEB6bdd9139A4d605C2c410911F37BEa9093b","0xa9D46DEdEff7dFe8fF3628F4D276a0e1C5007b81","0x502B5525e1508C51Af46719D13E5238b83A404e5","0x9795f527d0Fad45F41dE27bef71F0eeD47f5256C","0x1D28b287B5E19b12Ac2B3618405C57AD882A4D74","0x1F78CD24Ccf73fDd5095d0339DD6eF72E30669aC","0xF88de0CCD1E84898b4EA62c421009996bFb6156e","0x93bB5B402F04D3053F2c3800F6A4AF54788c16d0","0xec3Cc6Cf0252565b56FC7AC396017Df5b9B78a31","0x0089081950B4eBBF362689519C1d54827e99d727","0x8Cf6C5e7ec123583e1529d8afAeAA3D25Da2fD3D","0x583208883277896435B9821a64806d708dE17Df2","0x85f2e9474d208A11ac18Ed2a4E434c4Bfc6ddBDe","0x0aA4d2Dd35418d63af13eA906ce3A088deC8D786","0x567C1ad6d736755ABCB3DF8Ef794b09bB7701e66","0x1B04A25a0A7F93cfB0c4278Ca4f7Ca2483a1e94e","0x22844C482b0626aC09B5689b4D8E81fE6710F5f4","0x4e585BaD734F0c6Af04a3Afb359FdB69435Fe74b","0x9C601377fd95410Be46cfc1A786686874c6E7702","0x8E89790635dBfFDCc0642055CB21abE63edc484c","0x9387e06961988726Dd0732b6930Be1C0A5343901","0x73b7bC4463263194Eb9B570948FDA12244a5FFa8","0x43EcA2F58d8C371C5073fc382784A3a483005D6B","0x8303f865a2A221c920e9fcbF2e84703991f16251","0x37B6AAD464e8916Dc8231ae5F8aeE15Dd244C1B1","0xba64cDf65aeA36Ff4a58dCF288f1a62923555795","0x33Df027650cD2729e0b132FC0BFF4788725cc0FA","0x2EAB3234ea1e4c9571c2e011F435c7316EcecdB9","0xaCed28432cd60D7D34799DE0D745871e5F10f961","0x636A3141D48402d06a907AA14F023e8F5B5d634f","0x1F94eaaA413c11Bea645eE65108b5673304753bD","0xF11702d591303D790C7B372e53fde348B82037DE","0x78a58558Ca76Cf66b6C4d72231cF6529ed5bef29","0xA762D8422237Bd26B4F882C5D0744726eb2a86B0","0xfb64C2d72E1CaA0286899be8e4f88266C4d8Ab9f","0xE8eA36f850Db564408E4165a92bCCB4e6e5f5e20","0xA738DE0f4b1f52cC8410D6E49Ab6ED1ca3Fe1420","0x24e4cf9B1723e5A5401841d931a301AEDEcd96Ef","0x145f20A0C129D592da261E42947A70be3B22db07","0x41E3B439a4798f2F466D28Be7bEDC0743847DbE4","0xa2AcF6B0304A808147ee3b10601e452c3f1bfde7","0xA0059ad8e06c57458116AbC5E5C0bdB86c4FB4b2","0x8f5a6e6D18F8E3FDFfc27fE7FE5804c2378F8310","0xA2F4A88553Ba746A468c21D3990FE9c503E0B19a","0x69a8bdEE1af2138C58B1261373B37071850689C0","0xeE6a9d6Cb11a9796f767540f435f90F11a9B1414","0x8a6bA9D448Ad54579BEd1f42F587D134BF7F8582","0x8a986607603D606b1Ac5Fdcca089764671C725E1","0xf85f030865359D1843701F4f1B08c38913c3D57F","0x7AB580E6Af77bD13f090619ee1f7e7C2a645afb1","0xfE88c469E27861907D05a0E97f81d84c789A1cdA","0x447356B190c7dafbE0452C8d041725ABf1E1d41f","0x8f871AC37FA7F575E9b8c285B38f0bf99D3C087F","0x5F6a9960318903d4205ddA6ba45796bC969461B8","0xBBCA4790398C4CE916937dB3c6b7E9a9dA6502e8","0x093137CFD844b64FeBeb5371D85Cf83fF4F92Bbf","0xFa6680779DC9168600bCDcaFf28b41C8fa568D98","0xDd2A08a1c1A28c1A571E098914cA10F2877D9c97","0x1AD74cF7CaF443f77BD89860EF39F4ca16fbE810","0xe6F1C20D06B2f541e4308d752D0D58c6df07191D","0x7aF6e5dD61c93277B406FfcaDAd6e6089b27075b","0x759c0d0CE4191Db16EF5BCe6ED0A05dE9e99a9f5","0x994F94C853D691f5C775e5131Fc4a110ABEed4A8","0xE7E807631F3e807ae20d0e23919dB8789680104B","0x7CD7871181D91Af440DD4552BAE70B8eBE9fBa73","0x9a94A815F56d00F52BbaD46Edc6d12d879df2635","0xFD997e572F03f3Ff4f117aaCCAAb9b45bFB6E01C","0x5f24c3A2c9841c023d6646402fD449665b64626b","0x9775449efDf24B7Eb5391E7D3758E184595E4C69","0x4f23cA1CC6253dc1Ba69a07A892d68f3b777C407","0x5c159d164b8fD7f0599c625988Dc2db68dF14842","0x8572B8A876F47d70128C73bfcA049cE00Eb77563","0xBBb360538b07b59BA2Ca1c9f847C8bC760b8f0D7","0x34841262432975E36755AB797cb523Dd7248861A","0xc8f242B2aC6069EBdc876BA0Ef42EfBf03C5Ba4B","0xB27B1FD0D4a7D91d07C19f9A33D3A4711a453D7C","0x76d8EA32C511A87ee4bfF5f00e758DD362aDf3d0","0x6BF0060fBcf271A2Ed828E77076543076d5edbA1","0x554Be7B23FDE679049e52F195448Db28B624534E","0xa41e49fDcd0555484f70899d95593d2e1A0fCBbB","0x83DF13e357C731ec92D13cbf8F5bF4765a8e1205","0x4fACF65A157678E62F84389DD248D99f828403D6","0xC3630669CB660f9405Df0D0037f52b78c49772Ab","0x7b854D37E502771b1647F5917efCF065ce1C0677","0x52ea1971C05B0169c02a0bBeC05Fe8b5E3A24470","0x66fAD4Ab701eE8C6F9eBef93b634a3E7401aa276","0x18a1A6F47Fd92185b91edc322d1954349aD0b652","0x4a7e38476b05F40B16E5ae1C761302B1A7d5afc5","0x83c11cbfbED2971032d3a1eD2f34d4Fb43FE181F","0xC6bC133562B470A61394f9a2fF7FE8082Da698a4","0x3EC139B45558D1db73b889f887624Ef117D28e3b","0x1cb97A1fDcBc60F112B5a58896906BDb870BC438","0xA186e201225E468218d53F3f9B42012022D425F3","0xd0406913f2F58D1696eb9c3677E6713DD528f8CD","0x194dB39E4c99f6C8dD81B4647465f7599f3c215A","0xC50138E6B5c85622E4B8aB9003Eb0bD35Dcf6f78","0xB8108988406dB7C4035BcFEf2bd924A9810ae7e6","0x5359f0fD5ef2A6F0205436cC19EEC1D6Fc521b5C","0xbDC384dB410E56F4877A086F5b68DeBD673a7c48","0xBeC0c576EF02cB6341725607AB5D941e32B44437","0x8195be4E48d3a2F80692fe1dBA9b23b8050fB1f9","0xF75B89d214512C42C474bb0Ee5D865e953C28109","0x4Cd8d47048B03294820A32Ebf58cBC6A76F7F529","0x2fAc662748F876CA1d3A1b59eF5Be45C128EcfE5","0x0Bcd579513410c4169d13b674ab58D009a329683","0x0818e9a3A42EeDE47cd1482461B594f32CCBe2D5","0x06Ac0eFB3E358528Ecd1E7336342c822678DAE4d","0x97dB7F2758eC94757ba163e3052236b73DBF6c9A","0xD4df78bbD50C564702F0C96C8C7de536154DB07d","0x17bAa21Bec595da6A9d88A4b4FfdD1d336186c48","0xa060931b7d91C991224C2D91827ABC4DE057324F","0x69B198eDE31636Cbf8839C08625855EDad7AcEB9","0x03388900bF7B87E539E5aFb274C3f59BBeBab567","0xb6F12FfF6C114778640245c2E7A0B03de4B0f315","0x779aFAf4D8F4e3E6e3aDCB465B7Fa7CfdD4B8a3a","0xa371Ceca6E5Ff08da04AAe28Bcf3E414f96B2Db8","0x997f5F09E45a845A9980C8F32dBE9b0824c7D0c0","0xD5aA13A2b5246BEE262215ccEbb6413b5E71bAA8","0x4fC4d2f0a5D5E7Baa7A0a456ea3BA924f7229672","0x3CF377789eF85DEe82c90d131327Fb40694D2AD0","0x427f20E2eD64F2B5E92a0DD467Ae49989e013e52"]
    }
```

```diff
+   Status: CREATED
    contract ForcedWithdrawalAgent (0x52ea1971C05B0169c02a0bBeC05Fe8b5E3A24470) {
    }
```

```diff
+   Status: CREATED
    contract FastWithdrawalAgent (0xec3Cc6Cf0252565b56FC7AC396017Df5b9B78a31) {
    }
```

# Diff at Tue, 26 Sep 2023 12:23:04 GMT:

- author: Luca Donno (<donnoh99@gmail.com>)
- comparing to: main@cfd4e281f2af40c7c69302b16c1308c0c5651be0

## Watched changes

```diff
    contract ExchangeV3 (0x0BABA1Ad5bE3a5C0a66E7ac838a129Bf948f1eA4) {
      values.shutdownTriggered:
+        []
    }
```